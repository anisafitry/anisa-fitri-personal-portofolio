export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 md:px-8 py-24">
      <div
        className="
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-8 md:p-14
          shadow-2xl
        "
      >
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          <span className="text-cyan-400">My</span> Skills
        </h2>

        <div className="w-24 h-1 bg-cyan-400 rounded-full mb-12"></div>

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* HARD SKILLS */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Hard Skills
            </h3>

            <ul className="space-y-3">
              {[
                "HTML, CSS, JavaScript",
                "React JS",
                "UI / UX Design",
              ].map((skill, index) => (
                <li
                  key={index}
                  className="
                    px-4 py-3 rounded-xl
                    bg-[#10192d]
                    border border-white/10
                    text-gray-300
                    hover:border-cyan-400/40
                    transition
                  "
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* TOOLS */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Tools
            </h3>

            <ul className="space-y-3">
              {[
                "Visual Studio Code",
                "GitHub",
                "Figma",
                "Canva",
              ].map((tool, index) => (
                <li
                  key={index}
                  className="
                    px-4 py-3 rounded-xl
                    bg-[#10192d]
                    border border-white/10
                    text-gray-300
                    hover:border-cyan-400/40
                    transition
                  "
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {/* SOFT SKILLS */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Soft Skills
            </h3>

            <ul className="space-y-3">
              {[
                "Good Communication",
                "Problem Solving",
                "Teamwork",
                "Time Management",
                "Fast Learner",
              ].map((skill, index) => (
                <li
                  key={index}
                  className="
                    px-4 py-3 rounded-xl
                    bg-[#10192d]
                    border border-white/10
                    text-gray-300
                    hover:border-cyan-400/40
                    transition
                  "
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
