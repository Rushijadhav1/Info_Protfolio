import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => ref.current?.classList.add("visible"), 1600);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-[#E8180C] relative overflow-hidden flex items-center px-6 md:px-16 pt-24 pb-12"
    >
      {/* Subtle bg grain texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      />

      {/* Big decorative text bg */}
      <span className="absolute bottom-[-10px] right-[-10px] text-[clamp(140px,24vw,320px)] font-black text-black/[0.07] leading-none select-none pointer-events-none whitespace-nowrap">
        DEV
      </span>

      {/* Decorative red circle blob */}
      <div className="absolute top-20 right-[30%] w-64 h-64 rounded-full bg-red-700/30 blur-3xl pointer-events-none hidden lg:block" />

      {/* ── Left content ── */}
      <div ref={ref} className="reveal relative z-10 flex-1 max-w-2xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-semibold text-white/80 tracking-wide">Available for freelance work</span>
        </div>

        {/* Headline */}
        <h1 className="font-black leading-[1.02] mb-6" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
          Hi, I'm a<br />
          <span className="text-black">Full Stack</span>
          <br />Developer
        </h1>

        {/* Sub */}
        <p className="text-white/75 leading-relaxed mb-10 max-w-md" style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}>
          I build fast, scalable and modern web applications using
          React, Node.js and Tailwind CSS — turning ideas into
          polished digital products.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-black text-white font-bold px-8 py-4 rounded-full no-underline hover:scale-105 hover:bg-zinc-800 transition-all shadow-lg shadow-black/30"
            style={{ fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)" }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-white/15 backdrop-blur-sm border border-white/30 hover:bg-white/25 text-white font-bold px-8 py-4 rounded-full no-underline hover:scale-105 transition-all"
            style={{ fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)" }}
          >
            Contact Me
          </a>
        </div>

        {/* Stats row */}
        <div className="flex gap-10 mt-14 flex-wrap">
          {[
            { num: "10+", label: "Projects" },
            { num: "1+",  label: "Years Exp." },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black text-white leading-none">{s.num}</p>
              <p className="text-[11px] tracking-widest uppercase text-white/80 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right — decorative card stack (desktop only) ── */}
      <div className="hidden lg:flex flex-col gap-4 relative z-10 flex-shrink-0 w-[320px]">

        {/* Card 1 — tech stack */}
        <div className="bg-black/25 backdrop-blur-md border border-white/10 rounded-2xl p-5">
          <p className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-3">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {["React","Node.js","TypeScript","Next.js","MongoDB","Tailwind"].map(t => (
              <span key={t} className="bg-white/10 text-white text-[11px] font-semibold px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </div>

        {/* Card 2 — availability */}
        <div className="bg-black text-white rounded-2xl p-5">
          <p className="text-[10px] font-bold tracking-widest uppercase text-white/40 mb-2">Status</p>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            <span className="font-bold text-sm">Open to opportunities</span>
          </div>
          <p className="text-xs text-white/50 mt-2 leading-relaxed">Full-time & freelance projects — worldwide remote</p>
        </div>

      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[9px] tracking-[3px] uppercase text-white">Scroll</span>
        <div className="w-px h-8 bg-white/50 animate-bounce" />
      </div>
    </section>
  );
}
