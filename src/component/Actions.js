import axios from "axios";
import { Trash } from "lucide-react";

import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "./modals/ConfirmModal";
import useConfettiStore from "./Hooks/use-confeti-store";

export const Actions = ({ disabled, courseId, isPublished }) => {
  console.log(isPublished);
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const confetti = useConfettiStore();
  const onClick = async () => {
    try {
      setIsLoading(true);

      console.log(isPublished);
      if (isPublished) {
        const response = await axios.patch(
          `${process.env.REACT_APP_API}/api/v1/course/${courseId}/unpublish`
        );
        console.log(response.data);
        toast.success("Chapter unpublished");
      } else {
        await axios.patch(
          `${process.env.REACT_APP_API}/api/v1/course/${courseId}/publish`
        );
        toast.success("Course published");
        confetti.onOpen();
        console.log(confetti.isOpen);
        // toast.success("Course published");
      }
      if (isPublished) {
        window.location.reload();
      } else {
        setTimeout(() => {
          confetti.onClose(); // Close confetti after a delay (if desired)
          window.location.reload();
        }, 5000); // Adjust delay as needed
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/course/${courseId}`
      );
      toast.success("Course deleted");
      Navigate(`/admin/teacher/courses`);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <button
        onClick={onClick}
        disabled={isLoading || disabled}
        className="inline-block px-4 py-2 bg-black text-white border border-black rounded-md shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
      >
        {isPublished ? "Unpublish" : "Publish"}
      </button>
      <ConfirmModal onConfirm={onDelete}>
        <button
          disabled={isLoading}
          className="inline-block px-4 py-2 bg-black text-white border border-black rounded-md shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
        >
          <Trash className="h-4 w-4" />
        </button>
      </ConfirmModal>
    </div>
  );
};
