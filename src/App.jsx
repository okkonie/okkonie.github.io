import texts from "./texts";
import ThemeSwitch from "./components/ThemeSwitch";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";  

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App() {
  const smootherRef = useRef(null);
  const introRef = useRef(null);
  useLayoutEffect(() => {
    if (smootherRef.current) return;

    const raf = requestAnimationFrame(() => {
      smootherRef.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.1, 
        effects: true, 
        smoothTouch: 0.1, 
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      smootherRef.current?.kill();
      smootherRef.current = null;
    };
  }, []);


  return (
    <div id="smooth-wrapper">
      <main
        id="smooth-content"
        className="
          flex flex-col text-text w-full px-4 md:px-10 lg:px-14
          relative min-h-screen font-poppins transition-colors duration-300
          selection:bg-text selection:text-bg"
      > 
        <section
          className="
            w-full relative grid grid-cols-8 grid-rows-3 sm:min-h-[90dvh] justify-start
            overflow-hidden border-b border-sep
          "
        > 
          <div className="col-span-8 row-span-1">
            <ThemeSwitch />
          </div>

          <p ref={introRef} className="col-span-8 row-span-1 text-base sm:text-lg font-light tracking-wider leading-normal sm:leading-normal max-w-4xl flex flex-col justify-center">
            <span className="leading-[3] sm:leading-[3]">{texts.intro}<br/></span>
            {texts.desc}
          </p>
          <div className="col-span-8 row-span-1 w-full flex flex-col items-end justify-center gap-5">
            {texts.contacts?.map(({ text, link }, i) => (
              <a
                key={i}
                href={link}
                aria-label={`${text} link`}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                {text}
              </a>
            ))}
          </div>
        </section>

        <section id="projects" className="flex flex-col w-full pb-32 border-t border-sep">
          <h2 className="text-base text-text2 pt-8 pb-20">{texts.projectsHead}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3">
            {texts.projects?.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <img src={project.image} alt={project.title} className="rounded" />
                <h2 className="py-4 text-base md:text-lg">{project.title}</h2>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
