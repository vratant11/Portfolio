import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./slider.css";

import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <>
    <div className="skills">
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
          <img src="/assets/git.png" alt="Error" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/html5image.png" alt="Error" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/javascript.png" alt="Error" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/react3.jpg" alt="Error" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
