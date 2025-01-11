import { ICONS } from "@/utils/constants";
import Image from "next/image";
import { ReactElement } from "react";

type Props = {
  badge: ReactElement;
  title: string;
  amount: string | number;
  status: {
    percentage: string | number;
    type: string;
  };
};

export default function OverviewCard({ badge, title, amount, status }: Props) {
  return (
    <div className="rounded-3xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center text-primaryLight">
        <span className="text-sm mr-3">{badge}</span>
        <h4 className="text-sm font-semibold">{title.toUpperCase()}</h4>
      </div>
      <h4 className="text-3xl font-semibold my-4 text-gray-800">{amount}</h4>
      <div className="flex items-center text-primaryLight">
        <span className="text-sm mr-3">
          {status.type === "increase" ? (
            <Image src={ICONS.trendingUp} alt="" width={20} height={20} />
          ) : (
            <Image src={ICONS.trendingDown} alt="" width={20} height={20} />
          )}
        </span>
        <h4 className="text-sm">
          <span
            className={`mr-2 ${
              status.type === "increase" ? "text-[#15B79F]" : "text-red-500"
            }`}
          >
            {status.percentage}
          </span>
          {status.type}
        </h4>
      </div>
    </div>
  );
}
