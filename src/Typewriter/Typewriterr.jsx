import React, { useState } from "react";
import "./Typewriter.css";
import Typewriter from "typewriter-effect";
const Typewriterr = () => {
  const [state] = useState({
    title: "Hi,",
    titleTwo: "I'am",
    titleThree: "Vratant Singh",
  });
  return (
    <>
      <div
        className="Name"
        // data-aos="fade-left"
        // data-aos-anchor="#example-anchor"
        // data-aos-offset="500"
        // data-aos-duration="500"
      >
        <h1 id="textcolor">
          <div className="title">{state.title}</div>
          <div className="titleTwo">{state.titleTwo}</div>
          <div className="titleThree">{state.titleThree}</div>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [" Web-Developer", " Tech Enthusiast"],
            }}
          />
        </h1>
        <div className="wrapper">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Typewriterr;
