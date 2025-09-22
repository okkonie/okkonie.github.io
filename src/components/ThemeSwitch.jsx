import { useEffect, useState } from "react";
import { MdComputer, MdLightMode, MdDarkMode } from "react-icons/md";

function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "system");

  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const root = document.documentElement;

    const apply = (t) => {
      const resolved = t === "system" ? (mql.matches ? "dark" : "light") : t;
      root.dataset.theme = resolved;
      root.classList.toggle("dark", resolved === "dark");
    };

    apply(theme);
    localStorage.setItem("theme", theme);

    const onChange = () => theme === "system" && apply("system");

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    } else {
      // Safari < 14 fallback
      mql.onchange = onChange;
      return () => { mql.onchange = null; };
    }
  }, [theme]);

  return { theme, setTheme };
};

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const base = "inline-flex items-center rounded size-7 justify-center text-sm transition-colors";
  const active = "bg-text text-bg";
  const inactive = "bg-transparent hover:bg-text/10";

  return (
    <div role="group" aria-label="Theme" className="flex flex-col gap-1">
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-pressed={theme === "light"}
        className={`${base} ${theme === "light" ? active : inactive}`}
      >
        <MdLightMode />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-pressed={theme === "dark"}
        className={`${base} ${theme === "dark" ? active : inactive}`}
      >
        <MdDarkMode />
      </button>
      <button
        type="button"
        onClick={() => setTheme("system")}
        aria-pressed={theme === "system"}
        className={`${base} ${theme === "system" ? active : inactive}`}
      >
        <MdComputer />
      </button>
    </div>
  );
}