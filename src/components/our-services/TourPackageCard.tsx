import AccommodationIcon from "@/svg/Accommodation";
import MealsIcon from "@/svg/MealsIcon";
import SightSeenIcon from "@/svg/SightSeenIcon";
import TransferIcon from "@/svg/TransferIcon";

export default function TourPackageCard({
  pageHeading,
  tourDays,
  whyDescription,
}: {
  pageHeading: string;
  tourDays: string;
  whyDescription: string;
}) {
  const benifits = [
    { icon: AccommodationIcon, name: "Accommodation" },
    { icon: TransferIcon, name: "Transfer" },
    { icon: MealsIcon, name: "Meals" },
    { icon: SightSeenIcon, name: "Sightseeing" },
  ];
  return (
    <div className=" rounded-md border border-[#CCCCCC] relative flex-1 h-full">
      <div
        className="absolute w-full h-full bg-cover bg-center opacity-70 rounded-md "
        style={{ backgroundImage: `url('/custom-bg/enquerybg.jpg')` }}
      >
        <div className={`absolute w-full h-full bg-white/70  `}></div>
      </div>
      <div className=" relative xl:p-8 xlg:p-6 p-4 flex flex-col gap-4 md:gap-2 lg:gap-4 justify-around flex-1">
        <h1 className="xl:text-2xl text-xl xxl:text-3xl font-medium text-site-primary">
          {pageHeading.split(" ").map((word, index) => (
            <span key={index} className={index === 2 ? "text-site-black" : ""}>
              {word}{" "}
            </span>
          ))}
        </h1>

        <div className=" h-[2rem] xl:h-[2.5rem] xxl:h-[3rem] w-fit px-6 flex justify-center items-center text-site-secondary xl:text-lg xxl:text-xl font-medium border-2 border-site-primary border-dashed">
          {tourDays}
        </div>
        <div className=" flex flex-row justify-between items-center">
          {benifits.map((item, index) => (
            <div
              className="flex flex-col justify-center items-center"
              key={index}
            >
              <item.icon className="xl:size-[3rem] lg:size-[2rem] size-[1.8rem] xxl:size-[4rem]" />
              <h1 className=" text-xs lg:text-sm xl:text-base xxl:text-xl font-medium text-site-black">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1 lg:gap-3">
          <h1 className=" text-site-black text-lg xlg:text-xl xxl:text-2xl font-medium ">
            <span className="text-site-primary">Why Choose</span> {pageHeading}
          </h1>
          <p className=" text-sm md:text-xs xl:text-sm xxl:text-lg text-site-gray">
            {whyDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
