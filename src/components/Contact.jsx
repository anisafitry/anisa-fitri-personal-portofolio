import { Mail, Github, Linkedin, Instagram } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-4">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyan-400">Contact</span>{" "}
            <span className="text-white">Me</span>
          </h2>

          <p className="text-gray-300 mb-10 max-w-xl mx-auto">
            Interested in working together or just want to say hi?
            Feel free to reach out anytime.
          </p>

          {/* ICONS (HERO STYLE) */}
          <div className="flex justify-center gap-6 mb-10">
            {[
              {
                icon: <Github size={18} />,
                link: "https://github.com/anisafitry",
              },
              {
                icon: <Linkedin size={18} />,
                link: "https://www.linkedin.com/in/anisa-fitri-26anfit/",
              },
              {
                icon: <Instagram size={18} />,
                link: "https://www.instagram.com/nisa.fit26/",
              },
              {
                icon: <Mail size={18} />,
                link: "https://mail.google.com/mail/?view=cm&to=anisafitry2611@gmail.com",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                className="
                  w-11 h-11 rounded-full
                  flex items-center justify-center
                  border border-cyan-400/60
                  text-cyan-400
                  hover:bg-cyan-400 hover:text-[#0b1220]
                  hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
                  transition
                "
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
