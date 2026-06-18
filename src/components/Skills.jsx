import { useReveal } from "../hooks/useReveal";
import { useEffect, useRef, useState, useCallback } from "react";

const skills = [
  { name: "React", icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <circle cx="12" cy="12" r="2.5" fill="#fff"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#fff" strokeWidth="1.2" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#fff" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#fff" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
      </svg>
  )},
  { name: "TypeScript", icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M14 10h-3v8H9v-8H6V8h8v2zm1.5 7.5c.4.3.9.5 1.5.5.7 0 1.2-.3 1.2-.8 0-.5-.3-.7-1.1-1l-.5-.2c-1.1-.4-1.8-1-1.8-2.1 0-1.2 1-2 2.5-2 .7 0 1.4.2 1.9.5l-.5 1.2c-.4-.2-.8-.4-1.3-.4-.6 0-.9.3-.9.7 0 .4.3.6 1 .9l.5.2c1.3.5 2 1.1 2 2.2 0 1.3-1 2.1-2.7 2.1-.9 0-1.7-.2-2.3-.7l.5-1.1z" fill="#fff"/>
      </svg>
  )},
  { name: "Node.js", icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M12 1.85L2 7.39v9.22L12 22.15l10-5.54V7.39L12 1.85zm0 2.3l7.5 4.15v8.3L12 20.55l-7.5-4.15V8.3L12 4.15z" fill="#fff"/>
        <path d="M12 6.5L7 9.28v5.44L12 17.5l5-2.78V9.28L12 6.5z" fill="#fff" opacity="0.5"/>
      </svg>
  )},
  { name: "Tailwind", icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 17.85 9.5 19 12 19c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" fill="#fff"/>
      </svg>
  )},
  { name: "PostgreSQL", icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <ellipse cx="12" cy="6" rx="8" ry="3" fill="#fff"/>
        <path d="M4 6v4c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="#fff" opacity="0.7"/>
        <path d="M4 10v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" fill="#fff" opacity="0.5"/>
        <path d="M4 14v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" fill="#fff" opacity="0.3"/>
      </svg>
  )},
  { name: "Spring Boot", icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 6c-.5 2-1.8 3.6-3.5 4.6 1.5.3 2.8 1.2 3.5 2.4-1.2 1.6-3.1 2.5-5 2.4-2.5-.1-4.7-1.6-5.7-3.9.6.4 1.3.6 2 .6 2.5 0 4.6-1.7 5.2-4 .3-1 .3-2.1-.1-3.1.7.2 1.3.5 1.9 1.1l1.7-.1z" fill="#fff"/>
      </svg>
  )},
  { name: "Docker", icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M22 11.5a4.5 4.5 0 00-4-4.5V6h-2v1H4v6c0 2.2 1.8 4 4 4h8c3.3 0 6-2.7 6-5.5zM4 9h2v2H4V9zm3 0h2v2H7V9zm3 0h2v2h-2V9zm3 0h2v2h-2V9z" fill="#fff"/>
      </svg>
  )},
  { name: "Git", icon: (
      <svg viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M21.62 11.108l-8.73-8.73a1.286 1.286 0 00-1.818 0L9.256 4.193l2.302 2.302a1.53 1.53 0 011.927 1.948l2.22 2.22a1.53 1.53 0 11-.92.918l-2.07-2.07v5.45a1.53 1.53 0 11-1.258-.046V9.45a1.53 1.53 0 01-.83-2.01L8.327 5.14l-5.94 5.94a1.286 1.286 0 000 1.818l8.73 8.73a1.286 1.286 0 001.818 0l8.685-8.685a1.286 1.286 0 000-1.818z"/>
      </svg>
  )},
 {
  name: "Python",
  icon: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <path
        d="M12 4c-4 0-4 2-4 4v2h8v1H6c-2 0-3 1-3 3v2c0 2 1 4 4 4h2v-3c0-2 1-3 3-3h4c2 0 3-1 3-3V8c0-2-1-4-4-4h-3z"
        fill="#fff"
      />
      <circle cx="10" cy="6.5" r="0.8" fill="#111827" />
      <circle cx="14" cy="17.5" r="0.8" fill="#111827" />
    </svg>
  ),
},
  {
  name: "JavaScript",
  icon: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <rect x="4" y="4" width="16" height="16" rx="2" fill="#fff"/>
      <path d="M10 9v6c0 1-.5 1.5-1.5 1.5-.7 0-1.2-.2-1.7-.7l.8-1.2c.2.3.4.4.7.4.4 0 .7-.2.7-.8V9h1zm3.5 5.5c.3.5.8.8 1.5.8.6 0 1-.3 1-.7 0-.5-.4-.7-1.1-1l-.4-.2c-1.1-.5-1.8-1-1.8-2.2 0-1.1.8-2 2.2-2 .9 0 1.6.3 2.1 1.1l-1.1.7c-.2-.4-.5-.5-.9-.5s-.7.2-.7.6c0 .4.2.6.9.8l.4.2c1.3.6 2 1.1 2 2.4 0 1.4-1.1 2.2-2.6 2.2-1.4 0-2.3-.7-2.8-1.6l1.3-.6z" fill="#111827"/>
    </svg>
  ),
},
{
  name: "Java",
  icon: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <path d="M12 4c-2 2 2 3 0 5-2 2-4 3 0 5" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M8 16c0 1 2 2 4 2s4-1 4-2" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M9 19h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
},
  { name: "GitHub", icon: (
      <svg viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7C6.73 19.91 6.14 18 6.14 18c-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 7.43c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z"/>
      </svg>
  )},
];

function SkillNode({ skill, index, circleRef }) {
  const ref = useReveal(index * 60);
  return (
    <div ref={ref} className="reveal group flex flex-col items-center gap-3 relative z-10">
      <div
        ref={circleRef}
        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1a0a09] border-2 border-[#1E3A8A]/30 flex items-center justify-center transition-all duration-300 group-hover:border-[#1E3A8A] group-hover:scale-110 group-hover:bg-[#1E3A8A]/15 group-hover:shadow-[0_0_30px_rgba(232,24,12,0.4)]"
      >
        {skill.icon}
      </div>
      <span className="text-xs font-semibold text-black group-hover:text-gray-700 transition-colors text-center">{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  const headRef = useReveal();
  const subRef  = useReveal(80);

  const nodeRefs = useRef([]);
  const gridRef  = useRef(null);
  const [paths, setPaths] = useState([]);

  const computeLines = useCallback(() => {
    if (!gridRef.current) return;
    const gridRect = gridRef.current.getBoundingClientRect();

    const points = nodeRefs.current.map((circle) => {
      if (!circle) return null;
      const r = circle.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - gridRect.left,
        y: r.top + r.height / 2 - gridRect.top,
      };
    });

    if (points.some((p) => !p)) return;

    // Connect each node to the next one (chain)
    const newPaths = [];
    for (let i = 0; i < points.length - 1; i++) {
      newPaths.push({ a: points[i], b: points[i + 1] });
    }
    setPaths(newPaths);
  }, []);

  useEffect(() => {
    const t = setTimeout(computeLines, 400);
    window.addEventListener("resize", computeLines);
    return () => { clearTimeout(t); window.removeEventListener("resize", computeLines); };
  }, [computeLines]);

  return (
    <section id="skills" className="bg-white px-6 md:px-16 py-20 md:py-28 relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,24,12,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-[14px] font-bold tracking-[4px] uppercase text-[#1E3A8A] mb-2">My Toolkit</p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 md:mb-20">
          <div>
            <h2 ref={headRef} className="reveal font-black tracking-tight text-black mb-3"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Skills &amp; Technologies
            </h2>
            <p ref={subRef} className="reveal text-black max-w-md leading-relaxed text-sm">
              From frontend to backend, cloud to databases — here's the stack I work with daily.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            {["12+ Technologies", "1+ Years", "Production Ready"].map(t => (
              <span key={t} className="flex-shrink-0 border border-white/15 hover:border-[#1E3A8A] text-black hover:text-gray-700 text-xs font-semibold px-5 py-2.5 rounded-full transition-all no-underline self-start md:self-auto">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Connected nodes grid */}
        <div className="relative" ref={gridRef}>
          {/* SVG connector lines */}
          {paths.length > 0 && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
              {paths.map((p, i) => (
                <line key={i}
                  x1={p.a.x} y1={p.a.y} x2={p.b.x} y2={p.b.y}
                  stroke="#1E3A8A" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="4 6"
                />
              ))}
            </svg>
          )}

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-10 gap-x-4 place-items-center">
            {skills.map((s, i) => (
              <SkillNode
                key={s.name}
                skill={s}
                index={i}
                circleRef={(el) => (nodeRefs.current[i] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}