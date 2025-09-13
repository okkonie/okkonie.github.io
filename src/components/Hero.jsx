import texts from "../texts";


export default function Hero() {
  return (
    <section id="hero" className="flex flex-col px-[10vw] pt-[10vh] space-y-8 md:space-y-10">

      <h1 className="text-4xl md:text-6xl lg:text-7xl text-text font-semibold -tracking-wide leading-normal md:leading-snug lg:leading-snug">
        {texts.title1} <br /> {texts.title2}
      </h1>

      <p className="max-w-3xl leading-loose text-sm sm:text-base tracking-wide">
        {texts.desc}
      </p>

      <a 
        href={texts.mailto} 
        className="bg-text/10 w-max py-3 px-4 rounded inline-block text-sm text-text2 hover:scale-105 hover:text-text hover:bg-text/20 transition-all duration-150">
        get in touch
      </a>

    </section>
  );
}