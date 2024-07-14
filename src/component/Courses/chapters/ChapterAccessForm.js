import React, { useEffect, useState } from "react";
import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Editor } from "../../editor";
import { Preview } from "../../preview";
import Checkbox from "../../CheckBox";
const formSchema = z.object({
  isFree: z.boolean().default(false),
});

const ChapterAccessForm = ({ initialData, courseId, chapterId }) => {
  const [isEditing, setIsEditing] = useState();
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (initialData) {
      setValue("isFree", initialData.isFree || false);
    }
  }, [initialData, setValue]);

  const toggleEdit = () => setIsEditing(!isEditing);

  console.log(initialData);
  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/course/${courseId}/chapters/${chapterId}`,
        data
      );
      toast.success("Chapter description Updated");
      toggleEdit();
      Navigate(0);
    } catch {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Chapter Access
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
      {!isEditing && (
        <p
          className={`
          "text-sm mt-2",
          ${!initialData.isFree && "text-slate-700 italic dark:text-slate-300"}
        `}
        >
          {initialData.isFree ? (
            <>This chapter is available for free preview</>
          ) : (
            <>This chapter is not free.</>
          )}
        </p>
      )}
      {isEditing && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <Checkbox label="Free Chapter" name="isFree" register={register} />
          <p className="text-gray-500">
            {" "}
            Check this box if you want to make this chapter free for preview.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-block px-4 py-2 bg-black text-white border border-black rounded-md shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Save"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ChapterAccessForm;
