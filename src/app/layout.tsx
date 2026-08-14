import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://walkmart.com"),
  title: {
    default: "WalkMart — Your Daily Needs, Delivered with Care",
    template: "%s | WalkMart",
  },
  description:
    "WalkMart is your trusted destination for quality groceries, household essentials, and everyday digital services — fresh products, fast delivery, best prices, all in one place.",
  keywords: [
    "WalkMart",
    "online grocery Kerala",
    "daily essentials delivery",
    "fruits and vegetables online",
    "utility bill payment",
    "mobile recharge",
    "DTH recharge",
    "travel ticket booking",
    "doorstep delivery Malappuram",
  ],
  authors: [{ name: "WalkMart (OPC) Private Limited" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://walkmart.com" },
  openGraph: {
    title: "WalkMart — Your Daily Needs, Delivered with Care",
    description:
      "From fresh groceries and household essentials to everyday digital services, WalkMart makes shopping simple, affordable, and convenient — all in one place.",
    url: "https://walkmart.com",
    siteName: "WalkMart",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "WalkMart — Your Daily Needs, Delivered with Care",
    description:
      "Fresh groceries, household essentials, and everyday digital services — all in one place.",
  },
  // icons: {
  //   icon: "",
  // },
};














export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased bg-[#FAFAF8] text-[#111412] font-light`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
