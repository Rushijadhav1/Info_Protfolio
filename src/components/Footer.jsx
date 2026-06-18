const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-[#ebedef] border-t border-gray-200 px-6 md:px-16 py-10 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-8">
          <div>
            <p className="text-xl font-black tracking-tight">
              Rushi<span className="text-[#1E3A8A]">.</span>
            </p>
            <p className="text-xs text-black mt-2 max-w-[260px] leading-relaxed">
              Full Stack Developer — React, Node.js, TypeScript & more.
              Building fast, scalable web products.
            </p>
          </div>

          <div className="flex gap-8 md:gap-12 flex-wrap">
            <div>
              <p className="text-2xl font-black text-[#111827]">1+</p>
              <p className="text-[10px] text-black uppercase tracking-widest mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-black text-[#111827]">10+</p>
              <p className="text-[10px] text-black uppercase tracking-widest mt-1">Projects Done</p>
            </div>
            <div>
              <p className="text-2xl font-black text-[#111827]">2026</p>
              <p className="text-[10px] text-black uppercase tracking-widest mt-1">Worldwide Available</p>
            </div>
          </div>

          <nav className="flex gap-5 md:gap-6 flex-wrap">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="text-black hover:text-[#1E3A8A] text-sm no-underline transition-colors">
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-gray-300 pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-black">© 2026 Rushi. All rights reserved.</p>
          <p className="text-xs text-black">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
