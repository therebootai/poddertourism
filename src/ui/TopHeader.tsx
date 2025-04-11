"use client";
import InstagramLogo from "@/svg/Instagram";
import JustDialLogo from "@/svg/JustDial";
import Link from "next/link";
import { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
// import Popup from "./Popup";
// import EnquiryForm from "./EnquiryForm";

export default function TopHeader() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const toggleAppointmentModal = () =>
    setIsAppointmentModalOpen(!isAppointmentModalOpen);

  return (
    <div className="z-[60] w-full bg-custom-orange ">
      <div className=" h-[3rem] hidden md:flex justify-between gap-2 md:gap-0 items-center  text-white md:px-2 px-4 lg:px-8 xl:px-12">
        <div className="flex gap-4 w-full text-xs lg:text-sm xl:text-base">
          <div className="flex md:gap-1 gap-1 items-center text-[12px] text-nowrap lg:text-sm xl:text-base font-medium text-site-black">
            <BiSolidPhoneCall size={20} className="text-site-primary" />
            <Link href="tel:+917384859939">+91-73848 59939</Link> /{" "}
            <Link href="tel:+918918152570">89181 52570</Link>
          </div>
          <Link
            href="mailto:utpalpoddar1983@gmail.com"
            className="flex md:gap-1 gap-1 items-center font-medium text-nowrap text-site-black"
          >
            <IoMdMail size={20} className="text-site-primary" />
            <span>utpalpoddar1983@gmail.com</span>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-3 lg:gap-8 w-full justify-end">
          <div className="flex items-center gap-1 lg:gap-2">
            <Link
              href="https://jsdl.in/DT-99EZ7KGJZXH"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <JustDialLogo className="size-6 text-site-secondary" />
            </Link>
            <Link
              href="https://www.instagram.com/poddartourismslg/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <InstagramLogo className="size-7 text-site-secondary" />
            </Link>
            <Link
              href="https://facebook.com/poddartourismsiliguri"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <FaFacebook className="size-6 text-site-secondary" />
            </Link>
          </div>
          <button
            className="h-[2.4rem] w-fit px-4 lg:px-6 flex justify-center items-center text-white bg-site-primary text-sm lg:text-lg font-medium  rounded-md"
            onClick={toggleAppointmentModal}
            type="button"
          >
            Pay Online
          </button>
        </div>
      </div>
      {/* <Popup isOpen={isAppointmentModalOpen} onClose={toggleAppointmentModal}>
        <EnquiryForm />
      </Popup> */}
    </div>
  );
}
