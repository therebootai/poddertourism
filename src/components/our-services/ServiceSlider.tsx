"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ServiceSlider({ pageImg }: { pageImg: string[] }) {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {pageImg.map((slide, index) => (
          <SwiperSlide
            className="carousel-item relative rounded-lg !h-full"
            key={index}
          >
            <div className="w-full !h-full ">
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                width={1440}
                height={580}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
