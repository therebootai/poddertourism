"use client";
import DaysIcon from "@/svg/DaysIcons";
import CustomSiteHeader from "@/ui/CustomSiteHeader";
import EnquiryForm from "@/ui/EnquiryForm";
import { motion } from "motion/react";
import { useState } from "react";

export default function ServiceIternary({
  pageHeading,
  daywiseDetails,
  pageDescription,
  tourName,
}: {
  pageHeading: string;
  daywiseDetails: { daysName: string; description: string[] }[];
  pageDescription: string;
  tourName: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col md:flex-row gap-6 xl:px-16 lg:px-8 px-4 ">
      <div className="lg:w-[60%] md:w-[55%] w-full flex flex-col gap-6">
        <h1 className="xl:text-2xl text-xl font-medium text-site-primary">
          {pageHeading.split(" ").map((word, index) => (
            <span key={index} className={index === 2 ? "text-site-black" : ""}>
              {word}{" "}
            </span>
          ))}
        </h1>
        <div
          className=" text-base text-custom-textgray"
          dangerouslySetInnerHTML={{ __html: pageDescription }}
        ></div>
        <div className="flex flex-col gap-3">
          {daywiseDetails.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <button
                className={`flex items-center justify-between rounded-md shadow-custom-light gap-2 h-[4rem] text-custom-black px-4 xlg:px-6 text-sm md:text-sm lg:text-lg xlg:text-xl font-semibold 
  ${
    activeIndex === index
      ? "bg-site-primary text-white"
      : "bg-white text-site-black"
  }`}
                onClick={() => handleToggle(index)}
              >
                <div className="flex items-center text-start gap-1 lg:text-nowrap">
                  <div className="w-[10%]">
                    <DaysIcon
                      className={`size-4 md:size-7 ${
                        activeIndex === index
                          ? "text-white"
                          : "text-site-primary"
                      }`}
                    />
                  </div>
                  {item.daysName}
                </div>
                <div className="text-lg md:text-2xl">
                  {activeIndex === index
                    ? String.fromCharCode(8595)
                    : String.fromCharCode(8594)}
                </div>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  activeIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="lg:text-lg text-base p-4 flex flex-col gap-2">
                  {item.description.map((text: string, i: number | string) => (
                    <div key={i} className="text-site-gray">
                      &#x2022; {text}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-[40%] md:w-[45%] w-full flex flex-col gap-6">
        <div className="w-full relative rounded-md border border-[#CCCCCC]">
          <div
            className="absolute w-full h-full bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url('/custom-bg/enquerybg.jpg')` }}
          >
            <div className="absolute w-full h-full bg-white/70 rounded-md"></div>
          </div>
          <div className="lg:p-8 p-4 flex flex-col gap-6 justify-center items-center relative">
            <CustomSiteHeader
              normal={tourName}
              highlighted="Are you think to visit"
              className="text-center md:text-left"
            />
            <EnquiryForm />
          </div>
        </div>

        {/* <div>
        <ServicePageCarService />
      </div> */}
      </div>
    </div>
  );
}
