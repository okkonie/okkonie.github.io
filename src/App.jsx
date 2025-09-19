import texts from "./texts";
import Lenis from 'lenis'
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function App() {

  const scrollY = useMotionValue(0);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    lenis.on("scroll", ({ scroll }) => {
      scrollY.set(scroll);
    });

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, [scrollY]);

  return (
    <main className="
      flex flex-col text-text w-full px-5 md:px-10
      relative min-h-screen font-poppins transition-colors duration-300
      selection:bg-text selection:text-bg"
    >

      <nav className="fixed top-0 z-10 flex w-full h-16 bg-bg items-center justify-between">
        <h1 className="font-black text-xl">
          {texts.name}
        </h1>
      </nav>

      <section
        id="" 
        className="w-full flex flex-col justify-end min-h-[50svh] h-max pt-48 pb-32 overflow-hidden space-y-5 border-b border-sep"
      > 
        <h2 className="text-base text-text2">{texts.intro}</h2>
        <p className="text-lg tracking-wide leading-relaxed max-w-3xl">{texts.desc}</p>
      </section>

      <section id="projects" className="flex w-full h-svh">
        <h2 className="text-base text-text2 pt-8">Projects</h2>
      </section>
    </main>
  );
}
