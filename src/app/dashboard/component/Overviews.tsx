import OverviewCard from "@/app/components/OverviewCard";
import { IoChatbubbleSharp } from "react-icons/io5";
import { FaTag } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { PiCoinsBold } from "react-icons/pi";
import { BiSolidCoin } from "react-icons/bi";
import { FaPiggyBank } from "react-icons/fa";

export default function Overviews() {
  const overviews = [
    {
      icon: <IoChatbubbleSharp />,
      title: "Consultations",
      amount: 24,
      status: { percentage: "15%", type: "increase" },
    },
    {
      icon: <FaTag />,
      title: "ORDERS PLACED",
      amount: 12,
      status: { percentage: "15%", type: "decrease" },
    },
    {
      icon: <TiTick />,
      title: "CONVERSION ",
      amount: "50%",
      status: { percentage: "15%", type: "decrease" },
    },
    {
      icon: <PiCoinsBold />,
      title: "TOTAL SALES VALUE",
      amount: "$2,400",
      status: { percentage: "15%", type: "increase" },
    },
    {
      icon: <BiSolidCoin />,
      title: "AVG ORDER VALUE",
      amount: "$240",
      status: { percentage: "15%", type: "increase" },
    },
    {
      icon: <FaPiggyBank />,
      title: "COMMISSION PAID",
      amount: "$240",
      status: { percentage: "15%", type: "increase" },
    },
  ];
  return (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {overviews.map((item, index) => (
        <OverviewCard
          key={index}
          badge={item.icon}
          title={item.title}
          amount={item.amount}
          status={item.status}
        />
      ))}
    </div>
  );
}
