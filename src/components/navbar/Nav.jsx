import texts from "../../texts"
import ThemeSwitch from "./ThemeSwitch"
import Link from "./Link"
export default function Nav() {

  return (
    <div className="fixed flex justify-end h-16 items-center top-0 w-full backdrop-blur-md px-3 space-x-4">
      <Link url={texts.github} text={"github"} />
      <Link url={texts.linkedin} text={"linkedin"} />
      <ThemeSwitch />
    </div>
  )
}