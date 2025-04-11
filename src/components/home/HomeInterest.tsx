"use client";
import CustomSiteHeader from "@/ui/CustomSiteHeader";
import ServiceCard from "@/ui/ServiceCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeInterest() {
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

  const componentImage = [
    {
      img: "/booking/carbooking.jpg",
      name: "Car Booking",
      link: "/our-services/darjeeling-tour-package",
    },
    {
      img: "/booking/flightticket.jpg",
      name: "Flight Booking",
      link: "/our-services/dooars-tour-package",
    },
    {
      img: "/booking/hotelbooking.jpg",
      name: "Hotel Booking",
      link: "/our-services/nepal-tour-package",
    },
    {
      img: "/booking/trainticket.jpg",
      name: "Train Booking",
      link: "/our-services/bhutan-tour-package",
    },
  ];

  return (
    <div className="xl:px-16 lg:px-8 px-4 xl:py-12 lg:py-6 py-2.5 flex flex-col gap-4 lg:gap-6 xl:gap-8">
      <CustomSiteHeader normal="By Interest" highlighted="Holiday" />
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
          {componentImage.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={item.link} className="w-[95%] ">
                <ServiceCard imgsrc={item.img} servicename={item.name} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
