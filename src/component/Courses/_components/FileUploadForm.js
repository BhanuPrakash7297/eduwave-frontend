import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Pencil, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CourseImageUploadeForm = ({ initialData, courseId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
  } = useForm();

  const toggleEdit = () => setIsEditing(!isEditing);

  const onSubmit = async (formData) => {
    console.log("hello");
    try {
      const formDataObj = new FormData();
      formDataObj.append("image", formData.file[0]);
      const response = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/course/image-upload/${courseId}`,
        formDataObj,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("File uploaded successfully:", response.data);
      navigate(0);
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("file", {
        type: "server",
        message: "Error uploading file. Please try again later.",
      });
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course image
        <button
          onClick={toggleEdit}
          type="button"
          className="px-4 py-2 bg-transparent text-grey font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
        >
          {isEditing && <>Cancel</>}
          {!isEditing && initialData?.imageUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2 bg-inherit" />
              Edit
            </>
          )}
          {!isEditing && !initialData?.imageUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2 bg-inherit" />
              Add image
            </>
          )}
        </button>
      </div>

      {isEditing && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <label
            htmlFor="file"
            className="block text-[20px] font-medium text-gray-700"
          >
            Upload Image
          </label>
          <input
            {...register("file", {
              required: "Please select a file.",
            })}
            type="file"
            id="file"
            name="file"
            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.file && (
            <p className="text-red-500 text-xs mt-1">{errors.file.message}</p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-block px-4 py-2 bg-black text-white border border-black rounded-md shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}

      {initialData?.imageUrl && (
        <div className="mt-4">
          <img
            src={`${process.env.REACT_APP_API}${initialData.imageUrl}`}
            alt="Course"
            className="max-w-full h-auto rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default CourseImageUploadeForm;
