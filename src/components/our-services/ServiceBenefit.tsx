"use client";

import AffordablePrice from "@/svg/AffordablePrice";
import AvailableCars from "@/svg/AvailableCars";
import ExperiencedFacilities from "@/svg/ExperiencedFacilities";
import QuickSetup from "@/svg/QuickSetup";
import Trust10Years from "@/svg/Trust10Years";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ServiceBenefit() {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 460) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(3);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth <= 1280) {
        setSlidesToShow(5);
      } else {
        setSlidesToShow(5);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const benifits = [
    { icon: Trust10Years, name: "10+ Year of Trust" },
    { icon: AffordablePrice, name: "Affordable Price" },
    { icon: AvailableCars, name: "25+ Car Available" },
    { icon: QuickSetup, name: "Quick Set-up Facility" },
    { icon: ExperiencedFacilities, name: "Experience Team" },
  ];

  return (
    <div className="xl:px-16 lg:px-8 px-4 xl:py-12 lg:py-6 py-2.5 w-full">
      <Swiper
        slidesPerView={slidesToShow}
        spaceBetween={30}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {benifits.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center gap-2 border-2 border-site-primary border-dashed rounded-md group duration-500 transition-colors relative">
              <div
                className={`absolute w-full h-full bg-cover bg-cente`}
                style={{ backgroundImage: "url('/custom-bg/enquerybg.jpg')" }}
              >
                <div
                  className={`absolute w-full h-full bg-white group-hover:bg-site-primary group-hover:opacity-75 opacity-60  `}
                ></div>
              </div>
              <div className=" relative flex justify-center items-center flex-col gap-2">
                <item.icon className="size-[3rem] group-hover:text-white text-site-primary" />
                <h1 className=" text-lg lg:text-xl md:h-[3rem] h-[3rem] text-center font-medium text-[#333333] group-hover:text-white">
                  {item.name}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
