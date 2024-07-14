import React, { useEffect, useState } from "react";
import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});


const TitleForm = ({ initialData, courseId }) => {
  const [isEditing, setIsEditing] = useState();
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const toggleEdit = () => setIsEditing(!isEditing);

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/course/update-course/${courseId}`,
        data
      );
      toast.success("Course Updated");
      toggleEdit();
      Navigate(0);
    } catch {
      toast.error("Something Went Wrong");
    }
  };

  
  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        CourseTitle
        <button
          onClick={toggleEdit}
          type="button"
          className="px-4 py-2 bg-transparent text-grey font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
        >
          {isEditing && <>Cancel</>}
          {!isEditing && (
            <>
              <Pencil className="h-4 w-4 mr-2 bg-inherit" />
              Edit
            </>
          )}
        </button>
      </div>
      {!isEditing && <p className="text-sm mt-2 text-slate-500 italic">{initialData?.title}</p>}

      {isEditing && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <label
            htmlFor="firstName"
            className="block text-[20px] font-medium text-gray-700"
          >
            Course Title
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
    </div>
  );
};

export default TitleForm;
