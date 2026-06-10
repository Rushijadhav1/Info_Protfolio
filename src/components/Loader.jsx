import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 1400);
    const t2 = setTimeout(() => setGone(true), 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#E8180C] flex items-center justify-center z-[9999] transition-all duration-700 ${
        hide ? "opacity-0 scale-105 pointer-events-none" : ""
      }`}
    >
      <h1 className="text-[clamp(3rem,12vw,7rem)] font-black tracking-tight text-white animate-pulseIn">
        Rushi<span className="text-black">.</span>
      </h1>
    </div>
  );
}
