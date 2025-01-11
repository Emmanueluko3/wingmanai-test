"use client";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-white w-full">
      <div className="flex items-center justify-center h-screen relative">
        <SideNav />
      </div>
      <main className="w-full">
        <TopNav />
        <>{children}</>
      </main>
    </div>
  );
}
