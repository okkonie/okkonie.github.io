export default function({project}) {

  return(
    <div className="
      w-full flex flex-col sm:flex-row transition-colors duration-500 sticky top-10 py-5 gap-5 bg-bg
    ">
      
      <img src={project.image} alt={project.title} className="w-full sm:w-[300px] lg:w-[400px] rounded-sm" />
      <div className="space-y-5 flex flex-col max-w-md pb-5">
        <div className="flex gap-5 items-center">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.langs.map((lang, i) =>
              <p key={i} className="text-xs font-medium border px-1 py-0.5 rounded border-text2/60 text-text2">{lang}</p>
            )}
          </div>
        </div>
        <p className="text-sm text-text2">{project.desc}</p>

      </div>
    </div>
  )
}