import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2, PlusCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ChapterList from "./ChapterList";
const formSchema = z.object({
  title: z.string().min(1),
});

export const ChaptersForm = ({ initialData, courseId }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const toggleCreating = () => {
    setIsCreating((current) => !current);
  };

  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API}/api/v1/course/${courseId}/chapter`,
        values
      );
      toast.success("Chapter created");
      toggleCreating();
      Navigate(0);
    } catch {
      toast.error("Something went wrong");
    }
  };

  const onReorder = async (updateData) => {
    try {
      setIsUpdating(true);

      await axios.put(
        `${process.env.REACT_APP_API}/api/v1/course/${courseId}/chapters/reorder`,
        {
          list: updateData,
        }
      );
      toast.success("Chapters reordered");
      Navigate(0);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsUpdating(false);
    }
  };

  const onEdit = (id) => {
    Navigate(`/admin/teacher/courses/${courseId}/chapters/${id}`);
  };

  return (
    <div className="relative mt-6 border bg-slate-100 rounded-md p-4">
      {isUpdating && (
        <div className="absolute h-full w-full bg-slate-500/20 top-0 right-0 rounded-m flex items-center justify-center">
          <Loader2 className="animate-spin h-6 w-6 text-sky-700" />
        </div>
      )}
      <div className="font-medium flex items-center justify-between">
        Course chapters
        <button
          onClick={toggleCreating}
          type="button"
          className="px-4 py-2 bg-transparent text-grey font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
        >
          {isCreating && <>Cancel</>}
          {!isCreating && (
            <>
              <PlusCircle className="h-4 w-4 mr-2 bg-inherit" />
              Add a chapter
            </>
          )}
        </button>
      </div>
      {isCreating && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <label
            htmlFor="firstName"
            className="block text-[20px] font-medium text-gray-700"
          >
            Course Chepters
          </label>
          <input
            {...register("title")}
            disabled={isSubmitting}
            placeholder="e.g. 'Advanced web development'"
            type="text"
            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />

          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="inline-block px-4 py-2 bg-black text-white border border-black rounded-md shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}

      {!isCreating && (
        <div className="text-sm mt-2 text-slate-500 italic">
          {!initialData?.chapters?.length && "No chapters"}
          <ChapterList
            onEdit={onEdit}
            onReorder={onReorder}
            items={initialData?.chapters || []}
          />
        </div>
      )}
      {!isCreating && (
        <p className="text-xs text-muted-foreground mt-4">
          Drag and drop to reorder the chapters
        </p>
      )}
    </div>
  );
};
export default ChaptersForm;
