"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeProvider() {
    const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

            if (savedTheme) {
                setTheme(savedTheme as "light" | "dark");
            } else {
                setTheme("light"); // Light mode par défaut
            }
        }
    }, []);

    useEffect(() => {
        if (theme) {
            const root = document.documentElement;
            if (theme === "dark") {
                root.classList.add("dark");
            } else {
                root.classList.remove("dark");
            }
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    if (theme === null) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 transition rounded text-light-5 dark:text-white"
        >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
    );
}