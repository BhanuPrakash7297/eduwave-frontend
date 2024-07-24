import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../Home/BreadCrumb/BreadCrumb";
import Footer from "../Home/Footer/Footer";
import DetailsContent from "./DetailsContent/DetailsContent";
import RelatedCourse from "./RelatedCourse/RelatedCourse";
import axios from "axios";
import { setLogLevel } from "firebase/app";
import { Box, CircularProgress, Typography } from "@mui/material";


const CourseDetails = () => {
  const { id } = useParams();
  console.log(id)
  const [courseDetails, setCourseDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [courses,setCourses]=useState();
  const getCourse = async (req, res) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/course/${id}`
      );
      setCourseDetails(response?.data?.courseData);
      setIsLoading(false);
      console.log(response?.data)
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCourses = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/course/course-list/:${0}`
      );
      setCourses(response?.data?.data);
      setIsLoading(false);
      console.log(courses);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCourse();
    getAllCourses();
  }, []);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height={"100%"}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
          zIndex: 1000, // Ensure loader is on top
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress size={80} sx={{ color: "#007bff" }} />{" "}
          {/* Adjust the size and color as needed */}
          <Typography variant="h6" sx={{ mt: 2 }}>
            Loading...
          </Typography>{" "}
          {/* Optional text */}
        </Box>
      </Box>
    );
  }
  return (
    <>
      {courseDetails && (
        <div>
          <BreadCrumb title="Course Details" currentPage="Course Details" />
          <DetailsContent details={courseDetails[0]} />
          <RelatedCourse courses={courses} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default CourseDetails;
