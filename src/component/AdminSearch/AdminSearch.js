import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import CategoriesPage from "./CategoriesPage";
import { SearchInput } from "./SearchInput";
import useSearchCourses from "../Hooks/use-search-course";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import { CoursesList } from "./courseList";

const AdminSearch = () => {
  const [categories, setCategories] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get("title");
  const categoryId = searchParams.get("categoryId");

  const getCategory = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-categories`
      );

      setCategories(res?.data?.data);
      // console.log(categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const { user } = useContext(AuthContext);
  console.log(user);
  const userId = user?.email;

  const courses = useSearchCourses({
    title,
    categoryId,
    userId,
  });
  console.log(courses);
  return (
    <>
      {categories && (
        <>
          <div className="px-6 py-6 md:hidden md:mb-0 block">
            <SearchInput />
          </div>
          <div className="p-6">
            <CategoriesPage items={categories} />
          </div>

          {courses && <CoursesList items={courses.data} />}
        </>
      )}
    </>
  );
};

export default AdminSearch;
