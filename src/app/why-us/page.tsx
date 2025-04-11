import NewsLetterQuery from "@/components/global/NewsLetterQuery";
import HomeTourPackages from "@/components/home/HomeTourPackages";
import WhyUsParaSection from "@/components/why-us/WhyUsParaSection";
import MainTemplate from "@/templates/MainTemplate";
import SubBanner from "@/ui/SubBanner";

export default function WhyUs() {
  return (
    <MainTemplate>
      <SubBanner
        imgsrc={"/custom-bg/subbanner.jpg"}
        heading={"Why Choose Us"}
      />
      <WhyUsParaSection />
      <HomeTourPackages />
      <NewsLetterQuery />
    </MainTemplate>
  );
}
