import Image from "next/image";
import { Sparkles, ShieldCheck, Heart, Truck, Tag, Users } from "lucide-react";

const REASONS = [
  {
    icon: Sparkles,
    title: "Premium Quality Products",
    desc: "Carefully selected products from trusted brands.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Every product is checked to maintain high quality standards.",
  },
  {
    icon: Heart,
    title: "Customer-Focused Approach",
    desc: "Your satisfaction is our highest priority.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    desc: "Fast and secure doorstep delivery.",
  },
  {
    icon: Tag,
    title: "Affordable Pricing",
    desc: "Great value without compromising quality.",
  },
  {
    icon: Users,
    title: "Trusted by Local Communities",
    desc: "Serving customers with reliability, convenience, and care.",
  },
];

export function WhyWalkMart() {
  return (
    <section id="why" className="bg-[#111412] text-[#FAFAF8]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: full-height image */}
        <div className="relative min-h-[480px] lg:min-h-[820px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80"
            alt="A WalkMart delivery rider with a basket of fresh groceries"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover photo-grade-dark"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.35) 100%)",
            }}
            aria-hidden
          />
        </div>

        {/* Right: dark panel with hairline list */}
        <div className="px-6 sm:px-10 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
          <div className="text-eyebrow text-[#FAFAF8]/55">
            Why Choose WalkMart
          </div>
          <h2 className="mt-3 text-display text-[32px] lg:text-[44px]">
Why Thousands Choose            <br />
            WalkMart Every Day.
          </h2>
          <p className="mt-5 text-[15px] lg:text-[16px] font-light text-[#FAFAF8]/70 max-w-md leading-relaxed">
           WalkMart is committed to providing quality products, affordable prices, reliable doorstep delivery, and customer-focused service to make everyday shopping simple and convenient.
          </p>

          <div className="mt-12 border-t border-[rgba(255,255,255,0.2)]">
            {REASONS.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="grid grid-cols-12 gap-4 py-6 lg:py-7 border-b border-[rgba(255,255,255,0.2)]"
                >
                  <div className="col-span-1">
                    <Icon
                      size={20}
                      strokeWidth={1.25}
                      className="text-[#7BCFA3]"
                    />
                  </div>
                  <div className="col-span-11">
                    <div className="text-[16px] lg:text-[17px] font-normal tracking-[-0.005em]">
                      {r.title}
                    </div>
                    <p className="mt-1.5 text-[13.5px] font-light text-[#FAFAF8]/65 leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
