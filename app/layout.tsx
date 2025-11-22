import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/global/Sidebar";
import Navbar from "@/components/global/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BankDash",
  description: "BankDash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen w-full bg-gray-50 overflow-hidden`}
      >
        <div className="hidden sm:flex h-screen border-r">
          <Sidebar />
        </div>
        <div className="h-full">
          <Navbar />
          <main className="overflow-y-auto p-8 bg-[#F5F7FA]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
