import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ARTICLES = [
  {
    title: "Smart Grocery Shopping Tips",
    date: "July 2026",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    alt: "Brown paper grocery bags with fresh produce",
  },
  {
    title: "Benefits of Ordering Online",
    date: "June 2026",
    src: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=600&q=80",
    alt: "A person ordering groceries on a laptop",
  },
  {
    title: "WalkMart Service Updates",
    date: "May 2026",
    src: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=600&q=80",
    alt: "A delivery rider on a city street",
  },
];

export function LatestNews() {
  return (
    <section id="news" className="bg-[#FAFAF8] py-20 lg:py-28 border-t border-[rgba(17,20,18,0.12)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-10 lg:mb-12">
          <div className="lg:col-span-6">
            <div className="text-eyebrow text-[#5A625C]">
              Latest Blog & News
            </div>
            <h2 className="mt-3 text-display text-[32px] lg:text-[44px] text-[#111412]">
              Stay updated with us.
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-[14px] lg:text-[15px] font-light text-[#5A625C] max-w-md leading-relaxed">
              Stay updated with shopping tips, company news, and useful
              articles.
            </p>
          </div>
        </div>

        <div className="border-t border-[rgba(17,20,18,0.12)]">
          {ARTICLES.map((n) => (
            <a
              key={n.title}
              href="#"
              className="group block border-b border-[rgba(17,20,18,0.12)] cursor-pointer"
            >
              <div className="grid grid-cols-12 items-center gap-5 py-6 lg:py-7 px-1 lg:px-2 group-hover:bg-[rgba(17,20,18,0.025)]">
                <div className="col-span-3 sm:col-span-2">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={n.src}
                      alt={n.alt}
                      fill
                      sizes="180px"
                      className="object-cover photo-grade"
                    />
                  </div>
                </div>
                <div className="col-span-9 sm:col-span-9 lg:col-span-9">
                  <div className="text-[11px] tracking-[0.16em] uppercase font-medium text-[#5A625C]">
                    {n.date}
                  </div>
                  <div className="mt-2 text-[17px] lg:text-[20px] font-normal text-[#111412] tracking-[-0.005em] group-hover:text-[#0F4D2E]">
                    {n.title}
                  </div>
                </div>
                <div className="hidden sm:flex col-span-1 justify-end">
                  <ArrowRight
                    size={18}
                    strokeWidth={1.25}
                    className="text-[#111412] group-hover:text-[#0F4D2E]"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Read More CTA */}
        <div className="mt-12 lg:mt-14 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 text-[#0F4D2E] cursor-pointer"
          >
            <span className="text-[13px] tracking-[0.08em] uppercase font-medium underline-link">
              Read More
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
