import { useEffect, useState } from "react";
import {
  Mail,
  // Phone,
  MapPin,
  ExternalLink,
  Terminal as TerminalIcon,
  Check,
  Copy,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Server,
  ArrowUpRight,
  Menu,
  X,
  DownloadIcon,
} from "lucide-react";
import portfolioData from "./data/portfolio.json";
import profileImg from "./assets/profile.jpg";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface PersonalInfo {
  name: string;
  title: string;
  focusRoles: string[];
  defaultRole: string;
  tagline: string;
  location: string;
  email: string;
  // phone: string;
  linkedin: string;
  github: string;
  handle: string;
  availability: string;
  resumeLink: string;
}
interface SysInfo {
  primaryStack: string;
  education: string;
  location: string,
  workModel: string;
}

interface Stat {
  value: string;
  label: string;
}

interface TerminalLine {
  prompt: string;
  output: string;
}

interface About {
  headingLine1: string;   // "Full Stack &"
  headingHighlight: string; // "Backend"
  headingLine2: string;   // "Developer"
  intro: string;
  body: string;
  closing: string;
  focusAreas: string[];
  badge: string;
  role: string;
  photo: string;
}

interface SkillGroup {
  category: string;
  items: string[];
}

interface Experience {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  responsibilities: string[];
}

interface Project {
  name: string;
  description: string;
  techStack: string[];
  highlights: string[];
  link: string;
  repo: string;
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade: string;
  status: string;
}

interface Certification {
  title: string;
  issuer: string;
}

interface Contact {
  heading: string;
  body: string;
  availabilityLines: string[];
}

interface PortfolioData {
  personalInfo: PersonalInfo;
  summary: string;
  heroHighlights: string[];
  stats: Stat[];
  terminal: { commandLine: TerminalLine[] };
  about: About;
  aboutStats: Stat[];
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  contact: Contact;
  footer: { note: string };
  sysinfo: SysInfo
}

const data = portfolioData as PortfolioData;

/* ------------------------------------------------------------------ */
/*  Helper Components                                                  */
/* ------------------------------------------------------------------ */

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-mono text-sm tracking-wider text-emerald-400 font-semibold">{number}.</span>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{title}</h2>
      <div className="h-[1px] bg-slate-800 flex-1 ml-4 hidden sm:block" />
    </div>
  );
}

function CategoryIcon({ category }: { category: string }) {
  switch (category.toLowerCase()) {
    case "languages":
      return <Code2 className="w-5 h-5 text-emerald-400" />;
    case "frontend":
      return <Layers className="w-5 h-5 text-sky-400" />;
    case "backend":
      return <Server className="w-5 h-5 text-purple-400" />;
    case "databases":
      return <Database className="w-5 h-5 text-amber-400" />;
    case "core concepts":
      return <Cpu className="w-5 h-5 text-rose-400" />;
    case "tools & devops":
      return <TerminalIcon className="w-5 h-5 text-indigo-400" />;
    default:
      return <Sparkles className="w-5 h-5 text-emerald-400" />;
  }
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  // const [copiedPhone, setCopiedPhone] = useState(false);
  // const [activeTab, setActiveTab] = useState<"terminal" | "specs" | "stack">("terminal");

  const { personalInfo, about, contact, footer } = data;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // const handleCopyPhone = () => {
  //   navigator.clipboard.writeText(personalInfo.phone);
  //   setCopiedPhone(true);
  //   setTimeout(() => setCopiedPhone(false), 2000);
  // };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#stack", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  function useTypewriter(
    words: string[],
    typingSpeed = 90,
    deletingSpeed = 45,
    pauseTime = 1400
  ) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const currentWord = words[wordIndex % words.length];
      let timeout: ReturnType<typeof setTimeout>;

      if (!isDeleting && text === currentWord) {
        // finished typing this word — wait, then start deleting
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        // finished deleting — move to next word
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        timeout = setTimeout(
          () => {
            setText((prev) =>
              isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
            );
          },
          isDeleting ? deletingSpeed : typingSpeed
        );
      }

      return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return text;
  }
  const typedRole = useTypewriter(personalInfo.focusRoles);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-300 font-sans selection:bg-emerald-500/20 selection:text-emerald-300 relative overflow-hidden">
      {/* Subtle Background Glow Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-[128px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-[128px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[128px] pointer-events-none animate-pulse-glow" />

      {/* ---------------------------------------------------------- */}
      {/* NAVBAR                                                     */}
      {/* ---------------------------------------------------------- */}
      <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#hero"
            className="font-mono text-sm font-bold tracking-tight text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            {personalInfo.handle}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium hover:bg-emerald-500/20 transition-all hover:scale-[1.02]"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copied!
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5" /> {personalInfo.email}
                </>
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="md:hidden glass-panel border-b border-slate-800 px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-slate-300 hover:text-emerald-400 transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs"
              >
                {copiedEmail ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                {copiedEmail ? "Email Copied to Clipboard" : personalInfo.email}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ---------------------------------------------------------- */}
      {/* HERO SECTION                                               */}
      {/* ---------------------------------------------------------- */}
      <section id="hero" className="max-w-6xl mx-auto px-6 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{personalInfo.availability}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
              {personalInfo.name}
            </h1>

            {/* Focus Role — Typewriter */}
            <p className="mt-3 text-xl sm:text-2xl font-semibold text-emerald-400 tracking-tight min-h-[2rem]">
              {typedRole}
              <span className="inline-block w-[2px] h-6 sm:h-7 bg-emerald-400 ml-0.5 align-middle animate-pulse" />
            </p>

            {/* Summary */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-400 max-w-2xl">
              {data.summary}
            </p>

            {/* Core Tech Stack Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {data.heroHighlights.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-emerald-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 flex items-center gap-2"
              >
                Featured Projects <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-sm font-medium hover:border-slate-700 hover:text-white transition-all flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4 text-emerald-400" /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-sm font-medium hover:border-slate-700 hover:text-white transition-all flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-emerald-400" /> LinkedIn
              </a>
              <a
                href={personalInfo.resumeLink}
                download
                className="px-5 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-sm font-medium hover:border-slate-700 hover:text-white transition-all flex items-center gap-2"
              >
                <DownloadIcon className="w-4 h-4 text-emerald-400" /> Resume
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {data.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Window — sysinfo only */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
              {/* Terminal Title Bar */}
              <div className="px-5 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                    ankit@developer:~$
                  </span>
                </div>

                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  sysinfo
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm min-h-[420px] flex flex-col justify-between bg-[#080c14]">
                <div className="space-y-4 text-sm text-slate-300">
                  <div className="pb-3 border-b border-slate-800/80 text-emerald-400 font-semibold">
                    System Capabilities & Focus:
                  </div>

                  {/* Role row — hover to expand pill list */}
                  <div className="group border-b border-slate-900 pb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-2">
                        Role:
                        <span className="text-[10px] normal-case text-slate-600 font-sans group-hover:text-emerald-500 transition-colors">
                          (Open to work)
                        </span>
                      </span>
                      <span className="text-emerald-300 font-medium text-right group-hover:hidden">
                        {personalInfo.defaultRole}
                      </span>
                    </div>

                    <div className="hidden group-hover:flex flex-wrap justify-end gap-2 mt-3 animate-[fadeIn_0.2s_ease-out]">
                      {personalInfo.focusRoles.map((role) => (
                        <span
                          key={role}
                          className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs whitespace-nowrap"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-500">Primary Stack:</span>
                    <span className="text-right">{data.sysinfo.primaryStack}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-500">Education:</span>
                    <span className="text-right">{data.sysinfo.education}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-500">Location:</span>
                    <span className="text-right">{data.sysinfo.location}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Work Model:</span>
                    <span className="text-emerald-400 text-right">{data.sysinfo.workModel}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Hover "Role" to see all work areas</span>
                  <span className="text-emerald-400">● Live Status</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* ABOUT SECTION                                              */}
      {/* ---------------------------------------------------------- */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/60">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: text + checklist */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5">
                <circle cx="12" cy="8" r="3.2" />
                <path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" />
              </svg>
              About Me
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-white mb-2">
              {about.headingLine1}
              <br />
              <span className="text-emerald-400">{about.headingHighlight}</span>{" "}
              {about.headingLine2}
            </h2>
            <div className="w-10 h-1 bg-emerald-400 rounded-full mb-6" />

            <div className="space-y-4 text-base leading-relaxed text-slate-400">
              <p>{about.intro}</p>
              <p>{about.body}</p>
              <p>{about.closing}</p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {about.focusAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-lg border border-slate-800 bg-[#0d1420] px-4 py-3 transition-all duration-200 hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:shadow-[0_0_20px_-4px_rgba(52,211,153,0.25)] cursor-default"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-slate-200">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: profile card */}
          <div className="lg:col-span-5">
            <div className="group relative rounded-2xl border border-slate-800 bg-[#0d1420] p-8 text-center overflow-hidden transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_0_50px_-10px_rgba(52,211,153,0.3)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full filter blur-2xl pointer-events-none transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:w-40 group-hover:h-40" />

              <div className="flex justify-end mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {about.badge}
                </div>
              </div>

              <div className="relative mx-auto mb-6 h-40 w-40">
                <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-xl" />
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  className="relative h-40 w-40 rounded-full object-cover border-2 border-emerald-400/40"
                />
              </div>

              <h3 className="text-2xl font-extrabold text-white">{personalInfo.name}</h3>
              <p className="mt-1 text-xs font-mono uppercase tracking-wider text-slate-400">
                {about.role}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {data.aboutStats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 transition-all duration-200 hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:shadow-[0_0_20px_-4px_rgba(52,211,153,0.3)] cursor-default"
                  >
                    <p className="text-2xl font-extrabold text-emerald-400 font-mono">{s.value}</p>
                    <p className="mt-1 text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* SKILLS SECTION                                             */}
      {/* ---------------------------------------------------------- */}
      <section id="stack" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/60">
        <SectionHeader number="02" title="Tech Stack & Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.skills.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-xl p-6 border border-slate-800/80 hover:border-emerald-500/40 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800/80">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                  <CategoryIcon category={group.category} />
                </div>
                <h3 className="font-semibold text-white text-base">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:text-emerald-300 hover:border-emerald-500/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* EXPERIENCE SECTION                                         */}
      {/* ---------------------------------------------------------- */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/60">
        <SectionHeader number="03" title="Work Experience" />

        <div className="space-y-8">
          {data.experience.map((exp) => (
            <div
              key={exp.company}
              className="glass-card rounded-xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  </div>
                  <p className="text-emerald-400 font-semibold mt-1">{exp.company}</p>
                </div>
                <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 w-fit">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 items-center">
                <span className="text-xs font-mono text-slate-500 mr-2">Tech Used:</span>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-emerald-500/5 border border-emerald-500/20 text-xs font-mono text-emerald-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* FEATURED PROJECTS SECTION                                  */}
      {/* ---------------------------------------------------------- */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/60">
        <SectionHeader number="04" title="Featured Projects" />

        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((project) => (
            <div
              key={project.name}
              className="glass-card rounded-xl p-7 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/40 transition-all group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.name}
                  </h3>
                  {(project.link || project.repo) && (
                    <a
                      href={project.link || project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* EDUCATION & CERTIFICATIONS SECTION                         */}
      {/* ---------------------------------------------------------- */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/60">
        <SectionHeader number="05" title="Education & Certifications" />

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Education Timeline */}
          <div className="lg:col-span-7">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-400" /> Academic Qualifications
            </h3>

            <div className="relative pl-6 border-l border-slate-800 space-y-8">
              {data.education.map((edu) => (
                <div key={edu.degree} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-emerald-400" />

                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {edu.status}
                  </span>

                  <h4 className="text-base font-bold text-white mt-2">{edu.degree}</h4>
                  <p className="text-sm font-medium text-emerald-400 mt-0.5">{edu.institution} — {edu.location}</p>
                  <p className="text-xs font-mono text-slate-500 mt-1">
                    {edu.startDate} – {edu.endDate} • <span className="text-slate-400 font-semibold">{edu.grade}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-400" /> Certifications
            </h3>

            <div className="space-y-4">
              {data.certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="glass-card rounded-xl p-5 border border-slate-800 flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{cert.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">Issued by <span className="text-emerald-400 font-medium">{cert.issuer}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* CONTACT SECTION                                            */}
      {/* ---------------------------------------------------------- */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/60">
        <SectionHeader number="06" title="Get In Touch" />

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4">
              {contact.heading}
            </h3>
            <p className="text-base text-slate-400 leading-relaxed mb-6 max-w-xl">
              {contact.body}
            </p>

            <div className="space-y-3 mb-8">
              {contact.availabilityLines.map((line) => (
                <div key={line} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{line}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleCopyEmail}
                className="px-6 py-3 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
              >
                {copiedEmail ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                {copiedEmail ? "Email Copied!" : "Send Email"}
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-sm font-medium hover:border-slate-700 hover:text-white transition-all flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-emerald-400" /> LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-card rounded-xl p-7 border border-slate-800 space-y-5">
              <div className="flex items-center justify-between p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-xs text-slate-500">Email Address</p>
                    <p className="text-sm font-mono text-slate-200">{personalInfo.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* <div className="flex items-center justify-between p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <p className="text-sm font-mono text-slate-200">{personalInfo.phone}</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div> */}

              <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="text-sm font-mono text-slate-200">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* FOOTER                                                     */}
      {/* ---------------------------------------------------------- */}
      <footer className="border-t border-slate-800/80 py-8 bg-[#080c14]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="font-mono">{footer.note}</p>
        </div>
      </footer>
    </div>
  );
}
