import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CourseIdDetailPage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  const navigate = useNavigate();

  const getCourse = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/course/${courseId}`
      );
      setCourse(response?.data?.courseData);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error(error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    getCourse();
  }, [courseId]);

  useEffect(() => {
    if (!loading && !course) {
      navigate("/admin/search");
    } else if (course) {
      navigate(`/user/details/courses/${courseId}/chapters/${course[0].chapters[0]._id}`);
    }
  }, [loading, course, navigate, courseId]);

  if (loading) return <div>Loading...</div>;

  return null;
};

export default CourseIdDetailPage;
