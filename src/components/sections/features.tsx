import { ShoppingBag, Tag, Truck, Headset } from "lucide-react";

const FEATURES = [
  {
    icon: ShoppingBag,
    title: "Wide Range of Products",
    sub: "Thousands of quality products for your everyday needs.",
  },
  {
    icon: Tag,
    title: "Best Prices",
    sub: "Affordable pricing with exciting offers and seasonal discounts.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    sub: "Reliable doorstep delivery with quick turnaround.",
  },
  {
    icon: Headset,
    title: "24×7 Customer Support",
    sub: "Dedicated customer support whenever you need assistance.",
  },
];

export function Features() {
  return (
    <section className="bg-[#FAFAF8] border-b border-[rgba(17,20,18,0.12)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-[rgba(17,20,18,0.12)]">
          {FEATURES.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-start gap-4 py-8 lg:py-10 ${
                  i > 0 ? "lg:pl-8 lg:pr-4" : "lg:pr-8 lg:pl-0"
                } md:px-6 lg:px-0`}
              >
                <Icon
                  size={22}
                  strokeWidth={1.25}
                  className="text-[#0F4D2E] mt-1 shrink-0"
                />
                <div>
                  <div className="text-[14px] font-medium tracking-[-0.005em] text-[#111412]">
                    {item.title}
                  </div>
                  <div className="mt-1.5 text-[13px] font-light text-[#5A625C] leading-relaxed">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
