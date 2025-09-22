import texts from "../Texts";
import { LuArrowUpRight } from "react-icons/lu";

export default function Links() {

  return(
    <div className="flex w-full justify-center md:justify-end px-3">
      {texts.contacts?.map(({ text, link }, i) => (
        <a
          key={i}
          href={link}
          aria-label={`${text} link`}
          target="_blank"
          rel="noopener noreferrer"
          className="group xl:text-lg py-2.5 pl-2.5 text-sm w-48 h-24 justify-center items-center flex hover:tracking-widest transition-[letter-spacing] duration-200"
        >
          <span className="inline-flex w-full items-center justify-center md:justify-end gap-2">
            <span>{text}</span>
            <LuArrowUpRight
              className="hidden md:block size-4 opacity-0 -translate-y-0.5 translate-x-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </a>
      ))}
    </div>
  )
}