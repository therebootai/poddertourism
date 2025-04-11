import Image from "next/image";
import { IoStar } from "react-icons/io5";

export default function TestimonialCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className=" flex flex-col gap-3 rounded-md border border-[#CCCCCC]">
      <div className=" w-full flex flex-col justify-center items-center relative mb-6">
        <div className="h-[6rem] w-full relative">
          <Image
            src={"/custom-bg/testimonial.png"}
            alt="Feedback"
            fill
            className=" w-full rounded-t-md object-cover"
          />
        </div>
        <div className=" size-[6rem] rounded-full bg-white flex justify-center items-center absolute top-[50%] ">
          <div className=" size-[5rem] relative">
            <Image
              src={"/extra/profile.svg"}
              alt="profile"
              fill
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="md:p-4 p-6 flex flex-col justify-center items-center gap-3 ">
        <h1 className=" text-xl xxl:text-2xl font-medium text-site-black">
          {name}
        </h1>
        <div className="flex flex-row gap-2 items-center text-sm xxl:text-base text-site-primary">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>
        <p
          className=" text-sm xxl:text-base text-site-gray h-[11rem] lg:h-[12.5rem] xl:h-[10rem] min-[1400px]:h-[13rem] xxl:h-[18rem]"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <div className="flex justify-center items-center gap-2  w-[50%]">
          <hr className="w-[25%] bg-custom-orange h-1" />
          <hr className="w-[50%] bg-custom-orange h-1" />
          <hr className="w-[25%] bg-custom-orange h-1" />
        </div>
      </div>
    </div>
  );
}
