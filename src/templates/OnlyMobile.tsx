"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { TbBrandWhatsappFilled } from "react-icons/tb";

import { FaPhone } from "react-icons/fa6";
import { GiArchiveRegister } from "react-icons/gi";

const OnlyMobile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const toggleAppointmentModal = () =>
    setIsAppointmentModalOpen(!isAppointmentModalOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollThreshold = window.innerWidth <= 768 ? 100 : 300;
    if (window.scrollY > scrollThreshold) {
      setIsVisible(true);
      setIsAnimated(true);
    } else {
      setIsVisible(false);
      setIsAnimated(false);
    }
  };

  return (
    <div
      className={`fixed w-full p-2 z-[80] bottom-0 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`flex md:hidden justify-between bg-white items-center p-4 h-[4rem] rounded-lg border-site-primary border-2 ${
          isAnimated ? "bottomToTop" : ""
        }`}
      >
        <Link
          target="_Blank"
          href="https://web.whatsapp.com/send?phone=917384859939"
          className="flex flex-col items-center gap-2 text-sm text-site-primary font-semibold"
        >
          <span className="text-xl">
            <TbBrandWhatsappFilled className="text-site-primary" />
          </span>
          <span>Whasts App</span>
        </Link>
        <button
          onClick={toggleAppointmentModal}
          className="flex flex-col gap-2 items-center h-[4rem] text-sm text-custom-white font-semibold"
        >
          <span className="absolute -top-4 bg-white w-[4rem] h-[4rem] border-t-[2px] border-site-primary rounded-full justify-center items-center flex">
            <span className="flex w-[3rem] h-[3rem] text-xl bg-custom-lightblue rounded-full justify-center items-center relative">
              <GiArchiveRegister className="size-8 text-site-primary" />
            </span>
          </span>
          <span className="relative top-8 text-site-primary">
            Book Appointment
          </span>
        </button>
        <Link
          href="tel:+917384859939"
          target="_Blank"
          className="flex flex-col gap-2 items-center text-sm text-site-primary font-semibold"
        >
          <span className="text-xl">
            <FaPhone className="text-site-primary" />
          </span>
          <span>Call Now</span>
        </Link>
      </div>
    </div>
  );
};

export default OnlyMobile;
