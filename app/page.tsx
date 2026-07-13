"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAME = "Hadi Karkoosh";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#log", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const EDUCATION = {
  degree: "B.Sc. in Informatics Engineering",
  school: "Wataniya Private University (WPU)",
  status: "4th Year (Senior)",
};

const SPOKEN_LANGUAGES = [
  { name: "Arabic", level: "Native", pct: 100, color: "var(--blue)" },
  { name: "English", level: "Very Good", pct: 80, color: "var(--purple)" },
];

const ICON_BASE = "/icons";

const STACK_GROUPS: {
  label: string;
  color: string;
  items: { name: string; icon?: string }[];
}[] = [
  {
    label: "Frontend",
    color: "var(--blue)",
    items: [
      { name: "HTML5", icon: "html5-original" },
      { name: "CSS3", icon: "css3-original" },
      { name: "JavaScript", icon: "javascript-original" },
      { name: "TypeScript", icon: "typescript-original" },
      { name: "React", icon: "react-original" },
      { name: "Next.js", icon: "nextjs-original" },
      { name: "Tailwind CSS", icon: "tailwindcss-original" },
    ],
  },
  {
    label: "Backend",
    color: "var(--purple)",
    items: [
      { name: "Nest.js", icon: "nestjs-original" },
      { name: "PHP", icon: "php-original" },
      { name: "Laravel", icon: "laravel-original" },
      { name: "Python", icon: "python-original" },
    ],
  },
  {
    label: "Languages & Data",
    color: "var(--amber)",
    items: [
      { name: "C++", icon: "cplusplus-original" },
      { name: "SQL", icon: "mysql-original" },
    ],
  },
  {
    label: "Tooling",
    color: "var(--pink)",
    items: [{ name: "Git", icon: "git-original" }],
  },
];

const LOG_ENTRIES = [
  {
    hash: "f9910a5",
    color: "var(--blue)",
    tag: "Job",
    title: "Website Management & Full-Stack Development",
    org: "Saudi-based Company",
    lines: [
      "Managed and maintained live company websites — stability, performance, uptime",
      "Operated and configured admin control panels (dashboards) for content & users",
      "Designed and built full-stack features, front-end to back-end",
    ],
  },
  {
    hash: "a3f9c2e",
    color: "var(--purple)",
    tag: "Freelance",
    title: "Freelance Full-Stack Developer",
    org: "Independent · International Clients",
    lines: [
      "Built custom websites end-to-end for clients — UI/UX, front-end, back-end",
      "Projects available on request — links coming soon",
    ],
  },
  {
    hash: "c001de5",
    color: "var(--amber)",
    tag: "Milestone",
    title: "Competitive Programming — Codeforces",
    org: "University Contest",
    lines: ["Solved algorithmic problems in C++ under contest conditions"],
  },
];

const PROJECTS = [
  {
    name: "Shop — E-Commerce Platform",
    color: "var(--blue)",
    tagline: "Full-stack e-commerce platform with seller & customer roles and secure checkout",
    stack: ["Laravel", "PHP", "MySQL", "Blade"],
    highlights: [
      "Guard-based auth with separate seller and customer roles via Laravel Auth",
      "Eloquent ORM with automatic CSRF protection across every form",
      "Race-condition-safe checkout using lockForUpdate() on stock during order transactions",
    ],
    liveUrl: "https://shop-laravel-production-e709.up.railway.app",
  },
  {
    name: "Maz Academy — Landing Platform",
    color: "var(--purple)",
    tagline: "Interactive academy landing platform with a live registration system",
    stack: ["Next.js", "TypeScript", "React"],
    highlights: [
      "Real React state driving every tabbed section — tracks, growth path, jobs, labs",
      "Live registration API route with server-side validation, backed by a JSON store",
      "Admin page reading registrations server-side, plus next/image throughout",
    ],
    liveUrl: "https://maz-academy-next.vercel.app",
  },
];

function useUptime() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function useTyped(text: string, speed = 70) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

function BackgroundGlow() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="blob-1 absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full opacity-25 blur-[110px]"
        style={{ background: "var(--blue)" }}
      />
      <div
        className="blob-2 absolute top-1/3 -right-32 w-[460px] h-[460px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--purple)" }}
      />
      <div
        className="blob-3 absolute bottom-0 left-1/4 w-[380px] h-[380px] rounded-full opacity-20 blur-[110px]"
        style={{ background: "var(--pink)" }}
      />
    </div>
  );
}

function Eyebrow({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div
      className="inline-block mb-3 font-mono text-xs tracking-widest uppercase px-2.5 py-1 rounded-full border"
      style={{ color, borderColor: color + "55", background: color + "14" }}
    >
      {children}
    </div>
  );
}

function Section({
  id,
  eyebrow,
  color,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  color: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-20 scroll-mt-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <Eyebrow color={color}>{eyebrow}</Eyebrow>
      <h2 className="font-mono text-2xl sm:text-3xl font-semibold text-text mb-8">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function SkillChip({
  name,
  icon,
  color,
  index,
}: {
  name: string;
  icon?: string;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="group flex items-center gap-2.5 px-3.5 py-2 rounded-lg border bg-bg-panel transition-colors"
      style={{ borderColor: "var(--border)" }}
    >
      {icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${ICON_BASE}/${icon}.svg`}
          alt=""
          width={20}
          height={20}
        />
      ) : (
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
      )}
      <span className="font-mono text-sm text-text-dim group-hover:text-text transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

function WorkCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="rounded-xl border border-border bg-bg-panel p-5 flex flex-col"
      style={{ boxShadow: `0 0 30px -16px ${project.color}` }}
    >
      <div className="flex items-start justify-between gap-3 mb-1">
        <div className="flex items-center gap-2.5">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ background: project.color }}
          />
          <h3 className="text-text font-semibold text-lg">{project.name}</h3>
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs px-2.5 py-1 rounded-full border shrink-0 hover:opacity-80 transition-opacity"
          style={{ color: project.color, borderColor: project.color + "55" }}
        >
          Live ↗
        </a>
      </div>
      <p className="font-mono text-sm text-text-dim mb-3">{project.tagline}</p>
      <ul className="space-y-1.5 mb-4">
        {project.highlights.map((line, i) => (
          <li key={i} className="text-text-dim text-sm flex gap-2">
            <span className="shrink-0" style={{ color: project.color }}>
              +
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs px-2 py-0.5 rounded-full"
            style={{ color: project.color, background: project.color + "1a" }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function LogEntry({
  entry,
  isLast,
}: {
  entry: (typeof LOG_ENTRIES)[number];
  isLast: boolean;
}) {
  return (
    <div className="relative pl-8">
      {!isLast && (
        <span
          className="absolute left-[7px] top-3 bottom-[-1.5rem] w-px"
          style={{ background: "var(--border)" }}
        />
      )}
      <span
        className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-bg border-2"
        style={{ borderColor: entry.color }}
      />
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <span
            className="font-mono text-xs px-2 py-0.5 rounded-full"
            style={{ color: entry.color, background: entry.color + "1a" }}
          >
            {entry.tag}
          </span>
        </div>
        <h3 className="text-text font-semibold text-lg mb-0.5">
          {entry.title}
        </h3>
        <p className="font-mono text-sm text-text-dim mb-2.5">{entry.org}</p>
        <ul className="space-y-1.5">
          {entry.lines.map((line, i) => (
            <li key={i} className="text-text-dim text-sm flex gap-2">
              <span className="shrink-0" style={{ color: entry.color }}>
                +
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Home() {
  const typed = useTyped(NAME);
  const uptime = useUptime();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-bg text-text font-body">
      <BackgroundGlow />

      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-3">
          <a href="#top" className="flex items-center gap-2.5 group shrink-0">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm text-bg"
              style={{
                background:
                  "linear-gradient(135deg, var(--blue), var(--purple), var(--pink))",
              }}
            >
              HK
            </span>
            <span className="font-mono text-sm text-text group-hover:text-blue transition-colors hidden sm:inline">
              Hadi Karkoosh
            </span>
          </a>

          <nav className="hidden sm:flex gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-sm text-text-dim hover:text-text transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((v) => !v)}
            className="sm:hidden flex flex-col justify-center gap-1.5 w-9 h-9 rounded-lg border border-border shrink-0"
          >
            <span
              className="block h-px bg-text-dim mx-auto transition-transform"
              style={{
                width: 18,
                transform: navOpen ? "translateY(5px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-px bg-text-dim mx-auto transition-opacity"
              style={{ width: 18, opacity: navOpen ? 0 : 1 }}
            />
            <span
              className="block h-px bg-text-dim mx-auto transition-transform"
              style={{
                width: 18,
                transform: navOpen ? "translateY(-5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>

        {navOpen && (
          <nav className="sm:hidden border-t border-border px-5 py-3 flex flex-col">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setNavOpen(false)}
                className="font-mono text-sm text-text-dim hover:text-text transition-colors py-2.5 border-b border-border last:border-b-0"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="max-w-4xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <h1 className="font-mono text-3xl sm:text-5xl font-bold mb-3 min-h-[1.2em] bg-clip-text text-transparent bg-[linear-gradient(90deg,var(--blue),var(--purple),var(--pink))]">
          {typed}
          <span className="cursor-blink" style={{ color: "var(--pink)" }}>
            _
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-text-dim mb-10 max-w-xl">
          Full-stack developer & 4th-year Informatics Engineering student.
          I build, ship and maintain real websites — end to end.
        </p>

        {/* Status panel — signature element */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="rounded-xl border border-border bg-bg-panel overflow-hidden max-w-md"
          style={{ boxShadow: "0 0 40px -12px var(--purple)" }}
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-bg-panel-2">
            <span className="w-2 h-2 rounded-full bg-accent status-dot" />
            <span className="font-mono text-xs text-text-dim tracking-wide">
              Live Status
            </span>
          </div>
          <dl className="px-4 py-3 font-mono text-sm divide-y divide-border">
            {[
              ["Status", "Online · open to work", "var(--accent)"],
              ["Role", "Full-stack developer", "var(--blue)"],
              ["Education", "Informatics Eng. · WPU · Yr 4", "var(--purple)"],
              ["Uptime", uptime, "var(--pink)"],
            ].map(([k, v, c]) => (
              <div key={k} className="flex justify-between py-1.5 gap-4">
                <dt className="text-text-dim">{k}</dt>
                <dd className="text-right" style={{ color: c }}>
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="Background" color="var(--blue)" title="About">
        <p className="text-text-dim leading-relaxed">
          I&apos;m a full-stack developer with real production experience —
          managing and building websites for a Saudi-based company, and
          shipping custom projects for freelance clients. I work comfortably
          across the stack: React and Next.js on the front end, Laravel and
          Nest.js on the back end, with Python, C++ and SQL in the toolbox.
          Outside of client work, I compete in algorithmic programming
          contests and hold an ICDL certification in computer proficiency.
        </p>
      </Section>

      {/* Stack */}
      <Section id="stack" eyebrow="Toolkit" color="var(--purple)" title="Stack">
        <div className="space-y-7">
          {STACK_GROUPS.map((group) => (
            <div key={group.label}>
              <p
                className="font-mono text-xs uppercase tracking-widest mb-2.5"
                style={{ color: group.color }}
              >
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item, i) => (
                  <SkillChip
                    key={item.name}
                    name={item.name}
                    icon={item.icon}
                    color={group.color}
                    index={i}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Log / Experience */}
      <Section id="log" eyebrow="Career Timeline" color="var(--pink)" title="Experience">
        <div>
          {LOG_ENTRIES.map((entry, i) => (
            <LogEntry key={entry.hash} entry={entry} isLast={i === LOG_ENTRIES.length - 1} />
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" eyebrow="Academics" color="var(--amber)" title="Education">
        <div
          className="rounded-xl border border-border bg-bg-panel p-5 mb-8 max-w-lg"
          style={{ boxShadow: "0 0 30px -14px var(--amber)" }}
        >
          <p className="font-mono text-xs text-text-dim mb-1">Degree</p>
          <p className="text-text font-semibold mb-4">{EDUCATION.degree}</p>
          <div className="flex justify-between gap-4 font-mono text-sm">
            <div>
              <p className="text-text-dim text-xs mb-1">School</p>
              <p className="text-text">{EDUCATION.school}</p>
            </div>
            <div className="text-right">
              <p className="text-text-dim text-xs mb-1">Status</p>
              <p style={{ color: "var(--amber)" }}>{EDUCATION.status}</p>
            </div>
          </div>
        </div>

        <p className="font-mono text-xs text-text-dim uppercase tracking-widest mb-3">
          Spoken Languages
        </p>
        <div className="space-y-4 max-w-lg">
          {SPOKEN_LANGUAGES.map((lang, i) => (
            <div key={lang.name}>
              <div className="flex justify-between font-mono text-sm mb-1.5">
                <span className="text-text">{lang.name}</span>
                <span className="text-text-dim">{lang.level}</span>
              </div>
              <div className="h-2 rounded-full bg-bg-panel-2 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: lang.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Work */}
      <Section id="work" eyebrow="Selected Work" color="var(--accent)" title="Work">
        <div className="grid sm:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => (
            <WorkCard key={project.name} project={project} index={i} />
          ))}
        </div>
        <p className="font-mono text-sm text-text-dim mt-5">
          Check out more of my work —{" "}
          <a
            href="https://github.com/HadiKarkoosh"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-base hover:underline"
            style={{ color: "var(--purple)" }}
          >
            follow along on GitHub
          </a>
        </p>
      </Section>

      {/* Certifications */}
      <Section id="certs" eyebrow="Certifications" color="var(--blue)" title="Certifications">
        <div className="flex flex-wrap gap-2.5">
          <SkillChip name="ICDL — International Computer Driving License" color="var(--blue)" index={0} />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Get in Touch" color="var(--purple)" title="Contact">
        <div className="rounded-xl border border-border bg-bg-panel divide-y divide-border max-w-lg overflow-hidden">
          <a
            href="mailto:hadikarkoosh2005.che@gmail.com"
            className="flex items-center justify-between px-4 py-4 hover:bg-bg-panel-2 transition-colors group"
          >
            <span className="font-mono text-sm text-text-dim">Email</span>
            <span
              className="font-mono text-sm break-all text-right transition-colors group-hover:opacity-80"
              style={{ color: "var(--blue)" }}
            >
              hadikarkoosh2005.che@gmail.com
            </span>
          </a>
          <a
            href="https://github.com/HadiKarkoosh"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-4 py-4 hover:bg-bg-panel-2 transition-colors group"
          >
            <span className="font-mono text-sm text-text-dim">GitHub</span>
            <span
              className="font-mono text-sm transition-colors group-hover:opacity-80"
              style={{ color: "var(--purple)" }}
            >
              github.com/HadiKarkoosh
            </span>
          </a>
          <div className="flex items-center justify-between px-4 py-4">
            <span className="font-mono text-sm text-text-dim">LinkedIn</span>
            <span className="font-mono text-sm text-text-dim italic">coming soon</span>
          </div>
        </div>
      </Section>

      <footer className="max-w-4xl mx-auto px-5 sm:px-8 py-10 border-t border-border">
        <p className="font-mono text-xs text-text-dim">
          Built with Next.js, TypeScript & Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
