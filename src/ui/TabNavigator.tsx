"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

type ServiceCardProps = {
  img1: string;
  servicename1: string;
  link: string;
  categoryName: string;
  details: { img: string; servicename: string }[];
};

export default function TabNavigator({
  className,
  categories,
  Services,
}: {
  className?: string;
  categories: string[];
  Services: ServiceCardProps[];
}) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredServices = Services.filter(
    (service) => service.categoryName === selectedCategory
  );

  return (
    <div className={cn(className, "flex flex-col gap-4")}>
      <div className="flex flex-row gap-4 lg:gap-8 py-2 border-b border-[#DDDDDD] w-full overflow-x-auto no-scrollbar">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`md:text-lg text-base xl:text-xl font-semibold whitespace-nowrap flex-shrink-0  ${
              selectedCategory === category
                ? "text-site-primary"
                : "text-site-gray"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" key={selectedCategory}>
        {filteredServices.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="flex flex-col md:flex-row gap-2 lg:gap-4 xl:gap-6"
          >
            <motion.div
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="md:w-[40%] w-full"
            >
              <ServiceCard imgsrc={item.img1} servicename={item.servicename1} />
            </motion.div>

            <div className="md:w-[60%] w-full grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4 xl:gap-6">
              {item.details.map((detail, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 90 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <ServiceCard
                    imgsrc={detail.img}
                    servicename={detail.servicename}
                  />
                </motion.div>
              ))}
            </div>
          </Link>
        ))}
      </AnimatePresence>
    </div>
  );
}
