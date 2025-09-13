import texts from "../texts";

export default function Skills() {
  return (
    <section id="skills" className="flex justify-between w-full my-[10vh] px-[7vw] gap-10">
      <h1 className="text-text text-2xl md:text-3xl lg:text-4xl mb-10">Tools</h1>
      <div className="flex flex-col flex-wrap justify-end">
        {texts.skills.map((skill, index) => (
          <div key={index} className="text-text px-5 py-2 rounded-md text-sm md:text-base text-end">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}