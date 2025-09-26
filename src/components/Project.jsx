
export default function({project}) {

  return(
    <div className="
      w-full flex flex-col px-[2vw] sm:flex-row transition-colors duration-500 sticky top-10 gap-5 py-[2vw] sm:py-10 bg-bg
    ">
      
      <img src={project.image} alt={project.title} className="w-full sm:w-[300px] lg:w-[400px] rounded-sm" />
      <div className="space-y-3 flex flex-col max-w-md pb-5">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-text2">{project.desc}</p>
      </div>
    </div>
  )
}