import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Pencil, PlusCircle, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MuxPlayer from "@mux/mux-player-react";

const ChapterVideoForm = ({ initialData, courseId, chapterId }) => {
  console.log(initialData);
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
    try {
      const formDataObj = new FormData();
      formDataObj.append("file", formData.file[0]);
      const response = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/course/video-upload/${courseId}/chapters/${chapterId}`,
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
        Chapter video
        <button
          onClick={toggleEdit}
          type="button"
          className="px-4 py-2 bg-transparent text-grey font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
        >
          {isEditing && <>Cancel</>}
          {!isEditing && !initialData?.videoUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add a video
            </>
          )}
          {!isEditing && initialData.videoUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit video
            </>
          )}
        </button>
      </div>
      {!isEditing && (
        !initialData.videoUrl ? (
          <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md  dark:bg-gray-800 dark:text-slate-300">
            <Video className="h-10 w-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <MuxPlayer
              playbackId={initialData?.mux?.playbackId || ""}
            /> 
          </div>
        )
      )}
      {isEditing && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <label
            htmlFor="file"
            className="block text-[20px] font-medium text-gray-700"
          >
            Upload Video
          </label>
          <input
            {...register("file", {
              required: "Please select a file.",
            })}
            type="file"
            id="file"
            name="file"
            accept="video/*"
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
            {isSubmitting ? "Submitting..." : "Save"}
          </button>
        </form>
      )}

      {/* {initialData?.imageUrl && (
        <div className="mt-4">
          <img
            src={`${process.env.REACT_APP_API}${initialData.imageUrl}`}
            alt="Course"
            className="max-w-full h-auto rounded-md"
          />
        </div>
      )} */}
    </div>
  );
};

export default ChapterVideoForm;
