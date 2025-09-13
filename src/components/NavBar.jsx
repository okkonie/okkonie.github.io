import texts from "../texts";

export default function NavBar() {
  return (
    <nav className="flex justify-end sticky top-0 w-full z-10 items-center backdrop-blur-md bg-bg/50 px-5">
      <a href={texts.github} target="_blank" rel="noopener noreferrer" className="p-5 text-text2 hover:text-text transition-colors duration-150">
        github
      </a>
      <a href={texts.linkedin} target="_blank" rel="noopener noreferrer" className="p-5 text-text2 hover:text-text transition-colors duration-150">
        linkedin
      </a>
    </nav>
  );
}
