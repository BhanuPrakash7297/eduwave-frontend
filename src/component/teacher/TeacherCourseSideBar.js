import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import { CourseSidebarItem } from "./CourseSidebarItem";
import { CourseProgress } from "../UserProgress";
import axios from "axios";
import { useProgressContext } from "../../context/ProgressContex";

const TeacherCourseSideBar = ({ course,progressCount }) => {
  const [courseData, setCourseData] = useState(course);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
 
  

 

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-8 flex flex-col border-b">
        <h1 className="font-semibold text-2xl">{courseData?.title}</h1>
        {courseData?.purchases && (
          <div className="mt-10">
            <CourseProgress variant="success" value={progressCount} />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full">
        {courseData?.chapters?.map((chapter) => {
          console.log(chapter);
          return (
            <CourseSidebarItem
              key={chapter._id}
              id={chapter._id}
              label={chapter?.title}
              isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
              courseId={course?._id}
              isLocked={!chapter.isFree && !courseData?.purchases}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeacherCourseSideBar;
