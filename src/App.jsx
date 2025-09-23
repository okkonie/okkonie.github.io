import texts from "./Texts";
import ThemeSwitch from "./components/ThemeSwitch";
import Link from "./components/Link";


export default function App() {

  return (
    <main
      className="
        flex flex-col text-text w-full 
        relative min-h-screen font-poppins bg-bg transition-colors duration-200
        selection:bg-text selection:text-bg p-3 sm:p-4 md:p-6 lg:p-10"
    >   
      <div className="flex justify-between w-full"> 
        <p className="text-[clamp(2rem,8vw,8rem)] font-zalando font-semibold leading-[0.75]">{texts.fisrtName}</p>
        <p className="text-[clamp(2rem,8vw,8rem)] font-zalando font-semibold leading-[0.75]">{texts.lastName}</p>
      </div>

      <div className="sticky top-0 z-50 flex w-full justify-between items-center h-10 mt-4 bg-bg overflow-hidden transition-colors duration-200"> 
        <ThemeSwitch />
        <div className="flex">
          <Link text={texts.linkedin.text} link={texts.linkedin.link} />
          <Link text={texts.github.text} link={texts.github.link} />
          <Link text={texts.email.text} link={texts.email.link} />
        </div>
      </div>

      <div className="flex flex-1 justify-between items-end pt-36 md:min-h-[50svh] border-b border-sep pb-4">  
        <p className="font-light text-[clamp(0.8rem,1.5vw,1.1rem)] max-w-2xl">
          {texts.desc}
        </p>
      </div>  

      <section id="projects" className="flex flex-col w-full pt-8">
        <h2 className="text-[clamp(2rem,3vw,4rem)] font-zalando flex items-center">{texts.projectsHead}</h2>
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

      <section id="languages" className="flex flex-col w-full pb-32 border-sep">
        <h2 className="text-base text-text2 h-[10dvh] flex items-center">{texts.skillsHead}</h2>
      </section>
    </main>
  );
}
