import React, { useContext } from "react";
import BlogHomeSection from "./Blog/BlogHomeSection";
import HomeCategory from "./Catagory/HomeCategory";
import HomeCourses from "./Courses/HomeCourses";
import Testimonials from "./Testimonials/Testimonials";
import Instructor from "./Instructor/Instructor";
import Feature from "./Feature/Feature";
import NewsLetter from "./NewsLetter/NewsLetter";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import AboutUsSection from "./AboutUs/AboutUsSection";
import { AuthContext } from "../Context/UserContext";


const Home = () => {
  const {user}=useContext(AuthContext);
  console.log(user)
  return (
    <div>
      <Header />
      <AboutUsSection />
      <HomeCategory />
      <HomeCourses />
      <Testimonials />
      <Instructor />
      <Feature />
      <NewsLetter />
      <BlogHomeSection />
      <Footer />
     
    </div>
  );
};

export default Home;
