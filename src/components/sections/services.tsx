import {
  ShoppingBag,
  ReceiptText,
  Smartphone,
  Plane,
  Truck,
  Headset,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  { icon: ShoppingBag, title: "Online Grocery Shopping" },
  { icon: ReceiptText, title: "Utility Bill Payments" },
  { icon: Smartphone, title: "Mobile & DTH Recharge" },
  { icon: Plane, title: "Travel & Ticket Booking" },
  { icon: Truck, title: "Doorstep Delivery" },
  { icon: Headset, title: "24×7 Customer Support" },
];

export function Services() {
  return (
    <section id="services" className="bg-[#FAFAF8] py-20 lg:py-28 border-b border-[rgba(17,20,18,0.12)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12 lg:mb-16">
          <div className="lg:col-span-5">
            <div className="text-eyebrow text-[#5A625C]">
              Our Services
            </div>
            <h2 className="mt-3 text-display text-[32px] lg:text-[44px] text-[#111412]">
              Everything you need,
              <br />
              all in one place.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[15px] lg:text-[16px] font-light text-[#5A625C] leading-relaxed">
              WalkMart offers a complete range of shopping and everyday services, including online ordering, doorstep delivery, utility bill payments, mobile recharge, travel booking, and dedicated customer support.
            </p>
          </div>
        </div>

        {/* Plain stacked list — hairline borders only, no boxes */}
        <div className="border-t border-[rgba(17,20,18,0.12)]">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={s.title}
                href="#contact"
                className="group block border-b border-[rgba(17,20,18,0.12)] cursor-pointer"
              >
                <div className="grid grid-cols-12 items-center gap-4 py-7 lg:py-8 px-1 lg:px-2 group-hover:bg-[rgba(17,20,18,0.025)]">
                  <div className="col-span-2 sm:col-span-1 flex justify-start">
                    <Icon
                      size={22}
                      strokeWidth={1.25}
                      className="text-[#0F4D2E]"
                    />
                  </div>
                  <div className="col-span-8 sm:col-span-9">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[11px] tabular-nums font-light text-[#5A625C] hidden sm:inline">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[18px] lg:text-[20px] font-normal text-[#111412] tracking-[-0.005em]">
                        {s.title}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-2 flex justify-end">
                    <ArrowRight
                      size={18}
                      strokeWidth={1.25}
                      className="text-[#111412] group-hover:text-[#0F4D2E]"
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Explore All Services CTA */}
        <div className="mt-12 lg:mt-14 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-[#0F4D2E] cursor-pointer"
          >
            <span className="text-[13px] tracking-[0.08em] uppercase font-medium underline-link">
              Explore All Services
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
