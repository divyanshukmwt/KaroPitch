import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SocialProof from "@/components/SocialProof";
import AboutPitch from "@/components/AboutPitch";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar />
      <SocialProof />
      <AboutPitch />
      <HowItWorks />
      </main>
  );
}