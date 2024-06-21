import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MarqueeSlider from "@/components/MarqueeSlider";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import ShowReel from "@/components/ShowReel";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <MarqueeSlider />
      <Services />
      <Footer />
    </main>
  );
}
