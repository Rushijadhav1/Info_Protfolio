import { useReveal } from "../hooks/useReveal";

const projects = [
  {
    tag: "Restaurant POS System",
    title: "Sync Restaurant Management",
    subtitle: "Complete Restaurant Operations Platform",
    desc: "A full-stack restaurant management and POS system built for real-world business operations — secure auth, billing, inventory, menu management, subscriptions, reporting, and admin controls.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Spring Boot", "PostgreSQL", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    stats: [
      { label: "Modules", val: "10+" },
      { label: "Reports", val: "Real-Time" },
      { label: "Security", val: "JWT" },
    ],
    featured: true,
    mockup: (
      <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="240" fill="#F8FAFC" />
        <rect x="0" y="0" width="400" height="32" fill="#E2E8F0" />
        <circle cx="16" cy="16" r="5" fill="#ff5f57" />
        <circle cx="32" cy="16" r="5" fill="#ffbd2e" />
        <circle cx="48" cy="16" r="5" fill="#28ca41" />
        <rect x="70" y="8" width="260" height="16" rx="8" fill="#94A3B8" />
        <text x="200" y="20" textAnchor="middle" fontSize="9" fill="#666">sync-restaurant.app</text>
        <rect x="0" y="32" width="400" height="36" fill="#F1F5F9" />
        <rect x="16" y="44" width="60" height="12" rx="3" fill="#1E3A8A" />
        <rect x="200" y="44" width="40" height="12" rx="6" fill="#CBD5E1" />
        <rect x="248" y="44" width="40" height="12" rx="6" fill="#CBD5E1" />
        <rect x="296" y="44" width="40" height="12" rx="6" fill="#CBD5E1" />
        <rect x="355" y="42" width="30" height="16" rx="8" fill="#1E3A8A" />
        <rect x="16" y="80" width="115" height="130" rx="8" fill="#E2E8F0" />
        <rect x="16" y="80" width="115" height="80" rx="8" fill="#1E3A8A" opacity="0.7" />
        <rect x="24" y="168" width="70" height="8" rx="2" fill="#fff" opacity="0.8" />
        <rect x="24" y="182" width="40" height="7" rx="2" fill="#1E3A8A" />
        <rect x="24" y="195" width="55" height="10" rx="5" fill="#1E3A8A" />
        <rect x="141" y="80" width="115" height="130" rx="8" fill="#E2E8F0" />
        <rect x="141" y="80" width="115" height="80" rx="8" fill="#CBD5E1" />
        <rect x="149" y="168" width="70" height="8" rx="2" fill="#fff" opacity="0.8" />
        <rect x="149" y="182" width="40" height="7" rx="2" fill="#1E3A8A" />
        <rect x="149" y="195" width="55" height="10" rx="5" fill="#CBD5E1" />
        <rect x="266" y="80" width="115" height="130" rx="8" fill="#E2E8F0" />
        <rect x="266" y="80" width="115" height="80" rx="8" fill="#EFF6FF" />
        <rect x="274" y="168" width="70" height="8" rx="2" fill="#fff" opacity="0.8" />
        <rect x="274" y="182" width="40" height="7" rx="2" fill="#1E3A8A" />
        <rect x="274" y="195" width="55" height="10" rx="5" fill="#CBD5E1" />
        <rect x="310" y="36" width="22" height="16" rx="4" fill="#1E3A8A" />
        <text x="321" y="47" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">3</text>
      </svg>
    ),
  },
  {
  tag: "Weather",
  title: "Weather App",
  subtitle: "Real-Time Weather Forecast",
  desc: "A responsive weather application that provides real-time weather updates, temperature, humidity, wind speed, and location-based forecasts using external weather APIs.",
  tech: ["React", "JavaScript", "Weather API", "CSS"],
  liveUrl: "#",
  githubUrl: "https://github.com/Rushijadhav1/Weather_Project",
  stats: [
    { label: "Forecast", val: "5 Days" },
    { label: "Updates", val: "Real-Time" },
  ],
},
  {
  tag: "Management System",
  title: "Smart Library Management System",
  subtitle: "Digital Library Solution",
  desc: "Developed a modern library management platform with secure authentication, book catalog management, issue and return tracking, member management, and real-time search functionality. Designed to streamline library operations and improve record management efficiency.",
  tech: ["HTML", "CSS", "Python", "MySQL", "JavaScript"],
  liveUrl: "#",
  githubUrl: "https://github.com/Rushijadhav1/Smart_Library_Management_System",
  stats: [
    { label: "Books", val: "1000+" },
    { label: "Features", val: "CRUD" },
  ],
}
];

function FeaturedCard({ p, delay }) {
  const ref = useReveal(delay);
  return (
    <div
      ref={ref}
      className="reveal group relative bg-[#111] border border-white/10 hover:border-[#1E3A8A]/40 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col lg:flex-row"
    >
      {/* Mockup side */}
      <div className="relative lg:w-[52%] h-56 lg:h-auto overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#1E3A8A]">
        <div className="absolute inset-0 p-4 flex items-center justify-center">
          {p.mockup}
        </div>
        <div className="absolute top-4 left-4 bg-black/70 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full">
          ★ Featured
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/50">
          <a href={p.liveUrl} className="flex items-center gap-1.5 bg-white text-black text-xs font-black px-5 py-2.5 rounded-full no-underline hover:scale-105 transition-transform shadow-lg">
            Live Demo ↗
          </a>
          <a href={p.githubUrl} className="flex items-center gap-1.5 bg-black/80 border border-white/20 text-white text-xs font-black px-5 py-2.5 rounded-full no-underline hover:scale-105 transition-transform">
            GitHub
          </a>
        </div>
      </div>

      {/* Content side */}
      <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10 flex-1">
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase mb-3 text-[#1E3A8A]">{p.tag}</p>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-1">{p.title}</h3>
          <p className="text-sm mb-4 text-[#ff6b5e]">{p.subtitle}</p>
          <p className="text-sm text-white/55 leading-relaxed mb-6 max-w-md">{p.desc}</p>

          <div className="flex gap-6 mb-6 pb-6 border-b border-white/5">
            {p.stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl font-black text-white leading-none">{s.val}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {p.tech.map((t) => (
              <span key={t} className="text-[11px] font-semibold px-3 py-1 rounded-full border transition-colors bg-[#1E3A8A]/10 border-[#1E3A8A]/30 text-[#ff8a80]">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 flex-wrap">
          <a href={p.liveUrl} className="flex items-center gap-2 text-white text-xs font-bold px-6 py-3 rounded-full no-underline hover:scale-105 transition-transform bg-[#1E3A8A]">
            Live Demo ↗
          </a>
          <a href={p.githubUrl} className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold px-6 py-3 rounded-full no-underline hover:scale-105 transition-all">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function SimpleCard({ p, delay }) {
  const ref = useReveal(delay);
  return (
    <div
      ref={ref}
      className="reveal group bg-[#111] border border-white/10 hover:border-[#1E3A8A]/40 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <p className="text-[10px] font-bold tracking-widest uppercase mb-3 text-[#1E3A8A]">{p.tag}</p>
      <h3 className="text-xl md:text-2xl font-black text-white mb-1">{p.title}</h3>
      <p className="text-sm mb-4 text-[#ff6b5e]">{p.subtitle}</p>
      <p className="text-sm text-white/55 leading-relaxed mb-6 flex-1">{p.desc}</p>

      <div className="flex gap-6 mb-6 pb-6 border-b border-white/5">
        {p.stats.map((s) => (
          <div key={s.label}>
            <p className="text-lg font-black text-white leading-none">{s.val}</p>
            <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {p.tech.map((t) => (
          <span key={t} className="text-[11px] font-semibold px-3 py-1 rounded-full border bg-[#1E3A8A]/10 border-[#1E3A8A]/30 text-[#ff8a80]">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 flex-wrap">
        <a href={p.liveUrl} className="flex items-center gap-2 text-white text-xs font-bold px-5 py-2.5 rounded-full no-underline hover:scale-105 transition-transform bg-[#1E3A8A]">
          Live Demo ↗
        </a>
        <a href={p.githubUrl} className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold px-5 py-2.5 rounded-full no-underline hover:scale-105 transition-all">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const h2Ref = useReveal();
  const pRef = useReveal(80);
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="bg-white px-6 md:px-16 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,24,12,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-[14px] font-bold tracking-[4px] uppercase text-[#1E3A8A] mb-2">Selected Work</p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 ref={h2Ref} className="reveal font-black tracking-tight text-black mb-3"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Featured Projects
            </h2>
            <p ref={pRef} className="reveal text-gray-500 max-w-md leading-relaxed text-sm">
              A few things I've built recently — from idea to production.
            </p>
          </div>
          <a href="#contact" className="flex-shrink-0 border border-white/15 hover:border-[#1E3A8A] text-white/60 hover:text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all no-underline self-start md:self-auto">
            View All Work ↗
          </a>
        </div>

        {/* Featured full-width card */}
        <FeaturedCard p={featured} delay={0} />

        {/* Remaining 2 cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {rest.map((p, i) => (
            <SimpleCard key={p.title} p={p} delay={(i + 1) * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}