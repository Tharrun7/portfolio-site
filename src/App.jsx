import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download, Code, ExternalLink, Menu, X, Sun, Moon, Server, Database, Box, Brain, MessageCircle, Briefcase } from "lucide-react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(true);
  const [cursorVariant, setCursorVariant] = useState("default");

  const portfolioData = {
    name: "T.S Tharrun",
    title: "Blockchain Developer | Web3 Enthusiast | Tech Student",
    email: "tharrunts7@gmail.com",
    github: "https://github.com/Tharrun7",
    linkedin: "https://www.linkedin.com/in/t-s-tharrun-554869320/",
    whatsappUrl: "https://wa.me/916369880073",
    resumeUrl: "/resume.pdf", 
    imageUrl: "/HERO.jpeg",
    about: "A passionate Blockchain and Technology student dedicated to building the future of the decentralized web. My experience lies in developing smart contracts and creating full-stack dApps. I'm driven by the potential of blockchain to create more transparent, secure, and equitable digital systems.",
    skills: ["Solidity", "Hardhat", "Foundry", "Ethers.js", "React", "Next.js", "TypeScript", "Node.js", "IPFS", "The Graph", "Smart Contracts","Html","CSS","Tailwind CSS","Python","Mongo DB","Unreal Engine","Blender"],
    experience: [
      {
          role:"Data Science Intern",
          company: "Cody Grow Startup.",
            date: "June 2025 - Present",
            description: [
                "Trained ML models for classification and prediction using scikit-learn and TensorFlow",
                "Performed data preprocessing, visualization, and model evaluation.",
                "Supported backend API integration and deployed models to real-time systems.",
            ]
        },
        {
            role: "Blockchain Developer Intern",
            company: "Web3 Innovators",
            date: "Jun 2024 - Present",
            description: [
                "Developed and tested smart contracts on the Ethereum blockchain using Solidity and Hardhat.",
                "Assisted in building a decentralized application (dApp) front-end with React and Ethers.js.",
                "Contributed to the integration of IPFS for decentralized file storage.",
            ]
        },
        {
          role:"Blockchain and Crypto Intern",
          company: "Future Interns.",
            date: "May 2025 - June 2025",
            description: [
                "Completed a self-paced internship focused on blockchain fundamentals, crypto exchanges, and smart contract development",
                "Built and deployed a custom ERC-20 token on the Polygon Testnet using Solidity, Remix, and MetaMask.",
                "Created a professional GitHub project repo and showcased work publicly on LinkedIn to enhance portfolio visibility.",
                "Explored hands-on projects including token creation, meme design, Web3 airdrop tasks, and a live portfolio tracker using CoinGecko API.",
                "Gained skills in smart contract development, decentralized tools, crypto compliance, and frontend + API integration for Web3."
            ]
        },
         {
          role:"UI/UX Design Intern",
          company: "Cognifyz Technologies",
            date: "March 2025 - April 2025",
            description: [
                "Built responsive user interfaces for client websites using HTML, CSS, and React.",
                "Collaborated with senior developers on back-end tasks using Node.js.",
                "Gained experience with version control systems like Git and project management tools like Jira.",
            ]
        }
    ],

    projects: [
        {
            title: "Decentralized Voting dApp",
            description: "A secure and transparent voting platform built on the Ethereum blockchain.",
            tech: ["Solidity", "Hardhat", "React", "Ethers.js"],
            year: "2023",
            link: "#",
            image: "https://placehold.co/1200x800/0f172a/0891b2?text=Voting+dApp"
        },
        {
            title: "NFT Minting Platform",
            description: "A user-friendly interface for artists to mint their digital assets as ERC-721 tokens.",
            tech: ["Next.js", "Solidity", "IPFS", "RainbowKit"],
            year: "2023",
            link: "#",
            image: "https://placehold.co/1200x800/0f172a/0891b2?text=NFT+Minter"
        },
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    document.documentElement.style.scrollBehavior = 'smooth';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  const mousePosition = useMousePosition();

  const cursorVariants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "#06b6d4",
      mixBlendMode: "difference"
    },
    text: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "#fff",
      mixBlendMode: "difference"
    },
    hidden: {
        opacity: 0,
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
    }
  };

  if (isLoading) {
    return <LoadingScreen name={portfolioData.name} />;
  }

  return (
    <div className={`bg-slate-100 dark:bg-[#111] text-slate-900 dark:text-slate-100 font-sans`}>
      <motion.div
        className="fixed top-0 left-0 h-4 w-4 rounded-full pointer-events-none z-[100] hidden md:block"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        setCursorVariant={setCursorVariant}
      />
      <AnimatePresence>
        {isMenuOpen && <FullScreenMenu setIsMenuOpen={setIsMenuOpen} setCursorVariant={setCursorVariant}/>}
      </AnimatePresence>
      <main>
        <HeroSection data={portfolioData} setCursorVariant={setCursorVariant} />
        <AboutSection data={portfolioData} setCursorVariant={setCursorVariant} />
        <ExperienceSection experience={portfolioData.experience} setCursorVariant={setCursorVariant} />
        <ProjectsSection projects={portfolioData.projects} setCursorVariant={setCursorVariant} />
        <ContactSection data={portfolioData} setCursorVariant={setCursorVariant} />
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}

const LoadingScreen = ({ name }) => (
  <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-[100]">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="text-cyan-400 text-4xl font-bold tracking-widest"
    >
      {name.split(' ')[0].toUpperCase()}
    </motion.div>
  </div>
);

const Header = ({ isMenuOpen, setIsMenuOpen, setCursorVariant }) => (
  <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 mix-blend-difference">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <motion.a 
        href="#"
        className="font-bold text-xl md:text-2xl text-white tracking-wider"
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        T.S Tharrun
      </motion.a>
      <motion.button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 text-white"
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("default")}
        aria-label="Toggle menu"
      >
        <span className="font-semibold text-lg">{isMenuOpen ? "Close" : "Menu"}</span>
      </motion.button>
    </div>
  </header>
);

const FullScreenMenu = ({ setIsMenuOpen, setCursorVariant }) => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience"},
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuVariants = {
    initial: { opacity: 0, y: "-100%" },
    animate: { opacity: 1, y: "0%", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 } },
  };
  
  const navContainerVariants = {
      animate: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } }
  };

  const navItemVariants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-slate-900 z-40 flex flex-col items-center justify-center"
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.nav 
        className="flex flex-col items-center gap-6"
        variants={navContainerVariants}
      >
        {navLinks.map(link => (
          <motion.a 
            key={link.href} 
            href={link.href} 
            onClick={(e) => handleLinkClick(e, link.href)} 
            className="text-5xl md:text-7xl font-bold text-slate-200 hover:text-cyan-400 transition-colors duration-300"
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
            variants={navItemVariants}
          >
            {link.label}
          </motion.a>
        ))}
      </motion.nav>
    </motion.div>
  );
};

const HeroSection = ({ data, setCursorVariant }) => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-[#111]">
    <div className="text-center px-6">
      <motion.h1 
        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter"
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("default")}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="block text-slate-900 dark:text-slate-100">{data.name}</span>
        <span className="block text-cyan-600 dark:text-cyan-400">{data.title.split(' | ')[0]}</span>
      </motion.h1>
    </div>
  </section>
);

const AboutSection = ({ data, setCursorVariant }) => (
    <Section id="about">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                About <span className="text-cyan-600 dark:text-cyan-400">Me</span>
            </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div 
                className="flex justify-center"
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="relative w-64 h-80 md:w-72 md:h-96 group">
                    <div className="absolute -top-3 -left-3 w-full h-full border-2 border-cyan-500 rounded-lg transition-transform duration-500 group-hover:transform-none"></div>
                    <div className="relative bg-slate-200 dark:bg-slate-800 rounded-lg shadow-lg w-full h-full overflow-hidden">
                        <img 
                            src={data.imageUrl} 
                            alt={data.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x500/0f172a/67e8f9?text=TS'; }}
                        />
                    </div>
                </div>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
                <p 
                    className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-justify mb-8"
                    onMouseEnter={() => setCursorVariant("text")}
                    onMouseLeave={() => setCursorVariant("default")}
                >
                    {data.about}
                </p>
                <h3 className="text-2xl font-bold mb-4 text-cyan-600 dark:text-cyan-400 tracking-tight">Core Competencies</h3>
                <div 
                    className="flex flex-wrap gap-3"
                    onMouseEnter={() => setCursorVariant("text")}
                    onMouseLeave={() => setCursorVariant("default")}
                >
                    {data.skills.map(skill => (
                        <span key={skill} className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium px-4 py-2 rounded-md shadow-sm">
                            {skill}
                        </span>
                    ))}
                </div>
                <div className="mt-8">
                    <motion.a 
                        href={data.resumeUrl} 
                        download 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-700 transition-all"
                        onMouseEnter={() => setCursorVariant("text")}
                        onMouseLeave={() => setCursorVariant("default")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download CV <Download size={20}/>
                    </motion.a>
                </div>
            </motion.div>
        </div>
    </Section>
);

const ExperienceSection = ({ experience, setCursorVariant }) => (
    <Section id="experience">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tighter">
        Work <span className="text-cyan-600 dark:text-cyan-400">Experience</span>
      </h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-slate-300 dark:bg-slate-700"></div>
        {experience.map((job, index) => (
          <motion.div
            key={index}
            className="relative mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:flex items-center md:justify-between">
              <div className="md:w-1/2 md:pr-8 hidden md:block text-right">
                {index % 2 === 0 && (
                  <div onMouseEnter={() => setCursorVariant("text")} onMouseLeave={() => setCursorVariant("default")}>
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-semibold">{job.company}</p>
                    <p className="text-sm text-slate-500">{job.date}</p>
                  </div>
                )}
              </div>
              <div className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-100 dark:border-[#111]"></div>
              <div className="md:w-1/2 md:pl-8 ml-10 md:ml-0">
                <div onMouseEnter={() => setCursorVariant("text")} onMouseLeave={() => setCursorVariant("default")}>
                  <div className="md:hidden mb-2">
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-semibold">{job.company}</p>
                    <p className="text-sm text-slate-500">{job.date}</p>
                  </div>
                   {index % 2 !== 0 && (
                     <div className="hidden md:block">
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <p className="text-cyan-600 dark:text-cyan-400 font-semibold">{job.company}</p>
                      <p className="text-sm text-slate-500">{job.date}</p>
                    </div>
                  )}
                  <ul className="list-disc list-inside mt-2 text-slate-600 dark:text-slate-400 space-y-1">
                    {job.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
);

const ProjectsSection = ({ projects, setCursorVariant }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const mousePosition = useMousePosition();

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: -5 },
    hover: { opacity: 1, scale: 1, rotate: 0 },
  };

  return (
    <Section id="projects">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tighter">Featured Projects</h2>
      <div className="border-t border-slate-300 dark:border-slate-700">
        {projects.map((project, index) => (
          <div
            key={project.title}
            onMouseEnter={() => { setCursorVariant("hidden"); setHoveredProject(index); }}
            onMouseLeave={() => { setCursorVariant("default"); setHoveredProject(null); }}
            className="group relative border-b border-slate-300 dark:border-slate-700"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block p-6 md:p-8 transition-colors duration-300 group-hover:bg-slate-200 dark:group-hover:bg-slate-800/50">
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <h3 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 tracking-tight">{project.title}</h3>
                <span className="text-slate-500 mt-2 md:mt-0">{project.year}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mt-2">{project.description}</p>
            </a>
            <AnimatePresence>
              {hoveredProject === index && (
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="pointer-events-none absolute top-0 left-0 w-80 h-auto rounded-lg shadow-2xl z-20 object-cover hidden md:block"
                  style={{
                    x: mousePosition.x - 160,
                    y: mousePosition.y - 100,
                  }}
                  variants={imageVariants}
                  initial="initial"
                  animate="hover"
                  exit="initial"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ContactSection = ({ data, setCursorVariant }) => (
  <Section id="contact">
    <div className="bg-slate-200 dark:bg-slate-800/50 rounded-lg p-8 md:p-16 text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-2 tracking-tighter text-slate-900 dark:text-white">
        Start a Conversation
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
        I'm currently available for freelance work and open to discussing new projects. Let's build the future of the web together.
      </p>
      <motion.a 
          href={`mailto:${data.email}`} 
          className="inline-block text-2xl md:text-4xl font-semibold text-cyan-600 dark:text-cyan-400 p-4 rounded-lg transition-all duration-300 hover:bg-slate-300/50 dark:hover:bg-slate-700/50"
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
      >
          {data.email}
      </motion.a>
      <div className="mt-12">
          <p className="text-slate-500 dark:text-slate-400 mb-4">Find me on</p>
          <div className="flex justify-center gap-8">
              <motion.a href={data.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -5 }} onMouseEnter={() => setCursorVariant("text")} onMouseLeave={() => setCursorVariant("default")} className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><Github size={28}/></motion.a>
              <motion.a href={data.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -5 }} onMouseEnter={() => setCursorVariant("text")} onMouseLeave={() => setCursorVariant("default")} className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><Linkedin size={28}/></motion.a>
              <motion.a href={data.whatsappUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -5 }} onMouseEnter={() => setCursorVariant("text")} onMouseLeave={() => setCursorVariant("default")} className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><MessageCircle size={28}/></motion.a>
          </div>
      </div>
    </div>
  </Section>
);

const Footer = ({ name }) => (
  <footer className="py-8 text-center">
    <p className="text-sm text-slate-500 dark:text-slate-400">
      Designed & Built by {name} © {new Date().getFullYear()}
    </p>
  </footer>
);

const Section = ({ id, children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`py-24 md:py-32 px-6 max-w-7xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};
