"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ArrowDown, Shield, Truck, Award } from "lucide-react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Background Layers ── */}
      <div className="absolute inset-0">
        {/* Photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.02]"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#060b18]/75" />
        {/* Deep blue gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(15, 58, 130, 0.45) 0%, rgba(6, 11, 24, 0.95) 70%)",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#060b18] via-[#060b18]/80 to-transparent" />
      </div>

      {/* ── Animated grid & glow ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(rgba(24,81,180,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(24,81,180,0.2) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(24,81,180,0.15) 0%, transparent 60%)",
          top: "-10%",
          right: "-10%",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(243,200,2,0.06) 0%, transparent 60%)",
          bottom: "-5%",
          left: "-5%",
          filter: "blur(50px)",
        }}
      />

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pt-28 pb-20">
        {/* Tag */}
        <div
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <span
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-[13.5px] font-bold text-[#a8c4f8] backdrop-blur-md shadow-lg"
            style={{
              background: "rgba(24, 81, 180, 0.15)",
              border: "1px solid rgba(168, 196, 248, 0.2)",
            }}
          >
            <span
              className="relative flex h-2.5 w-2.5"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f3c802] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f3c802]"></span>
            </span>
            الوكيل الحصري المعتمد في غرب ليبيا
          </span>
        </div>

        {/* Heading */}
        <h1
          className="mt-8 font-extrabold leading-[1.12]"
          style={{
            fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
            transition: "opacity 1s 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1s 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            letterSpacing: "-0.02em"
          }}
        >
          <span className="block text-white drop-shadow-sm">الشريك الاستراتيجي</span>
          <span
            className="block mt-2 pb-2"
            style={{
              backgroundImage:
                "linear-gradient(100deg, #ffffff 0%, #dbe7fc 40%, #f3c802 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            لقطاع النقل والمقاولات
          </span>
          <span className="block text-white/90 mt-2 font-bold" style={{ fontSize: "0.65em" }}>
            في&nbsp;ليبيا
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-8 text-white/70 leading-relaxed max-w-2xl font-medium"
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
            transition: "opacity 1s 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 1s 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
          }}
        >
          نوفّر الإطارات الثقيلة، الزيوت الصناعية، البطاريات ومعدات Bobcat لأكبر
          الشركات والجهات الحكومية في ليبيا، بجودة عالمية وكفاءة لوجستية متميزة.
        </p>

        {/* CTA */}
        <div
          className="mt-12 flex flex-wrap items-center gap-5"
          style={{
            transition: "opacity 1s 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 1s 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-[#060b18] text-[16px] transition-all hover:-translate-y-1 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #f3c802 0%, #ffd000 100%)",
              boxShadow: "0 8px 32px rgba(243,200,2,0.35)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 12px 40px rgba(243,200,2,0.5)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 8px 32px rgba(243,200,2,0.35)")
            }
          >
            <span className="relative z-10 flex items-center gap-3">
              تواصل مع قسم الشركات
              <ChevronLeft
                size={20}
                className="transition-transform group-hover:-translate-x-1.5"
              />
            </span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]" />
          </button>
          
          <button
            onClick={() => scrollTo("#sectors")}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white/90 hover:text-white text-[16px] transition-all"
            style={{ 
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
            }}
          >
            اكتشف خدماتنا
          </button>
        </div>

        {/* Badges */}
        <div
          className="mt-16 pt-8 flex flex-wrap gap-4 border-t border-white/10"
          style={{
            transition: "opacity 1s 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 1s 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
          }}
        >
          {[
            { icon: Shield, label: "سجل تجاري 8024", highlight: false },
            { icon: Truck, label: "+15 عاماً من الخبرة", highlight: false },
            { icon: Award, label: "8 وكالات عالمية حصرية", highlight: true },
          ].map(({ icon: Icon, label, highlight }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-[14px] font-semibold transition-all hover:-translate-y-0.5 cursor-default"
              style={{
                background: highlight ? "rgba(24, 81, 180, 0.2)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${highlight ? "rgba(24, 81, 180, 0.4)" : "rgba(255,255,255,0.08)"}`,
                color: highlight ? "#dbe7fc" : "rgba(255,255,255,0.7)"
              }}
            >
              <Icon size={16} className={highlight ? "text-[#f3c802]" : "text-[#1851b4]"} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => scrollTo("#sectors")}>
        <span className="text-white text-[11px] font-bold tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown size={18} className="text-white animate-bounce" />
      </div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(150%); }
        }
      `}</style>
    </section>
  );
}
