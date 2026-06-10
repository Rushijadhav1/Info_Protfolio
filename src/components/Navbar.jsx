import { useEffect, useState } from "react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-16 py-4 transition-all duration-300 ${
      scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <a href="#hero" className="text-xl font-black tracking-tight text-white no-underline">
        Rushi<span className="text-[#E8180C]">.</span>
      </a>

      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}
              className="text-white/80 hover:text-white text-sm font-medium no-underline transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact"
        className="hidden md:block border border-white/70 hover:bg-white hover:text-black text-white text-sm font-semibold px-5 py-2 rounded-full transition-all no-underline">
        Hire Me
      </a>

      {/* Hamburger */}
      <button className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-1"
        onClick={() => setOpen(!open)}>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-black/97 backdrop-blur-lg p-6 flex flex-col gap-4 md:hidden border-t border-white/10">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="text-white text-lg font-semibold no-underline hover:text-[#E8180C] transition-colors py-1">
              {l}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="bg-[#E8180C] text-white font-bold px-5 py-3.5 rounded-full text-center no-underline mt-2 hover:bg-red-700 transition-colors">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
