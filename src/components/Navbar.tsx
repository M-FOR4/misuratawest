"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "قطاعاتنا", href: "#sectors" },
  { label: "لماذا نحن", href: "#why-us" },
  { label: "شركاؤنا", href: "#partners" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060b18]/96 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3 group">
            <div className="relative w-[42px] h-[42px] rounded-xl overflow-hidden bg-white/10 ring-1 ring-white/10 group-hover:ring-[#1851b4]/50 transition-all">
              <Image src="/logo-transparent.png" alt="غرب مصراتة" fill sizes="42px" priority className="object-contain p-1" />
            </div>
            <div className="hidden sm:block text-right">
              <p className="text-white font-bold text-[13px] leading-tight">غرب مصراتة</p>
              <p className="text-[#f3c802] text-[11px] font-medium leading-tight">لاستيراد وسائل النقل</p>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="px-4 py-2 text-[13.5px] font-medium text-white/60 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href="tel:+218918709659"
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#1851b4]/40 text-[#90b8f8] hover:border-[#1851b4]/70 hover:bg-[#1851b4]/10 text-[13px] font-medium transition-all"
            >
              <Phone size={13} />
              اتصل بنا
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden md:block px-4 py-2 rounded-xl bg-[#f3c802] hover:bg-[#ffd000] text-[#060b18] font-bold text-[13px] transition-all hover:shadow-lg hover:shadow-[#f3c802]/20 hover:-translate-y-[1px]"
            >
              طلب عرض سعر
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/60 hover:text-white"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#060b18]/98 backdrop-blur-2xl border-t border-white/[0.06]">
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="w-full text-right px-4 py-3 text-[14px] text-white/70 hover:text-white hover:bg-[#1851b4]/10 rounded-xl transition-all font-medium"
              >
                {l.label}
              </button>
            ))}
            <div className="pt-2 pb-1">
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full py-3 rounded-xl bg-[#f3c802] text-[#060b18] font-bold text-[14px]"
              >
                طلب عرض سعر
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
