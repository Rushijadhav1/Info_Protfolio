import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const ref = useReveal();

  const handleSend = () => {
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section id="contact" className="bg-white text-black overflow-hidden">

      {/* Giant CONTACT text */}
      <div
        className="font-black leading-none text-black select-none pointer-events-none px-4 pt-6"
        style={{ fontSize: "clamp(70px, 18vw, 210px)", letterSpacing: "-4px", lineHeight: 0.88 }}
      >
        CONTACT
      </div>

      <div className="h-6 bg-white" />

      {/* Red form card */}
      <div ref={ref} className="reveal bg-[#E8180C] mx-3 md:mx-6 rounded-t-2xl px-6 md:px-14 pt-10 pb-14">
        <p className="text-[11px] font-bold tracking-[4px] uppercase text-white/60 mb-8">Reach Us</p>

        {/* Form grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/25 rounded-2xl overflow-hidden mb-5">
          <input type="text" placeholder="First Name"
            className="bg-transparent border-b border-white/25 md:border-r px-5 py-5 md:py-7 text-white placeholder-white/55 text-sm outline-none focus:bg-white/5 transition-colors" />
          <textarea placeholder="Type your message here..." rows={4}
            className="bg-transparent border-b border-white/25 px-5 py-5 text-white placeholder-white/55 text-sm outline-none resize-none focus:bg-white/5 transition-colors md:row-span-2"
            style={{ minHeight: "140px" }} />
          <input type="text" placeholder="Last Name"
            className="bg-transparent border-white/25 md:border-r px-5 py-5 md:py-7 text-white placeholder-white/55 text-sm outline-none focus:bg-white/5 transition-colors border-b md:border-b-0" />
        </div>

        <div className="border border-white/25 rounded-2xl overflow-hidden mb-8">
          <input type="email" placeholder="Email"
            className="w-full bg-transparent px-5 py-5 text-white placeholder-white/55 text-sm outline-none focus:bg-white/5 transition-colors" />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded accent-black cursor-pointer flex-shrink-0" />
            <span className="text-sm text-white/75 leading-relaxed">
              I give permission to contact me at this email address.
            </span>
          </label>
          <button onClick={handleSend}
            className="bg-black text-white font-bold text-sm px-8 md:px-10 py-3.5 md:py-4 rounded-full flex items-center gap-3 hover:scale-105 active:scale-95 transition-transform ml-auto flex-shrink-0">
            {sent ? "Sent! ✓" : (
              <>Send <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
