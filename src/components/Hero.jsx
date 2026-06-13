import { useEffect, useRef } from "react";
import profileImg from "../assets/pic-port.jpeg";

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
      className="relative  min-h-screen md:h-[90vh] w-full overflow-hidden flex items-center"
    >
      {/* Background Image */}
      <img src={profileImg}
        alt="Rushikesh"
        draggable={false}
        className="
    absolute inset-0
    w-full h-full
    object-cover
    object-[55%_center]
    md:object-center
    select-none
  "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div
        ref={ref}
        className="reveal relative z-20 w-full max-w-[95%] sm:max-w-[80%] px-5 md:px-16 lg:px-24 pt-16 pb-12"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3 mb-4">
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
          className="font-black text-white leading-[0.95] tracking-tight max-w-3xl text-[2.8rem] sm:text-[3.5rem]  md:text-[5rem]"
          style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
        >
          Hi, I'm a
          <br />
          <span className="text-[#E8180C]">Full Stack </span>Developer
        </h1>

        {/* Description */}
        <p
          className="text-white leading-relaxed max-w-xl mt-6"
          style={{ fontSize: "clamp(0.9rem, 1vw, 1rem)" }}
        >
          I build fast, scalable and modern web applications using React,
          TypeScript, Spring Boot and PostgreSQL — turning ideas into polished
          digital products.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8 flex-wrap">
          <a
            href="#projects"
            className="bg-[#E8180C] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base no-underline hover:scale-105 hover:bg-red-700 transition-all shadow-lg shadow-black/40"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="border border-white/60 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base no-underline hover:bg-white hover:text-black hover:border-white transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
