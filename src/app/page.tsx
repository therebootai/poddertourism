import NewsLetterQuery from "@/components/global/NewsLetterQuery";
import FeaturesCarSection from "@/components/home/FeaturesCarSection";
import HomeEnquiry from "@/components/home/HomeEnquiry";
import HomeInterest from "@/components/home/HomeInterest";
import HomeServiceNavigation from "@/components/home/HomeServiceNavigation";
import HomeSlider from "@/components/home/HomeSlider";
import HomeTestimonial from "@/components/home/HomeTestimonial";
import HomeTourPackages from "@/components/home/HomeTourPackages";
import MainTemplate from "@/templates/MainTemplate";

export default function Home() {
  return (
    <MainTemplate>
      <HomeSlider />
      <HomeServiceNavigation />
      <FeaturesCarSection />
      <HomeTourPackages />
      <HomeInterest />
      <HomeTestimonial />
      <HomeEnquiry />
      <NewsLetterQuery />
    </MainTemplate>
  );
}
