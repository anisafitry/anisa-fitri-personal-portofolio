export default function About() {
    return (
        <section
            id="about"
            className="relative max-w-7xl mx-auto px-6 md:px-24 pt-36"
        >
            {/* subtle background glow */}
            <div className="absolute -top-24 -left-32 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />

            <div className="relative grid md:grid-cols-12 gap-20">

                {/* LEFT */}
                <div className="md:col-span-4">
                    <h2 className="text-4xl font-bold leading-tight tracking-tight">
                        About
                        <br />
                        <span className="text-cyan-400">Me</span>
                    </h2>

                    <div className="mt-6 w-14 h-[3px] bg-cyan-400 rounded-full" />

                    <p className="mt-6 text-gray-400 text-sm leading-relaxed max-w-xs">
                        A short overview of my background,
                        interests, and educational journey.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="md:col-span-8 space-y-16">

                    {/* DESCRIPTION */}
                    <div className="space-y-6">
                        <p className="text-gray-200 text-lg leading-relaxed">
                            I’m a frontend web developer with a strong interest in
                            creating clean and user-friendly web experiences.
                            I enjoy learning new technologies and turning ideas into
                            functional digital products.
                        </p>

                        <p className="text-gray-200 text-base leading-relaxed max-w-3xl">
                            Currently, I focus on frontend development using {" "}
                            <span className="text-cyan-400 font-medium">
                                HTML, CSS, JavaScript, and React
                            </span>
                            . along with modern UI frameworks, to build responsive and intuitive
                            user interfaces. I’m always eager to grow, improve my skills, and deliver
                            meaningful digital experiences.
                        </p>
                    </div>

                    {/* EDUCATION */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-10">
                            Education
                        </h3>

                        <div className="space-y-12">

                            {/* D4 */}
                            <div className="relative pl-8">
                                <span className="absolute left-0 top-1 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                                <span className="absolute left-[5px] top-5 w-px h-full bg-white/50" />

                                <h4 className="text-lg font-semibold text-white">
                                    D4 – Software Engineering Technology
                                </h4>
                                <p className="text-gray-400">
                                    Politeknik Wilmar Bisnis Indonesia
                                </p>
                                <p className="text-sm text-gray-400 mt-1">
                                    GPA{" "}
                                    <span className="text-cyan-400 font-medium">
                                        3.73 / 4.00
                                    </span>{" "}
                                    · 2021 – 2025
                                </p>
                            </div>

                            {/* SMA */}
                            <div className="relative pl-8">
                                <span className="absolute left-0 top-1 w-3 h-3 bg-cyan-100 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                                <span className="absolute left-[5px] top-5 w-px h-full bg-white/50" />

                                <h4 className="text-lg font-semibold text-white">
                                    Senior High School – Science (IPA)
                                </h4>
                                <p className="text-gray-400">
                                    SMA Negeri 11 Medan
                                </p>
                                <p className="text-sm text-gray-400 mt-1">
                                    Final Score{" "}
                                    <span className="text-cyan-400 font-medium">
                                        91.86
                                    </span>{" "}
                                    · Graduated 2021
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
