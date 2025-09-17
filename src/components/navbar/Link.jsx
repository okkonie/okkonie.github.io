export default function Link({ url, text }) {
  return ( 
    <a 
      className="p-3 text-text md:text-text2 transition-transform duration-200
                md:hover:scale-105 md:hover:text-text active:scale-95 focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-text/30 rounded-md"
      href={url}
      aria-label={text + "link"}
    >
      {text}
    </a>
  );

}