import { useReveal } from "../hooks/useReveal";

const projects = [
  {
    tag: "Restaurant POS System",
    title: "Sync Restaurant Management",
    subtitle: "Complete Restaurant Operations Platform",
    desc: "A full-stack restaurant management and POS system built for real-world business operations. Features secure authentication, billing, inventory tracking, menu management, subscription plans, advanced reporting, and admin controls. Designed to streamline restaurant workflows and improve operational efficiency.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "REST API",
    ],
    gradient: "from-[#E8180C] via-[#c0130a] to-[#7a0808]",
    accentColor: "#E8180C",
    liveUrl: "#",
    githubUrl: "#",
    stats: [
      { label: "Modules", val: "10+" },
      { label: "Reports", val: "Real-Time" },
      { label: "Security", val: "JWT" },
      { label: "Database", val: "PostgreSQL" }
    ],
    mockup: (
      <svg
        viewBox="0 0 400 240"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="400" height="240" fill="#0a0a0a" />
        <rect x="0" y="0" width="400" height="32" fill="#1a1a1a" />
        <circle cx="16" cy="16" r="5" fill="#ff5f57" />
        <circle cx="32" cy="16" r="5" fill="#ffbd2e" />
        <circle cx="48" cy="16" r="5" fill="#28ca41" />
        <rect x="70" y="8" width="260" height="16" rx="8" fill="#2a2a2a" />
        <text x="200" y="20" textAnchor="middle" fontSize="9" fill="#666">
          shopflow.app
        </text>
        <rect x="0" y="32" width="400" height="36" fill="#111" />
        <rect x="16" y="44" width="60" height="12" rx="3" fill="#E8180C" />
        <rect x="200" y="44" width="40" height="12" rx="6" fill="#222" />
        <rect x="248" y="44" width="40" height="12" rx="6" fill="#222" />
        <rect x="296" y="44" width="40" height="12" rx="6" fill="#222" />
        <rect x="355" y="42" width="30" height="16" rx="8" fill="#E8180C" />
        <rect x="16" y="80" width="115" height="130" rx="8" fill="#1a1a1a" />
        <rect
          x="16"
          y="80"
          width="115"
          height="80"
          rx="8"
          fill="#E8180C"
          opacity="0.7"
        />
        <rect
          x="24"
          y="168"
          width="70"
          height="8"
          rx="2"
          fill="#fff"
          opacity="0.8"
        />
        <rect x="24" y="182" width="40" height="7" rx="2" fill="#E8180C" />
        <rect x="24" y="195" width="55" height="10" rx="5" fill="#E8180C" />
        <rect x="141" y="80" width="115" height="130" rx="8" fill="#1a1a1a" />
        <rect x="141" y="80" width="115" height="80" rx="8" fill="#333" />
        <rect
          x="149"
          y="168"
          width="70"
          height="8"
          rx="2"
          fill="#fff"
          opacity="0.8"
        />
        <rect x="149" y="182" width="40" height="7" rx="2" fill="#E8180C" />
        <rect x="149" y="195" width="55" height="10" rx="5" fill="#333" />
        <rect x="266" y="80" width="115" height="130" rx="8" fill="#1a1a1a" />
        <rect x="266" y="80" width="115" height="80" rx="8" fill="#1e3a2f" />
        <rect
          x="274"
          y="168"
          width="70"
          height="8"
          rx="2"
          fill="#fff"
          opacity="0.8"
        />
        <rect x="274" y="182" width="40" height="7" rx="2" fill="#E8180C" />
        <rect x="274" y="195" width="55" height="10" rx="5" fill="#333" />
        <rect x="310" y="36" width="22" height="16" rx="4" fill="#E8180C" />
        <text
          x="321"
          y="47"
          textAnchor="middle"
          fontSize="9"
          fill="white"
          fontWeight="bold"
        >
          3
        </text>
      </svg>
    ),
  },
  {
    tag: "SaaS Dashboard",
    title: "DataPulse",
    subtitle: "Analytics Platform",
    desc: "Real-time analytics dashboard with customizable widgets, team collaboration, role-based access, and one-click export to PDF/CSV.",
    tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    gradient: "from-blue-800 via-blue-900 to-slate-900",
    accentColor: "#3b82f6",
    liveUrl: "#",
    githubUrl: "#",
    stats: [
      { label: "Metrics", val: "50+" },
      { label: "Latency", val: "< 1s" },
      { label: "Teams", val: "200+" },
    ],
    mockup: (
      <svg
        viewBox="0 0 400 240"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="400" height="240" fill="#0a0f1e" />
        <rect x="0" y="0" width="70" height="240" fill="#0d1526" />
        <rect x="10" y="16" width="50" height="8" rx="4" fill="#3b82f6" />
        <rect
          x="10"
          y="40"
          width="50"
          height="8"
          rx="4"
          fill="#1e3a5f"
          opacity="0.8"
        />
        <rect
          x="10"
          y="56"
          width="50"
          height="8"
          rx="4"
          fill="#1e3a5f"
          opacity="0.6"
        />
        <rect
          x="10"
          y="72"
          width="50"
          height="8"
          rx="4"
          fill="#1e3a5f"
          opacity="0.4"
        />
        <rect
          x="10"
          y="88"
          width="50"
          height="8"
          rx="4"
          fill="#1e3a5f"
          opacity="0.3"
        />
        <rect x="80" y="12" width="72" height="50" rx="6" fill="#0d1526" />
        <rect x="80" y="12" width="72" height="4" rx="2" fill="#3b82f6" />
        <rect
          x="88"
          y="24"
          width="30"
          height="14"
          rx="3"
          fill="#3b82f6"
          opacity="0.8"
        />
        <rect x="88" y="44" width="50" height="6" rx="2" fill="#1e3a5f" />
        <rect x="162" y="12" width="72" height="50" rx="6" fill="#0d1526" />
        <rect x="162" y="12" width="72" height="4" rx="2" fill="#10b981" />
        <rect
          x="170"
          y="24"
          width="30"
          height="14"
          rx="3"
          fill="#10b981"
          opacity="0.8"
        />
        <rect x="170" y="44" width="50" height="6" rx="2" fill="#1e3a5f" />
        <rect x="244" y="12" width="72" height="50" rx="6" fill="#0d1526" />
        <rect x="244" y="12" width="72" height="4" rx="2" fill="#f59e0b" />
        <rect
          x="252"
          y="24"
          width="30"
          height="14"
          rx="3"
          fill="#f59e0b"
          opacity="0.8"
        />
        <rect x="252" y="44" width="50" height="6" rx="2" fill="#1e3a5f" />
        <rect x="326" y="12" width="64" height="50" rx="6" fill="#0d1526" />
        <rect x="326" y="12" width="64" height="4" rx="2" fill="#8b5cf6" />
        <rect
          x="334"
          y="24"
          width="30"
          height="14"
          rx="3"
          fill="#8b5cf6"
          opacity="0.8"
        />
        <rect x="334" y="44" width="44" height="6" rx="2" fill="#1e3a5f" />
        <rect x="80" y="74" width="200" height="100" rx="6" fill="#0d1526" />
        <polyline
          points="90,150 110,130 140,140 170,110 200,120 230,95 260,105 270,90"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
        />
        <polygon
          points="90,154 110,134 140,144 170,114 200,124 230,99 260,109 270,94 270,154"
          fill="#3b82f6"
          opacity="0.15"
        />
        <rect x="88" y="80" width="40" height="6" rx="2" fill="#1e3a5f" />
        <rect x="290" y="74" width="100" height="100" rx="6" fill="#0d1526" />
        <circle
          cx="340"
          cy="124"
          r="30"
          fill="none"
          stroke="#1e3a5f"
          strokeWidth="20"
        />
        <circle
          cx="340"
          cy="124"
          r="30"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="20"
          strokeDasharray="60 100"
          strokeDashoffset="25"
        />
        <circle
          cx="340"
          cy="124"
          r="30"
          fill="none"
          stroke="#10b981"
          strokeWidth="20"
          strokeDasharray="25 100"
          strokeDashoffset="-35"
        />
        <circle
          cx="340"
          cy="124"
          r="30"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="20"
          strokeDasharray="15 100"
          strokeDashoffset="-60"
        />
        <rect x="80" y="184" width="310" height="48" rx="6" fill="#0d1526" />
        <rect x="88" y="192" width="294" height="8" rx="2" fill="#1e3a5f" />
        <rect x="88" y="206" width="200" height="6" rx="2" fill="#162035" />
        <rect x="88" y="218" width="240" height="6" rx="2" fill="#162035" />
      </svg>
    ),
  },
  {
    tag: "Real-Time App",
    title: "ChatNest",
    subtitle: "Messaging Platform",
    desc: "WebSocket-powered messaging with rooms, DMs, file sharing, voice notes, and end-to-end encryption for 5k+ concurrent users.",
    tech: ["Socket.io", "Express", "Redis", "React"],
    gradient: "from-emerald-800 via-emerald-900 to-teal-950",
    accentColor: "#10b981",
    liveUrl: "#",
    githubUrl: "#",
    stats: [
      { label: "Latency", val: "< 50ms" },
      { label: "Concurrent", val: "5k+" },
      { label: "Messages", val: "1M+" },
    ],
    mockup: (
      <svg
        viewBox="0 0 400 240"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="400" height="240" fill="#071a12" />
        <rect x="0" y="0" width="100" height="240" fill="#0a2018" />
        <rect
          x="10"
          y="12"
          width="80"
          height="10"
          rx="5"
          fill="#10b981"
          opacity="0.8"
        />
        {[40, 68, 96, 124, 152].map((y, i) => (
          <g key={i}>
            <circle
              cx="24"
              cy={y + 8}
              r="10"
              fill={i === 0 ? "#10b981" : "#1a3028"}
            />
            <rect
              x="40"
              y={y + 2}
              width="45"
              height="6"
              rx="2"
              fill="#1a3028"
            />
            <rect
              x="40"
              y={y + 12}
              width="30"
              height="5"
              rx="2"
              fill="#0f2a1e"
            />
            {i === 0 && <circle cx="88" cy={y + 8} r="5" fill="#10b981" />}
          </g>
        ))}
        <rect x="100" y="0" width="300" height="240" fill="#071a12" />
        <rect x="100" y="0" width="300" height="36" fill="#0a2018" />
        <circle cx="120" cy="18" r="10" fill="#10b981" />
        <rect x="136" y="10" width="60" height="8" rx="2" fill="#1a3028" />
        <rect
          x="136"
          y="22"
          width="40"
          height="5"
          rx="2"
          fill="#10b981"
          opacity="0.5"
        />
        <rect x="110" y="48" width="160" height="30" rx="10" fill="#0a2018" />
        <rect x="118" y="56" width="120" height="6" rx="2" fill="#1a3028" />
        <rect x="118" y="66" width="80" height="5" rx="2" fill="#0f2a1e" />
        <rect
          x="230"
          y="90"
          width="150"
          height="30"
          rx="10"
          fill="#10b981"
          opacity="0.85"
        />
        <rect
          x="238"
          y="98"
          width="110"
          height="6"
          rx="2"
          fill="#071a12"
          opacity="0.5"
        />
        <rect
          x="238"
          y="108"
          width="70"
          height="5"
          rx="2"
          fill="#071a12"
          opacity="0.3"
        />
        <rect x="110" y="132" width="130" height="24" rx="10" fill="#0a2018" />
        <rect x="118" y="140" width="90" height="6" rx="2" fill="#1a3028" />
        <rect
          x="250"
          y="168"
          width="120"
          height="24"
          rx="10"
          fill="#10b981"
          opacity="0.85"
        />
        <rect
          x="258"
          y="176"
          width="80"
          height="6"
          rx="2"
          fill="#071a12"
          opacity="0.5"
        />
        <rect x="100" y="204" width="300" height="36" fill="#0a2018" />
        <rect x="110" y="212" width="220" height="20" rx="10" fill="#112a1e" />
        <circle cx="360" cy="222" r="12" fill="#10b981" />
        <path d="M355 222l8-4v8z" fill="white" />
        <circle cx="88" cy="40" r="5" fill="#10b981" />
      </svg>
    ),
  },
];

function ProjectCard({ p, delay, flip }) {
  const ref = useReveal(delay);
  return (
    <div
      ref={ref}
      className={`reveal group relative bg-[#111] border border-white/10 hover:border-white/20 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col lg:flex-row ${flip ? "lg:flex-row-reverse" : ""}`}
      style={{ boxShadow: `0 0 0 0 ${p.accentColor}` }}
    >
      {/* Mockup side */}
      <div
        className={`relative lg:w-[52%] h-56 lg:h-auto overflow-hidden flex-shrink-0 bg-gradient-to-br ${p.gradient}`}
      >
        <div className="absolute inset-0 p-4 flex items-center justify-center">
          {p.mockup}
        </div>
        {/* Hover overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/50">
          <a
            href={p.liveUrl}
            className="flex items-center gap-1.5 bg-white text-black text-xs font-black px-5 py-2.5 rounded-full no-underline hover:scale-105 transition-transform shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-black">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8l8 5-8 5v-2z" />
            </svg>
            Live Demo
          </a>
          <a
            href={p.githubUrl}
            className="flex items-center gap-1.5 bg-black/80 border border-white/20 text-white text-xs font-black px-5 py-2.5 rounded-full no-underline hover:scale-105 transition-transform"
          >
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7C6.73 19.91 6.14 18 6.14 18c-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 7.43c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* Content side */}
      <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10 flex-1">
        <div>
          <p
            className="text-[10px] font-bold tracking-widest uppercase mb-3"
            style={{ color: p.accentColor }}
          >
            {p.tag}
          </p>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-1">
            {p.title}
          </h3>
          <p className="text-sm mb-4" style={{ color: p.accentColor + "99" }}>
            {p.subtitle}
          </p>
          <p className="text-sm text-white/55 leading-relaxed mb-6 max-w-md">
            {p.desc}
          </p>

          {/* Stats row */}
          <div className="flex gap-6 mb-6 pb-6 border-b border-white/5">
            {p.stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl font-black text-white leading-none">
                  {s.val}
                </p>
                <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {p.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-semibold px-3 py-1 rounded-full border transition-colors"
                style={{
                  background: p.accentColor + "12",
                  borderColor: p.accentColor + "30",
                  color: p.accentColor + "cc",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex gap-3 flex-wrap">
          <a
            href={p.liveUrl}
            className="flex items-center gap-2 text-white text-xs font-bold px-6 py-3 rounded-full no-underline hover:scale-105 transition-transform"
            style={{ background: p.accentColor }}
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8l8 5-8 5v-2z" />
            </svg>
            Live Demo
          </a>
          <a
            href={p.githubUrl}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold px-6 py-3 rounded-full no-underline hover:scale-105 transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7C6.73 19.91 6.14 18 6.14 18c-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 7.43c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const h2Ref = useReveal();
  const pRef = useReveal(80);

  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] px-6 md:px-16 py-20 md:py-28 relative overflow-hidden"
    >
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,24,12,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-[11px] font-bold tracking-[4px] uppercase text-[#E8180C] mb-4">
          Selected Work
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2
              ref={h2Ref}
              className="reveal font-black tracking-tight text-white mb-3"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Featured Projects
            </h2>
            <p
              ref={pRef}
              className="reveal text-white/45 max-w-md leading-relaxed text-sm"
            >
              A few things I've built recently — from idea to production.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 border border-white/15 hover:border-[#E8180C] text-white/60 hover:text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all no-underline self-start md:self-auto"
          >
            View All Work ↗
          </a>
        </div>

        {/* All 3 cards — full width, alternating flip layout */}
        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              p={p}
              delay={i * 150}
              flip={i % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
