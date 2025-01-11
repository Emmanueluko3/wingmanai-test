"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CgSpinner } from "react-icons/cg";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      router.push("/dashboard/summary");
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-primaryDark">
      {loading ? (
        <CgSpinner className="w-28 h-28 text-primary animate-spin" />
      ) : (
        <p>Loading complete...</p>
      )}
    </div>
  );
}
