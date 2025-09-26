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

      <header className="flex min-h-[70svh] h-max p-3 sm:p-4 md:p-8 lg:p-10 xl:p-14 items-end">
        <p className="text-sm sm:text-base lg:text-lg max-w-xl font-medium tracking-wider">
          {texts.header}
        </p>
      </header>

      <div className="fixed top-0 z-50 flex w-full items-center justify-end h-10 bg-bg overflow-hidden transition-colors duration-200"> 
        <Link link={texts.linkedin} />
        <Link link={texts.github} />
        <Link link={texts.email} />
      </div>


      <section 
        id="projects" 
        className="border-t border-sep relative p-3 sm:p-4 md:p-8 lg:p-10 xl:p-14"
      >
          <h2 className="flex items-center text-text2 font-medium text-xl my-10">{texts.projectsHead}</h2>
          <Project project={texts.projects.whenhl} />
          <Project project={texts.projects.whenhl} />
          <Project project={texts.projects.whenhl} />
      </section>

      <section 
        id="projects" 
        className="border-t border-sep p-3 sm:p-4 md:p-8 lg:p-10 xl:p-14"
      >
        <h2 className="flex items-center text-text2 font-medium text-xl">{texts.skillsHead}</h2>
      </section>
    </main>
  );
}
