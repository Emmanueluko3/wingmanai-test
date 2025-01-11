"use client";
import Image from "next/image";
import { Consultants, PastPeriod } from "../component/Charts";
import Overviews from "../component/Overviews";
import { IoChatbubbleSharp } from "react-icons/io5";
import { ICONS, IMAGES } from "@/utils/constants";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { getOrdersData } from "@/lib/data";
import { columns } from "../component/TableColumn";
import AppTable from "@/app/components/AppTable";

export default function Summary() {
  return (
    <div className="m-8 p-6 rounded-3xl border border-lightColor shadow-sm">
      <div className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <h4 className="text-gray-800 text-3xl font-medium">At a glance</h4>
          <select
            name=""
            id=""
            className="rounded-lg p-2 border border-lightColor text-gray-800 cursor-pointer"
          >
            <option defaultValue="7days">7 days</option>
            <option value="2weeks">15 days</option>
            <option value="2weeks">30 days</option>
          </select>
        </div>
        <>
          <Overviews />
        </>
      </div>
      <div className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <h4 className="text-gray-800 text-3xl font-medium">Insights</h4>
        </div>
        <>
          <Insights />
        </>
      </div>
      <div className="">
        <div className="flex justify-between items-center mb-8">
          <h4 className="text-gray-800 text-3xl font-medium">Orders</h4>
        </div>
        <>
          <OrderTableManagement />
        </>
      </div>
    </div>
  );
}

const Insights = () => {
  return (
    <div className="grid grid-flow-row grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-12 lg:col-span-6 h-full">
        <Consultants />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3 h-full">
        <PastPeriod />
      </div>
      <>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-3xl border bg-gradient-to-b from-[#15B79F] to-[#0E9382] border-gray-200 shadow-sm p-6 h-full relative overflow-hidden">
          <Image
            src={IMAGES.overlay}
            width={500}
            height={500}
            alt=""
            className="absolute top-0 left-0"
          />
          <div className="flex items-center text-white mb-8">
            <span className="text-xs mr-3">
              <IoChatbubbleSharp />
            </span>
            <h4 className="text-xs font-semibold">FORECASTS</h4>
          </div>
          {[
            {
              title: "+ 15%",
              text: "forecasted increase in your sales closed by the end of the current month",
            },
            {
              title: "+ 20%",
              text: "forecasted increase in consultations by the end of the current month",
            },
          ].map((item, index) => (
            <div key={index} className="text-white mb-8">
              <div className="flex items-start">
                <h4 className="text-5xl font-medium mr-6">{item.title}</h4>
                <Image src={ICONS.trendUpLight} width={30} height={30} alt="" />
              </div>
              <p className="text-sm my-4 w-4/5">{item.text}</p>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

const OrderTableManagement = () => {
  const table = useReactTable({
    // data,
    data: getOrdersData(),
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <AppTable table={table} />;
};
