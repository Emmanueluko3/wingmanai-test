"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CgSpinner } from "react-icons/cg";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard/summary");
    }, 200);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-primaryDark">
      <p className="text-primaryDark">Loading...</p>
    </div>
  );
}
