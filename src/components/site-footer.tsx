import Image from "next/image";
import { Instagram, Twitter, Facebook } from "lucide-react";
const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Quick Links",
    links: ["Home", "About Us", "Services", "Products", "Contact Us"],
  },

  {
    title: "Our Services",
    links: [
      "Online Shopping",
      "Doorstep Delivery",
      "Bill Payments",
      "Recharge Services",
      "Travel Booking",
    ],
  },
  {
    title: "Contact",
    links: [
      "WalkMart (OPC) Private Limited",
      "No. 11/1622,Kondotty Town,Kondotty P.O.,Malappuram – 673638, Kerala, India",
      "info@walkmart.shop",
      "+91 98952 53131",
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#111412] text-[#FAFAF8] mt-auto">
      {/* single hairline top border */}
      <div className="h-px w-full bg-[rgba(255,255,255,0.2)]" aria-hidden />

      <div className="mx-auto max-w-[1440px] px-6 lg:px-24 py-16 lg:py-24 ">
        {/* Top — brand + columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-5">
            <a href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="WalkMart"
                width={180}
                height={50}
                priority
                className="h-14 w-auto"
              />
            </a>
            <p className="mt-5 text-[14px] leading-relaxed text-[#FAFAF8]/70 font-light max-w-xs">
              WalkMart is your trusted destination for groceries, household
              essentials, and everyday services. Our mission is to make shopping
              simple, affordable, and convenient for every customer.
            </p>
            {/* <div className="mt-7 flex items-center gap-5">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="cursor-pointer inline-flex text-[#FAFAF8]/70 hover:text-[#FAFAF8]"
                >
                  <Icon size={18} strokeWidth={1.25} />
                </a>
              ))}
            </div> */}
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {" "}
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="text-eyebrow text-[#FAFAF8]/50">
                  {col.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => {
                    const isEmail = link.includes("@");
                    const isPhone = /^\+91/.test(link);
                    const isAddress = link.startsWith("No. 11/1622");

                    const href = isEmail
                      ? `mailto:${link}`
                      : isPhone
                        ? `tel:${link.replace(/\s/g, "")}`
                        : isAddress
                          ? "https://maps.app.goo.gl/tMxSW9iyCgfxozg86?g_st=aw"
                          : "#";
                    return (
                      <li key={link}>
                        {col.title === "Our Services" ||
                        link === "WalkMart (OPC) Private Limited" ? (
                          <span className="text-[13px] font-light text-[#FAFAF8]/85">
                            {link}
                          </span>
                        ) : (
                          <a
                            href={href}
                            target={isAddress ? "_blank" : undefined}
                            rel={isAddress ? "noopener noreferrer" : undefined}
                            className="group relative inline-block text-[13px] font-light text-[#FAFAF8]/85 hover:text-[#FAFAF8]"
                          >
                            {link}
                            <span
                              className="absolute left-0 -bottom-0.5 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"
                              aria-hidden
                            />
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pb-10">
        <div className="h-px w-full bg-[rgba(255,255,255,0.2)]" aria-hidden />
        <div className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-[12px] text-[#FAFAF8]/55 font-light">
            © {new Date().getFullYear()} WalkMart (OPC) Private Limited. All
            rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms & Conditions", "Refund Policy"].map(
              (l) => (
                <a
                  key={l}
                  href="#"
                  className="text-[12px] text-[#FAFAF8]/55 hover:text-[#FAFAF8] font-light cursor-pointer"
                >
                  {l}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
