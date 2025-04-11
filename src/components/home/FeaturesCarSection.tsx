"use client";
import CustomSiteHeader from "@/ui/CustomSiteHeader";
import ServiceCard from "@/ui/ServiceCard";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FeaturesCarSection = () => {
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

  const sendToWhatsApp = (carname: string) => {
    const message = `I am interested in the ${carname}.`;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const whatsappUrl = isDesktop
      ? `https://web.whatsapp.com/send?phone=917384859939&text=${encodeURIComponent(
          message
        )}`
      : `https://api.whatsapp.com/send?phone=917384859939&text=${encodeURIComponent(
          message
        )}`;

    window.open(whatsappUrl, "_blank");
  };

  const cars = [
    { imgsrc: "/cars/innova.jpg", carname: "Innova" },
    { imgsrc: "/cars/nexon.jpg", carname: "Nexon" },
    { imgsrc: "/cars/swift.jpg", carname: "Swift" },
    { imgsrc: "/cars/traveller.jpg", carname: "Traveller" },
  ];
  return (
    <div className="xl:px-16 lg:px-8 px-4 xl:py-12 lg:py-6 py-2.5 flex flex-col gap-4 lg:gap-6 xl:gap-8">
      <CustomSiteHeader normal="Cars" highlighted="Our Features" />
      <div className="w-full">
        <Swiper
          loop={true}
          slidesPerView={slidesToShow}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {cars.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="!flex w-full justify-center items-center"
                onClick={() => sendToWhatsApp(item.carname)}
              >
                <div className="w-[95%] cursor-pointer ">
                  <ServiceCard
                    imgsrc={item.imgsrc}
                    servicename={item.carname}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturesCarSection;
