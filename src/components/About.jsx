import { FaReact, FaNodeJs, FaJava, FaDocker } from 'react-icons/fa';
import { SiPostgresql, SiSpringboot, SiTailwindcss } from 'react-icons/si';

const techStack = [
  { icon: <FaReact    />, label: 'React',       color: '#61DAFB', delay: '200' },
  { icon: <FaNodeJs   />, label: 'Node.js',     color: '#68A063', delay: '300' },
  { icon: <FaJava     />, label: 'Java',         color: '#f89820', delay: '400' },
  { icon: <SiSpringboot/>,label: 'Spring Boot', color: '#6DB33F', delay: '500' },
  { icon: <SiPostgresql/>,label: 'PostgreSQL',  color: '#336791', delay: '600' },
  { icon: <SiTailwindcss/>,label:'Tailwind',    color: '#38BDF8', delay: '700' },
  { icon: <FaDocker   />, label: 'Docker',       color: '#2496ED', delay: '800' },
];

const About = () => {
  return (
    <section className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">

        {/* ── LEFT: Glassmorphism Stats Card ── */}
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          className="w-full md:w-[300px] shrink-0 mt-6 md:mt-8"
        >
          <div className="
            relative rounded-2xl p-7
            bg-white/10 backdrop-blur-md
            border border-white/20
            shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)]
            hover:-translate-y-1
            transition-all duration-500 ease-out
          ">
            <p className="text-xs font-semibold tracking-[0.25em] text-white/60 uppercase mb-4">
              Developer Profile
            </p>
            <div className="h-px bg-white/15 mb-6" />

            <div className="flex gap-8 mb-6">
              <div>
                <p className="text-5xl font-black text-white leading-none">5+</p>
                <p className="text-xs text-white/70 mt-1 font-medium">Projects Built</p>
              </div>
              <div>
                <p className="text-5xl font-black text-white leading-none">15+</p>
                <p className="text-xs text-white/70 mt-1 font-medium">Technologies</p>
              </div>
            </div>

            <div className="h-px bg-white/15 mb-6" />

            <div className="flex flex-col gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-semibold w-fit border border-white/10">
                🎓 MCA Graduate
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-semibold w-fit border border-white/10">
                ⚡ Full Stack Developer
              </span>
            </div>

            <div className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full bg-black/25 border border-white/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-xs font-semibold">Available for work</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Text + Tech Icons ── */}
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-duration="700"
          className="flex-1 text-white mt-4 md:mt-8 relative z-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-black mb-5 leading-tight">
            Hello!
          </h2>

          <p className="text-base md:text-lg font-medium leading-relaxed max-w-2xl text-red-50 mb-10">
            Hi, I'm <span className="font-bold text-white">Rushi</span> — an MCA Graduate and Full Stack
            Developer passionate about building modern, scalable, and user-focused web applications using{' '}
            <span className="font-bold text-white">React, Node.js, Java, Spring Boot, PostgreSQL,</span> and{' '}
            <span className="font-bold text-white">Docker</span>. I enjoy transforming ideas into clean,
            efficient, and impactful digital experiences.
          </p>

          {/* ── Tech Icon Grid ── */}
          <div className="flex flex-wrap gap-4">
            {techStack.map(({ icon, label, color, delay }) => (
              <div
                key={label}
                data-aos="zoom-in"
                data-aos-delay={delay}
                className="group flex flex-col items-center gap-2"
              >
                <div className="
                  w-16 h-16 md:w-[72px] md:h-[72px]
                  flex items-center justify-center
                  rounded-2xl
                  bg-white/10 border border-white/15
                  shadow-[0_4px_20px_rgba(0,0,0,0.2)]
                  group-hover:bg-white/20
                  group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                  group-hover:-translate-y-2
                  transition-all duration-300 ease-out
                "
                  style={{ '--icon-color': color }}
                >
                  <span style={{ color, fontSize: '2rem' }} className="drop-shadow-lg">
                    {icon}
                  </span>
                </div>
                <span className="text-[11px] text-white/65 font-medium tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Torn paper divider ── */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* ── Decorative stars ── */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
    </section>
  );
};

export default About;