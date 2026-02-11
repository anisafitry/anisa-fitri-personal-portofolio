const projects = [
    {
        title: "Anisa Fitri || Personal Portofolio",
        desc: "Website yang memperkenalkan background, skill, dan project-project yang telah saya buat",
        live: "https://anisa-fitri-personal-portofolio.vercel.app/",
        img: "/portofolio.png",
    },
    {
        title: "Rumah Kinclong Medan",
        desc: "Website layanan kebersihan rumah, AC, toren, dan halaman dengan tenaga profesional & alat modern.",
        live: "https://rumahkinclongmedan.vercel.app/",
        img: "/rumahkinclongmedan.png",
    },
    {
        title: "SweetBite Bakery",
        desc: "Website landing page untuk toko bakery",
        live: "https://sweet-bite.vercel.app/",
        img: "/sweetbite.png",
    },
    {
        title: "StayFit UI/UX",
        desc: "Desain UI/UX aplikasi olahraga mandiri dengan menggunakan Figma.",
        live: "https://www.figma.com/proto/R4EdIliQQYRS7jPsmrnBc2/Project-StayFit-By.AnisaFitri",
        img: "/stayfit-figma.png",
    },
    {
        title: "Calculator Web",
        desc: "Aplikasi kalkulator sederhana",
        live: "https://anisafitry.github.io/Calculator/",
        img: "/calculator.png",
    },
    {
        title: "Quiz Pembelajaran",
        desc: "Website quiz pembelajaran umum.",
        live: "https://quiz-pembelajaran.vercel.app/",
        img: "/quiz.png",
    },
]

export default function Projects() {
    return (
        <section id="projects" className="max-w-7xl mx-auto px-10 py-20">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl">

                {/* TITLE */}
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    <span className="text-cyan-400">Projects</span>{" "}
                    <span className="text-white">I’ve Built</span>
                </h2>
                <div className="w-20 h-1 bg-cyan-400 rounded-full mb-8"></div>

                {/* GRID */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                    group
                                    bg-[#10192d]
                                    border border-white/10
                                    rounded-xl
                                    overflow-hidden
                                    transition
                                    hover:-translate-y-1
                                    hover:shadow-[0_12px_30px_rgba(34,211,238,0.25)]
                                    flex flex-col
                                    h-full">
                            {/* IMAGE */}
                            <div className="h-28 overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-base font-semibold text-white mb-1">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-gray-300 leading-snug">
                                    {project.desc}
                                </p>

                                {/* VIEW LIVE */}
                                <span className="inline-block mt-auto pt-3 text-sm text-cyan-400 font-medium">
                                    View Live →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
