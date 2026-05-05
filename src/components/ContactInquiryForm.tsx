"use client";

import { FormEvent, useMemo, useState } from "react";

export default function ContactInquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requirements, setRequirements] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = "Private Inquiry from ARK Vision website";
    const body = [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Phone: ${phone || "-"}`,
      "",
      "Requirements:",
      requirements || "-",
    ].join("\n");
    return `mailto:info@arkvision.ae?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [name, email, phone, requirements]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-xs text-white/60">Full Name</label>
          <input
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-white/80 transition-colors duration-300 placeholder:text-white/40 focus:border-[#c9a84c] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs text-white/60">Email Address</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-white/80 transition-colors duration-300 placeholder:text-white/40 focus:border-[#c9a84c] focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs text-white/60">Phone Number</label>
        <input
          type="tel"
          placeholder="+971 50 000 0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-white/80 placeholder:text-white/40 focus:border-[#c9a84c] focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-xs text-white/60">Your Requirements</label>
        <textarea
          placeholder="Describe your ideal property..."
          rows={4}
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          required
          className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-white/80 transition-colors duration-300 placeholder:text-white/40 focus:border-[#c9a84c] focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="btn-magnetic w-full bg-[#c9a84c] py-3 font-medium text-[#060606] transition-all duration-400 hover:bg-[#fcf6ba] hover:shadow-[0_0_30px_-5px_rgba(201,168,76,0.5)] active:scale-[0.98]"
      >
        Submit Private Inquiry
      </button>
      <a
        href={mailtoHref}
        className="inline-flex text-xs text-white/55 transition-colors hover:text-[#c9a84c]"
      >
        Prefer email? Send via mail client
      </a>
    </form>
  );
}
