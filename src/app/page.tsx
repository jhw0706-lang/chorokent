import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import IVClinic from "@/components/IVClinic";
import About from "@/components/About";
import Hours from "@/components/Hours";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <SmoothScrollHero
          scrollHeight={600}
          desktopImage="/images/hero-forest-desktop.jpg"
          mobileImage="/images/hero-forest-mobile.jpg"
          initialClipPercentage={25}
          finalClipPercentage={75}
          imageOpacity={0.85}
        />
        <Hero />
        <Services />
        <IVClinic />
        <About />
        <Hours />
        <Location />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
