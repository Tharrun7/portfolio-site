import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiFirebase, SiPython, SiFigma, SiFlutter, SiGit, SiUnrealengine, SiBlender, SiTailwindcss, SiMongodb, SiNodedotjs } from "react-icons/si";

export default function Portfolio() {
  const [text, setText] = useState("");
  const message = "Full Stack Developer | Game Dev Enthusiast | UI/UX Intern";

  useEffect(() => {
    document.title = "T.S Tharrun | Portfolio";

    let i = 0;
    const typing = setInterval(() => {
      setText(message.slice(0, i));
      i++;
      if (i > message.length) clearInterval(typing);
    }, 50);

    return () => clearInterval(typing);
  }, []);

  return (
    <main className="bg-black text-green-400 font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg py-3 shadow-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-cyan-300 text-sm md:text-base">
          <span className="font-bold text-pink-500 tracking-widest">THARRUN</span>
          <ul className="flex gap-6">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Spacer for Navbar */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-10 bg-gradient-to-br from-black via-zinc-900 to-black">
        {/* Image Frame */}
        <motion.div
          className="w-64 h-64 rounded-2xl overflow-hidden border border-cyan-400 shadow-[0_0_20px_#0ff] hover:scale-105 transition duration-500"
          whileHover={{ rotateY: 10, rotateX: 5 }}
        >
          <img src="tharrun.jpeg" alt="Tharrun.jpg" className="w-full h-full object-cover" />
        </motion.div>

        {/* Text */}
        <div className="max-w-xl text-left mt-10 md:mt-0">
          <h1 className="text-white text-5xl font-bold tracking-wide">T.S Tharrun</h1>
          <p className="text-pink-400 mt-4 font-mono text-lg">{text}</p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-5 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all">
              See Projects
            </a>
            <a href="/resume.pdf" download className="px-5 py-2 border border-pink-500 text-pink-300 rounded-lg hover:bg-pink-500 hover:text-black transition">
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section id="about"
        className="py-20 px-6 max-w-4xl mx-auto text-cyan-200"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 text-fuchsia-400">About Me</h2>
        <p className="leading-relaxed text-lg">
          Full Stack Developer with strong fundamentals in UI/UX design, game development, and machine learning. Experienced in crafting responsive web and mobile apps using modern tech stacks. Passionate about building scalable systems and immersive digital experiences.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section id="skills"
        className="bg-zinc-950 py-20 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-emerald-400">Skills & Tech Stack</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto text-center text-cyan-300 text-4xl">
          <SiHtml5 title="HTML5" />
          <SiCss3 title="CSS3" />
          <SiJavascript title="JavaScript" />
          <SiReact title="React" />
          <SiTailwindcss title="Tailwind CSS" />
          <SiFirebase title="Firebase" />
          <SiPython title="Python" />
          <SiFigma title="Figma" />
          <SiFlutter title="Flutter" />
          <SiGit title="Git" />
          <SiNodedotjs title="Node.js" />
          <SiMongodb title="MongoDB" />
          <SiUnrealengine title="Unreal Engine" />
          <SiBlender title="Blender" />
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section id="projects"
        className="py-20 px-6 max-w-6xl mx-auto text-cyan-200"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10 text-center text-pink-500">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-800/80 border border-pink-500 p-6 rounded-xl shadow-xl hover:scale-105 hover:shadow-pink-500/40 transition">
            <h4 className="text-2xl font-bold mb-2 text-fuchsia-300">Portfolio Website</h4>
            <p className="text-zinc-300 text-sm mb-2">A modern developer portfolio made with React and TailwindCSS.</p>
            <span className="text-cyan-400 text-xs">Tech: React, Tailwind, Firebase</span>
          </div>
          <div className="bg-zinc-800/80 border border-emerald-500 p-6 rounded-xl shadow-xl hover:scale-105 hover:shadow-emerald-400/40 transition">
            <h4 className="text-2xl font-bold mb-2 text-green-300">UI/UX Dashboard</h4>
            <p className="text-zinc-300 text-sm mb-2">A dashboard wireframe made in Figma for a client SaaS tool.</p>
            <span className="text-cyan-400 text-xs">Tech: Figma</span>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <footer id="contact" className="bg-gradient-to-t from-black via-purple-800 to-black py-10 text-center">
        <h3 className="text-3xl font-semibold mb-2 text-lime-400">Let's Connect</h3>
        <p className="text-pink-300 mb-4">tharrunts7@gmail.com</p>
        <div className="flex justify-center gap-6 text-2xl text-cyan-300">
          <a
            href="https://github.com/Tharrun7"
            className="hover:text-pink-500 transition-transform hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/t-s-tharrun-554869320/"
            className="hover:text-emerald-400 transition-transform hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="text-zinc-500 text-sm mt-6">© {new Date().getFullYear()} T.S Tharrun</p>
      </footer>
    </main>
  );
}