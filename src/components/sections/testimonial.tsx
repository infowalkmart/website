"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const reviews = [
  {
    quote:
      "WalkMart has completely changed the way I shop. Fresh products, quick delivery, and excellent customer support.",
    name: "Anjali K.",
    role: "WalkMart Customer",
  },
  {
    quote:
      "The quality of the groceries is consistently excellent. I love how easy it is to order everything from home.",
    name: "Rahul P.",
    role: "Regular Customer",
  },
  {
    quote:
      "Fast delivery, friendly staff, and affordable prices. WalkMart has become my go-to store for daily essentials.",
    name: "Fathima M.",
    role: "Satisfied Customer",
  },
  {
    quote:
      "From groceries to utility payments, everything is available in one place. Highly recommended!",
    name: "Niyas A.",
    role: "Loyal Customer",
  },
];

export function Testimonial() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % reviews.length);
        setVisible(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const review = reviews[index];

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-[#FAFAF8]"
    >
      <div className="relative h-[520px] lg:h-[640px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=2400&q=80"
          alt="Kitchen"
          fill
          sizes="100vw"
          className="object-cover photo-grade-dark"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,.7), rgba(0,0,0,.5), rgba(0,0,0,.55))",
          }}
        />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-[1440px] w-full px-6 lg:px-10">
            <AnimatePresence mode="wait">
  <motion.div
    key={index}
    initial={{ x: -120, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 120, opacity: 0 }}
    transition={{
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="max-w-4xl"
  >
    <div className="text-eyebrow text-white/65 mb-5">
      What Our Customers Say
    </div>

    <blockquote className="text-white text-[28px] sm:text-[36px] lg:text-[48px] font-light leading-[1.18] tracking-[-0.015em]">
      {review.quote}
    </blockquote>

    <div className="mt-10 flex items-center gap-4">
      <div
        className="relative h-11 w-11 overflow-hidden"
        style={{ clipPath: "circle(50%)" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
          alt={review.name}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <div className="text-white text-[14px] font-medium">
          {review.name}
        </div>
        <div className="text-white/60 text-[12px]">
          {review.role}
        </div>
      </div>
    </div>
  </motion.div>
</AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}