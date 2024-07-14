import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { File, Loader2, Pencil, PlusCircle, X } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
import * as z from "zod";
import { toast } from "react-toastify";

const formSchema = z.object({
  url: z.string().min(1),
});

const AttachementForm = ({ initialData, courseId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [deletingId, setdeletingId] = useState(null);

  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
  } = useForm(formSchema);

  const toggleEdit = () => setIsEditing(!isEditing);

  const onSubmit = async (formData) => {
    console.log("hello");
    try {
      const formDataObj = new FormData();
      formDataObj.append("url", formData.file[0]);
      formDataObj.append("courseId", courseId);
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/attachment/create`,
        formDataObj,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("File uploaded successfully:", response.data);
      Navigate(0);
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("file", {
        type: "server",
        message: "Error uploading file. Please try again later.",
      });
    }
  };

  const deleteAttachment = async (id) => {
    try {
      setdeletingId(id);

      await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/attachment/delete/${id}`
      );
      toast.success("Attachement delete succesfully");
      Navigate(0);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setdeletingId(null);
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Attachement
        <button
          onClick={toggleEdit}
          type="button"
          className="px-4 py-2 bg-transparent text-grey font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
        >
          {isEditing && <>Cancel</>}

          {!isEditing && (
            <>
              <PlusCircle className="h-4 w-4 mr-2 bg-inherit" />
              Add a file
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
            Add Attachement
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

          <div className="text-xs text-muted-foreground mt-4">
            Add anything your students might need to complelte the course
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-block px-4 py-2 bg-black text-white border border-black rounded-md shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}

      {!isEditing && (
        <>
          {initialData?.attachments.length === 0 && (
            <p className="text-sm mt-2 text-slate-500 italic">
              No attachments yet
            </p>
          )}
          {initialData?.attachments.length > 0 && (
            <div className="space-y-2">
              {initialData.attachments.map((attachment) => (
                <div
                  key={attachment._id}
                  className="flex items-center p-3 w-full bg-sky-100 
                border-sky-200 border text-sky-700 rounded-md"
                >
                  <File className="h-4 w-4 mr-2" />
                  <p style={{ margin: "0" }}>{attachment.name}</p>
                  {deletingId === attachment._id && (
                    <div>
                      <Loader2 className="h-4 w-4" />
                    </div>
                  )}
                  {deletingId !== attachment._id && (
                    <button
                      className="ml-auto  hover:opacity-75 transition"
                      onClick={() => deleteAttachment(attachment._id)}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AttachementForm;
