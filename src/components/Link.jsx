import { HiMiniArrowUpRight } from "react-icons/hi2";

export default function Link({link}) {

  return(
    <a
      href={link.link}
      aria-label={`${link.text} link`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group text-xs font-normal sm:text-sm w-32 sm:w-40 justify-center items-center
        flex hover:tracking-widest transition-[letter-spacing] duration-200 pr-p h-10
      "
    >
      <span className="inline-flex w-full items-center justify-end">
        
        <HiMiniArrowUpRight
          className="opacity-0 size-4 -translate-y-0.5 translate-x-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 group-hover:-translate-x-1"
          aria-hidden="true"
        />
        <span>{link.text}</span>
      </span>
    </a>
  )
}