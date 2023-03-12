import About from "@/components/section/About";
import Hero from "@/components/section/Hero";
import Projects from "@/components/section/Projects";
import Skills from "@/components/section/Skills";

function Main() {
  return (
    <main>
      {/* Hero Section */}
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}

export default Main;
