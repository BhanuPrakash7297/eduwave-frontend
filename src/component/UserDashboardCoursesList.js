import React from "react";
import { CourseCard } from "./AdminSearch/CourseCard";


export const UserDashboardCoursesList = ({ items }) => {
  console.log(items);

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items && items.length > 0 ? (
          items.map((item) => {
            console.log(item); // Log each item
            return (
              <CourseCard
                key={item.courseId._id}
                _id={item.courseId._id}
                title={item.courseId.title}
                imageUrl={item.courseId.imageUrl}
                chaptersLength={item.courseId.chapters.length}
                price={item.courseIdprice}
                progress={item.progress}
                category={item?.courseId?.categoryId?.name}
              />
            );
          })
        ) : (
          <div></div>
        )}
      </div>
      {items?.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No courses found
        </div>
      )}
    </div>
  );
};
