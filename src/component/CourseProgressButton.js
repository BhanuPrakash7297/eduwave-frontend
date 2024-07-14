import axios from "axios";
import { CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useConfettiStore from "./Hooks/use-confeti-store";
import { formatPrice } from "../constants/formate";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Context/UserContext";
import { useProgressContext } from "../context/ProgressContex";
// import { isCompositeComponent } from "react-dom/test-utils";

export const CourseProgressButton = ({
  chapterId,
  courseId,
  nextChapterId,
  onProgressCountChange,
  isCompleted,
  SetisProgressChanged,
}) => {
  const Navigate = useNavigate();
  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  console.log("course progress button", chapterId, courseId, nextChapterId);

  const onClick = async () => {
    try {
      setIsLoading(true);

      await axios.put(
        `${process.env.REACT_APP_API}/api/v1/course/${courseId}/chapters/${chapterId}/progress`,
        {
          isCompleted: !isCompleted,
          userId: user?.email,
        }
      );

      if (!isCompleted && !nextChapterId) {
        confetti.onOpen();
      }

      if (!isCompleted && nextChapterId) {
        Navigate(
          `/user/details/courses/${courseId}/chapters/${nextChapterId}`
        );
      }
      // SetisProgressChanged(true);
      toast.success("Progress updated");
      // onProgressCountChange();
      Navigate(0);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const Icon = isCompleted ? XCircle : CheckCircle;

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      className={`w-full md:w-auto px-4 py-2 rounded-md transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      } ${
        isCompleted
          ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500"
          : "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500"
      }`}
    >
      {isCompleted ? "Not completed" : "Mark as complete"}
      <Icon className="h-4 w-4 ml-2" />
    </button>
  );
};
