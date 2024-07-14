import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "./../Home/BreadCrumb/BreadCrumb";
import InstructoProfile from "./InstructoProfile/InstructoProfile";
import Footer from "./../Home/Footer/Footer";

const InstructorDeails = () => {
  const { name } = useParams();
  // const authorInfo = AllInstructor.find((author) => author.name === name);

  return (
    <>
      <BreadCrumb title="Instructor Profile" currentPage="Instructor Profile" />
      <InstructoProfile name={name} />
      <Footer />
    </>
  );
};

export default InstructorDeails;
