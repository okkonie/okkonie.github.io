import texts from "./Texts";
import ThemeSwitch from "./components/ThemeSwitch";
import Link from "./components/Link";
import Project from "./components/Project";

export default function App() {

  return (
    <main
      className="
        flex flex-col text-text w-full font-montserrat
        relative min-h-screen bg-bg transition-colors duration-200
        selection:bg-text selection:text-bg px-4 md:px-6 lg:px-10 xl:px-14"
    >   
      <header className="flex flex-col w-full h-[calc(100vh-5rem)]">

        <div className="flex flex-col w-full justify-between">
          <h1 className="text-[clamp(2rem,13.5vw,8rem)] leading-[1] tracking-wide font-semibold mt-[10vh]">{texts.firstName} <br/>{texts.lastName}</h1>
        </div>
        <p className="tracking-wide leading-relaxed text-sm md:text-base w-full max-w-2xl mt-[10vh]">
          {texts.desc}
        </p>
      </header>


      <div className="sticky top-0 z-50 border-b border-sep flex w-full justify-between items-center h-10 bg-bg overflow-hidden transition-colors duration-200"> 
        <div className="flex">
          <Link text={texts.linkedin.text} link={texts.linkedin.link} />
          <Link text={texts.github.text} link={texts.github.link} />
          <Link text={texts.email.text} link={texts.email.link} />
        </div>
        <ThemeSwitch />
      </div>

      <section 
        id="projects" 
        className="h-svh pt-20 space-y-14"
      >
        <h2 className="text-[clamp(2rem,3vw,4rem)] font-semibold">{texts.projectsHead}</h2>
        <Project project={texts.projects.whenhl} />
      </section>
    </main>
  );
}
