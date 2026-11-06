
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Process />
        <Benefits />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
