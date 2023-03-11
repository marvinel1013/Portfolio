import About from "@/components/section/About";
import Hero from "@/components/section/Hero";
import Skills from "@/components/section/Skills";

function Main() {
  return (
    <main>
      {/* Hero Section */}
      <div>
        <Hero />
        <About />
        <Skills />
      </div>
    </main>
  );
}

export default Main;
