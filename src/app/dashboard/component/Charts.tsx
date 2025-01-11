import { getConsultantData, getPastperiodData } from "@/lib/data";
import { AgCharts } from "ag-charts-react";
import { ReactElement } from "react";
import { IoChatbubbleSharp } from "react-icons/io5";
import { PiChartBarFill } from "react-icons/pi";

type Props = {
  badge: ReactElement;
  title: string;
  options: any;
};

const CONSULTATIONS_ALL_DATA = () => {
  const INCOMING = {
    type: "bar",
    xKey: "day",
    yKey: "incoming",
    yName: "Incoming",
    grouped: true,
  };

  const ANSWERED = {
    type: "line",
    xKey: "day",
    yKey: "answered",
    yName: "Answered",
  };
  const EXPARTSONLINE = {
    type: "line",
    xKey: "day",
    yKey: "expertsOnline",
    yName: "Experts online",
  };
  const BAR_AND_LINE = [
    { ...INCOMING, type: "bar" },
    { ...ANSWERED, type: "line" },
    { ...EXPARTSONLINE, type: "line" },
  ];
  return { BAR_AND_LINE, data: getConsultantData() };
};

const PASTPERIOD_ALL_DATA = () => {
  const CONSULTATIONS = {
    type: "bar",
    xKey: "period",
    yKey: "consultations",
    yName: "Consultations",
    grouped: true,
  };

  const ORDER_CLOSED = {
    type: "bar",
    xKey: "period",
    yKey: "orderClosed",
    yName: "Order closed",
  };

  const BAR_AND_LINE = [
    { ...CONSULTATIONS, type: "bar" },
    { ...ORDER_CLOSED, type: "bar" },
  ];
  return { BAR_AND_LINE, data: getPastperiodData() };
};

export const Consultants = () => {
  const options: any = {
    data: CONSULTATIONS_ALL_DATA().data,

    series: CONSULTATIONS_ALL_DATA().BAR_AND_LINE,
    axes: [
      {
        type: "category",
        position: "bottom",
      },
      {
        type: "number",
        position: "left",
        keys: ["incoming", "answered", "expertsOnline"],
        title: {
          text: "CONSULTATIONS",
        },
      },
      {
        type: "number",
        position: "right",
        keys: ["expertsOnline"],
        title: {
          text: "EXPERTS ONLINE",
        },
      },
    ],
  };
  return (
    <ChartCard
      badge={<IoChatbubbleSharp />}
      title="CONSULTATIONS"
      options={options}
    />
  );
};

export const PastPeriod = () => {
  const options: any = {
    data: PASTPERIOD_ALL_DATA().data,

    series: PASTPERIOD_ALL_DATA().BAR_AND_LINE,
    axes: [
      {
        type: "category",
        position: "bottom",
      },
      {
        type: "number",
        position: "left",
        keys: ["consultations", "orderClosed"],
      },
    ],
  };
  return (
    <ChartCard
      badge={<PiChartBarFill />}
      title="VS PAST PERIOD"
      options={options}
    />
  );
};

export default function ChartCard({ badge, title, options }: Props) {
  return (
    <div className="rounded-3xl border border-gray-200 shadow-sm p-6 h-full">
      <div className="flex items-center text-primaryLight mb-8">
        <span className="text-xs mr-3">{badge}</span>
        <h4 className="text-xs font-semibold">{title}</h4>
      </div>
      <AgCharts options={options} />
    </div>
  );
}
