import FinalCTASection from "@/components/FinalCTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LeadFormSection from "@/components/LeadFormSection";
import Navbar from "@/components/Navbar";
import ProblemSection from "@/components/ProblemSection";
import ProductSection from "@/components/ProductSection";
import SalesContactSection from "@/components/SalesContactSection";
import UseCaseSection from "@/components/UseCaseSection";
import WhyTopreSection from "@/components/WhyTopreSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ProductSection />
      <WhyTopreSection />
      <UseCaseSection />
      <LeadFormSection />
      <SalesContactSection />
      <FinalCTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
