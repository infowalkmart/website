import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Offers() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[520px] lg:h-[640px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=2400&q=80"
          alt="A canvas tote bag filled with fresh groceries"
          fill
          sizes="100vw"
          className="object-cover photo-grade"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.45) 100%)",
          }}
          aria-hidden
        />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-[1440px] w-full px-6 lg:px-10">
            <div className="max-w-2xl">
              <div className="text-eyebrow text-white/65">
                Everyday Offers
              </div>
              <h2 className="mt-4 text-white text-display text-[36px] sm:text-[48px] lg:text-[64px]">
                Enjoy great deals,
                <br />
                every day!
              </h2>
              <p className="mt-5 text-white/75 text-[15px] lg:text-[16px] font-light max-w-md leading-relaxed">
                Save more with exclusive discounts, seasonal offers, and
                unbeatable prices on your favorite products.
              </p>

              <a
                href="#contact"
                className="group mt-9 inline-flex items-center gap-3 text-white cursor-pointer"
              >
                <span className="text-[13px] tracking-[0.08em] uppercase font-medium underline-link group-hover:text-[#7BCFA3]">
                  View Offers
                </span>
                <ArrowRight
                  size={16}
                  strokeWidth={1.25}
                  className="group-hover:text-[#7BCFA3]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
