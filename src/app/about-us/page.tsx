import AboutUsSection from "@/components/about/AboutUsSection";
import NewsLetterQuery from "@/components/global/NewsLetterQuery";
import HomeTourPackages from "@/components/home/HomeTourPackages";
import MainTemplate from "@/templates/MainTemplate";
import SubBanner from "@/ui/SubBanner";

export default function AboutUs() {
  return (
    <MainTemplate>
      <SubBanner imgsrc={"/custom-bg/subbanner.jpg"} heading={"About Us"} />
      <AboutUsSection />
      <HomeTourPackages />
      <NewsLetterQuery />
    </MainTemplate>
  );
}
