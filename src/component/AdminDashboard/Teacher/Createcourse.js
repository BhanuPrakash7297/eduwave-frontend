import React, { useContext } from "react";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, dividerClasses } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

const CreateCourse = () => {
  const Navigate = useNavigate();

  const { user } = useContext(AuthContext);
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      data.userId = user.email;
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/course/create-course`,
        data
      );
      console.log(response.data.data.userId);
      Navigate(`/admin/teacher/${response.data.data._id}`);
    } catch {
      console.log("something went wrong");
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="max-w-5xl mx-auto md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Name Your Course</h1>
        <p className="text-sm text-slate-600">
          What would you like to name your course ? Don't worry, you can change
          this later
        </p>
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
          {errors.title && <span>{errors.firstName.message}</span>}
          <p className="mt-1 text-sm text-gray-500">
            What will you teach in this course
          </p>
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="inline-block px-4 py-2 bg-black text-white border border-black rounded-md shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            <button
              type="button"
              className="inline-block px-4 py-2 bg-transparent text-grey font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
