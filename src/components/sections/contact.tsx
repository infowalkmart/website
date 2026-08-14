"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Check } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  subject: "",
};

const CONTACT_ROWS = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98952 53131",
    href: "tel:+919895253131",
    sub: "Click to call · Mon–Sat · 9am–9pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@walkmart.shop",
    href: "mailto:info@walkmart.shop",
    sub: "Click to email · Reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "WalkMart (OPC) Private Limited, Kondotty, Malappuram, Kerala",
    href: "https://maps.app.goo.gl/tMxSW9iyCgfxozg86?g_st=aw",
    sub: "View on map below",
  },
];

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (f: FormState): FormErrors => {
    const e: FormErrors = {};
    if (!f.name.trim()) e.name = "Please enter your name.";
    else if (f.name.trim().length < 2) e.name = "Name is too short.";

    if (!f.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
      e.email = "Please enter a valid email address.";

    if (!f.phone.trim()) e.phone = "Please enter your phone number.";
    else if (!/^[+]?[\d\s\-()]{7,18}$/.test(f.phone))
      e.phone = "Please enter a valid phone number.";

    if (!f.message.trim()) e.message = "Please enter your message.";
    else if (f.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";

    return e;
  };

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    
    if (Object.keys(v).length === 0) {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to send message');
        }

        setSubmitted(true);
      } catch (error) {
        setSubmitError(error instanceof Error ? error.message : 'Something went wrong');
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const reset = () => {
    setForm(INITIAL);
    setErrors({});
    setSubmitted(false);
    setSubmitError(null);
  };

  return (
    <section id="contact" className="bg-[#FAFAF8] py-20 lg:py-28 border-t border-[rgba(17,20,18,0.12)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12 lg:mb-16">
          <div className="lg:col-span-5">
            <div className="text-eyebrow text-[#5A625C]">
              Contact Us
            </div>
            <h2 className="mt-3 text-display text-[32px] lg:text-[46px] text-[#111412]">
              We're here to help.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[15px] lg:text-[16px] font-light text-[#5A625C] leading-relaxed">
              Have a question or need assistance? Our team is ready to help
              you. Reach us by phone, email, or the form below — a real
              person will respond within one working day.
            </p>
          </div>
        </div>

        {/* Contact info rows + form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column — contact info rows */}
          <div className="lg:col-span-5">
            <div className="text-eyebrow text-[#0F4D2E] mb-6">
              Contact Information
            </div>
            <div className="border-t border-[rgba(17,20,18,0.12)]">
              {CONTACT_ROWS.map((row) => {
                const Icon = row.icon;
                const isExternal = row.href?.startsWith("http");
                const content = (
                  <div className="grid grid-cols-12 gap-4 py-6 lg:py-7 border-b border-[rgba(17,20,18,0.12)] group-hover:bg-[rgba(17,20,18,0.025)]">
                    <div className="col-span-1">
                      <Icon
                        size={20}
                        strokeWidth={1.25}
                        className="text-[#0F4D2E]"
                      />
                    </div>
                    <div className="col-span-11">
                      <div className="text-[11px] tracking-[0.16em] uppercase font-medium text-[#5A625C]">
                        {row.label}
                      </div>
                      <div className="mt-1.5 text-[16px] lg:text-[18px] font-light text-[#111412] tracking-[-0.005em] break-words">
                        {row.value}
                      </div>
                      <div className="mt-1 text-[12px] font-light text-[#5A625C]">
                        {row.sub}
                      </div>
                    </div>
                  </div>
                );

                if (row.href) {
                  return (
                    <a
                      key={row.label}
                      href={row.href}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group block cursor-pointer"
                    >
                      {content}
                    </a>
                  );
                }
                return <div key={row.label}>{content}</div>;
              })}
            </div>
          </div>

          {/* Right column — inquiry form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-[rgba(17,20,18,0.12)] px-6 lg:px-10 py-16 lg:py-20 text-center">
                <div className="inline-flex items-center justify-center h-14 w-14 border border-[#0F4D2E] text-[#0F4D2E] mb-6">
                  <Check size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-display text-[28px] lg:text-[34px] text-[#111412]">
                  Thank you — message received.
                </h3>
                <p className="mt-4 text-[15px] font-light text-[#5A625C] leading-relaxed max-w-md mx-auto">
                  We have logged your enquiry and our team will be in touch
                  within one working day at the email address you provided.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-8 group inline-flex items-center gap-2 text-[13px] tracking-[0.08em] uppercase font-medium text-[#0F4D2E] cursor-pointer"
                >
                  <span className="underline-link">Send another message</span>
                  <ArrowRight size={14} strokeWidth={1.5} />
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <div className="text-eyebrow text-[#0F4D2E] mb-6">
                  Send us a message
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Full name" required error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="e.g. Anjali K."
                      className="w-full bg-transparent border-0 border-b border-[rgba(17,20,18,0.2)] focus:border-[#0F4D2E] outline-none px-0 py-3 text-[15px] font-light text-[#111412] placeholder:text-[#9aa09c]"
                    />
                  </Field>

                  <Field label="Phone" required error={errors.phone}>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-transparent border-0 border-b border-[rgba(17,20,18,0.2)] focus:border-[#0F4D2E] outline-none px-0 py-3 text-[15px] font-light text-[#111412] placeholder:text-[#9aa09c]"
                    />
                  </Field>

                  <Field label="Email" required error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-transparent border-0 border-b border-[rgba(17,20,18,0.2)] focus:border-[#0F4D2E] outline-none px-0 py-3 text-[15px] font-light text-[#111412] placeholder:text-[#9aa09c]"
                    />
                  </Field>

                  <Field label="Subject">
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      placeholder="General enquiry"
                      className="w-full bg-transparent border-0 border-b border-[rgba(17,20,18,0.2)] focus:border-[#0F4D2E] outline-none px-0 py-3 text-[15px] font-light text-[#111412] placeholder:text-[#9aa09c]"
                    />
                  </Field>
                </div>

                <Field label="Your message" required error={errors.message}>
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-transparent border-0 border-b border-[rgba(17,20,18,0.2)] focus:border-[#0F4D2E] outline-none px-0 py-3 text-[15px] font-light text-[#111412] placeholder:text-[#9aa09c] resize-none"
                  />
                </Field>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-[12px] font-light text-[#5A625C] max-w-sm">
                    By submitting you agree to be contacted by WalkMart about
                    your enquiry. We do not share your information.
                  </p>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="min-w-[160px] bg-[#0F4D2E] text-white px-8 py-3.5 text-[13px] tracking-[0.08em] uppercase font-medium hover:bg-[#1a5f3a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                {submitError && (
                  <div className="text-[12px] font-light text-[#B23A48] text-center">
                    {submitError}
                  </div>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Google Maps integration — Kondotty, Malappuram, Kerala */}
        <div className="mt-16 lg:mt-20">
          <div className="text-eyebrow text-[#5A625C] mb-4">
            Find us — Kondotty, Malappuram, Kerala
          </div>

          <div className="border border-[rgba(17,20,18,0.12)] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4928.865330142922!2d75.96544829999999!3d11.1469519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64f1e411e3f85%3A0x1450367bf7d58889!2sGOV%20HOMEO%20DISPENSARY!5e1!3m2!1sen!2sin!4v1785820590449!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.16em] uppercase font-medium text-[#5A625C] mb-2">
        {label}
        {required && <span className="text-[#0F4D2E] ml-1">*</span>}
      </label>
      {children}
      {error && (
        <div className="mt-2 text-[12px] font-light text-[#B23A48]">
          {error}
        </div>
      )}
    </div>
  );
}