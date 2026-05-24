import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "غرب مصراتة لاستيراد وسائل النقل وملحقاتها",
  description:
    "الشريك الاستراتيجي لقطاع النقل والمقاولات في ليبيا. وكلاء معتمدون لكبرى العلامات العالمية في الإطارات والزيوت والبطاريات ومعدات Bobcat. سجل تجاري 8024.",
  keywords:
    "غرب مصراتة, استيراد, وسائل النقل, إطارات, زيوت, بطاريات, ليبيا, Bridgestone, Hankook, Varta",
  openGraph: {
    title: "غرب مصراتة لاستيراد وسائل النقل وملحقاتها",
    description: "الشريك الاستراتيجي لقطاع النقل والمقاولات في ليبيا",
    locale: "ar_LY",
    type: "website",
    url: "https://www.misuratawest.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
