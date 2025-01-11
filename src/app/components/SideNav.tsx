"use client";
import { useState } from "react";
import { IMAGES, MISC, PAGES } from "@/utils/constants";
import Image from "next/image";
import { GoHomeFill } from "react-icons/go";
import { HiMiniChatBubbleOvalLeft } from "react-icons/hi2";
import { PiUsersFourFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  const links = [
    {
      icon: GoHomeFill,
      text: "Dashboard",
      href: PAGES.dashboard.index,
    },
    {
      icon: HiMiniChatBubbleOvalLeft,
      text: "Chat",
      href: PAGES.chat.index,
    },
    {
      icon: PiUsersFourFill,
      text: "Developer Groups",
      href: PAGES.developerGroups.index,
    },
  ];

  return (
    <div
      className={`top-0 left-0 h-full bg-primary text-white transition-all duration-300 ${
        isExpanded ? "w-64" : "w-16"
      }`}
      onMouseEnter={() => setIsExpanded(false)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col items-center justify-between py-4 h-full">
        <Link href="/">
          <Image
            className="block w-8 h-8"
            src={IMAGES.logo}
            alt={MISC.appName}
            width={500}
            height={500}
          />
        </Link>
        <hr className="my-10 border-primaryDark w-4/6" />
        <ul className="flex flex-col gap-6 mb-auto">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-4 font-bold rounded-lg hover:bg-gray-100 hover:text-primary transition-all p-2 ${
                    pathname.includes(link.href)
                      ? " bg-gray-100 text-primary"
                      : ""
                  }`}
                >
                  <Icon className="text-xl" />

                  {isExpanded && <span>{link.text}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col gap-6">
          <Link
            href={PAGES.settings}
            className={`flex items-center gap-4 w-full font-bold rounded-lg  hover:bg-gray-100 hover:text-primary transition-all p-2 ${
              pathname.includes(PAGES.settings)
                ? " bg-gray-100 text-primary"
                : ""
            }`}
          >
            <IoMdSettings className="text-xl" />

            {isExpanded && <span>Settings</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
