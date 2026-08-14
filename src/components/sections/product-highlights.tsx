import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    name: "Fresh Fruits & Vegetables",
    src: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1200&q=80",
    alt: "Fresh fruits and vegetables",
    tag: "Produce",
  },
  {
    name: "Dairy & Bakery Products",
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    alt: "Fresh bread and dairy products",
    tag: "Dairy & Bakery",
  },
  {
    name: "Snacks & Beverages",
    src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80",
    alt: "Snack items and bottled beverages",
    tag: "Snacks & Beverages",
  },
  {
    name: "Household Essentials",
    src: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80",
    alt: "Household essential products",
    tag: "Household",
  },
  {
    name: "Personal Care Products",
    src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    alt: "Personal care products",
    tag: "Personal Care",
  },
  {
    name: "Baby Care Products",
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
    alt: "Baby care products",
    tag: "Baby Care",
  },
];

export function ProductHighlights() {
  return (
    <section id="products" className="bg-[#FAFAF8] py-20 lg:py-28 border-b border-[rgba(17,20,18,0.12)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-10 lg:mb-14">
          <div className="lg:col-span-5">
            <div className="text-eyebrow text-[#5A625C]">
              Featured Products
            </div>
            <h2 className="mt-3 text-display text-[32px] lg:text-[44px] text-[#111412]">
              Our most-loved picks.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-[15px] lg:text-[16px] font-light text-[#5A625C] leading-relaxed">
              Discover our most popular and best-selling products across
              multiple categories — chosen by customers, restocked weekly.
            </p>
          </div>
        </div>

        {/* 6-tile grid, 1px gap, no rounding */}
        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(17,20,18,0.12)] border border-[rgba(17,20,18,0.12)]"
        >
          {PRODUCTS.map((p) => (
            <a
              key={p.name}
              href="#contact"
              className="group relative block aspect-[4/5] overflow-hidden bg-[#FAFAF8] cursor-pointer"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover photo-grade"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0) 100%)",
                }}
                aria-hidden
              />
              <div className="absolute left-5 bottom-5 lg:left-6 lg:bottom-6 text-white">
                <div className="text-[11px] tracking-[0.16em] uppercase font-medium text-white/65">
                  {p.tag}
                </div>
                <div className="mt-1 text-[16px] lg:text-[18px] font-light tracking-[-0.005em] inline-block group-hover:underline underline-offset-4 decoration-1">
                  {p.name}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Browse Products CTA */}
        <div className="mt-12 lg:mt-14 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-[#0F4D2E] cursor-pointer"
          >
            <span className="text-[13px] tracking-[0.08em] uppercase font-medium underline-link">
              Get Products List
            </span>
            <ArrowRight
              size={16}
              strokeWidth={1.25}
              className="group-hover:text-[#0F4D2E]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
  