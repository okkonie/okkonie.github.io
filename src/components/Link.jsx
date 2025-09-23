import { LuArrowUpRight } from "react-icons/lu";

export default function Link({text, link}) {

  return(
    <a
      href={link}
      aria-label={`${text} link`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group text-xs sm:text-sm w-24 sm:w-32 h-10 justify-center items-center px-1
        flex hover:tracking-widest transition-[letter-spacing] duration-200
      "
    >
      <span className="inline-flex w-full items-center justify-end">
        <span>{text}</span>
        <LuArrowUpRight
          className="opacity-0 -translate-y-0.5 translate-x-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </a>
  )
}