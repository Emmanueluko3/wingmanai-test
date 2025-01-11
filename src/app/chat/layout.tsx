"use client";
import SideNav from "../components/SideNav";

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-lightColor">
      <div className="flex items-center justify-center h-screen relative">
        <SideNav />
      </div>
      <main className="w-full min-h-screen flex items-center justify-center">
        <>{children}</>
      </main>
    </div>
  );
}
