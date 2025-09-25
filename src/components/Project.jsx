
export default function({project}) {

  return(
    <a 
      className="w-full justify-between flex gap-5 transition-colors p-4 rounded-md duration-500"
      href={project.link}
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-text2 font-medium">{project.desc}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.langs.map((lang, i) => (
            <p key={i} className="text-xs border border-text2 px-1.5 py-1 rounded">{lang}</p>
            )
          )}

        </div>
      </div>
      
      <img src={project.image} alt={project.title} className="w-[40%] rounded-sm"/>
    </a>
  )
}