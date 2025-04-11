"use client";
import { ServiceData } from "@/lib/ServiceData";
import CustomSiteHeader from "@/ui/CustomSiteHeader";
import ServiceCard from "@/ui/ServiceCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeTourPackages() {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 350) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 460) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(3);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth <= 1380) {
        setSlidesToShow(4);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(4);
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
    <div className="xl:px-16 lg:px-8 px-4 xl:py-12 lg:py-6 py-2.5 flex flex-col gap-4 lg:gap-6 xl:gap-8" >
      <CustomSiteHeader normal="Packages" highlighted="Top Tour" />
      <div className="w-full">
        <Swiper
          slidesPerView={slidesToShow}
          spaceBetween={24}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {ServiceData.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={item.link} className="w-[95%] ">
                <ServiceCard
                  imgsrc={item.thumbImg}
                  servicename={item.tourName}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
