import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    name: "Groceries & Daily Essentials",
    src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
    alt: "Pantry staples and grocery items",
  },
  {
    name: "Fruits & Vegetables",
    src: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1200&q=80",
    alt: "Fresh fruits and vegetables",
  },
  {
    name: "Dairy & Bakery",
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    alt: "Fresh bread and dairy products",
  },
  {
    name: "Beverages & Snacks",
    src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80",
    alt: "Bottled beverages and snack items",
  },
  {
    name: "Household & Cleaning",
    src: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80",
    alt: "Household cleaning products",
  },
  {
    name: "Personal Care & Hygiene",
    src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    alt: "Personal care and hygiene products",
  },
  {
    name: "Baby Care Products",
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
    alt: "Baby care products",
  },
  {
    name: "Stationery & General Items",
    src: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=1200&q=80",
    alt: "Stationery and general items",
  },
];

export function Categories() {
  return (
    <section
      id="categories"
      className="bg-[#FAFAF8] py-20 lg:py-28 border-b border-[rgba(17,20,18,0.12)]"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-10 lg:mb-14">
          <div className="lg:col-span-5">
            <div className="text-eyebrow text-[#5A625C]">Shop by Category</div>
            <h2 className="mt-3 text-display text-[32px] lg:text-[44px] text-[#111412]">
              Everything you need, all in one place.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-[15px] lg:text-[16px] font-light text-[#5A625C] leading-relaxed">
              Browse our carefully curated categories featuring groceries, household essentials, personal care products, and more—all selected to make everyday shopping simple and convenient.
            </p>
          </div>
        </div>
      </div>

      {/* full-bleed grid, 1px gap, no rounding, no shadow */}
      <div className="px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(17,20,18,0.12)]"
            style={{ border: "1px solid rgba(17,20,18,0.12)" }}
          >
            {CATEGORIES.map((cat, idx) => (
              <a
                key={cat.name}
                href="#contact"
                className="group relative block aspect-[4/5] lg:aspect-[5/6] overflow-hidden bg-[#FAFAF8] cursor-pointer"
              >
                <Image
                  src={cat.src}
                  alt={cat.alt}
                  fill
                  priority={idx < 4}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover photo-grade"
                />
                {/* dark gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0) 75%)",
                  }}
                  aria-hidden
                />
                {/* label bottom-left */}
                <div className="absolute left-5 bottom-5 lg:left-6 lg:bottom-6 text-white">
                  <div className="text-[16px] lg:text-[18px] font-light tracking-[-0.005em] inline-block group-hover:underline underline-offset-4 decoration-1">
                    {cat.name}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* View All Products CTA */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 mt-12 lg:mt-14 flex justify-center">
        <a
          href="#products"
          className="group inline-flex items-center gap-3 text-[#0F4D2E] cursor-pointer"
        >
          <span className="text-[13px] tracking-[0.08em] uppercase font-medium underline-link">
            View All Products
          </span>
          <ArrowRight
            size={16}
            strokeWidth={1.25}
            className="group-hover:text-[#0F4D2E]"
          />
        </a>
      </div>
    </section>
  );
}
