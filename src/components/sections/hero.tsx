import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen min-h-[640px] w-full overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2400&q=80"
        alt="Fresh produce and grocery bags arranged on a kitchen counter"
        fill
        priority
        sizes="100vw"
        className="object-cover photo-grade"
      />
      {/* bottom-to-top dark gradient overlay, 0% → 55% opacity */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0) 75%)",
        }}
        aria-hidden
      />

      {/* Lower-left headline block */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pb-16 lg:pb-24">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="text-eyebrow text-white/75 mb-5">
              Fresh Groceries · Doorstep Delivery · Everyday Savings{" "}
            </div>

            <h1 className="text-white text-display text-[44px] sm:text-[58px] lg:text-[78px]">
              Your daily needs,
              <br />
              delivered with care.
            </h1>
            <p className="mt-6 text-white/75 text-[15px] lg:text-[17px] font-light max-w-xl leading-relaxed">
              WalkMart is your trusted retail destination for fresh groceries,
              household essentials, and everyday services. Enjoy quality
              products, affordable prices, and fast doorstep delivery—all
              designed to make your daily shopping simple, reliable, and
              convenient.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
              <a
                href="#categories"
                className="group inline-flex items-center gap-3 text-white cursor-pointer"
              >
                <span className="text-[13px] tracking-[0.08em] uppercase font-medium underline-link group-hover:text-[#7BCFA3]">
                  Shop Now
                </span>
                <ArrowRight
                  size={16}
                  strokeWidth={1.25}
                  className="group-hover:text-[#7BCFA3]"
                />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 text-white/75 hover:text-white cursor-pointer"
              >
                <span className="text-[13px] tracking-[0.08em] uppercase font-medium underline-link">
                  Explore Services
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
