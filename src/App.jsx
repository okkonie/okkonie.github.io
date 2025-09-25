import texts from "./Texts";
import Link from "./components/Link";
import Project from "./components/Project";

export default function App() {

  return (
    <main
      className="
        flex flex-col text-text w-full font-montserrat
        relative min-h-screen bg-bg transition-colors duration-200
        selection:bg-text selection:text-bg"
    >   

      <header className="flex min-h-[50svh] h-max p-[2vw]">
        <p className="text-sm sm:text-base lg:text-lg max-w-xl font-medium">
          {texts.header}
        </p>
      </header>

      <div className="sticky top-0 z-50 flex w-full items-center h-10 bg-bg overflow-hidden transition-colors duration-200"> 
        <Link link={texts.linkedin} />
        <Link link={texts.github} />
        <Link link={texts.email} />
      </div>


      <section 
        id="projects" 
        className="pt-[10vh] px-[2vw] space-y-10 border-t border-sep"
      >
        <h2 className="text-xl font-semibold text-text2">{texts.projectsHead}</h2>
        <div className="flex flex-col items-end">
          <Project project={texts.projects.whenhl} />
        </div>
      </section>

      <section 
        id="projects" 
        className="pt-20 space-y-20 border-t border-sep"
      >
        <h2 className="text-[clamp(2rem,3vw,4rem)] font-semibold">{texts.skillsHead}</h2>
      </section>
    </main>
  );
}
