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
const formSchema = z.object({
  description: z.string().min(1)
});

const ChapterDescriptionForm = ({ initialData, courseId, chapterId }) => {
  const [isEditing, setIsEditing] = useState();
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
    getValues
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    // Set initial value for description field if initialData is provided
    if (initialData) {
      setValue("description", initialData.description || "");
    }
  }, [initialData, setValue]);

  const toggleEdit = () => setIsEditing(!isEditing);

  const onSubmit = async (data) => {
    try {
      console.log(data);
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

  const checkFormValues = () => {
    const values = getValues();
    console.log("Form Values:", values);
  };
  
//   console.log(getValues())
  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Chapter Description
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
        <div className={`
          "text-sm mt-2",
          ${!initialData.description && "text-slate-500 italic"}
        `}>
          {!initialData.description && "No description"}
          {initialData.description && (
            <Preview
              value={initialData.description}
            />
          )}
        </div>
      )}
      {isEditing && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <label
            htmlFor="firstName"
            className="block text-[20px] font-medium text-gray-700"
          >
            Chapter Description
          </label>
          <Editor
            value={register("description").value || ""}
            onChange={(html) => setValue("description", html)}
          />
          <button
            type="submit"
            disabled={ isSubmitting}
            onClick={checkFormValues}
            className="inline-block px-4 py-2 bg-black text-white border border-black rounded-md shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ChapterDescriptionForm;
