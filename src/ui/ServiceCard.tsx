import Image from "next/image";

export default function ServiceCard({
  imgsrc,
  servicename,
}: {
  imgsrc: string;
  servicename: string;
}) {
  return (
    <div className="relative group">
      <div className=" ">
        <Image
          src={imgsrc}
          alt={servicename}
          width={1000}
          height={1000}
          className="w-full  object-cover rounded "
        />
      </div>
      <div className="flex justify-end rounded-b items-end absolute  w-full bottom-0 h-[50%] bg-gradient-to-b from-transparent to-black/50 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex justify-between items-center text-sm lg:text-base xl:text-lg font-medium text-white bg-clip-text w-full pb-2 capitalize">
          <h1>{servicename}</h1>
        </div>
      </div>
    </div>
  );
}
