import texts from "../texts";

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-evenly">
          <h2 className="text-xl tracking-widest w-[80%] mt-20">{texts.intro}</h2>
          <h1 className="text-text text-[11vw] tracking-tight font-black -mt-20">{texts.name}</h1>
          <p className="max-w-2xl tracking-wider px-10 self-end">{texts.desc}</p>

    </section>
  );
}