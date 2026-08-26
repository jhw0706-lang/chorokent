import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Hours from "@/components/Hours";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <SmoothScrollHero
          scrollHeight={600}
          desktopImage="https://images.unsplash.com/photo-1511884642898-4c92249e20b6"
          mobileImage="https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          initialClipPercentage={25}
          finalClipPercentage={75}
          imageOpacity={0.7}
        />
        <Hero />
        <Services />
        <About />
        <Hours />
        <Location />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
