import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { About } from "@/components/sections/about";
import { Categories } from "@/components/sections/categories";
import { Services } from "@/components/sections/services";
import { ProductHighlights } from "@/components/sections/product-highlights";
import { WhyWalkMart } from "@/components/sections/why-walkmart";
import { Offers } from "@/components/sections/offers";
import { Testimonial } from "@/components/sections/testimonial";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />
        {/* 2. Feature Highlights */}
        <Features />
        {/* 3. About WalkMart */}
        <About />
        {/* 4. Shop by Category */}
        <Categories />
        {/* 5. Our Services */}
        <Services />
        {/* 6. Product Highlights */}
        <ProductHighlights />
        {/* 7. Why Choose WalkMart */}
        <WhyWalkMart />
        {/* 8. Special Offers */}
        <Offers />
        {/* 9. Customer Testimonials */}
        <Testimonial />
        {/* 10. Latest Blog & News */}
        <Contact />
      </main>
      {/* 12. Footer */}
      <SiteFooter />
    </div>
  );
}
