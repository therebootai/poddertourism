import HomeTourPackages from "@/components/home/HomeTourPackages";
import ServiceBenefit from "@/components/our-services/ServiceBenefit";
import ServiceIternary from "@/components/our-services/ServiceIternary";
import ServiceSlider from "@/components/our-services/ServiceSlider";
import TourPackageCard from "@/components/our-services/TourPackageCard";
import { ServiceData } from "@/lib/ServiceData";
import MainTemplate from "@/templates/MainTemplate";
import SubBanner from "@/ui/SubBanner";

export const dynamicParams = false

type ServicePageProps = {
  pageHeading: string;
  pageImg: string[];
  tourDays: string;
  whyDescription: string;
  pageDescription: string;
  daywiseDetails: { daysName: string; description: string[] }[];
  tourName: string;
  thumbImg: string;
  link: string;
};

export async function generateStaticParams() {
  return ServiceData.map((service) => {
    const { link } = service;
    return { serviceSlug: link.split("/our-services/")[1] };
  });
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const { serviceSlug } = await params;
  const pageData = ServiceData.find((service) => {
    return service.link.split("/our-services/")[1] === serviceSlug;
  }) as ServicePageProps;


  const {
    pageHeading,
    pageImg,
    tourDays,
    whyDescription,
    pageDescription,
    daywiseDetails,
    tourName,
  } = pageData;

  return (
    <MainTemplate>
      <SubBanner heading={`${pageHeading}`} />
      <div className="xl:px-16 lg:px-8 px-4 xl:pt-16 lg:pt-8 pt-4 flex flex-col md:flex-row gap-4 xl:gap-6">
        <div className=" md:w-[50%] w-full lg:w-[60%] ">
          <ServiceSlider pageImg={pageImg} />
        </div>
        <div className="lg:w-[40%] md:w-[50%] w-full flex-1">
          <TourPackageCard
            pageHeading={pageHeading}
            tourDays={tourDays}
            whyDescription={whyDescription}
          />
        </div>
      </div>
      <ServiceBenefit />
      <ServiceIternary
        pageHeading={pageHeading}
        daywiseDetails={daywiseDetails}
        pageDescription={pageDescription}
        tourName={tourName}
      />
      <HomeTourPackages />
    </MainTemplate>
  );
}
