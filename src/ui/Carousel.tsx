"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Carousel({ slides }: { slides: { src: string }[] }) {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-lg">
              <div className="w-full relative ">
                <Image
                  src={slide.src}
                  alt="banner"
                  width={1440}
                  priority
                  height={580}
                  className="w-full md:h-[75vmin] object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
