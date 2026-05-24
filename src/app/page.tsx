import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import BusinessSectors from "@/components/BusinessSectors";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080d1a]">
      <Navbar />
      <HeroSection />
      <PartnersMarquee />
      <BusinessSectors />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </main>
  );
}
