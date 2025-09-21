import texts from "../Texts";
export default function Links() {

  return(
    <div className="flex flex-col pb-2.5">
      {texts.contacts?.map(({ text, link }, i) => (
        <a
          key={i}
          href={link}
          aria-label={`${text} link`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 pl-2.5 text-sm hover:tracking-widest transition-[letter-spacing] duration-200 text-end"
        >
          {text}
        </a>
      ))}
    </div>
  )
}