"use client";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, ExternalLink } from "lucide-react";

const footerLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "قطاعات الأعمال", href: "#sectors" },
  { label: "لماذا نحن", href: "#why-us" },
  { label: "شركاؤنا", href: "#partners" },
  { label: "تواصل معنا", href: "#contact" },
];

const brands = [
  "Bridgestone", "Hankook", "Lassa", "Linglong",
  "Austone", "Petronas", "Champion", "Varta",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#040810] border-t border-white/5">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1851b4]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center p-1">
                <Image
                  src="/logo-transparent.png"
                  alt="غرب مصراتة"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-white font-bold text-base">غرب مصراتة</p>
                <p className="text-white/40 text-xs">لاستيراد وسائل النقل وملحقاتها</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-loose mb-6 max-w-xs">
              الشريك الاستراتيجي لقطاع النقل والمقاولات في ليبيا. نوفّر منتجات عالمية
              بكفاءة لوجستية متميزة منذ أكثر من 15 عاماً.
            </p>
            {/* Contact Quick Links */}
            <div className="space-y-3">
              <a href="tel:+218918709659" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors group">
                <Phone size={14} className="text-[#1851b4] flex-shrink-0" />
                <span dir="ltr">+218 91 870 9659</span>
              </a>
              <a href="mailto:info@misuratawest.com" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors">
                <Mail size={14} className="text-[#f3c802] flex-shrink-0" />
                info@misuratawest.com
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>مصراتة، الطريق الساحلي، الجزير - مقابل مدخل المطار</span>
              </div>
              <a href="https://www.misuratawest.com" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors">
                <Globe size={14} className="text-purple-400 flex-shrink-0" />
                <span className="flex items-center gap-1">
                  www.misuratawest.com
                  <ExternalLink size={10} />
                </span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/40 hover:text-white text-sm transition-colors hover:pr-1 duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
              وكالاتنا العالمية
            </h4>
            <ul className="space-y-3">
              {brands.map((brand) => (
                <li key={brand}>
                  <span className="text-white/40 text-sm">{brand}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} شركة غرب مصراتة لاستيراد وسائل النقل وملحقاتها. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-white/20 text-xs">سجل تجاري</span>
            <span className="px-3 py-1 rounded-full bg-[#1851b4]/15 border border-[#1851b4]/25 text-[#a8c4f0] text-xs font-bold">
              8024
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
