import DevInfo from "@/components/DevInfo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MarqueeSlider from "@/components/MarqueeSlider";
import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <MarqueeSlider />
      <DevInfo />
      <Services />
    </main>
  );
}
