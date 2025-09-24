import { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";


function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "system");

  const getResolved = () => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    return theme === "system" ? (mql.matches ? "dark" : "light") : theme;
  };

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

  return { theme, setTheme, resolvedTheme: getResolved() };
};

// removed custom SVG icon; using react-icons with crossfade instead

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div aria-label="Theme" className="flex">
      <button
        type="button"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        aria-pressed={resolvedTheme === 'dark'}
        className="
          inline-flex items-center rounded size-10 justify-end
          text-sm transition-transform duration-200 bg-transparent
        "
      >
        <span className="relative inline-block size-5">
          <HiSun
            aria-hidden
            className={`absolute inset-0 size-4 transition-opacity duration-200 ${resolvedTheme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
          />
          <HiMoon
            aria-hidden
            className={`absolute inset-0 size-4 transition-opacity duration-200 ${resolvedTheme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
          />
        </span>
      </button>
    </div>
  );
}