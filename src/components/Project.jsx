
export default function({project}) {

  return(
    <div className="max-w-2xl flex justify-between">

      <div className="flex flex-col space-y-3">
        <h3 className="text-lg">{project.title}</h3>
        <p className="text-text2 text-sm">{project.desc}</p>
      </div>
      <img src={project.image} alt={project.title} className="w-72"/>
    </div>
  )
}