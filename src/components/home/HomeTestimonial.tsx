"use client";
import reviews from "@/lib/ReviewData";
import CustomSiteHeader from "@/ui/CustomSiteHeader";
import TestimonialCard from "@/ui/TestimonialCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeTestimonial() {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 350) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 460) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 1380) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 2080) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="xl:px-16 lg:px-8 px-4 xl:py-12 lg:py-6 py-2.5 flex flex-col xl:gap-8 lg:gap-6 gap-4">
      <CustomSiteHeader
        highlighted="Our Client"
        normal="Valuable Feedback for"
      />
      <div className="w-full flex flex-col md:flex-row gap-4 xl:gap-6">
        <div className=" w-full md:w-[50%] lg:w-[40%]">
          <Image
            src={"/custom-bg/testimonial.png"}
            alt="Feedback"
            width={1280}
            height={865}
            className=" rounded-md object-cover h-full w-full"
          />
        </div>
        <div className="w-full md:w-[50%] lg:w-[60%] ">
          <Swiper
            slidesPerView={slidesToShow}
            spaceBetween={24}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <div className=" w-[95%] ">
                  <TestimonialCard
                    name={item.name}
                    description={item.description}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
