"use client";

import { ServiceData } from "@/lib/ServiceData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const NavLinksData = [
    {
      text: "home",
      href: "/",
    },
    {
      text: "About Us",
      href: "/about-us",
    },

    {
      text: "Our Services",
      subMenu: [
        {
          menus: ServiceData.map((service) => ({
            text: service.tourName + " Tour Package",
            href: service.link,
          })),
        },
      ],
    },

    {
      text: "Why Us",
      href: "/why-us",
    },
    {
      text: "Contact Us",
      href: "/contact-us",
    },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed  h-[4rem] md:h-[5rem] w-full z-[60] flex items-center bg-site-nav-gradient  shadow-md ${
        scrolled ? "top-0  " : "md:top-[3rem] top-0 "
      }`}
    >
      <div className="flex justify-between items-center w-full relative md:px-6 px-4 lg:px-8 xl:px-12">
        <Link href={"/"}>
          <Image
            src={"/logo-coloured.svg"}
            alt="logo"
            width={1804}
            height={299}
            priority
            className="md:h-[3rem] lg:h-[3rem] h-[2rem] w-fit"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center  justify-center gap-5">
          {NavLinksData.map((item, index) => (
            <li key={index} className="relative group">
              {item.href ? (
                <Link
                  href={item.href}
                  className={`${
                    isActive(item.href)
                      ? "text-site-primary"
                      : "text-site-black"
                  } text-sm md:text-base xl:text-lg font-medium capitalize hover:text-site-primary`}
                >
                  {item.text}
                </Link>
              ) : (
                <div className="relative">
                  <span
                    className={`${
                      isActive(item.href ?? "")
                        ? "text-site-primary"
                        : "text-site-black"
                    } text-sm xl:text-base md:text-lg font-medium capitalize cursor-pointer hover:text-site-primary`}
                  >
                    {item.text}
                  </span>
                  {item.subMenu && item.subMenu.length > 0 && (
                    <div className="absolute top-full bg-site-primary  left-1/2 -translate-x-1/2 duration-500 transition-all origin-top-right opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto overflow-hidden flex rounded">
                      <div className="text-white flex flex-col gap-6 whitespace-nowrap p-2 py-4 xl:p-4">
                        <ul className="flex flex-row gap-4">
                          {item.subMenu.map((menu, con) => (
                            <div
                              className="text-white flex flex-col gap-6 whitespace-nowrap p-2 py-4 xl:p-4"
                              key={con}
                            >
                              <ul className="flex flex-col gap-4">
                                {menu.menus.map((link, indx) => (
                                  <li
                                    key={indx}
                                    className="text-base xl:text-lg"
                                  >
                                    <Link
                                      href={link.href}
                                      className="flex items-center z-10 gap-2 hover:underline"
                                    >
                                      &gt; {link.text}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}

        {/* Mobile Menu Icon */}
        <button
          type="button"
          className="inline-flex lg:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          title="menu-open"
        >
          <svg width="0" height="0">
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DB5D16" />
              <stop offset="100%" stopColor="#DB5D16" />
            </linearGradient>
          </svg>
          <span
            className={`transform transition-transform duration-500 ${
              isMenuOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isMenuOpen ? (
              <IoCloseSharp
                style={{
                  fill: "url(#gradient1)",
                }}
              />
            ) : (
              <AiOutlineMenuFold
                style={{
                  fill: "url(#gradient1)",
                }}
              />
            )}
          </span>
        </button>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-black/90 absolute top-full w-full left-0 text-white lg:hidden p-6 pb-12 rounded-b-lg h-fit overflow-y-scroll">
            <ul className="flex flex-col gap-4 capitalize">
              {NavLinksData.map((item, index) => (
                <li key={index} className="relative">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-site-primary lg:text-base text-base md:text-xl xl:text-lg "
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <div>
                      <div
                        className="flex justify-between items-center cursor-pointer lg:text-base text-base md:text-xl xl:text-lg"
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                      >
                        <span className="capitalize">{item.text}</span>
                        <span>{openDropdown === index ? "-" : "+"}</span>
                      </div>

                      {openDropdown === index && (
                        <div
                          className={`duration-500 transition-all origin-top ${
                            openDropdown === index
                              ? "h-auto opacity-100"
                              : "h-0 opacity-0"
                          } overflow-hidden flex flex-col rounded`}
                        >
                          {item.subMenu && item.subMenu.length > 0 && (
                            <ul className="flex flex-col gap-4">
                              {item.subMenu.map((menu, subIndex) => (
                                <div
                                  className="text-white flex flex-col gap-6 whitespace-nowrap p-2"
                                  key={subIndex}
                                >
                                  <ul className="flex flex-col gap-4">
                                    {menu.menus.map((link, linkIndex) => (
                                      <li
                                        key={linkIndex}
                                        className="lg:text-base text-base md:text-xl xl:text-lg"
                                      >
                                        <Link
                                          href={link.href}
                                          className="flex items-center gap-2"
                                        >
                                          <span className="text-primary">
                                            &gt;
                                          </span>
                                          {link.text}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
