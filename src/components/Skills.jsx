import { useReveal } from "../hooks/useReveal";

const categories = [
  {
    label: "Frontend",
    skills: [
      {
        name: "React",
        level: 95,
        svg: (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
          </svg>
        ),
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        level: 90,
        svg: (
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z"/>
          </svg>
        ),
        color: "#ffffff",
      },
      {
        name: "TypeScript",
        level: 88,
        svg: (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <rect width="24" height="24" rx="3" fill="#3178C6"/>
            <path d="M14 10h-3v8H9v-8H6V8h8v2zm1.5 7.5c.4.3.9.5 1.5.5.7 0 1.2-.3 1.2-.8 0-.5-.3-.7-1.1-1l-.5-.2c-1.1-.4-1.8-1-1.8-2.1 0-1.2 1-2 2.5-2 .7 0 1.4.2 1.9.5l-.5 1.2c-.4-.2-.8-.4-1.3-.4-.6 0-.9.3-.9.7 0 .4.3.6 1 .9l.5.2c1.3.5 2 1.1 2 2.2 0 1.3-1 2.1-2.7 2.1-.9 0-1.7-.2-2.3-.7l.5-1.1z" fill="white"/>
          </svg>
        ),
        color: "#3178C6",
      },
      {
        name: "Tailwind",
        level: 92,
        svg: (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 17.85 9.5 19 12 19c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" fill="#38BDF8"/>
          </svg>
        ),
        color: "#38BDF8",
      },
    ],
  },
  {
    label: "Backend",
    skills: [
      {
        name: "Node.js",
        level: 90,
        svg: (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M12 1.85L2 7.39v9.22L12 22.15l10-5.54V7.39L12 1.85zm0 2.3l7.5 4.15v8.3L12 20.55l-7.5-4.15V8.3L12 4.15z" fill="#68A063"/>
            <path d="M12 6.5L7 9.28v5.44L12 17.5l5-2.78V9.28L12 6.5z" fill="#68A063" opacity="0.5"/>
          </svg>
        ),
        color: "#68A063",
      },
      {
        name: "GraphQL",
        level: 78,
        svg: (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.3l7.5 4.2v8.5L12 21 4.5 17V8.5L12 4.3z" fill="#E10098"/>
            <circle cx="12" cy="12" r="2" fill="#E10098"/>
            <circle cx="4.5" cy="8.5" r="1.5" fill="#E10098"/>
            <circle cx="19.5" cy="8.5" r="1.5" fill="#E10098"/>
            <circle cx="4.5" cy="15.5" r="1.5" fill="#E10098"/>
            <circle cx="19.5" cy="15.5" r="1.5" fill="#E10098"/>
          </svg>
        ),
        color: "#E10098",
      },
      {
        name: "MongoDB",
        level: 85,
        svg: (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M12 2C9 2 6.5 7 6.5 12c0 3.2 1.3 6 3.3 7.8L12 22l2.2-2.2C16.2 18 17.5 15.2 17.5 12 17.5 7 15 2 12 2z" fill="#47A248"/>
            <path d="M12 4c1.5 0 4 4 4 8s-2 7-4 8-4-4-4-8 2.5-8 4-8z" fill="#47A248" opacity="0.5"/>
          </svg>
        ),
        color: "#47A248",
      },
      {
        name: "PostgreSQL",
        level: 82,
        svg: (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <ellipse cx="12" cy="6" rx="8" ry="3" fill="#336791"/>
            <path d="M4 6v4c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="#336791" opacity="0.7"/>
            <path d="M4 10v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" fill="#336791" opacity="0.5"/>
            <path d="M4 14v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" fill="#336791" opacity="0.3"/>
          </svg>
        ),
        color: "#336791",
      },
    ],
  },
  {
    label: "DevOps & Tools",
    skills: [
      {
        name: "Docker",
        level: 80,
        svg: (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M22 11.5a4.5 4.5 0 00-4-4.5V6h-2v1H4v6c0 2.2 1.8 4 4 4h8c3.3 0 6-2.7 6-5.5zM4 9h2v2H4V9zm3 0h2v2H7V9zm3 0h2v2h-2V9zm3 0h2v2h-2V9z" fill="#2496ED"/>
          </svg>
        ),
        color: "#2496ED",
      },
      {
        name: "AWS",
        level: 75,
        svg: (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M7 12l-2 4h14l-2-4H7zm5-8L8 12h8L12 4z" fill="#FF9900"/>
            <path d="M3 18h18v2H3z" fill="#FF9900" opacity="0.5"/>
          </svg>
        ),
        color: "#FF9900",
      },
      {
        name: "GitHub",
        level: 95,
        svg: (
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7C6.73 19.91 6.14 18 6.14 18c-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 7.43c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z"/>
          </svg>
        ),
        color: "#ffffff",
      },
      {
        name: "Figma",
        level: 70,
        svg: (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M8 2h4a4 4 0 010 8H8V2z" fill="#F24E1E"/>
            <path d="M8 10h4a4 4 0 010 8H8v-8z" fill="#FF7262"/>
            <path d="M8 18a4 4 0 008 0" fill="#1ABCFE"/>
            <path d="M4 6a4 4 0 014-4H8v8H4z" fill="#0ACF83"/>
            <path d="M4 14a4 4 0 014-4 4 4 0 010 8 4 4 0 01-4-4z" fill="#A259FF"/>
          </svg>
        ),
        color: "#A259FF",
      },
    ],
  },
];

function SkillBar({ skill, index }) {
  const ref = useReveal(index * 80);
  return (
    <div ref={ref} className="reveal group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
            style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}30` }}
          >
            {skill.svg}
          </div>
          <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{skill.name}</span>
        </div>
        <span className="text-xs font-bold tabular-nums" style={{ color: skill.color }}>{skill.level}%</span>
      </div>
      {/* Progress bar */}
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${skill.level}%`,
            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const headRef = useReveal();
  const subRef  = useReveal(80);

  return (
    <section id="skills" className="bg-[#0a0a0a] px-6 md:px-16 py-20 md:py-28 relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,24,12,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-[14px] font-bold tracking-[4px] uppercase text-[#E8180C] mb-4">My Toolkit</p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <h2 ref={headRef} className="reveal font-black tracking-tight text-white mb-3"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Skills &amp; Technologies
            </h2>
            <p ref={subRef} className="reveal text-white/45 max-w-md leading-relaxed text-sm">
              From frontend to backend, cloud to databases — here's the stack I work with daily.
            </p>
          </div>

          {/* Summary pill */}
          <div className="flex gap-3 flex-wrap">
            {["12 Technologies", "1+ Years", "Production Ready"].map(t => (
              <span key={t} className="text-[11px] font-semibold bg-white/5 border border-white/10 text-white/50 px-3 py-1.5 rounded-full whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 3 category columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-white/15 transition-colors duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-4 bg-[#E8180C] rounded-full" />
                <p className="text-xs font-bold tracking-[2px] uppercase text-white/40">{cat.label}</p>
              </div>

              {/* Skills list */}
              <div className="flex flex-col gap-5">
                {cat.skills.map((s, i) => (
                  <SkillBar key={s.name} skill={s} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}