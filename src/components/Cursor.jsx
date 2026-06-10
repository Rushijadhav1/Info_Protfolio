import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top = e.clientY + "px";
      }
      if (ring.current) {
        ring.current.style.left = e.clientX + "px";
        ring.current.style.top = e.clientY + "px";
      }
    };

    const grow = () => {
      if (dot.current) {
        dot.current.style.width = "20px";
        dot.current.style.height = "20px";
      }
      if (ring.current) {
        ring.current.style.width = "54px";
        ring.current.style.height = "54px";
      }
    };

    const shrink = () => {
      if (dot.current) {
        dot.current.style.width = "12px";
        dot.current.style.height = "12px";
      }
      if (ring.current) {
        ring.current.style.width = "36px";
        ring.current.style.height = "36px";
      }
    };

    document.addEventListener("mousemove", move);

    // Use MutationObserver so dynamically rendered elements also get listeners
    const attachHoverListeners = () => {
      document.querySelectorAll("a, button, .hoverable").forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
    };

    attachHoverListeners();

    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dot — mix-blend-difference makes it always visible on any bg color */}
      <div
        ref={dot}
        className="fixed w-3 h-3 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          backgroundColor: "#ffffff",
          mixBlendMode: "difference",
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />

      {/* Ring — same blend mode, always contrasts with background */}
      <div
        ref={ring}
        className="fixed w-9 h-9 rounded-full pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          border: "1.5px solid #ffffff",
          mixBlendMode: "difference",
          opacity: 0.85,
          transition: "left 0.12s ease, top 0.12s ease, width 0.3s ease, height 0.3s ease",
        }}
      />
    </>
  );
}