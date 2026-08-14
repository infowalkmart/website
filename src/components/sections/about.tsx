import Image from "next/image";
import { ArrowRight } from "lucide-react";

const VALUES = [
  "Customer First",
  "Quality Excellence",
  "Integrity & Trust",
  "Innovation",
  "Community Commitment",
];

export function About() {
  return (
    <section
      id="about"
      className="bg-[#FAFAF8] border-b border-[rgba(17,20,18,0.12)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: full-height image */}
        <div className="relative min-h-[420px] lg:min-h-[640px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1600&q=80"
            alt="A quiet kitchen counter with morning light and produce"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover photo-grade"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.15) 100%)",
            }}
            aria-hidden
          />
        </div>

        {/* Right: content panel */}
        <div className="px-6 sm:px-10 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
          <div className="text-eyebrow text-[#5A625C]">About WalkMart</div>
          <h2 className="mt-3 text-display text-[32px] lg:text-[46px] text-[#111412]">
            Serving Communities,
            <br />
            One Order at a Time
          </h2>
          <p className="mt-6 text-[15px] lg:text-[16px] font-light text-[#5A625C] leading-relaxed max-w-xl">
            WalkMart is a modern retail and wholesale shopping destination
            offering a wide range of quality products at affordable prices. From
            groceries and household essentials to everyday services, we provide
            customers with a convenient, reliable, and enjoyable shopping
            experience. Our doorstep delivery service is designed to make daily
            shopping easier while serving local communities with trust and care.
          </p>

          {/* Mission + Vision */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            <div>
              <div className="text-eyebrow text-[#0F4D2E]">Mission</div>
              <p className="mt-3 text-[14px] font-light text-[#5A625C] leading-relaxed">
                To provide customers with quality products, reliable services,
                and convenient doorstep delivery while serving local communities
                with trust, value, and excellence.
              </p>
            </div>
            <div>
              <div className="text-eyebrow text-[#0F4D2E]">Vision</div>
              <p className="mt-3 text-[14px] font-light text-[#5A625C] leading-relaxed">
                To become the most trusted retail and wholesale shopping
                destination, delivering quality products and exceptional service
                while improving everyday life through convenience and
                innovation.
              </p>
            </div>
          </div>

          {/* Core values — hairline list, no boxes */}
          <div className="mt-10">
            <div className="text-eyebrow text-[#5A625C] mb-4">Core Values</div>
            <div className="border-t border-[rgba(17,20,18,0.12)]">
              {VALUES.map((v, i) => (
                <div
                  key={v}
                  className="flex items-center justify-between py-4 border-b border-[rgba(17,20,18,0.12)]"
                >
                  <div className="text-[14px] font-normal text-[#111412] tracking-[-0.005em]">
                    {v}
                  </div>
                  <div className="text-[11px] tabular-nums font-light text-[#5A625C]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-[#0F4D2E] cursor-pointer"
            >
              <span className="text-[13px] tracking-[0.08em] uppercase font-medium underline-link">
                Learn More About Us
              </span>
              <ArrowRight
                size={16}
                strokeWidth={1.25}
                className="group-hover:text-[#0F4D2E]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
