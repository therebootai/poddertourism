import FlightIcon from "@/svg/FlightIcon";
import CustomSiteHeader from "@/ui/CustomSiteHeader";
import Image from "next/image";

export default function NewsLetterQuery() {
  return (
    <div className=" xl:px-16 lg:px-8 px-4 xl:py-12 lg:py-6 py-2.5 ">
      <div className=" border border-site-primary rounded-md relative">
        <div
          className={`absolute w-full h-full bg-cover bg-center rounded-md opacity-20
      `}
          style={{ backgroundImage: "url('/custom-bg/enquerybg.jpg')" }}
        >
          <div className="absolute w-full h-full bg-site-primary/10 rounded-md"></div>
        </div>
        <div className=" xl:p-12 lg:p-6 p-4 flex flex-col md:flex-row gap-6 relative bg-site-primary/20">
          <div className="md:w-[70%] w-full flex flex-col justify-between gap-4">
            <CustomSiteHeader
              normal="Enter your travel destination"
              highlighted="Ready to get started?"
            />
            <div className=" flex flex-col gap-2">
              <h1 className=" text-xl font-medium text-site-black">
                Know your tour & travel packages
              </h1>
              <div className=" flex flex-col text-lg text-site-black">
                <div>&#x2022; Get document checklist</div>
                <div>&#x2022; FREE Sign up!</div>
              </div>
            </div>
            <form className="xl:w-[75%] w-full flex flex-row items-center h-[4rem] bg-white rounded-full px-4">
              <div className="w-[10%]">
                <FlightIcon className={"md:size-8 size-4"} />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="mobile"
                  minLength={10}
                  maxLength={10}
                  required
                  placeholder="Enter your phone number..."
                  className="bg-transparent border-none outline-none md:h-[4rem] text-site-gray text-sm lg:text-lg w-full"
                />
              </div>
              <button className="md:w-[25%] w-[30%] flex justify-center items-center px-2 h-8 md:h-[3rem] bg-site-secondary rounded-full text-xs md:text-sm lg:text-lg font-medium text-white">
                Enquiry Now
              </button>
            </form>
          </div>
          <div className="md:w-[30%] w-full flex justify-center items-center">
            <div className=" size-[15rem] lg:size-[18rem]">
              <Image
                src={"/extra/EnquiryNow.jpg"}
                alt="Ready To get started"
                width={1157}
                height={1280}
                className=" w-full border border-custom-orange rounded-md h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
