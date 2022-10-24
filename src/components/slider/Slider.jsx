import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./slider.css";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default function App() {
  const slides = [
    {
      id: "1",
      img: "/assets/bootstrap.png",
    },
    {
      id: "2",
      img: "/assets/cimage.jpg",
    },
    {
      id: "3",
      img: "/assets/c++image.jpg",
    },
    {
      id: "4",
      img: "https://play-lh.googleusercontent.com/AGS-_N7RCj7IF5BsFM6keGJVWf8D4GZvh64bfOvU6OewzPb-KbUJ-47ALOCDQehRl3C6",
    },
    {
      id: "5",
      img: "/assets/git.png",
    },
    {
      id: "6",
      img: "https://blog.kakaocdn.net/dn/dJRe0g/btqWUruqSFN/7lQyAEpK4ZnmBoHrU5lTAk/img.png",
    },
    {
      id: "7",
      img: "/assets/javascript.png",
    },
    {
      id: "8",
      img: "/assets/react3.jpg",
    },
    {
      id: "9",
      img: "data:image/png;base64,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",
    },
    {
      id: "10",
      img: "data:image/png;base64,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",
    },
    {
      id: '11',
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--3Vzl-3GI--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hlvh83odvuzjfmk3ljlx.png",
    },
  ];
  return (
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
          // pagination={{
          //   type: "progressbar",
          // }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{ delay: 2000 }}
          className="mySwiper"
        >
           {slides.map((item) =>{
          return ( <SwiperSlide>
            <img src={item.img} alt="Error" />
          </SwiperSlide>)
        })}
        </Swiper>
      </div>
  );
}
