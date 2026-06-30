"use client"
import React from 'react'
import LightButton from "../../assets/website/light-mode-button.png"
import DarkButton from "../../assets/website/dark-mode-button.png"
import Image from 'next/image'

const getInitialTheme = () => {
    if (typeof window === "undefined") {
        return "light";
    }

    const savedTheme = window.localStorage.getItem("theme");

    return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
}

const DarkMode = () => {
    const [theme, setTheme] = React.useState<"light" | "dark">(getInitialTheme);

    React.useEffect(() => {
        const element = document.documentElement;

        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }, [theme]);

  return (
    <div className="relative">
        <Image onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightButton} alt="Light Mode" className={`w-12 absolute right-0 z-10 cursor-pointer ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-500`} />
        <Image onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={DarkButton} alt="Dark Mode" className={`w-12  cursor-pointer`} />
    </div>
  )
}

export default DarkMode
