import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  Mail,
  Check,
  GraduationCap,
  Briefcase,
  Building2,
  LayoutTemplate,
  Server,
  Star,
  Loader2,
} from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { WordsPullUp } from "./components/WordsPullUp";
import { WordsPullUpMultiStyle } from "./components/WordsPullUpMultiStyle";
import DomeGallery from "./components/DomeGallery";

function Navbar() {
  const links = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Email Me", href: "#contact" },
  ];

  return (
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 flex justify-center w-[calc(100%-2rem)] max-w-4xl transition-all duration-300">
      <nav className="bg-black/60 backdrop-blur-lg border border-primary/20 rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center justify-between w-full shadow-2xl gap-4 sm:gap-6">
        <a
          href="#hero"
          className="text-[#E1E0CC] text-sm sm:text-base md:text-lg font-bold tracking-wider whitespace-nowrap shrink-0 hover:text-primary transition-colors"
        >
          Sonam Kumari
        </a>
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 overflow-x-auto whitespace-nowrap no-scrollbar">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs sm:text-sm md:text-base font-medium transition-all hover:scale-105"
              style={{ color: "rgba(225, 224, 204, 0.8)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)")
              }
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}

const GithubIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.5 6-6.76a5.5 5.5 0 0 0-1.5-3.89 5.06 5.06 0 0 0-.14-3.83s-1.18-.38-3.9 1.46a13.3 13.3 0 0 0-7 0c-2.72-1.84-3.9-1.46-3.9-1.46a5.06 5.06 0 0 0-.14 3.83 5.5 5.5 0 0 0-1.5 3.89c0 5.25 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
  </svg>
);

const LinkedinIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

function HeroSection() {
  return (
    <section id="hero" className="h-screen p-4 md:p-6 w-full relative">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black flex flex-col justify-between">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 lg:p-12 pb-16 sm:pb-24 z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="md:col-span-8 w-full flex flex-col justify-end">
              <h1 className="text-[#E1E0CC] font-medium leading-[0.85] tracking-[-0.07em] m-0 -ml-1 sm:-ml-2 mb-4">
                <WordsPullUp
                  text="SONAM KUMARI"
                  className="text-[22vw] sm:text-[20vw] md:text-[17vw] lg:text-[14vw] xl:text-[13vw] 2xl:text-[12vw]"
                />
              </h1>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 ml-1"
              >
                <a href="https://github.com/sonam8814" className="p-3 bg-black/20 hover:bg-black/60 backdrop-blur-md border border-primary/20 hover:border-primary/60 text-primary rounded-full transition-all duration-300">
                  <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="https://www.linkedin.com/in/sonam-kumari-45a375273/" className="p-3 bg-black/20 hover:bg-black/60 backdrop-blur-md border border-primary/20 hover:border-primary/60 text-primary rounded-full transition-all duration-300">
                  <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="mailto:sonamjha1075@gmail.com" className="p-3 bg-black/20 hover:bg-black/60 backdrop-blur-md border border-primary/20 hover:border-primary/60 text-primary rounded-full transition-all duration-300">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </motion.div>
            </div>
            <div className="md:col-span-4 flex flex-col justify-end items-start md:items-start lg:pb-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-6 sm:mb-8"
              >
                <div className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2 font-medium">
                  Full-Stack Developer
                </div>
                <p className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2] max-w-[400px]">
                  I build polished, scalable web experiences with modern
                  frontend systems, clean backend architecture, and a strong eye
                  for product detail.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-wrap items-center gap-3"
              >
                <a
                  href="/RedefinedResume.pdf"
                  download
                  className="group flex items-center gap-2 hover:gap-3 bg-primary rounded-full pl-5 pr-2 py-2 transition-all duration-300 border border-transparent"
                >
                  <span className="text-black font-medium text-sm sm:text-base pr-2 whitespace-nowrap">
                    Resume
                  </span>
                  <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 text-[#E1E0CC]" />
                  </div>
                </a>

                <a
                  href="#projects"
                  className="group flex items-center gap-2 hover:gap-3 bg-black/20 backdrop-blur-sm border border-primary/40 rounded-full pl-5 pr-2 py-2 transition-all duration-300"
                >
                  <span className="text-primary font-medium text-sm sm:text-base pr-2 whitespace-nowrap">
                    View my work
                  </span>
                  <div className="bg-primary rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  role,
  company,
  duration,
  bullets,
  delay,
  badge,
}: {
  role: string;
  company: string;
  duration: string;
  bullets: string[];
  delay: number;
  badge?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 24, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#101010] border border-primary/10 rounded-2xl p-4 sm:p-5 hover:border-primary/30 transition-all backdrop-blur-sm mb-4 last:mb-0 relative overflow-hidden group"
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-2 relative z-10">
        <div>
          <h3 className="text-[#E1E0CC] text-base sm:text-lg font-medium">
            {role}
          </h3>
          <div className="text-primary/70 text-xs sm:text-sm">{company}</div>
        </div>
        <div className="flex flex-col sm:items-end gap-1.5">
          {badge && (
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider bg-primary/20 text-primary px-2 py-0.5 rounded-full w-fit sm:ml-auto font-medium">
              {badge}
            </span>
          )}
          <div className="text-gray-500 text-xs whitespace-nowrap">
            {duration}
          </div>
        </div>
      </div>
      <ul className="space-y-1.5 relative z-10">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-primary mt-[0.3em] text-[8px] leading-none">
              ✦
            </span>
            <span className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              {bullet}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Way2Reach",
      duration: "Apr 2025 - Mar 2026",
      badge: "RECENT ROLE",
      Icon: Building2,
      bullets: [
        "Developing and integrating full-stack web applications using React, Node.js, and MongoDB from frontend to API testing.",
        "Engineering scalable RESTful APIs and optimizing AI/ML tools, including company chatbots and automated PDF workflows.",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Actwyse",
      duration: "Sep 2023 - Mar 2024",
      badge: "Internship",
      Icon: Briefcase,
      bullets: [
        "Built responsive frontend interfaces and feature modules using the MERN stack with a focus on clean component design.",
        "Assisted in backend development, API integration, and performance optimization across end-to-end application workflows",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Rarebee Lifesciences",
      duration: "Jun 2023 - Jul 2023",
      badge: "Internship",
      Icon: Briefcase,
      bullets: [
        "Created a responsive website using Next.js and JavaScript, adopting a mobile-first approach to maximize device usability.",
        "Improved user retention by implementing clean layouts, basic SEO practices, and performance-focused optimizations.",
      ],
    },
    {
      role: "B.Tech in Computer Engineering",
      company: "Indus University",
      duration: "2021 - 2025",
      badge: "Education",
      Icon: GraduationCap,
      bullets: [
        "Studied core computer science principles, algorithms, and full-stack development methodologies.",
        "Participated in multiple hackathons and built scalable web applications as major projects.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-black min-h-screen w-full flex items-center justify-center py-10 sm:py-20 px-4 md:px-6"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between">
        {/* Left Column: Profile */}
        <div className="flex flex-col w-full lg:w-[45%] lg:sticky lg:top-32 h-fit mb-12 lg:mb-0 z-10">
          <span className="text-primary text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-8 lg:mb-12">
            Experience
          </span>

          <div className="text-[#E1E0CC] text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl max-w-2xl leading-[1.05] mb-8 lg:mb-12">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: "Building products across frontend, ",
                  className: "font-normal",
                },
                { text: "backend, ", className: "font-serif italic" },
                { text: "and AI-powered systems.", className: "font-normal" },
              ]}
            />
          </div>

          <p className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed mb-10 max-w-md">
            I focus on shipping clean, maintainable interfaces, thoughtful user
            experiences, and reliable systems that connect product thinking with
            strong engineering execution.
          </p>

          {/* Inspiration Grid (Compact) */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-md">
            <div className="bg-[#101010] rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 border border-primary/10 hover:border-primary/30 transition-all group">
              <div className="bg-black p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
                <LayoutTemplate className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <span className="text-gray-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider group-hover:text-primary transition-colors">
                Frontend
              </span>
            </div>
            <div className="bg-[#101010] rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 border border-primary/10 hover:border-primary/30 transition-all group">
              <div className="bg-black p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
                <Server className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <span className="text-gray-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider group-hover:text-primary transition-colors">
                Backend
              </span>
            </div>
            <div className="bg-[#101010] rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 border border-primary/10 hover:border-primary/30 transition-all group">
              <div className="bg-black p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <span className="text-gray-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider group-hover:text-primary transition-colors">
                AI Systems
              </span>
            </div>
            <div className="bg-[#101010] rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 border border-primary/10 hover:border-primary/30 transition-all group">
              <div className="bg-black p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <span className="text-gray-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider group-hover:text-primary transition-colors">
                Architecture
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div className="w-full lg:w-[50%] relative pl-10 sm:pl-12 flex flex-col space-y-6">
          {/* Timeline line */}
          <div className="absolute left-[19px] sm:left-[23px] top-6 bottom-6 w-[2px] bg-primary/20 rounded-full" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline dot/icon */}
              <div className="absolute -left-[37px] sm:-left-[41px] top-4 w-8 h-8 rounded-full bg-[#101010] border border-primary/30 flex items-center justify-center z-10 text-primary">
                <exp.Icon className="w-4 h-4" />
              </div>
              <ExperienceCard {...exp} delay={idx * 0.12} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={
        isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }
      }
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-3xl overflow-hidden relative ${className}`}
    >
      {children}
    </motion.div>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black relative w-full flex flex-col justify-center py-20 px-4 md:px-6"
    >
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-16 md:mb-24">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: "Selected projects built with intent. ",
                className:
                  "text-[#E1E0CC] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal block mb-2",
              },
              {
                text: "Full-stack systems, AI experiments, and polished product experiences.",
                className:
                  "text-gray-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal block",
              },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1">
          {/* Card 1 */}
          <FeatureCard delay={0} className="lg:h-full min-h-[300px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-[#E1E0CC] text-lg sm:text-xl font-medium">
              Your creative canvas.
            </div>
          </FeatureCard>

          {/* Card 2 */}
          <FeatureCard
            delay={0.15}
            className="bg-[#212121] lg:h-full flex flex-col"
          >
            <div className="w-full h-[180px] shrink-0 overflow-hidden">
              <img
                src="/image-2.png"
                alt="AI Study Partner Workspace"
                className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <h3 className="text-[#E1E0CC] text-xl mb-1">
               AI-study-partner{" "}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A voice-enabled AI study workspace built with Next.js 14 and a FastAPI RAG pipeline. Powered by Supabase pgvector, it grounds LLM responses directly in user notes across four interactive AI personas while automatically tracking weak spots. The platform gamifies learning consistency through a virtual library interface that builds book-stacking study streaks.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {["Next.js", "FastAPI", "TypeScript", "Supabase", "pgvector", "Zustand", "Groq", "Tailwind CSS"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-xs rounded-full bg-white/10 text-gray-300">{tech}</span>
                ))}
              </div>
              <a
                href="https://github.com/sonam8814/AI-study-partner"
                className="flex items-center gap-2 text-[#E1E0CC] text-sm mt-auto pt-3 hover:text-primary transition-colors group"
              >
                Learn more{" "}
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </FeatureCard>

          {/* Card 3 */}
          <FeatureCard
            delay={0.3}
            className="bg-[#212121] lg:h-full flex flex-col"
          >
            <div className="w-full h-[180px] shrink-0 overflow-hidden">
              <img
                src="/image-3.png"
                alt="Sentiment Analysis"
                className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <h3 className="text-[#E1E0CC] text-xl mb-1">
                Sentiment Analysis{" "}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                An AI-powered dashboard built with Streamlit and Python to analyze enterprise NPS data from Supabase. It redacts PII using Microsoft Presidio, runs Aspect-Based Sentiment Analysis via a dual Groq and Gemini LLM pipeline, and flags toxic promoters for triage. The platform features robust analytics caching and sentiment heatmaps.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-8">
                {["Streamlit", "Python", "Supabase", "Groq", "Gemini", "Presidio", "Pydantic", "Loguru"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-xs rounded-full bg-white/10 text-gray-300">{tech}</span>
                ))}
              </div>
              <a
                href="https://github.com/sonam8814/sentiment-analysis"
                className="flex items-center gap-2 text-[#E1E0CC] text-sm mt-auto pt-3 hover:text-primary transition-colors group"
              >
                Learn more{" "}
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </FeatureCard>

          {/* Card 4 */}
          <FeatureCard
            delay={0.45}
            className="bg-[#212121] lg:h-full flex flex-col"
          >
            <div className="w-full h-[180px] shrink-0 overflow-hidden">
              <img
                src="/image-4.png"
                alt="TalkToDB"
                className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <h3 className="text-[#E1E0CC] text-xl mb-1">
                TalkToDB{" "}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A terminal-style Text-to-SQL interface built with React and FastAPI to query company HR data using plain English. It pairs LangChain with local Ollama LLMs and uses ChromaDB for semantic database schema routing to dynamically pull table contexts. The platform safely executes read-only queries against an SQLite database while streaming generated SQL logs directly.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {["React", "FastAPI", "LangChain", "Ollama", "ChromaDB", "SQLite", "Tailwind CSS", "Docker"].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-xs rounded-full bg-white/10 text-gray-300">{tech}</span>
                ))}
              </div>
              <a
                href="https://github.com/sonam8814/TalkToDB"
                className="flex items-center gap-2 text-[#E1E0CC] text-sm mt-auto pt-3 hover:text-primary transition-colors group"
              >
                Learn more{" "}
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-black min-h-screen w-full flex items-center justify-center py-20 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        <div className="mb-8 md:mb-12 flex flex-col items-center text-center">
          <span className="text-primary text-base sm:text-lg md:text-xl font-bold tracking-[0.2em] uppercase mb-6 sm:mb-8">
            Skills
          </span>
          <div className="text-[#E1E0CC] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium max-w-4xl mx-auto leading-[0.95]">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: "Tools I use to turn ideas into ",
                  className: "font-normal",
                },
                { text: "shipped products.", className: "font-serif italic" },
              ]}
            />
          </div>
        </div>

        <div className="w-full h-[50vh] min-h-[400px] relative rounded-3xl overflow-hidden border border-primary/10">
          <DomeGallery grayscale={false} overlayBlurColor="#000000" fit={0.6} />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("sent");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section
      id="contact"
      className="bg-black min-h-screen w-full flex items-center justify-center pt-32 pb-20 px-4 md:px-6"
    >
      <div className="max-w-4xl w-full mx-auto bg-[#101010] rounded-[2rem] px-6 sm:px-10 md:px-16 py-14 sm:py-20 text-center relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(222,219,200,0.12),transparent_70%)] pointer-events-none" />

        <div className="text-[#E1E0CC] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 relative z-10">
          <WordsPullUp text="Get in Touch" />
        </div>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 relative z-10">
          Whether you have a project in mind, need a full-stack developer to
          join your team, or just want to say hi, I'm always open to discussing
          new opportunities and ideas.
        </p>

        <form
          ref={formRef}
          className="w-full max-w-2xl mx-auto flex flex-col gap-5 relative z-10 text-left"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="reply_to" id="reply_to" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-gray-400 text-xs sm:text-sm pl-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                required
                placeholder="John Doe"
                className="bg-black/50 border border-primary/20 rounded-xl px-4 py-3 text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-gray-400 text-xs sm:text-sm pl-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                required
                onChange={(e) => {
                  const replyTo = formRef.current?.querySelector<HTMLInputElement>("#reply_to");
                  if (replyTo) replyTo.value = e.target.value;
                }}
                placeholder="john@example.com"
                className="bg-black/50 border border-primary/20 rounded-xl px-4 py-3 text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="phone"
              className="text-gray-400 text-xs sm:text-sm pl-1"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 (555) 000-0000"
              className="bg-black/50 border border-primary/20 rounded-xl px-4 py-3 text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-gray-400 text-xs sm:text-sm pl-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="How can I help you?"
              className="bg-black/50 border border-primary/20 rounded-xl px-4 py-3 text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex items-center justify-center gap-2 hover:gap-3 bg-primary text-black rounded-xl px-6 py-4 font-medium text-sm sm:text-base transition-all duration-300 mt-2 hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span>
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message Sent!"
                : status === "error"
                ? "Failed to send"
                : "Email Me"}
            </span>
            <div className="bg-black rounded-full w-6 h-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
              {status === "sending" ? (
                <Loader2 className="w-3 h-3 text-[#E1E0CC] animate-spin" />
              ) : status === "sent" ? (
                <Check className="w-3 h-3 text-green-400" />
              ) : (
                <Mail className="w-3 h-3 text-[#E1E0CC]" />
              )}
            </div>
          </button>

          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-black text-primary font-sans w-full overflow-hidden">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}

export default App;
