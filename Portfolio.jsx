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
      <div className="h-16"></div>
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-10 bg-gradient-to-br from-black via-zinc-900 to-black">
        <motion.div className="w-64 h-64 rounded-2xl overflow-hidden border border-cyan-400 shadow-[0_0_20px_#0ff] hover:scale-105 transition duration-500" whileHover={{ rotateY: 10, rotateX: 5 }}>
          <img src="./tharrun.jpeg" alt="Tharrun" className="w-full h-full object-cover" />
        </motion.div>
        <div className="max-w-xl text-left mt-10 md:mt-0">
          <h1 className="text-white text-5xl font-bold tracking-wide">T.S Tharrun</h1>
          <p className="text-pink-400 mt-4 font-mono text-lg">{text}</p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-5 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all">See Projects</a>
            <a href="/resume.pdf" download className="px-5 py-2 border border-pink-500 text-pink-300 rounded-lg hover:bg-pink-500 hover:text-black transition">Resume</a>
          </div>
        </div>
      </section>
    </main>
  );
}