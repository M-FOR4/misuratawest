"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const partners = [
  { name: "Bridgestone", logo: "/partners-icons/bridgestone-logo.png", imgClass: "max-w-[260px] max-h-[130px]" },
  { name: "Hankook", logo: "/partners-icons/hankook-logo.png", imgClass: "max-w-[260px] max-h-[130px]" },
  { name: "Lassa", logo: "/partners-icons/lassa-logo.png", imgClass: "max-w-[260px] max-h-[130px]" },
  { name: "Linglong", logo: "/partners-icons/linglong-logo.png", imgClass: "max-w-[260px] max-h-[130px]" },
  { name: "Austone", logo: "/partners-icons/austone-tires-logo.png", imgClass: "max-w-[260px] max-h-[130px]" },
  { name: "Petronas", logo: "/partners-icons/PETRONAS-logo.svg.png", imgClass: "max-w-[110px] max-h-[65px]" },
  { name: "Champion", logo: "/partners-icons/champion.png", imgClass: "max-w-[260px] max-h-[130px]" },
  { name: "Varta", logo: "/partners-icons/varta.png", imgClass: "max-w-[260px] max-h-[130px]" },
  { name: "Dunlop", logo: "/partners-icons/DUNLOP.png", imgClass: "max-w-[130px] max-h-[75px]" },
];

const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

function PartnerLogo({ partner }: { partner: typeof partners[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group flex-shrink-0 w-[280px] h-[140px] flex items-center justify-center p-2 transition-all duration-500 cursor-pointer"
      style={{
        background: "transparent",
        transform: hovered ? "translateY(-6px) scale(1.1)" : "translateY(0) scale(1)"
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={partner.logo}
        alt={partner.name}
        className={`${partner.imgClass} object-contain transition-all duration-500`}
        style={{
          filter: hovered
            ? "brightness(1) invert(0) drop-shadow(0 15px 25px rgba(24,81,180,0.3))"
            : "brightness(0) invert(1) opacity(0.7)",
        }}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          const sibling = e.currentTarget.nextElementSibling as HTMLElement;
          if (sibling) sibling.style.display = "block";
        }}
      />
      <span
        className="text-[20px] font-bold tracking-widest transition-colors duration-500 select-none uppercase"
        style={{
          display: "none",
          color: hovered ? "#f3c802" : "rgba(255,255,255,0.5)",
          textShadow: hovered ? "0 0 15px rgba(243,200,2,0.3)" : "none",
        }}
      >
        {partner.name}
      </span>
    </div>
  );
}

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

      {/* Decorative Orbs */}
      <div
        className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(24,81,180,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          // @ts-ignore
          animation: "float 8s ease-in-out infinite",
        }}
      />

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-16 text-center relative z-10">
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
      <div className="relative flex w-full overflow-hidden py-4" dir="ltr">
        {/* Edge fades */}
        <div
          className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #060b18, transparent)" }}
        />
        <div
          className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #060b18, transparent)" }}
        />

        {/* Track using Framer Motion */}
        <motion.div
          className="flex shrink-0 gap-6 pr-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {duplicatedPartners.map((p, i) => (
            <PartnerLogo key={i} partner={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
