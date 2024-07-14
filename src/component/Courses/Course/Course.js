import { dividerClasses } from "@mui/material";
import axios from "axios";
import {
  CircleDollarSign,
  File,
  LayoutDashboard,
  ListIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TitleForm from "../_components/TitleForm";
import DescriptionForm from "../_components/DescriptionForm";
import FileUploadForm from "../_components/FileUploadForm";
import CourseImageUploadeForm from "../_components/FileUploadForm";
import CategoryForm from "../_components/CategoryForm";
import PriceForm from "../_components/PriceForm";
import AttachmentForm from "../_components/AttachementForm";
import ChaptersForm from "../chapters/ChapterForm";
import Banner from "../chapters/banner";
import { Actions } from "../../Actions";

const Course = () => {
  const { courseId } = useParams();
  console.log("Course Detail Page", courseId);
  const [course, setCourse] = useState([]);
  const [categories, setCategories] = useState([]);
  const Navigate = useNavigate();

  const getCourse = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/course/${courseId}`
      );
      console.log("course Detailw page", response);
      setCourse(response.data.courseData);
      console.log("course information", course);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-categories`
      );
      setCategories(response?.data?.data);
      console.log("get categoies", categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("called use effect here");
    getCourse();
    getCategory();
  }, []);

  const requiredFields = [
    course && course[0]?.title,
    course && course[0]?.description,
    course && course[0]?.imageUrl,
    course && course[0]?.price,
    course && course[0]?.categoryId,
    course && course[0]?.chapters.some((chapter) => chapter.isPublished),
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields} / ${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!course[0]?.isPublished && (
        <Banner label="This course is unpublished. It will not be visible to the students." />
      )}
      <div className="">
        {course ? (
          <>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-medium">Course setup</h1>
                <span className="text-sm text-slate-700">
                  Complete all fields {completionText}
                </span>
              </div>
              <Actions
                disabled={!isComplete}
                courseId={courseId}
                isPublished={course[0]?.isPublished}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
              <div>
                <div className="flex items-center gap-x-2">
                  <LayoutDashboard
                    style={{ color: "blue", width: "25px", height: "25px" }}
                  />
                  <h2 className="text-xl">Customize your course</h2>
                </div>
                <TitleForm initialData={course[0]} courseId={courseId} />
                <DescriptionForm initialData={course[0]} courseId={courseId} />
                <CourseImageUploadeForm
                  initialData={course[0]}
                  courseId={courseId}
                />
                <CategoryForm
                  initialData={course[0]}
                  courseId={courseId}
                  options={categories?.map((category, index) => ({
                    label: category.name,
                    value: category._id,
                  }))}
                />
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-x-2">
                    <ListIcon
                      style={{ color: "blue", width: "25px", height: "25px" }}
                    />
                    <h2 className="text-xl">Course Chapters</h2>
                  </div>
                  <ChaptersForm initialData={course[0]} courseId={courseId} />
                </div>
                <div>
                  <div className="flex items-center gap-x-2">
                    <CircleDollarSign
                      style={{ color: "blue", width: "25px", height: "25px" }}
                    />
                    <h2 className="text-xl">Sell your Course</h2>
                  </div>
                  <PriceForm initialData={course[0]} courseId={courseId} />
                </div>
                <div>
                  <div className="flex items-center gap-x-2">
                    <File
                      style={{ color: "blue", width: "25px", height: "25px" }}
                    />
                    <h2 className="text-xl">Resources & Attachments</h2>
                  </div>
                  <AttachmentForm initialData={course[0]} courseId={courseId} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>..loding</div>
        )}
      </div>
    </>
  );
};

export default Course;


