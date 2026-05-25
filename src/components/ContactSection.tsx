"use client";
import { useState, useRef, useEffect } from "react";
import { Phone, Mail, MapPin, Send, Building2, ChevronDown, CheckCircle, ExternalLink } from "lucide-react";

const INQUIRY_TYPES = [
  "طلب عرض أسعار إطارات",
  "طلب عرض أسعار زيوت ومواد تشحيم",
  "طلب عرض أسعار بطاريات",
  "معدات Bobcat وقطع غيار",
  "عقد توريد مؤسسي / حكومي",
  "استفسار عام",
];

const CONTACT = [
  {
    icon: Phone,
    label: "الهاتف",
    value: "+218 91 870 9659",
    href: "tel:+218918709659",
    color: "#3b82f6",
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "info@misuratawest.com",
    href: "mailto:info@misuratawest.com",
    color: "#f3c802",
  },
  {
    icon: MapPin,
    label: "العنوان",
    value: "مصراتة، الطريق الساحلي، الجزير - مقابل مدخل المطار",
    href: "https://maps.google.com/?q=Misurata+Libya",
    color: "#22c55e",
    ext: true,
  },
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
      }}
    >
      {children}
    </div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({
    org: "", name: "", phone: "", email: "", type: "", msg: "",
  });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    setDone(true);
  };

  const inputCls =
    "w-full px-5 py-4 rounded-xl text-[15px] font-medium text-white placeholder:text-white/25 transition-all outline-none";
  const inputStyle = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.09)",
  };
  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.border = "1px solid rgba(24,81,180,0.55)";
    e.currentTarget.style.background = "rgba(24,81,180,0.07)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(24,81,180,0.15)";
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.09)";
    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#060b18 0%,#070d1c 100%)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(243,200,2,0.35),transparent)" }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <p
              className="text-[13px] font-bold uppercase tracking-[0.25em] mb-3"
              style={{ color: "#f3c802" }}
            >
              تواصل معنا
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              ابدأ شراكتك اليوم
            </h2>
            <p className="text-white/45 text-lg max-w-lg mx-auto leading-relaxed">
              فريق مبيعات الشركات جاهز لتقديم عروض أسعار مخصصة
              وحلول توريد متكاملة لمؤسستكم.
            </p>
          </div>
        </Reveal>

        {/* 12-Column Grid Format to ensure form is extremely wide and square */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ── Contact info (4 columns) ── */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {CONTACT.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.1}>
                <a
                  href={c.href}
                  target={c.ext ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-6 rounded-2xl transition-all duration-300 group"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.border = `1px solid ${c.color}40`; e.currentTarget.style.transform = "translateX(-4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.border = "1px solid rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateX(0)"; }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}
                  >
                    <c.icon size={22} style={{ color: c.color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/35 text-[12px] font-semibold uppercase tracking-widest mb-1.5">
                      {c.label}
                    </p>
                    <p className="text-white text-[15px] font-bold leading-snug break-words group-hover:text-[#f3c802] transition-colors">
                      {c.value}
                      {c.ext && <ExternalLink size={12} className="inline ml-1.5 opacity-40" />}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* ── B2B Form (8 columns) - Square/Wide Layout ── */}
          <Reveal delay={0.15} className="lg:col-span-8">
            <div
              className="p-10 relative overflow-hidden h-full flex flex-col justify-center"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
              }}
            >
              {/* Wide accent line on form */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background: "linear-gradient(90deg, #1851b4, #f3c802, #22c55e)",
                }}
              />

              {done ? (
                <div className="flex flex-col items-center justify-center py-20 text-center h-full">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}
                  >
                    <CheckCircle size={44} style={{ color: "#22c55e" }} />
                  </div>
                  <h3 className="text-white font-bold text-3xl mb-4">تم إرسال طلبكم بنجاح!</h3>
                  <p className="text-white/50 text-lg max-w-md">
                    فريق المبيعات لدينا سيقوم بمراجعة الطلب والتواصل معكم خلال 24 ساعة.
                  </p>
                  <button
                    onClick={() => { setDone(false); setForm({ org: "", name: "", phone: "", email: "", type: "", msg: "" }); }}
                    className="mt-10 px-8 py-4 rounded-xl text-[15px] font-bold text-[#060b18] transition-all hover:scale-105"
                    style={{ background: "#f3c802" }}
                  >
                    إرسال طلب آخر
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-4 mb-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(243,200,2,0.1)", border: "1px solid rgba(243,200,2,0.3)" }}
                    >
                      <Building2 size={24} style={{ color: "#f3c802" }} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-[22px]">نموذج طلبات الشركات</h3>
                      <p className="text-white/40 text-[14px] mt-1">للمؤسسات والجهات الحكومية والشركات الكبرى</p>
                    </div>
                  </div>

                  <form onSubmit={submit} className="flex flex-col flex-grow justify-between gap-6">
                    {/* Organized into a wider horizontal layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                      {/* Name Col */}
                      <div className="flex flex-col gap-6">
                        <div>
                          <label className="block text-white/50 text-[13px] font-bold mb-2">
                            اسم الجهة / الشركة <span style={{ color: "#f3c802" }}>*</span>
                          </label>
                          <input
                            required type="text" placeholder="مثال: شركة النفط الوطنية"
                            className={inputCls} style={inputStyle}
                            value={form.org} onChange={e => setForm({ ...form, org: e.target.value })}
                            onFocus={focusStyle} onBlur={blurStyle}
                          />
                        </div>
                        <div>
                          <label className="block text-white/50 text-[13px] font-bold mb-2">
                            الاسم الكامل للمسؤول <span style={{ color: "#f3c802" }}>*</span>
                          </label>
                          <input
                            required type="text" placeholder="الاسم الشخصي"
                            className={inputCls} style={inputStyle}
                            value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                            onFocus={focusStyle} onBlur={blurStyle}
                          />
                        </div>
                      </div>

                      {/* Contact Col */}
                      <div className="flex flex-col gap-6">
                        <div>
                          <label className="block text-white/50 text-[13px] font-bold mb-2">رقم الهاتف</label>
                          <input
                            type="tel" placeholder="+218 XX XXX XXXX"
                            className={inputCls} style={{ ...inputStyle, direction: "ltr", textAlign: "right" }}
                            value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                            onFocus={focusStyle} onBlur={blurStyle}
                          />
                        </div>
                        <div>
                          <label className="block text-white/50 text-[13px] font-bold mb-2">البريد الإلكتروني</label>
                          <input
                            type="email" placeholder="email@company.com"
                            className={inputCls} style={{ ...inputStyle, direction: "ltr", textAlign: "right" }}
                            value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                            onFocus={focusStyle} onBlur={blurStyle}
                          />
                        </div>
                      </div>

                      {/* Msg Col */}
                      <div className="flex flex-col gap-6 h-full">
                        <div className="relative z-20">
                          <label className="block text-white/50 text-[13px] font-bold mb-2">
                            نوع الاستفسار <span style={{ color: "#f3c802" }}>*</span>
                          </label>
                          <button
                            type="button" onClick={() => setOpen(!open)}
                            className={inputCls + " flex items-center justify-between text-right leading-none"}
                            style={{ ...inputStyle, height: "54px" }}
                          >
                            <span className="truncate" style={{ color: form.type ? "white" : "rgba(255,255,255,0.3)" }}>
                              {form.type || "اختر نوع الطلب..."}
                            </span>
                            <ChevronDown
                              size={18} className="transition-transform ml-2 shrink-0"
                              style={{ color: "rgba(255,255,255,0.4)", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                            />
                          </button>
                          {open && (
                            <div className="absolute top-full left-0 right-0 mt-2 rounded-xl overflow-hidden shadow-2xl z-50 border border-white/10" style={{ background: "#0c1527" }}>
                              {INQUIRY_TYPES.map(t => (
                                <button
                                  key={t} type="button"
                                  onClick={() => { setForm({ ...form, type: t }); setOpen(false); }}
                                  className="w-full text-right px-5 py-3 text-[14px] font-medium text-white/70 hover:text-white hover:bg-[#1851b4]/20 transition-colors border-b border-white/5 last:border-0"
                                >
                                  {t}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="flex-grow flex flex-col">
                          <label className="block text-white/50 text-[13px] font-bold mb-2">تفاصيل الطلب (اختياري)</label>
                          <textarea
                            placeholder="اكتب الكميات، المواصفات، أو أي تفاصيل أخرى..."
                            className={inputCls + " resize-none flex-grow p-4 min-h-[100px]"}
                            style={{ ...inputStyle, marginBottom: 0 }}
                            value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })}
                            onFocus={focusStyle as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
                            onBlur={blurStyle as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Row - Full width */}
                    <div className="pt-2 mt-2">
                      <button
                        type="submit" disabled={loading}
                        className="group w-full py-4.5 rounded-xl font-bold text-[16px] text-white flex items-center justify-center gap-3 transition-all hover:scale-[1.01] hover:shadow-[0_10px_40px_rgba(24,81,180,0.4)] disabled:opacity-60 relative overflow-hidden"
                        style={{ background: "linear-gradient(135deg, #1851b4 0%, #2a6dd9 100%)", border: "1px solid rgba(255,255,255,0.1)" }}
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          {loading ? (
                            <>
                              <span className="w-5 h-5 rounded-full border-2 border-white/25 border-t-white" style={{ animation: "spin 0.7s linear infinite" }} />
                              جاري معالجة الطلب...
                            </>
                          ) : (
                            <>
                              <Send size={18} />
                              إرسال الطلب للاعتماد
                            </>
                          )}
                        </span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
