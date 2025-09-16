
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import DarkThemeButton from "./components/ThemeSwitch";

export default function App() {
  return (
    <main className="
      bg-bg flex flex-col text-text2 w-full
      relative min-h-screen font-poppins transition-colors duration-300
      selection:bg-text selection:text-bg"
    >
      <DarkThemeButton />
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
