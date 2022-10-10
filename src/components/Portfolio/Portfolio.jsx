import React from "react";

import "./Portfolio.css";

import Navbar from "../Navbar";
import Slider from "../slider/Slider";
import Profile from "../Profiles/Profile";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
// import { Pagination } from "swiper";
import About from "../About/About";
import Typewriterr from "../../Typewriter/Typewriterr";
import Timeline from "../Timeline";
// import { spacing } from "@mui/system";
const Portfolio = () => {
  

  return (
    <>
      <Navbar/>
      <Typewriterr/>
      <div className="text" id="Aboutme">
        <h1>About me </h1>
      </div>
      <About/>
      <div className="text" id="skills">
        <h1>Skills </h1>
      </div>
      <Slider/>
      <div className="text">
        <h1 id="contacttext">Projects</h1>
      </div> 
      <Timeline/>      
      <div className="text">
        <h1 id="contacttext">Profiles</h1>
      </div>
      <Profile/>  
       
    </>
  );
};

export default Portfolio;
