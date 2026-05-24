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

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
    "w-full px-4 py-3 rounded-xl text-[14px] font-medium text-white placeholder:text-white/25 transition-all outline-none";
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.09)",
  };
  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.border = "1px solid rgba(24,81,180,0.55)";
    e.currentTarget.style.background = "rgba(24,81,180,0.07)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(24,81,180,0.12)";
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.09)";
    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
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

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* ── Contact info + map ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {CONTACT.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.1}>
                <a
                  href={c.href}
                  target={c.ext ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 group"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.border = `1px solid ${c.color}40`; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}
                  >
                    <c.icon size={18} style={{ color: c.color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/35 text-[11px] font-semibold uppercase tracking-widest mb-1">
                      {c.label}
                    </p>
                    <p className="text-white text-[14px] font-medium leading-snug break-words">
                      {c.value}
                      {c.ext && <ExternalLink size={11} className="inline ml-1.5 opacity-40" />}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}

            {/* Map */}
            <Reveal delay={0.3}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ height: "200px", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <iframe
                  title="موقع الشركة"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27165.4!2d15.055!3d32.375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a892f17c3d26c3%3A0xf71b07ddcae0d47d!2sMisurata%20Airport!5e0!3m2!1sar!2sly!4v1680000000000"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg) saturate(0.7) brightness(0.85)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* ── B2B Form ── */}
          <Reveal delay={0.15}>
            <div
              className="lg:col-span-3 rounded-3xl p-8"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {done ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}
                  >
                    <CheckCircle size={36} style={{ color: "#22c55e" }} />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-3">تم إرسال طلبكم!</h3>
                  <p className="text-white/45 text-[15px] max-w-xs">
                    سيتواصل معكم فريق مبيعات الشركات خلال 24 ساعة عمل.
                  </p>
                  <button
                    onClick={() => { setDone(false); setForm({ org:"",name:"",phone:"",email:"",type:"",msg:"" }); }}
                    className="mt-8 px-5 py-2.5 rounded-xl text-[13px] font-semibold text-white/55 hover:text-white transition-colors border border-white/10 hover:border-white/20"
                  >
                    إرسال طلب جديد
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3.5 mb-8">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(24,81,180,0.18)", border: "1px solid rgba(24,81,180,0.3)" }}
                    >
                      <Building2 size={18} style={{ color: "#1851b4" }} />
                    </div>
                    <div>
                      <p className="text-white font-bold text-[17px]">نموذج طلبات الشركات</p>
                      <p className="text-white/35 text-[12px]">للمؤسسات والجهات الحكومية والشركات الكبرى</p>
                    </div>
                  </div>

                  <form onSubmit={submit} className="space-y-5">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/45 text-[12px] font-semibold mb-2">
                          اسم الجهة / الشركة <span style={{ color: "#f3c802" }}>*</span>
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="مثال: شركة النفط الوطنية"
                          className={inputCls}
                          style={inputStyle}
                          value={form.org}
                          onChange={e => setForm({ ...form, org: e.target.value })}
                          onFocus={focusStyle}
                          onBlur={blurStyle}
                        />
                      </div>
                      <div>
                        <label className="block text-white/45 text-[12px] font-semibold mb-2">
                          اسم المسؤول <span style={{ color: "#f3c802" }}>*</span>
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="الاسم الكامل"
                          className={inputCls}
                          style={inputStyle}
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          onFocus={focusStyle}
                          onBlur={blurStyle}
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/45 text-[12px] font-semibold mb-2">رقم الهاتف</label>
                        <input
                          type="tel"
                          placeholder="+218 XX XXX XXXX"
                          className={inputCls}
                          style={{ ...inputStyle, direction: "ltr", textAlign: "right" }}
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          onFocus={focusStyle}
                          onBlur={blurStyle}
                        />
                      </div>
                      <div>
                        <label className="block text-white/45 text-[12px] font-semibold mb-2">البريد الإلكتروني</label>
                        <input
                          type="email"
                          placeholder="email@company.com"
                          className={inputCls}
                          style={{ ...inputStyle, direction: "ltr", textAlign: "right" }}
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          onFocus={focusStyle}
                          onBlur={blurStyle}
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div className="relative">
                      <label className="block text-white/45 text-[12px] font-semibold mb-2">
                        نوع الاستفسار <span style={{ color: "#f3c802" }}>*</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="w-full px-4 py-3 rounded-xl text-[14px] font-medium flex items-center justify-between transition-all"
                        style={inputStyle}
                      >
                        <span style={{ color: form.type ? "white" : "rgba(255,255,255,0.25)" }}>
                          {form.type || "اختر نوع الاستفسار"}
                        </span>
                        <ChevronDown
                          size={16}
                          className="transition-transform"
                          style={{
                            color: "rgba(255,255,255,0.35)",
                            transform: open ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        />
                      </button>
                      {open && (
                        <div
                          className="absolute top-full left-0 right-0 mt-1.5 z-20 rounded-xl overflow-hidden shadow-2xl"
                          style={{ background: "#0d1628", border: "1px solid rgba(255,255,255,0.1)" }}
                        >
                          {INQUIRY_TYPES.map(t => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => { setForm({ ...form, type: t }); setOpen(false); }}
                              className="w-full text-right px-4 py-3 text-[13.5px] text-white/60 hover:text-white hover:bg-[#1851b4]/15 transition-colors"
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-white/45 text-[12px] font-semibold mb-2">تفاصيل الطلب</label>
                      <textarea
                        rows={4}
                        placeholder="أذكر الكميات المطلوبة، المواصفات، والجدول الزمني للتوريد..."
                        className={inputCls + " resize-none"}
                        style={inputStyle}
                        value={form.msg}
                        onChange={e => setForm({ ...form, msg: e.target.value })}
                        onFocus={focusStyle as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
                        onBlur={blurStyle as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl font-bold text-[15px] text-[#060b18] flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5 disabled:opacity-60"
                      style={{
                        background: "#f3c802",
                        boxShadow: "0 6px 28px rgba(243,200,2,0.25)",
                      }}
                    >
                      {loading ? (
                        <>
                          <span
                            className="w-5 h-5 rounded-full border-2 border-[#060b18]/25 border-t-[#060b18]"
                            style={{ animation: "spin 0.7s linear infinite" }}
                          />
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          <Send size={17} />
                          إرسال الطلب
                        </>
                      )}
                    </button>
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
