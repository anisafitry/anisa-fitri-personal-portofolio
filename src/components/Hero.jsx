import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 grid md:grid-cols-2 gap-10 shadow-2xl"
      >

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Let’s Get to Know <span className="text-cyan-400">Anisa Fitri</span>
          </h1>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I design and build modern, responsive web interfaces.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/anisafitry"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/anisa-fitri-26anfit/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/nisa.fit26/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaInstagram />
            </a>

            {/* EMAIL */}
            <a
              href="https://mail.google.com/mail/?view=cm&to=anisafitry2611@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* BUTTON */}
          <a
            href="#contact"
            className="inline-block w-fit px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 transition shadow-lg shadow-cyan-500/40"
          >
            Contact Me
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center items-center">
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-square">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-40"></div>

            {/* Image */}
            <img
              src="/profile4.png"
              alt="profile"
              className="relative w-full h-full object-cover rounded-full border-4 border-cyan-400"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
