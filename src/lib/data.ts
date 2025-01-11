import { IMAGES } from "@/utils/constants";

export function getConsultantData() {
  return [
    {
      day: "Mon",
      answered: 8,
      incoming: 25,
      expertsOnline: 30,
    },
    {
      day: "Tue",
      answered: 22,
      incoming: 48,
      expertsOnline: 32,
    },
    {
      day: "Wed",
      answered: 26,
      incoming: 30,
      expertsOnline: 3.7,
    },
    {
      day: "Thu",
      answered: 25,
      incoming: 55,
      expertsOnline: 3.8,
    },
    {
      day: "Fri",
      answered: 25,
      incoming: 24,
      expertsOnline: 20,
    },
    {
      day: "Sat",
      answered: 24,
      incoming: 32,
      expertsOnline: 15,
    },
    {
      day: "Sun",
      answered: 25,
      incoming: 38,
      expertsOnline: 8,
    },
  ];
}

export function getPastperiodData() {
  return [
    {
      period: "This week",
      consultations: 28,
      orderClosed: 25,
    },
    {
      period: "Last week",
      consultations: 22,
      orderClosed: 18,
    },
  ];
}

export function getOrdersData() {
  return [
    {
      order_id: "1",
      image_url: IMAGES.logo,
      name: "Airpod Pro",
      date: new Date(),
      time_spent: "2h 30m",
      order_value: "$215,11",
      commission: "$47",
    },
    {
      order_id: "1",
      image_url: IMAGES.logo,
      name: "Airpod Pro",
      date: new Date(),
      time_spent: "2h 30m",
      order_value: "$215,11",
      commission: "$47",
    },
    {
      order_id: "1",
      image_url: IMAGES.logo,
      name: "Airpod Pro",
      date: new Date(),
      time_spent: "2h 30m",
      order_value: "$215,11",
      commission: "$47",
    },
    {
      order_id: "1",
      image_url: IMAGES.logo,
      name: "Airpod Pro",
      date: new Date(),
      time_spent: "2h 30m",
      order_value: "$215,11",
      commission: "$47",
    },
    {
      order_id: "1",
      image_url: IMAGES.logo,
      name: "Airpod Pro",
      date: new Date(),
      time_spent: "2h 30m",
      order_value: "$215,11",
      commission: "$47",
    },
  ];
}
