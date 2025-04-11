import MainTemplate from "@/templates/MainTemplate";
import SubBanner from "@/ui/SubBanner";
import Image from "next/image";
import Link from "next/link";
import { GoHome } from "react-icons/go";

export default function NotFound() {
  return (
    <MainTemplate>
      <SubBanner heading={"404 Page Not Found"} />
      <main className=" flex flex-col gap-16 xl:px-16 lg:px-8 px-4 xl:py-12 lg:py-6 py-2.5 ">
        <Image
          src="/logo-coloured.svg"
          alt="not-found"
          width={1036}
          height={112}
          className="h-[4rem] w-fit self-center"
        />
        <div className="">
          <h1 className="text-center text-3xl font-semibold text-site-black">
            Sorry! I think you broke the path.
          </h1>
          <h3 className="text-xl text-center text-site-black">
            Please enter the topic which you are looking for
          </h3>
        </div>

        <Link
          href="/"
          className="inline-flex py-2 px-4 items-center justify-center self-center bg-site-secondary text-base text-center text-white gap-2 rounded"
        >
          <GoHome />
          <span>Go Back to Home Page</span>
        </Link>
      </main>
    </MainTemplate>
  );
}
