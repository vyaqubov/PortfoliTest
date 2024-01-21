"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = "light" | "dark";

interface ContextThemeProps {
    children: React.ReactNode
}

type ThemeContextType = {
    theme: Theme;
    toogleTheme: () => void;
};

const ThemeContextvalue = createContext<ThemeContextType | null>(null);

function ThemeContext({ children }: ContextThemeProps) {
    const [theme, setTheme] = useState<Theme>("light");

    function toogleTheme() {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
        const LocalTheme = window.localStorage.getItem("theme") as Theme | null;

        if (LocalTheme) {
            setTheme(LocalTheme);
            if (LocalTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, [])

    return <ThemeContextvalue.Provider value={{ theme, toogleTheme }}>
        {children}
    </ThemeContextvalue.Provider>
}

export default ThemeContext

export function useThemeFunc(){
    const context = useContext(ThemeContextvalue);

    if(context === null){
        throw new Error("Use theme must be u")
    }

    return context
}