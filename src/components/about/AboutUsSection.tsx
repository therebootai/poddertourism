"use client";

import useElementHeight from "@/hooks/useElementHeight";
import CustomSiteHeader from "@/ui/CustomSiteHeader";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutUsSection() {
  const [rightSideHeight, leftSideRef] = useElementHeight<HTMLDivElement>();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const details = [
    "Trusted Tour Operator Since 2012",
    "Seamless Travel Experiences Guaranteed",
    "Tailored Domestic & International Packages",
    "Expert Services in Ticketing & Rentals",
    "Comprehensive Travel Solutions for All",
    "Unmatched Customer Service Excellence",
    "Reliable B2B & B2C Offerings",
    "Explore Diverse Destinations with Ease",
  ];

  return (
    <div className="xl:px-16 lg:px-8 px-4 xl:py-12 lg:py-6 py-2.5 flex flex-col md:flex-row gap-6">
      <div
        className=" w-full md:w-[40%] flex flex-row gap-2 lg:gap-4 xl:gap-6"
        style={{ height: isSmallScreen ? "auto" : `${rightSideHeight}px` }}
      >
        <div className=" h-full w-[50%] flex flex-col gap-2 lg:gap-4 xl:gap-6">
          <div className=" h-[50%] w-full">
            <Image
              src={"/about/about.jpg"}
              alt="about"
              width={1000}
              height={1000}
              className="rounded-md h-full w-full object-cover"
            />
          </div>
          <div className=" h-[50%] w-full">
            <Image
              src={"/about/about2.jpg"}
              alt="about"
              width={1000}
              height={1000}
              className="rounded-md rounded-tl-full rounded-b-full h-full w-full object-cover"
            />
          </div>{" "}
        </div>
        <div className=" flex flex-col gap-2 lg:gap-4 xl:gap-6 h-full w-[50%]">
          <div className=" h-[50%] w-full">
            <Image
              src={"/about/about3.jpg"}
              alt="about"
              width={1000}
              height={1000}
              className="rounded-md rounded-t-full rounded-br-full h-full w-full object-cover"
            />
          </div>{" "}
          <div className=" h-[50%] w-full">
            <Image
              src={"/about/about4.jpg"}
              alt="about"
              width={1000}
              height={1000}
              className="rounded-md h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div
        className="md:w-[60%] w-full flex flex-col gap-3 xxl:gap-6"
        ref={leftSideRef}
      >
        <CustomSiteHeader normal="About" highlighted="Poddar Tourism" />
        <section className=" text-site-gray xl:text-lg lg:text-sm md:text-xs text-base">
          Poddar Tourism is one of the oldest and most trusted tour operators in
          North Bengal, based in NJP &#40;Siliguri&#41;. With decades of
          experience, we are committed to providing world-class tourism services
          that cater to both domestic and international travelers. Our offerings
          include comprehensive tour packages, air and railway ticketing
          services, and reliable car rental services, ensuring a seamless travel
          experience from start to finish. <br /> <br />
          We specialize in a wide range of domestic tour packages covering
          popular destinations such as Darjeeling, Dooars, North Sikkim, South
          Sikkim, and the enchanting Northeast India. In addition, we also offer
          exciting international tour packages to Nepal and Bhutan, providing an
          opportunity to explore the diverse cultures and breathtaking
          landscapes of the region. <br />
          <br /> Poddar Tourism serves both B2B and B2C clients, offering
          tailored packages to suit the needs of individual travelers as well as
          travel agencies. With our exceptional customer service and commitment
          to excellence, we ensure that every journey with us is unforgettable.
          Trust Poddar Tourism for your next adventure, and experience travel
          like never before.
        </section>
        <div className="grid md:grid-cols-2 gap-4 text-base md:text-sm lg:text-lg font-medium">
          {details.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-2 text-site-black"
            >
              <FaCheckCircle
                className={`text-lg ${
                  index % 4 === 0 || index % 4 === 3
                    ? "text-site-secondary"
                    : "text-site-primary"
                }`}
              />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
