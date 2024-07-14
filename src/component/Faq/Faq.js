import React from "react";
import BreadCrumb from "../Home/BreadCrumb/BreadCrumb";
import NavBar from "../Home/Header/NavBar";
import Questions from "./Questions/Questions";
import "./Faq.css";
import Footer from "../Home/Footer/Footer";
const Faq = () => {
  return (
    <div>
      <BreadCrumb title="Frequently Asked Questions" currentPage="FAQ" />
      <Questions />
      <Footer />
    </div>
  );
};

export default Faq;
