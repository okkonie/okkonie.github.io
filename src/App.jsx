import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="
    bg-bg flex flex-col text-text2 w-full relative
    min-h-screen font-poppins
    selection:bg-text selection:text-bg"
    >
      <NavBar />
      <Hero />
      <Projects />
    </div>
  );
}
