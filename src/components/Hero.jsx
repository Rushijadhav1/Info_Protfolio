import { useEffect, useRef } from "react";
import profileImg from "../assets/pic-port.jpeg"; // your uploaded image

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      ref.current?.classList.add("visible");
    }, 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* Full width background image */}
      <img
        src={profileImg}
        alt="Rushikesh"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover select-none"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Pattern (optional, kept subtle) */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        className="reveal relative z-20 w-full px-6 md:px-16 lg:px-24 pt-28 pb-16"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-white text-sm font-semibold">
            Available for freelance work
          </span>
        </div>

        {/* Heading */}
        <h1
          className="font-black text-white leading-[0.95] tracking-tight max-w-4xl"
          style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
        >
          Hi, I'm a
          <br />
          <span className="text-[#E8180C]">Full Stack</span>
          <br />
          Developer
        </h1>

        {/* Description */}
        <p
          className="text-white/85 leading-relaxed max-w-xl mt-8"
          style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)" }}
        >
          I build fast, scalable and modern web applications using
          React, TypeScript, Spring Boot and PostgreSQL —
          turning ideas into polished digital products.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 sm:gap-5 mt-10 flex-wrap">
          <a
            href="#projects"
            className="bg-[#E8180C] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm sm:text-lg no-underline hover:scale-105 hover:bg-red-700 transition-all shadow-lg shadow-black/40"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="border border-white/60 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm sm:text-lg no-underline hover:bg-white hover:text-black hover:border-white transition-all"
          >
            Contact Me
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-10 sm:gap-14 mt-16 lg:mt-20 border-t border-white/20 pt-8 sm:pt-10 flex-wrap">
          <div>
            <h3 className="text-white text-3xl sm:text-5xl font-black">10+</h3>
            <p className="text-white/60 uppercase text-[10px] sm:text-xs tracking-[3px] sm:tracking-[4px] mt-2">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-white text-3xl sm:text-5xl font-black">1+</h3>
            <p className="text-white/60 uppercase text-[10px] sm:text-xs tracking-[3px] sm:tracking-[4px] mt-2">
              Years Exp.
            </p>
          </div>

          <div>
            <h3 className="text-white text-3xl sm:text-5xl font-black">100%</h3>
            <p className="text-white/60 uppercase text-[10px] sm:text-xs tracking-[3px] sm:tracking-[4px] mt-2">
              Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}