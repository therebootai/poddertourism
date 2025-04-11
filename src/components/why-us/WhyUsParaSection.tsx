import CustomSiteHeader from "@/ui/CustomSiteHeader";
import Image from "next/image";

export default function WhyUsParaSection() {
  return (
    <div className="xl:px-16 lg:px-8 px-4 xl:py-12 lg:py-6 py-2.5 flex flex-col gap-6">
      <CustomSiteHeader normal="Why Choose" highlighted="Poddar Tourism" />
      <p className="text-site-gray xl:text-xl md:text-lg text-base">
        At Poddar Tourism, we pride ourselves on being one of the oldest and
        most trusted tour operators in North Bengal. With years of experience
        and an unwavering commitment to excellence, we provide our clients with
        top-notch travel services that guarantee a memorable journey.
        Here&apos;s why you should choose us for your next adventure:
      </p>
      <div className="flex gap-6 md:gap-4 xl:gap-6 flex-col md:flex-row">
        <Image
          src="/extra/whyus1.jpg"
          alt="whyus"
          width={746}
          height={402}
          className="rounded md:flex-1/2 flex-1"
        />
        <div className="flex flex-col gap-9 md:flex-1/2 flex-1">
          <div className="flex flex-col gap-3 xl:text-xl md:text-lg text-base">
            <h2 className="text-site-primary">Experience You Can Trust</h2>
            <p className="text-site-gray">
              With decades of experience in the travel industry, we have built a
              reputation for reliability and exceptional service. Our
              team&apos;s in-depth knowledge of North Bengal, Sikkim, Bhutan,
              Nepal, and other destinations ensures that every trip is
              well-planned and enjoyable. We know the ins and outs of the local
              culture, customs, and best attractions, making your travel
              experience seamless.
            </p>
          </div>
          <div className="flex flex-col gap-3 xl:text-xl md:text-lg text-base">
            <h2 className="text-site-secondary">Wide Range of Packages</h2>
            <p className="text-site-gray">
              Whether you are looking for a peaceful getaway in Darjeeling, a
              wildlife experience in Dooars, or an adventurous tour of North
              Sikkim, we have diverse travel packages to suit every interest.
              Our domestic packages include well-curated itineraries to some of
              the most beautiful destinations, while our international packages
              cover Nepal and Bhutan, offering you a rich cultural experience.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-6 md:gap-4 xl:gap-6 flex-col md:flex-row">
        <div className="flex flex-col gap-9 md:flex-1/2 flex-1">
          <div className="flex flex-col gap-3 xl:text-xl md:text-lg text-base">
            <h2 className="text-site-primary">Comprehensive Travel Services</h2>
            <p className="text-site-gray">
              We offer more than just tour packages. From air and railway
              ticketing services to convenient car rental options, we ensure all
              aspects of your travel are taken care of. Our goal is to provide
              you with a hassle-free experience from booking to departure.
            </p>
          </div>
          <div className="flex flex-col gap-3 xl:text-xl md:text-lg text-base">
            <h2 className="text-site-secondary">B2B & B2C Flexibility</h2>
            <p className="text-site-gray">
              We cater to both business partners and individual travelers,
              offering customized packages that meet the unique needs of each
              client. Whether you&apos;re planning a family trip or need
              packages for your business clients, we offer the flexibility to
              meet your requirements.
            </p>
          </div>
          <div className="flex flex-col gap-3 xl:text-xl md:text-lg text-base">
            <h2 className="text-site-primary">Customer-Centric Approach</h2>
            <p className="text-site-gray">
              Our clients are our priority. We listen to your needs, offer
              expert advice, and ensure every detail is in place for a perfect
              trip. With our focus on customer satisfaction, you can rest
              assured your travel experience with us will be unforgettable.
            </p>
          </div>
        </div>
        <Image
          src="/extra/whyus2.jpg"
          alt="whyus"
          width={746}
          height={402}
          className="rounded md:flex-1/2 flex-1"
        />
      </div>
    </div>
  );
}
