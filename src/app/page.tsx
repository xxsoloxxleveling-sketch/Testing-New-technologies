import HeroSequence from "@/components/HeroSequence";
import Mission from "@/components/Mission";
import Products from "@/components/Products";
import AdvantageGrid from "@/components/AdvantageGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="w-full relative bg-off-white z-10 mb-[60vh] md:mb-[50vh] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <HeroSequence />
        <Mission />
        <Products />
        <AdvantageGrid />
      </main>
      <Footer />
    </>
  );
}
