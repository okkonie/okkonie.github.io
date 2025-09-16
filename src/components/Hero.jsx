import texts from "../texts";


export default function Hero() {
  return (
    <section id="hero" className="w-full h-screen grid grid-cols-1 grid-rows-2 justify-center px-[5vw]">
      <div className="flex flex-1 flex-col justify-center space-y-4">
        <h2 className="text-lg md:text-xl">{texts.intro}</h2>
        <h1 className="text-text text-3xl md:text-4xl tracking-wider md:leading-tight">{texts.title1} &<br/>{texts.title2}</h1>
      </div>

      <div className="flex flex-1 justify-end items-center">

        <p className="w-full md:w-1/2">{texts.desc}</p>
      </div>

    </section>
  );
}