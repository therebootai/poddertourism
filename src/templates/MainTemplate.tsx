import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import TopHeader from "@/ui/TopHeader";
import OnlyMobile from "./OnlyMobile";

export default function MainTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-full flex-col overflow-x-hidden">
      <div className="z-[1000] w-full">
        <TopHeader />
        <Header />
      </div>

      {/* Main Content */}
      <div className=" lg:mt-[5rem] md:mt-[5rem] mt-[4rem]">{children}</div>
      <Footer />
      <OnlyMobile />
    </div>
  );
}
