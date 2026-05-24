"use client";

/* 
  Every sector card uses a CSS background-image instead of next/image fill.
  This is 100% reliable for decorative backgrounds and avoids the "no height" issue.
*/
import { useEffect, useRef, useState } from "react";
import { Droplets, CircleDot, BatteryCharging, Truck } from "lucide-react";

const sectors = [
  {
    id: "oils",
    icon: Droplets,
    title: "الزيوت ومواد التشحيم",
    desc: "زيوت صناعية ومحركية عالية الأداء للمركبات الثقيلة والمعدات الإنشائية. وكلاء رسميون لـ Petronas وChampion.",
    img: "/oil.jpg",
    brands: ["Petronas", "Champion"],
    color: "#f59e0b",
    colSpan: "lg:col-span-2",
    rowSpan: "lg:row-span-2",
    minH: "clamp(300px, 42vh, 480px)",
  },
  {
    id: "tires",
    icon: CircleDot,
    title: "الإطارات",
    desc: "إطارات النقل الثقيل والمعدات الإنشائية بأعلى مواصفات الأداء والأمان من كبرى الماركات العالمية.",
    img: "/bigtire.png",
    brands: ["Bridgestone", "Hankook", "Lassa", "Linglong", "Austone"],
    color: "#3b82f6",
    colSpan: "lg:col-span-2",
    rowSpan: "",
    minH: "clamp(200px, 25vh, 280px)",
  },
  {
    id: "batteries",
    icon: BatteryCharging,
    title: "البطاريات",
    desc: "بطاريات Varta بأعلى كثافة طاقة وأطول عمر تشغيلي للمركبات التجارية والصناعية.",
    img: "/battery.jpg",
    brands: ["Varta"],
    color: "#22c55e",
    colSpan: "",
    rowSpan: "",
    minH: "clamp(200px, 25vh, 280px)",
  },
  {
    id: "bobcat",
    icon: Truck,
    title: "معدات Bobcat وقطع الغيار",
    desc: "معدات Bobcat لقطاعات البناء والتعدين، مع توفير قطع الغيار الأصلية.",
    img: "/equipment.jpg",
    brands: ["Bobcat"],
    color: "#ea580c",
    colSpan: "",
    rowSpan: "",
    minH: "clamp(200px, 25vh, 280px)",
  },
];

function SectorCard({
  s,
  idx,
}: {
  s: (typeof sectors)[0];
  idx: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative rounded-3xl overflow-hidden cursor-pointer group ${s.colSpan} ${s.rowSpan}`}
      style={{
        minHeight: s.minH,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ${idx * 0.1}s ease, transform 0.7s ${idx * 0.1}s ease`,
        border: `1px solid ${hovered ? s.color + "55" : "rgba(255,255,255,0.07)"}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          backgroundImage: `url('${s.img}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: hovered ? "scale(1.07)" : "scale(1)",
        }}
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, ${s.color}22 0%, rgba(6,11,24,0.65) 40%, rgba(6,11,24,0.92) 100%)`,
        }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at 30% 30%, ${s.color}18 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-7">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{
            background: `${s.color}20`,
            border: `1px solid ${s.color}45`,
            boxShadow: hovered ? `0 0 20px ${s.color}30` : "none",
            transition: "box-shadow 0.3s",
          }}
        >
          <s.icon size={22} style={{ color: s.color }} />
        </div>

        {/* Text */}
        <div className="mt-auto">
          <h3 className="text-white font-bold text-xl mb-2.5">{s.title}</h3>
          <p className="text-white/55 text-[13.5px] leading-relaxed mb-4">{s.desc}</p>

          {/* Brand pills */}
          <div className="flex flex-wrap gap-2">
            {s.brands.map((b) => (
              <span
                key={b}
                className="text-[12px] px-3 py-1 rounded-full font-semibold"
                style={{
                  background: `${s.color}18`,
                  color: s.color,
                  border: `1px solid ${s.color}35`,
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BusinessSectors() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="sectors" className="py-28 bg-[#060b18]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-16"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p
            className="text-[13px] font-bold uppercase tracking-[0.25em] mb-3"
            style={{ color: "#1851b4" }}
          >
            قطاعاتنا
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            قطاعات الأعمال
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto leading-relaxed">
            نغطّي احتياجاتكم الكاملة في قطاع النقل والمقاولات بمنتجات متكاملة
            وخدمة لوجستية متميزة.
          </p>
        </div>

        {/* 
          Bento grid:
          Desktop: 4 columns
            - Oils:      col 1-2, row 1-2  (2×2)
            - Tires:     col 3-4, row 1    (2×1)
            - Batteries: col 3,   row 2    (1×1)
            - Bobcat:    col 4,   row 2    (1×1)
        */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          style={{ gridAutoRows: "1fr" }}
        >
          {sectors.map((s, i) => (
            <SectorCard key={s.id} s={s} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
