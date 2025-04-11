import Image from "next/image";

export default function SubBanner({
  imgsrc = "/custom-bg/subbanner.jpg",
  heading,
}: {
  imgsrc?: string;
  heading: string;
}) {
  return (
    <div className="relative">
      <div className="w-full h-[15vmax] lg:h-[20vmax] xl:h-[23rem] overflow-hidden ">
        <Image
          src={imgsrc}
          alt="Sub Banner"
          width={1440}
          height={250}
          className="object-cover h-full w-full"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-linear-0 from-black/35 from-0% to-black/35 to-100% flex items-center justify-center size-full">
        <h1 className="text-lg  md:text-xl font-semibold lg:text-3xl text-white text-center">
          {heading}
        </h1>
      </div>
    </div>
  );
}
