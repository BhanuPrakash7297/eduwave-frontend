import axios from "axios";
import { Trash } from "lucide-react";

import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../../modals/ConfirmModal";
export const ChapterActions = ({
  disabled,
  courseId,
  chapterId,
  isPublished,
}) => {
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.put(
          `${process.env.REACT_APP_API}/api/v1/course/${courseId}/chapters/${chapterId}/unpublish`
        );
        toast.success("Chapter unpublished");
      } else {
        await axios.put(
          `${process.env.REACT_APP_API}/api/v1/course/${courseId}/chapters/${chapterId}/publish`
        );
        toast.success("Chapter published");
      }
      Navigate(0);
      return;
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
        `${process.env.REACT_APP_API}/api/v1/course/${courseId}/chapters/${chapterId}`
      );
      toast.success("Chapter deleted");
      Navigate(`/admin/teacher/${courseId}`);
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
        disabled={isLoading}
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
