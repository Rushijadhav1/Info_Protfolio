const items = ["React", "Node.js", "TypeScript", "Next.js", "Tailwind CSS", "MongoDB", "PostgreSQL", "Docker", "AWS", "GraphQL"];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-black border-t border-white/5 py-5 overflow-hidden">
      <div className="flex gap-14 whitespace-nowrap animate-ticker">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-14">
            <span className="text-xs font-bold tracking-[3px] uppercase text-white/85">{item}</span>
            <span className="text-[#1E3A8A] text-xs">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
