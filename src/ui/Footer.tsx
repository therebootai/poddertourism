"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaMobile } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
// import Popup from "./Popup";
// import EnquiryForm from "./EnquiryForm";

export default function Footer() {
  const darjeelingPackage = [
    {
      label: `Visit Tiger Hill`,
      href: `/our-services/darjeeling-tour-package`,
    },
    {
      label: `Mall Road & Chowrasta`,
      href: `/our-services/darjeeling-tour-package`,
    },
    {
      label: `Batasia Loop`,
      href: `/our-services/darjeeling-tour-package`,
    },
    {
      label: `Darjeeling Himalayan Railway`,
      href: `/our-services/darjeeling-tour-package`,
    },
    {
      label: `Rock Garden & Ganga Maya Park`,
      href: `/our-services/darjeeling-tour-package`,
    },
    {
      label: `Observatory Hill & Mahakal Temple`,
      href: `/our-services/darjeeling-tour-package`,
    },
  ];

  const sikkimPackage = [
    {
      label: `Visit Gangtok`,
      href: `/our-services/north-sikkim-tour-package`,
    },
    {
      label: `Visit Pelling`,
      href: `/our-services/north-sikkim-tour-package`,
    },
    {
      label: `Visit Namchi`,
      href: `/our-services/south-sikkim-tour-package`,
    },
    {
      label: `Visit Ravangla`,
      href: `/our-services/south-sikkim-tour-package`,
    },
    {
      label: `Visit Lachung`,
      href: `/our-services/north-sikkim-tour-package`,
    },
    {
      label: `Visit Yuksom`,
      href: `/our-services/north-sikkim-tour-package`,
    },
  ];

  const northeastPackage = [
    {
      label: `Tawang, Arunachal Pradesh`,
      href: `/our-services/north-east-tour-package`,
    },
    {
      label: `Shillong, Meghalaya`,
      href: `/our-services/north-east-tour-package`,
    },
    {
      label: `Kaziranga National Park, Assam`,
      href: `/our-services/north-east-tour-package`,
    },
    {
      label: `Gangtok, Sikkim`,
      href: `/our-services/north-east-tour-package`,
    },
    {
      label: `Cherrapunji, Meghalaya`,
      href: `/our-services/north-east-tour-package`,
    },
    {
      label: `Ziro Valley, Arunachal Pradesh`,
      href: `/our-services/north-east-tour-package`,
    },
  ];

  const dooarsPackage = [
    {
      label: `Kathmandu Valley`,
      href: `/our-services/dooars-tour-package`,
    },
    {
      label: `Visit Pokhara`,
      href: `/our-services/dooars-tour-package`,
    },
    {
      label: `Everest Region (Khumbu)`,
      href: `/our-services/dooars-tour-package`,
    },
    {
      label: `Chitwan National Park`,
      href: `/our-services/dooars-tour-package`,
    },
    {
      label: `Visit Lumbini`,
      href: `/our-services/dooars-tour-package`,
    },
    {
      label: `Annapurna Region`,
      href: `/our-services/dooars-tour-package`,
    },
  ];

  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const toggleAppointmentModal = () =>
    setIsAppointmentModalOpen(!isAppointmentModalOpen);

  return (
    <footer className="w-full relative border-t-4 border-site-primary">
      <div className="w-full xl:px-16 lg:px-8 px-4 xl:py-12 lg:py-6 py-2.5  bg-gradient-to-b from-[#002F4C] to-[#005183] relative ">
        <div className="flex flex-col gap-8 relative ">
          <div className="flex flex-col lg:flex-row  gap-4 w-full text-white justify-between">
            <div className="flex flex-col gap-6 basis-full lg:basis-[27%] text-base lg:text-xl xl:text-2xl">
              <h1 className="font-bold">Darjeeling Tour Package</h1>
              <ul className="flex flex-col gap-4  text-base">
                {darjeelingPackage.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-white hover:text-site-primary"
                    >
                      &#x3e; {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6 basis-full lg:basis-[27%] text-base lg:text-xl xl:text-2xl">
              <h1 className="font-bold">Sikkim Tour Package</h1>
              <ul className="flex flex-col gap-4  text-base">
                {sikkimPackage.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-white hover:text-site-primary"
                    >
                      &#x3e; {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6 basis-full lg:basis-[27%] text-base lg:text-xl xl:text-2xl">
              <h1 className="font-bold">North-East Tour Package</h1>
              <ul className="flex flex-col gap-4  text-base">
                {northeastPackage.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-white hover:text-site-primary"
                    >
                      &#x3e; {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6 basis-full lg:basis-[27%] text-base lg:text-xl xl:text-2xl">
              <h1 className="font-bold">Dooars Tour Package</h1>
              <ul className="flex flex-col gap-4  text-base">
                {dooarsPackage.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-white hover:text-site-primary"
                    >
                      &#x3e; {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-between gap-6 flex-wrap">
            <div className="p-2 bg-white rounded basis-full md:basis-1/2 xl:basis-[20%] flex items-center justify-center">
              <Image
                src="/logo/msme.png"
                alt="msme"
                width={248}
                height={114}
                className="h-36 object-cover"
              />
            </div>
            <div className="p-2 bg-white rounded basis-full md:basis-1/2 xl:basis-[20%] flex items-center justify-center">
              <Image
                src="/logo/e-trade.png"
                alt="msme"
                width={248}
                height={114}
                className="h-36  object-cover"
              />
            </div>
            <div className="p-2 bg-white rounded basis-full md:basis-1/2 xl:basis-[20%] flex items-center justify-center">
              <Image
                src="/logo/msme.png"
                alt="msme"
                width={248}
                height={114}
                className="h-36 object-cover"
              />
            </div>
            <div className="p-2 bg-white rounded basis-full md:basis-1/2 xl:basis-[20%] flex items-center justify-center">
              <Image
                src="/logo/msme.png"
                alt="msme"
                width={248}
                height={114}
                className="h-36 object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row  gap-4 w-full text-white justify-between">
            <div className="flex flex-col gap-4 basis-full lg:basis-[40%]">
              <div>
                <Image
                  src="/logo-white.svg"
                  alt="logo"
                  width={372}
                  height={49}
                  className="h-[3rem] w-fit"
                />
              </div>
              <p className="w-[80%]">
                Poddar Tourism offers personalized tour packages, ticketing
                services, car rentals, and expert guidance for seamless travel
                experiences in North Bengal.
              </p>
              <div className="flex flex-col gap-2 text-base lg:text-sm xl:text-base">
                <h3 className="text-white xl:text-xl text-lg inline-flex items-center gap-1">
                  Contact Info{" "}
                  <span className="bg-white h-0.5 flex-1 max-w-16" />
                </h3>
                {/* <Link
                href="https://api.whatsapp.com/send?phone=919382221313"
                className="flex gap-2"
              >
                <IoLogoWhatsapp size={20} className="" />{" "}
                <span>+91 93822 21313</span>
              </Link> */}
                <div className="flex gap-2">
                  <FaMobile size={20} className="" />{" "}
                  <Link href="tel:+917384859939">+91-73848 59939</Link> /{" "}
                  <Link href="tel:+918918152570">89181 52570</Link>
                </div>
                <Link
                  href={"mailto:utpalpoddar1983@gmail.com"}
                  className="flex gap-2"
                >
                  <MdEmail size={20} className="" />{" "}
                  <span>utpalpoddar1983@gmail.com</span>
                </Link>
                <Link
                  href={"https://maps.app.goo.gl/RwnUZHjKgFwgynpw7"}
                  referrerPolicy="no-referrer"
                  target="_blank"
                  className="flex gap-2 w-full xl:w-[80%]"
                >
                  <IoLocationSharp size={20} className="" />{" "}
                  <span>
                    NJP Main Road, Ward No. 35, Bhaktinagar Siliguri, Darjeeling
                    734007
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6 basis-full lg:basis-[20%] text-base lg:text-xl xl:text-2xl">
              <h1 className="font-bold">Our Services</h1>
              <ul className="flex flex-col gap-4  text-base">
                <li>
                  <Link
                    href="/our-services/darjeeling-tour-package"
                    className="text-white hover:text-site-primary"
                  >
                    &#x3e; Darjeeling Tour &amp; Travel
                  </Link>
                </li>

                <li>
                  <Link
                    href="/our-services/north-sikkim-tour-package"
                    className="text-white hover:text-site-primary"
                  >
                    &#x3e; North Sikkim Tour &amp; Travel
                  </Link>
                </li>

                <li>
                  <Link
                    href="/our-services/south-sikkim-tour-package"
                    className="text-white hover:text-site-primary"
                  >
                    &#x3e; South Sikkim Tour &amp; Travel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-services/dooars-tour-package"
                    className="text-white hover:text-site-primary"
                  >
                    &#x3e; Dooars Tour &amp; Travel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-services/bhutan-tour-package"
                    className="text-white hover:text-site-primary"
                  >
                    &#x3e; Bhutan Tour &amp; Travel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-services/nepal-tour-package"
                    className="text-white hover:text-site-primary"
                  >
                    &#x3e; Nepal Tour &amp; Travel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-services/north-east-tour-package"
                    className="text-white hover:text-site-primary"
                  >
                    &#x3e; North-East Tour &amp; Travel
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-6 basis-full  lg:basis-[20%] text-base lg:text-xl xl:text-2xl">
              <h1 className="font-medium">Quick Link</h1>
              <ul className="flex flex-col gap-4  text-base">
                <li>
                  <Link href="/" className="text-white hover:text-site-primary">
                    &#x3e; Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-white hover:text-site-primary"
                  >
                    &#x3e; About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#tour-services"
                    className="text-white hover:text-site-primary"
                  >
                    &#x3e; Tour Packages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/why-us"
                    className="text-white hover:text-site-primary"
                  >
                    &#x3e; Why Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-white hover:text-site-primary"
                  >
                    &#x3e; Contact us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex  flex-col gap-4 basis-full lg:basis-[20%]">
              <div className="w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4265.745662109689!2d88.44180899999999!3d26.685432000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQxJzA3LjYiTiA4OMKwMjYnMzAuNSJF!5e1!3m2!1sen!2sin!4v1744176233256!5m2!1sen!2sin"
                  loading="lazy"
                  className="rounded-lg w-full h-[10rem] lg:h-[12rem] xl:h-[13rem]"
                ></iframe>
              </div>
              <button
                type="button"
                onClick={toggleAppointmentModal}
                className="bg-site-primary text-white flex justify-center items-center text-lg h-[3rem] w-full rounded"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-6 flex lg:flex-row flex-col justify-between items-center border-t border-white/40 text-white">
          <div className="text-center">
            <h1>
              © Copyright{" "}
              <Link href={"/"} className="  font-medium text-site-primary">
                Poddar Tourism
              </Link>{" "}
              - 2025 All Rights Reserved
            </h1>
          </div>
          <div className="text-white">
            <h1>
              Design & Developed By:{" "}
              <span className="font-semibold">
                <Link href={"https://rebootai.in/"} target="_blank">
                  Reboot AI Pvt. Ltd.{" "}
                </Link>
              </span>
            </h1>
          </div>
        </div>
      </div>
      {/* <Popup isOpen={isAppointmentModalOpen} onClose={toggleAppointmentModal}>
        <EnquiryForm />
      </Popup> */}
    </footer>
  );
}
