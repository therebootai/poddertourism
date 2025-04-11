import ContatctDetails from "@/components/contact-us/ContactDetails";
import HomeEnquiry from "@/components/home/HomeEnquiry";
import MainTemplate from "@/templates/MainTemplate";
import SubBanner from "@/ui/SubBanner";

export default function ContactUs() {
  return (
    <MainTemplate>
      <SubBanner heading="Contact Us" />
      <div className="xl:px-16 lg:px-8 px-4 xl:py-12 lg:py-6 py-2.5 flex flex-col md:flex-row gap-8">
        <ContatctDetails />
        <div className="h-60 md:h-auto w-full flex-1 md:flex-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4265.745662109689!2d88.44180899999999!3d26.685432000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQxJzA3LjYiTiA4OMKwMjYnMzAuNSJF!5e1!3m2!1sen!2sin!4v1744176233256!5m2!1sen!2sin"
            className="w-full h-full rounded-md"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <HomeEnquiry />
    </MainTemplate>
  );
}
