import { useReveal } from "../hooks/useReveal";

const stats = [
  { num: "10+", label: "Projects Done" },
  { num: "1+",  label: "Years Exp." },
];

const highlights = [
  { icon: "⚡", text: "Fast delivery, clean code" },
  { icon: "🎨", text: "Pixel-perfect UI/UX" },
  { icon: "🔒", text: "Secure & scalable architecture" },
];

export default function About() {
  const leftRef  = useReveal();
  const rightRef = useReveal(150);

  return (
    <section id="about" className="bg-[#E8180C] px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* ── Left — image card ── */}
        <div ref={leftRef} className="reveal flex-shrink-0 w-full max-w-xs mx-auto lg:mx-0">
          <div className="relative">
            {/* Main card */}
            <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: "linear-gradient(160deg,#c0130a 0%,#7a0808 100%)" }}>
              {/* Abstract developer illustration */}
              <div className="w-full h-full flex items-center justify-center relative">
                <svg viewBox="0 0 300 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Background blobs */}
                  <circle cx="150" cy="200" r="120" fill="rgba(255,255,255,0.03)"/>
                  <circle cx="80" cy="300" r="80" fill="rgba(0,0,0,0.1)"/>
                  {/* Monitor */}
                  <rect x="60" y="120" width="180" height="120" rx="12" fill="#1a1a1a"/>
                  <rect x="70" y="130" width="160" height="100" rx="8" fill="#0a0a0a"/>
                  {/* Code lines on screen */}
                  <rect x="82" y="145" width="60" height="6" rx="3" fill="#E8180C" opacity="0.9"/>
                  <rect x="82" y="158" width="100" height="5" rx="3" fill="white" opacity="0.4"/>
                  <rect x="82" y="170" width="80" height="5" rx="3" fill="white" opacity="0.3"/>
                  <rect x="90" y="182" width="70" height="5" rx="3" fill="white" opacity="0.25"/>
                  <rect x="82" y="194" width="90" height="5" rx="3" fill="#E8180C" opacity="0.5"/>
                  <rect x="82" y="206" width="55" height="5" rx="3" fill="white" opacity="0.2"/>
                  {/* Monitor stand */}
                  <rect x="135" y="240" width="30" height="20" rx="4" fill="#1a1a1a"/>
                  <rect x="110" y="258" width="80" height="8" rx="4" fill="#1a1a1a"/>
                  {/* Keyboard */}
                  <rect x="80" y="280" width="140" height="50" rx="8" fill="#1a1a1a"/>
                  <rect x="90" y="288" width="120" height="6" rx="3" fill="#333"/>
                  <rect x="90" y="300" width="120" height="6" rx="3" fill="#333"/>
                  <rect x="90" y="312" width="90" height="6" rx="3" fill="#333"/>
                  {/* Floating elements */}
                  <circle cx="50" cy="150" r="18" fill="rgba(255,255,255,0.08)"/>
                  <text x="43" y="155" fontSize="14" fill="white" opacity="0.6">⚛</text>
                  <circle cx="255" cy="180" r="18" fill="rgba(0,0,0,0.2)"/>
                  <text x="248" y="185" fontSize="12" fill="white" opacity="0.6">TS</text>
                  <circle cx="40" cy="280" r="14" fill="rgba(255,255,255,0.06)"/>
                  <text x="34" y="285" fontSize="11" fill="white" opacity="0.5">{ }</text>
                </svg>
              </div>
            </div>

            {/* Floating experience badge */}
            <div className="absolute -bottom-5 -right-5 bg-black text-white rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-2xl font-black leading-none">1+</p>
              <p className="text-[10px] tracking-widest uppercase text-white/50 mt-0.5">Years</p>
            </div>
          </div>
        </div>

        {/* ── Right — text content ── */}
        <div ref={rightRef} className="reveal flex-1 text-white">
          <p className="text-[14px] font-bold tracking-[4px] uppercase text-white/80 mb-4">About Me</p>

          <h2 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
            Building digital<br />
            experiences that<br />
            <span className="text-black">actually work.</span>
          </h2>

          <p className="text-white/75 leading-relaxed mb-8 max-w-lg" style={{ fontSize: "clamp(0.88rem, 1.2vw, 1rem)" }}>
            I'm a Full Stack Developer passionate about crafting robust,
            scalable web applications. With 1+ years of experience, I bridge
            the gap between design and engineering — delivering products that
            look great and perform even better.
          </p>

          {/* Highlights */}
          <div className="flex flex-col gap-3 mb-10">
            {highlights.map((h) => (
              <div key={h.text} className="flex items-center gap-3">
                <span className="text-lg">{h.icon}</span>
                <span className="text-sm font-semibold text-white/80">{h.text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-8 flex-wrap pt-8 border-t border-white/15">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-black text-white leading-none">{s.num}</p>
                <p className="text-[10px] tracking-widest uppercase text-white/80 mt-1.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
