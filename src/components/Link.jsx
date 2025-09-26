import { LuArrowUpRight } from "react-icons/lu";

export default function Link({link}) {

  return(
    <a
      href={link.link}
      aria-label={`${link.text} link`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group text-xs font-medium sm:text-sm w-32 h-10 justify-center items-center
        flex hover:tracking-widest transition-[letter-spacing] duration-200 pr-[2vw]
      "
    >
      <span className="inline-flex w-full items-center justify-end">
        
        <LuArrowUpRight
          className="opacity-0 -translate-y-0.5 translate-x-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 group-hover:-translate-x-1"
          aria-hidden="true"
        />
        <span>{link.text}</span>
      </span>
    </a>
  )
}