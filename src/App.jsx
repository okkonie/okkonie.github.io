import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="
    bg-bg flex flex-col text-text2 w-full relative
    min-h-screen font-poppins
    selection:bg-text selection:text-bg"
    >
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}
