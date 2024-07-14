import React from "react";

import BreadCrumb from "../Home/BreadCrumb/BreadCrumb";
import "./About.css";
import AboutService from "./AboutService/AboutService";
import AboutTestimonials from "./AboutTestimonials/AboutTestimonials";
import AboutUsTeam from "./AboutUsTeam/AboutUsTeam";
import AboutWrokShop from "./AboutWrokShop/AboutWrokShop";
import ChooseUs from "./ChooseUs/ChooseUs";
import HeroSection from "./HeroSection/HeroSection";
import Footer from "./../Home/Footer/Footer";
const About = () => {
  return (
    <div className="mt-10">
      <BreadCrumb title="About US" currentPage="About US" />
      <HeroSection />
      <AboutService />
      <AboutWrokShop />
      <ChooseUs />
      <AboutUsTeam />
      <AboutTestimonials />
      <Footer />
    </div>
  );
};

export default About;
