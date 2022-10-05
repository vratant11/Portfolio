import React from 'react'
import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
// import "swiper/css/navigation";
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
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        autoplay={{
          delay:2500,
        }}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="/assets/bootstrap.png" alt="error"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/assets/cimage.jpg" alt="error"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/assets/c++image.jpg" alt="error"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/assets/cssimage.png" alt="error"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/assets/html5image.png" alt="error"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/assets/javascript.png" alt="error"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/assets/git.png" alt="error"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/assets/react3.jpg" alt="error"/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default slider