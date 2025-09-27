import texts from "./Texts";
import Link from "./components/Link";
import Project from "./components/Project";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(SplitText, ScrollTrigger, );

export default function App() {

  // Text reveal
  useEffect(() => {
    let split;
    const run = () => {
      split = new SplitText(".header", { type: "words" });
      gsap.from(split.words, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.01,
      });
    };
    if (document.fonts?.ready) document.fonts.ready.then(run);
    else run();

    return () => split?.revert();
  }, []);

  return (
    <div className="
      relative font-montserrat smooth-wrapper
      w-full text-text bg-bg selection:bg-text 
      selection:text-bg min-h-screen
    ">
      
      <div className="fixed top-0 z-10 flex w-full items-center justify-end h-10 bg-bg"> 
        <Link link={texts.email} />
        <Link link={texts.github} />
        <Link link={texts.linkedin} />
      </div>

      <main className="flex flex-col w-full relative smooth-content">

        <header className="flex min-h-[70svh] overflow-hidden h-max p-3 sm:p-4 md:p-8 lg:p-10 xl:p-14 items-end">
          <div className="max-w-xl">
            <p className="header text-base sm:text-lg lg:text-xl tracking-wider">
              {texts.header}
            </p>
          </div>
        </header>

        <section 
          id="projects" 
          className="border-t border-sep relative p-3 sm:p-4 md:p-8 lg:p-10 xl:p-14"
        >
          <h2 className="flex items-center text-text2 font-medium text-xl my-10">{texts.projectsHead}</h2>
          <Project project={texts.projects.whenhl} />
          <Project project={texts.projects.whenhl} />
        </section>

        <section 
          id="skills" 
          className="border-t border-sep p-3 sm:p-4 md:p-8 lg:p-10 xl:p-14"
        >
          <h2 className="flex items-center text-text2 font-medium text-xl">{texts.skillsHead}</h2>
        </section>
      </main>
    </div>
  );
}
