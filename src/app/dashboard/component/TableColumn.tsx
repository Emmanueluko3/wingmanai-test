import { createColumnHelper } from "@tanstack/react-table";
import { calculateRelativeTime } from "@/utils/helpers";
import { OrderData } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";

const columnHelper = createColumnHelper<OrderData>();

const OrderState = ({ data }: { data: OrderData }) => {
  if (!data) {
    return (
      <span className="text-[#D17E09] bg-[#FFF0DB99] rounded-full py-[2px] px-[14px] text-[9px] font-normal capitalize">
        Pending
      </span>
    );
  }
};

export const columns = [
  columnHelper.accessor("name", {
    header: () => <p className="">Product</p>,
    cell: (info) => {
      return (
        <div className="flex flex-row w-fit">
          <Image
            src={info.row.original.image_url}
            alt=""
            width={40}
            height={40}
          />
          <div className="flex items-center gap-2">
            <p className="ml-4">{info.row.original.name}</p>
            <OrderState data={info.row.original} />
          </div>
        </div>
      );
    },
    size: 100,
  }),
  columnHelper.accessor("date", {
    header: () => "Date",
    cell: (info) => {
      return (
        <>
          <p className="">
            {calculateRelativeTime(info.row.original.date as any)}
          </p>
          <p className="text-xs">
            {calculateRelativeTime(info.row.original.date as any)}
          </p>
        </>
      );
    },
    size: 100,
  }),
  columnHelper.accessor("time_spent", {
    header: () => "Time spent",
    cell: (info) => {
      return <p className="">{info.row.original.time_spent}</p>;
    },
    size: 100,
  }),
  columnHelper.accessor("order_value", {
    header: () => "Order value",
    cell: (info) => {
      return <p className="">{info.row.original.order_value}</p>;
    },
    size: 100,
  }),
  columnHelper.accessor("commission", {
    header: () => "Commission",
    cell: (info) => {
      return <p className="font-semibold">{info.row.original.commission}</p>;
    },
    size: 100,
  }),
  columnHelper.accessor("order_id", {
    header: () => "",
    cell: (info) => {
      return (
        <Link
          href={info.row.original.order_id}
          className="text-[#8A94A6] text-xs flex items-start flex-nowrap absolute right-4 hover:font-semibold transition-all"
        >
          <span className="mr-4 text-nowrap"> View Chat </span>
          <RiArrowRightUpLine className="text-lg" />
        </Link>
      );
    },
  }),
];
