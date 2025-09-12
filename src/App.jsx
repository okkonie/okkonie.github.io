import { useState } from "react";
import texts from "./texts";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="
    bg-zinc-950 relative flex flex-col text-zinc-200 
    pt-40 sm:pt-60 md:pt-72 w-full 
    min-h-screen font-inter px-[10svw]
    selection:bg-zinc-200 selection:text-black"
  >
      <h2 className="text-xl sm:text-2xl md:text-3xl">
        {texts.name} 
      </h2>
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mt-2 tracking-wider font-medium">
        {texts.title1} {texts.title2}
      </h1>
      <p className="my-8 max-w-3xl leading-loose text-sm sm:text-base tracking-wide">
        {texts.desc}
      </p>

      <div className="flex items-center gap-3 max-w-3xl">
        <div className="border border-zinc-900 rounded-md flex flex-1 h-[42px] mr-3 items-center px-3">
          <p>{texts.mail}</p>
        </div>
        <a
          href={texts.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-white transition-colors p-3 rounded-md hover:bg-zinc-900"
        >
          <FaGithub size={28} />
        </a>
        <a
          href={texts.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-white transition-colors p-3 rounded-md hover:bg-zinc-900"
        > 
          <FaLinkedin size={28} />
        </a>
      </div>

      <h2 className="mt-28 text-2xl sm:text-3xl md:text-4xl text-white tracking-wider font-medium">
        Projects
      </h2>
    </div>
  );
}

export default App;
