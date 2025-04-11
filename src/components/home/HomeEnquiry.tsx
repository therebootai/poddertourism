"use client";
import useElementHeight from "@/hooks/useElementHeight";
import CustomSiteHeader from "@/ui/CustomSiteHeader";
import EnquiryForm from "@/ui/EnquiryForm";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeEnquiry() {
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
  return (
    <div className=" xl:px-16 lg:px-8 px-4 xl:py-12 lg:py-6 py-2.5 flex flex-col xl:gap-8 lg:gap-6 gap-4">
      <CustomSiteHeader normal="Share Your Feedback" highlighted="With Us" />
      <div className="flex flex-col md:flex-row rounded-md border border-site-primary">
        <div
          className="md:w-[50%] w-full"
          style={{ height: isSmallScreen ? "28rem" : `${rightSideHeight}px` }}
        >
          <Image
            src={"/extra/enquiryboximage.jpg"}
            alt="Enquiry"
            width={965}
            height={1060}
            className="h-full rounded-t-md md:rounded-tr-none md:rounded-l-md object-cover"
          />
        </div>
        <div className="md:w-[50%] w-full  " ref={leftSideRef}>
          <div className="w-full relative">
            <div
              className={`absolute w-full h-full bg-cover bg-center rounded-md
        `}
              style={{ backgroundImage: "url('/custom-bg/enquerybg.jpg')" }}
            >
              <div className="absolute w-full h-full bg-white/85 rounded-md"></div>
            </div>
            <div className="p-8 flex flex-col gap-6 justify-center items-center relative">
              <CustomSiteHeader
                normal="About Your Destination"
                highlighted="Still Confused"
              />
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
