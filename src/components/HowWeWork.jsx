import { useReveal } from "../hooks/useReveal";
import { useEffect, useRef, useState, useCallback } from "react";

const steps = [
  {
    num: "01",
    title: "Define",
    desc: "We start by understanding your goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    red: false,
  },
  {
    num: "02",
    title: "Design",
    desc: "Crafting interfaces that are both beautiful and accessible, guaranteeing an outstanding user experience from the very first interaction.",
    red: true,
  },
  {
    num: "03",
    title: "Build",
    desc: "Developing scalable frontend architectures and secure backend systems using the latest modern tech stack.",
    red: false,
  },
  {
    num: "04",
    title: "Launch",
    desc: "Deploying with CI/CD pipelines, monitoring performance, and iterating fast based on real-world user feedback.",
    red: false,
  },
];

function ProcessCard({ step, delay, pinRef }) {
  const cardRef = useReveal(delay);
  return (
    <div
      ref={cardRef}
      className={`reveal relative rounded-3xl p-6 md:p-8 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default ${
        step.red ? "bg-[#E8180C] text-white" : "bg-white text-black"
      }`}
    >
      <div
        ref={pinRef}
        className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 z-10 ${
          step.red ? "bg-white border-[#E8180C]" : "bg-black border-white"
        }`}
      />
      <p className={`text-[11px] font-bold tracking-widest mb-4 ${step.red ? "text-white/60" : "text-gray-400"}`}>
        {step.num} /
      </p>
      <h3 className={`text-xl md:text-2xl font-extrabold mb-3 ${step.red ? "text-white" : "text-black"}`}>
        {step.title}
      </h3>
      <p className={`text-sm leading-relaxed ${step.red ? "text-white/80" : "text-gray-500"}`}>
        {step.desc}
      </p>
    </div>
  );
}

export default function HowWeWork() {
  const headRef = useReveal();
  const subRef  = useReveal(100);

  const pinRefs = useRef([null, null, null, null]);
  const gridRef = useRef(null);
  const [svgData, setSvgData] = useState({ paths: [], height: 0 });

  const computePaths = useCallback(() => {
    if (!gridRef.current) return;
    const gridRect = gridRef.current.getBoundingClientRect();
    const svgW = gridRect.width;

    const points = pinRefs.current.map((pin) => {
      if (!pin) return null;
      const r = pin.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - gridRect.left,
        y: r.top + r.height / 2 - gridRect.top,
      };
    });

    if (points.some((p) => !p)) return;

    const rows = [];
    let currentRow = [points[0]];
    for (let i = 1; i < points.length; i++) {
      if (Math.abs(points[i].y - currentRow[0].y) < 60) {
        currentRow.push(points[i]);
      } else {
        rows.push(currentRow);
        currentRow = [points[i]];
      }
    }
    rows.push(currentRow);

    const newPaths = [];
    rows.forEach((row) => {
      if (row.length < 1) return;
      const firstPin = row[0];
      const lastPin  = row[row.length - 1];
      const pinY = firstPin.y;
      const arcY = pinY - 28;

      newPaths.push({ d: `M -32 ${pinY} L ${firstPin.x} ${pinY}`, arrow: false });

      for (let i = 0; i < row.length - 1; i++) {
        const a  = row[i];
        const b  = row[i + 1];
        const mx = (a.x + b.x) / 2;
        newPaths.push({ d: `M ${a.x} ${a.y} Q ${mx} ${arcY} ${b.x} ${b.y}`, arrow: true });
      }

      newPaths.push({ d: `M ${lastPin.x} ${pinY} L ${svgW + 32} ${pinY}`, arrow: false });
    });

    const maxY = Math.max(...points.map((p) => p.y)) + 20;
    setSvgData({ paths: newPaths, height: maxY });
  }, []);

  useEffect(() => {
    const t = setTimeout(computePaths, 400);
    window.addEventListener("resize", computePaths);
    return () => { clearTimeout(t); window.removeEventListener("resize", computePaths); };
  }, [computePaths]);

  return (
    <section id="work" className="bg-gray-50 px-6 md:px-16 py-20 md:py-28 text-black">
      <div className="max-w-6xl mx-auto">
        <p className="text-[14px] font-bold tracking-[4px] uppercase text-gray-500 mb-5">How we work</p>
        <h2 ref={headRef} className="reveal font-black leading-[1.05] tracking-tight max-w-2xl mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
          Let us show you how we drive your brand to new heights
        </h2>
        <p ref={subRef} className="reveal text-gray-500 max-w-sm leading-relaxed mb-16 text-sm">
          We follow a structured, creative, and highly technical approach to turn your ideas into robust full-stack applications.
        </p>

        <div className="relative -mx-6 md:-mx-16 px-6 md:px-16" ref={gridRef}>
          {svgData.paths.length > 0 && (
            <svg
              className="absolute pointer-events-none z-0 overflow-visible"
              style={{ top: 0, left: 0, width: "100%", height: svgData.height }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker id="dashArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M2 2L8 5L2 8" fill="none" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </marker>
              </defs>
              {svgData.paths.map((p, i) => (
                <path key={i} d={p.d} fill="none" stroke="#0a0a0a" strokeWidth="1.5"
                  strokeDasharray="6 5" strokeLinecap="round" opacity="0.25"
                  markerEnd={p.arrow ? "url(#dashArrow)" : undefined}
                />
              ))}
            </svg>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
            {steps.map((s, i) => (
              <ProcessCard
                key={s.title}
                step={s}
                delay={i * 100}
                pinRef={(el) => (pinRefs.current[i] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
