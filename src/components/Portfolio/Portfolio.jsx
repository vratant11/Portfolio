import React from "react";

import "./Portfolio.css";

import Navbar from "../Navbar";
import Slider from "../slider/Slider";
import Profile from "../Profiles/Profile";
import Project from "../Projects/Project";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
// import { Pagination } from "swiper";
import About from "../About/About";
import Typewriterr from "../../Typewriter/Typewriterr";
// import { spacing } from "@mui/system";
const Portfolio = () => {
  

  return (
    <>
      <Navbar />
      <Typewriterr/>
      <div className="text" id="Aboutme">
        <h1>About me </h1>
      </div>
      <About/>
      <div className="text" id="skills">
        <h1>Skills </h1>
      </div>
      {/* <div style={{"display":"flex", "justifyContent":"center"}}> */}
      <Slider/>
      {/* </div> */}

      {/* <div className="container" data-aos="fade-right" data-aos-duration="3000">
        <div className="card card1">
          <div className="border">
            <h2>Bootstrap</h2>
            <div className="icons"></div>
          </div>
        </div>
        <div className="card card2">
          <div className="border">
            <h2>C</h2>
            <div className="icons"></div>
          </div>
        </div>
        <div className="card card3">
          <div className="border">
            <h2>C++</h2>
            <div className="icons"></div>
          </div>
        </div>
        <div className="card card4">
          <div className="border">
            <h2>CSS</h2>
            <div className="icons"></div>
          </div>
        </div>
        <div className="card card5">
          <div className="border">
            <h2>Git</h2>
            <div className="icons"></div>
          </div>
        </div>

        <div className="card card6">
          <div className="border">
            <h2>Html</h2>
            <div className="icons"></div>
          </div>
        </div>
        <div className="card card7">
          <div className="border">
            <h2>Java Script</h2>
            <div className="icons"></div>
          </div>
        </div>
        <div className="card card8">
          <div className="border">
            <h2>React.js</h2>
            <div className="icons"></div>
          </div>
        </div>
      </div> */}
      <div className="text" id="work">
        <h1>Projects </h1>
      </div>
      <Project/>
      <div className="text">
        <h1 id="contacttext">Profiles</h1>
      </div>
      <Profile/>      
    </>
  );
};

export default Portfolio;
