import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SocialProof from "@/components/SocialProof";
import AboutPitch from "@/components/AboutPitch";
import HowItWorks from "@/components/HowItWorks";
import StartupCategories from "@/components/StartupCategories";
import InvestorSection from "@/components/InvestorSection";
import FeaturedStartups from "@/components/FeaturedStartups";
import AboutKaroStartup from "@/components/AboutKaroStartup";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar />
      <SocialProof />
      <AboutPitch />
      <HowItWorks />
      <StartupCategories />
      <InvestorSection />
      <FeaturedStartups />
      <AboutKaroStartup />
      <CTA />
      <Footer />
      </main>
  );
}