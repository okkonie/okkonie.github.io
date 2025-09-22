import texts from "./Texts";
import ThemeSwitch from "./components/ThemeSwitch";
import Links from "./components/Links";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";  

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App() {
  const smootherRef = useRef(null);

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
          flex flex-col text-text w-full
          relative min-h-screen font-poppins transition-colors duration-300
          selection:bg-text selection:text-bg"
      > 
        <section className="
            w-full relative flex flex-col sm:min-h-dvh justify-between
            overflow-hidden p-4 md:p-6 lg:p-10
        "> 
          <div className="w-full flex justify-between"> 
            <p className="text-[7.5vw] font-zalando font-semibold">{texts.fisrtName}</p>
            <div className="flex flex-col items-start self-end">
              <p className="text-[7.5vw] font-zalando font-semibold">{texts.lastName}</p>
              <p className="
                text-sm sm:text-base tracking-wide hidden xl:flex flex-1 pt-32 pb-24 font-light
                leading-normal sm:leading-normal max-w-3xl flex-col justify-center
              ">
                {texts.desc}
              </p>
            </div>
          </div>

          <Links />

        </section>

        <section id="projects" className="flex flex-col w-full pb-32 border-t border-sep">
          <h2 className="text-base text-text2 h-[10dvh] flex items-center">{texts.projectsHead}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 mt-10">
            {texts.projects?.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <img src={project.image} alt={project.title} className="rounded" />
                <h2 className="py-4 text-sm group-hover:underline">{project.title}</h2>
              </a>
            ))}
          </div>
        </section>

        <section id="languages" className="flex flex-col w-full pb-32 border-t border-sep">
          <h2 className="text-base text-text2 h-[10dvh] flex items-center">{texts.skillsHead}</h2>
        </section>
      </main>
    </div>
  );
}
