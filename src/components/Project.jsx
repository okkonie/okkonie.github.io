import { HiMiniArrowUpRight } from "react-icons/hi2"; 

export default function Project({ project }) {
  return(
    <div
      className="
        w-full flex flex-col-reverse sm:flex-row items-start sm:items-start
        justify-between py-5 sticky top-32 bg-bg gap-5 sm:gap-10 max-w-7xl
      "
    >
        
        <div className="max-w-lg space-y-3">
          <h4 className="text-lg lg:text-xl">
            {project.title}
          </h4>
          <p className="text-text2 text-sm lg:text-base">
            {project.desc}
          </p>
        </div>
      <img src={project.image} alt={project.title} className="w-full sm:w-[300px] lg:w-[400px] xl:w-[500px]" />
    </div>
  )
}