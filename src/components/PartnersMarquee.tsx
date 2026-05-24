"use client";
import { motion } from "framer-motion";

const partners = [
  { name: "Bridgestone", logo: "/bridgestone-logo.jpg" },
  { name: "Hankook", logo: "/hankook-logo.jpg" },
  { name: "Lassa", logo: "/lassa-logo.jpg" },
  { name: "Linglong", logo: "/linglong-logo.jpeg" },
  { name: "Austone", logo: "/austone-logo.jpg" },
  { name: "Petronas", logo: "/petronas-logo.png" },
  { name: "Champion", logo: "/champion-logo.jpg" },
  { name: "Varta", logo: "/varta-logo.jpg" },
];

// نضاعف المصفوفة مرتين لضمان ملء الشاشة بالكامل دون أي فراغات
const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

export default function PartnersMarquee() {
  return (
    <section
      id="partners"
      className="py-24 overflow-hidden relative"
      style={{ background: "linear-gradient(180deg,#060b18 0%,#0a1122 50%,#060b18 100%)" }}
    >
      {/* Top/Bottom Glow Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1851b4]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1851b4]/10 to-transparent" />

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-16 text-center">
        <p
          className="text-[13px] font-bold uppercase tracking-[0.25em] mb-4"
          style={{ color: "#1851b4" }}
        >
          شركاء النجاح
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
          وكلاء معتمدون لكبرى العلامات
        </h2>
        <p className="text-white/40 text-[16px] max-w-xl mx-auto leading-relaxed">
          نمثّل أفضل الماركات العالمية في قطاعات الإطارات والزيوت والبطاريات، لتوفير أعلى معايير الجودة والأداء.
        </p>
      </div>

      {/* Marquee wrapper */}
      {/* نجبر الحاوية على اتجاه LTR لتفادي مشاكل الـ RTL في الأنيميشن */}
      <div className="relative flex w-full overflow-hidden" dir="ltr">
        {/* Edge fades */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0a1122, transparent)" }}
        />
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0a1122, transparent)" }}
        />

        {/* Track using Framer Motion */}
        <motion.div
          className="flex shrink-0 gap-6 pr-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {duplicatedPartners.map((p, i) => (
            <div
              key={i}
              className="group flex-shrink-0 w-[180px] h-[95px] rounded-2xl overflow-hidden flex items-center justify-center p-5 transition-all duration-500 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.98)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(24,81,180,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
              }}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-[55px] max-w-[130px] object-contain transition-all duration-500 opacity-80"
                style={{ filter: "grayscale(100%)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%)";
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(100%)";
                  e.currentTarget.style.opacity = "0.8";
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
