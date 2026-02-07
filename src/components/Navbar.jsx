import { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const sections = ["about", "skills", "projects", "contact"]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(section => {
        const el = document.getElementById(section)
        if (!el) return

        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClass = id =>
    `transition ${
      active === id ? "text-cyan-400" : "text-gray-200 hover:text-cyan-400"
    }`

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="font-bold text-lg md:text-xl text-cyan-400">
          Anisa Fitri || Personal Portofolio
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm">
          {sections.map(id => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl text-white"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0b1220]/95 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm">
            {sections.map(id => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={linkClass(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
