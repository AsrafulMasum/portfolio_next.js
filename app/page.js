import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MarqueeSlider from "@/components/MarqueeSlider";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <MarqueeSlider />
      <Footer />
    </main>
  );
}
