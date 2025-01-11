import { PAGES } from "@/utils/constants";
import { GrAnalytics } from "react-icons/gr";
import { FaTag } from "react-icons/fa6";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();

  const links = [
    { icon: <GrAnalytics />, text: "Summary", link: PAGES.dashboard.summary },
    { icon: <FaTag />, text: "Sales", link: PAGES.dashboard.sales },
    {
      icon: <BiSolidMessageSquareDetail />,
      text: "Chats",
      link: PAGES.dashboard.chats,
    },
  ];
  return (
    <div className="flex items-center px-6 py-5 w-full min-w-[20rem] z-[1050] bg-white border-b border-gray-300">
      {links.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className={`flex items-center gap-4 p-2 mx-2 hover:bg-lightColor hover:text-primarySolid rounded-full text-lg font-medium ${
            pathname.includes(item.link)
              ? "text-primarySolid bg-lightColor"
              : "text-primary text-slate-500"
          }`}
        >
          <span className="text-xl">{item.icon}</span> {item.text}
        </Link>
      ))}
    </div>
  );
}
