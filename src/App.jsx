import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Nav from "./components/navbar/Nav"

export default function App() {
  return (
    <main className="
      bg-bg flex flex-col text-text2 w-full
      relative min-h-screen font-poppins transition-colors duration-300
      selection:bg-text selection:text-bg"
    >
      <Nav/>
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
