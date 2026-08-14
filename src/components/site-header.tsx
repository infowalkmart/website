"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Categories", href: "#categories" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

 const surface =
  "bg-black/30 backdrop-blur-sm text-white";

  const hairline = scrolled
    ? "bg-[rgba(17,20,18,0.12)]"
    : "bg-[rgba(255,255,255,0.25)]";

  return (
    <header className={`fixed top-0 inset-x-0 z-50 ${surface}`}>
      <div className={`h-px w-full ${hairline}`} aria-hidden />
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
         <a href="#" className="cursor-pointer">
  <img
    src="/logo.svg"
    alt="WalkMart"
    className="h-12  w-auto"
  />
</a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="nav-label group relative cursor-pointer inline-block"
              >
                {l.label}
                <span
                  className="absolute left-0 -bottom-1 h-px w-0 bg-current group-hover:w-full"
                  aria-hidden
                />
              </a>
            ))}
          </nav>

          {/* Right — Shop Now text CTA, no icon badges */}
          <div className="flex items-center">
            <a
              href="#categories"
              className="group inline-flex items-center gap-1.5 nav-label cursor-pointer"
            >
              <span className="relative inline-block">
                Shop Now
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-current group-hover:w-full" aria-hidden />
              </span>
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
      <div className={`h-px w-full ${hairline}`} aria-hidden />
    </header>
  );
}
