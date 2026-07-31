import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* Noise overlay */}
      <div className="noise" />
      
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </main>
  );
}