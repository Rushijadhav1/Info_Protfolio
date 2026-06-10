const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 px-6 md:px-16 py-10 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-8">
          <div>
            <p className="text-xl font-black tracking-tight">
              Rushi<span className="text-[#E8180C]">.</span>
            </p>
            <p className="text-xs text-white/35 mt-2 max-w-[260px] leading-relaxed">
              Full Stack Developer — React, Node.js, TypeScript & more.
              Building fast, scalable web products.
            </p>
          </div>

          <div className="flex gap-8 md:gap-12 flex-wrap">
            <div>
              <p className="text-2xl font-black text-white">5+</p>
              <p className="text-[10px] text-white/35 uppercase tracking-widest mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">50+</p>
              <p className="text-[10px] text-white/35 uppercase tracking-widest mt-1">Projects Done</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">2026</p>
              <p className="text-[10px] text-white/35 uppercase tracking-widest mt-1">Worldwide Available</p>
            </div>
          </div>

          <nav className="flex gap-5 md:gap-6 flex-wrap">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="text-white/35 hover:text-white text-sm no-underline transition-colors">
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-white/20">© 2026 Rushi. All rights reserved.</p>
          <p className="text-xs text-white/20">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
