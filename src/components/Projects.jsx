import texts from "../texts";
import { GoLinkExternal } from "react-icons/go";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col w-full bg-dbg rounded-[7vw] mt-[10vh] p-[7vw]">
      <h1 className="text-text text-2xl md:text-3xl lg:text-4xl pb-[3vw]">Projects</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {texts.projects.map((project, index) => (
          <div key={index} className="py-10 space-y-4 rounded-lg shadow-md">
            <img src={project.image} alt={project.title} className="rounded"/>
            <a href={project.link} className="flex justify-between items-center text-text">
              <h2 className="text-lg">{project.title}</h2>
              <GoLinkExternal />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}