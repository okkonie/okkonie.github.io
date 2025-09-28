import texts from "./texts.json";
import Link from "./components/Link";
import Project from "./components/Project";

import { useEffect, useMemo } from "react";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(SplitText, ScrollTrigger, );

export default function App() {

  // Text reveal
  useEffect(() => {
    let split;
    const run = () => {
      split = new SplitText(".header", { type: "lines" });
      gsap.from(split.lines, {
        yPercent: 100,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      });
    };
    if (document.fonts?.ready) document.fonts.ready.then(run);
    else run();
    return () => split?.revert();
  }, []);

  const age = useMemo(
    () => (t => new Date(Date.now() - (t < 1e12 ? t * 1000 : t)).getUTCFullYear() - 1970)(+texts.birthDay),
    [texts.birthDay]
  );

  return (
    <div className="
      min-h-screen flex flex-col w-full max-w-full 
      relative text-text bg-bg selection:bg-text selection:text-bg font-funnel
    ">
      
      <div className="fixed top-0 z-10 flex w-full items-center justify-end h-10 bg-bg"> 
        <Link link={texts.email} />
        <Link link={texts.github} />
        <Link link={texts.linkedin} />
      </div>

      <section className="flex min-h-[50svh] overflow-hidden h-max p-p items-center">
        <div className="max-w-4xl">
          <p className="header text-base text-[clamp(1.5rem,3vw,2.3rem)] leading-[1.4] py-32">
            {texts.beforeAgeText} 
            {age}
            {texts.AfterAgeText}
          </p>
        </div>
      </section>


      <section 
        id="projects" 
        className="relative w-full p-p flex flex-col xl:flex-row xl:items-start justify-between gap-0 xl:gap-32"
      >
        <h2 className="sticky top-10 self-start font-medium text-base lg:text-lg text-text2 pt-5 pb-p">
          {texts.projectsHead}
        </h2>

        <div className="flex flex-col flex-1 items-center">
          {texts.projects.map((project, index) => (
            <Project
              key={index}
              project={project}
            />
          ))}
        </div>

      </section>

      <section 
        id="skills" 
        className="p-p"
      >
        <h2 className="
          items-center font-medium text-base pr-10
          lg:text-lg text-text2 pb-p sticky top-10 pt-5
        ">
          {texts.skillsHead}
        </h2>
      </section>

    </div>
  );
}
