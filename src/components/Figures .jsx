import React, { useState } from "react";
import CommonSmallText from "./common/CommonSmallText";
import CommonHeading from "./common/CommonHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "styles.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Figures = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    { src: "https://swiperjs.com/demos/images/nature-1.jpg", alt: "Nature 1" },
    { src: "https://swiperjs.com/demos/images/nature-2.jpg", alt: "Nature 2" },
    // Add other images as needed
  ];

  return (
    <div className="max-w-[1164px] mx-auto px-3 pt-[95px]">
      <div className="flex justify-center">
        <div className="flex flex-col text-center items-center">
          <CommonSmallText text="Know More" />
          <CommonHeading
            className="max-w-[615px] pt-4"
            text="And Used by the Biggest"
            color="Figures in Sports and Rehab"
          />
        </div>
        <div>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : false} // Conditional check
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.src} alt={image.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.src} alt={image.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Figures;
