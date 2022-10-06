import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const slider = () => {
  return (
    <>
    {/* <div className="container">
        <div className="img-container">
          <img src="/assets/bootstrap.png" alt="error"/>
          <img src="/assets/cimage.jpg" alt="error"/>
          <img src="/assets/c++image.jpg" alt="error"/>
          <img src="/assets/cssimage.png" alt="error"/>
          <img src="/assets/html5image.png" alt="error"/>
          <img src="/assets/javascript.png" alt="error"/>
          <img src="/assets/git.png" alt="error"/>
          <img src="/assets/react3.jpg" alt="error"/>
        </div>
      </div> */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/bootstrap.png" alt="Error" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/cimage.jpg" alt="Error" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/c++image.jpg" alt="Error" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/cssimage.png" alt="Error" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/html5image.png" alt="Error" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/javascript.png" alt="Error" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/git.png" alt="Error" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/react3.jpg" alt="Error" />
        </SwiperSlide>
      </Swiper>      
    </>
  )
}

export default slider