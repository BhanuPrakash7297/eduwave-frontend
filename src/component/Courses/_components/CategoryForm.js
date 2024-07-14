import React, { useEffect, useState } from "react";
import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const formSchema = z.object({
  categoryId: z.string().min(1, "Category is required"),
});

const CategoryForm = ({ initialData, courseId, options }) => {
  console.log(options, initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [categories] = useState(options);
  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => option.value === initialData?.categoryId) || null
  );

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryId: initialData?.categoryId || "",
    },
  });

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setValue("categoryId", selectedOption ? selectedOption.value : "");
    console.log("Selected Option:", selectedOption); // Debugging
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  const onSubmit = async (data) => {
    console.log("Data to be submitted:", data); // Debugging
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/course/update-course/${courseId}`,
        data
      );
      console.log("API Response:", response); // Debugging
      toast.success("Category updated");
      toggleEdit();
      navigate(0);
    } catch (error) {
      console.error("API Error:", error); // Debugging
      toast.error("Something Went Wrong");
    }
  };

  const selectedValue = options.find(
    (option) => option.value === initialData?.categoryId
  );
  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Category
        <button
          onClick={toggleEdit}
          type="button"
          className="px-4 py-2 bg-transparent text-grey font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
        >
          {isEditing ? (
            "Cancel"
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2 bg-inherit" />
              Edit Category
            </>
          )}
        </button>
      </div>
      {!isEditing && (
        <p className="text-sm mt-2 text-slate-500 italic">
          {selectedValue ? selectedValue.label : "No category selected"}
        </p>
      )}

      {isEditing && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <label
            htmlFor="categoryId"
            className="block text-[20px] font-medium text-gray-700"
          >
            Category
          </label>
          <Select
            options={options}
            onChange={handleChange}
            value={selectedOption}
            placeholder="Select a category"
            isClearable
          />
          {errors.categoryId && (
            <p className="text-red-500">{errors.categoryId.message}</p>
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
    </div>
  );
};

export default CategoryForm;
