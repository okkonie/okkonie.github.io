import { useEffect, useState } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

export default function DarkThemeButton() {
  const getSystemPref = () =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getInitial = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return getSystemPref();
  };

  const [dark, setDark] = useState(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const saved = localStorage.getItem("theme");
    const handler = (e) => {
      if (!saved) setDark(e.matches);
    };
    mq.addEventListener?.("change", handler);
    // Fallback for Safari
    mq.addListener?.(handler);
    return () => {
      mq.removeEventListener?.("change", handler);
      mq.removeListener?.(handler);
    };
  }, []);

  return (
    <button
      className="fixed top-4 right-4 z-50 p-3 transition-colors duration-300 text-text"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
    >
      {dark ? <IoMdMoon className="size-6"/> : <IoMdSunny className="size-6"/>}
    </button>
  );
}
