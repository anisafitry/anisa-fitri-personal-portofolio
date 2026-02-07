import { FaMoon, FaSun } from "react-icons/fa"
import { useTheme } from "../context/ThemeContext"

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    return (
        <nav className="fixed w-full top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-16 py-4 flex justify-between items-center">
                <h1 className="font-bold text-xl text-cyan-400">Anisa Fitri | Personal Portofolio</h1>
                <ul className="hidden md:flex gap-8 text-sm">
                    <li><a href="#about" className="hover:text-cyan-400">About</a></li>
                    <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
                    <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
                    <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
