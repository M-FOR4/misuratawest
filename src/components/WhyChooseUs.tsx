"use client";
import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Globe2, Clock, Building2, FileCheck, Handshake } from "lucide-react";

/* ─── Animated counter ─── */
function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const span = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let cur = 0;
        const step = to / (1600 / 16);
        const id = setInterval(() => {
          cur = Math.min(cur + step, to);
          setVal(Math.floor(cur));
          if (cur >= to) clearInterval(id);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (span.current) obs.observe(span.current);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={span}>{val.toLocaleString("ar")}{suffix}</span>;
}

/* ─── Reveal wrapper ─── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
      }}
    >
      {children}
    </div>
  );
}

const STATS = [
  { n: 15, suf: "+", label: "عاماً من الخبرة", icon: Clock },
  { n: 8, suf: "", label: "وكالات عالمية حصرية", icon: Globe2 },
  { n: 500, suf: "+", label: "عميل مؤسسي", icon: Building2 },
  { n: 8024, suf: "", label: "السجل التجاري", icon: FileCheck },
];

const ADVS = [
  {
    icon: ShieldCheck,
    title: "موثوقية حكومية وقانونية",
    desc: "مرخّصون رسمياً برقم سجل تجاري 8024، مؤهّلون للتعاقد مع جميع الجهات الحكومية والشركات الكبرى في ليبيا.",
  },
  {
    icon: Globe2,
    title: "وكالات عالمية مباشرة",
    desc: "نستورد مباشرةً من المصنّعين بدون وسطاء، مما يضمن أصالة المنتج وتنافسية السعر.",
  },
  {
    icon: Clock,
    title: "سرعة التوريد واللوجستيات",
    desc: "كفاءة لوجستية عالية مع قدرة على تلبية الطلبات الكبيرة في أسرع وقت ممكن.",
  },
  {
    icon: Handshake,
    title: "شراكات استراتيجية طويلة الأمد",
    desc: "نبني علاقات شراكة متينة مع عملائنا المؤسسيين مع تقديم دعم فني متكامل بعد البيع.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#060b18 0%,#091020 50%,#060b18 100%)" }}
    >
      {/* Dividers */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(24,81,180,0.5),transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(24,81,180,0.5),transparent)" }}
      />

      {/* Center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(24,81,180,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <p
              className="text-[13px] font-bold uppercase tracking-[0.25em] mb-3"
              style={{ color: "#f3c802" }}
            >
              قدراتنا اللوجستية
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              لماذا تختار غرب مصراتة؟
            </h2>
            <p className="text-white/45 text-lg max-w-xl mx-auto leading-relaxed">
              خبرة تشغيلية راسخة وشبكة وكالات عالمية تجعلنا الخيار الأول للشركات
              والجهات الحكومية في قطاع النقل الليبي.
            </p>
          </div>
        </Reveal>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div
                className="rounded-2xl p-7 text-center group cursor-default transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(24,81,180,0.08)",
                  border: "1px solid rgba(24,81,180,0.2)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.border = "1px solid rgba(24,81,180,0.45)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.border = "1px solid rgba(24,81,180,0.2)")
                }
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(24,81,180,0.18)" }}
                >
                  <s.icon size={19} style={{ color: "#f3c802" }} />
                </div>
                <p className="text-[2.4rem] font-bold text-white leading-none mb-2">
                  <Counter to={s.n} suffix={s.suf} />
                </p>
                <p className="text-white/45 text-[13px] font-medium">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Advantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {ADVS.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <div
                className="flex items-start gap-5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.border = "1px solid rgba(24,81,180,0.30)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)")
                }
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(24,81,180,0.13)",
                    border: "1px solid rgba(24,81,180,0.25)",
                  }}
                >
                  <a.icon size={20} style={{ color: "#1851b4" }} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{a.title}</h3>
                  <p className="text-white/50 text-[13.5px] leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Commercial Register Banner */}
        <Reveal delay={0.2}>
          <div
            className="rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: "rgba(24,81,180,0.1)",
              border: "1px solid rgba(24,81,180,0.28)",
            }}
          >
            <div className="flex items-center gap-5">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(243,200,2,0.1)",
                  border: "1px solid rgba(243,200,2,0.3)",
                }}
              >
                <FileCheck size={28} style={{ color: "#f3c802" }} />
              </div>
              <div>
                <p className="text-[#f3c802] text-[13px] font-semibold mb-0.5">
                  سجل تجاري رسمي
                </p>
                <p className="text-white font-bold text-2xl">رقم 8024</p>
                <p className="text-white/45 text-[13px] mt-1">
                  مرخّصون للتعاقد مع الجهات الحكومية والشركات الكبرى في ليبيا.
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-xl font-bold text-[13.5px] text-[#060b18] flex-shrink-0 transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: "#f3c802",
                boxShadow: "0 4px 24px rgba(243,200,2,0.2)",
              }}
            >
              طلب وثائق التأهيل
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
