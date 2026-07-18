"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang, useT } from "../lib/i18n";

const NAME = "Hadi Karkoosh";

const NAV_LINKS = [
  { href: "#about", label: { en: "About", ar: "نبذة" } },
  { href: "#stack", label: { en: "Stack", ar: "الأدوات" } },
  { href: "#log", label: { en: "Experience", ar: "الخبرة" } },
  { href: "#education", label: { en: "Education", ar: "التعليم" } },
  { href: "#work", label: { en: "Work", ar: "الأعمال" } },
  { href: "#contact", label: { en: "Contact", ar: "تواصل" } },
];

const EDUCATION = {
  degree: { en: "B.Sc. in Informatics Engineering", ar: "بكالوريوس هندسة معلوماتية" },
  school: { en: "Wataniya Private University (WPU)", ar: "الجامعة الوطنية الخاصة (WPU)" },
  status: { en: "4th Year (Senior)", ar: "السنة الرابعة" },
};

const SPOKEN_LANGUAGES = [
  { name: { en: "Arabic", ar: "العربية" }, level: { en: "Native", ar: "اللغة الأم" }, pct: 100, color: "var(--blue)" },
  { name: { en: "English", ar: "الإنجليزية" }, level: { en: "Very Good", ar: "جيد جداً" }, pct: 80, color: "var(--purple)" },
];

const ICON_BASE = "/icons";

const STACK_GROUPS: {
  label: { en: string; ar: string };
  color: string;
  items: { name: string; icon?: string }[];
}[] = [
  {
    label: { en: "Frontend", ar: "الواجهة الأمامية" },
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
    label: { en: "Backend", ar: "الواجهة الخلفية" },
    color: "var(--purple)",
    items: [
      { name: "Nest.js", icon: "nestjs-original" },
      { name: "PHP", icon: "php-original" },
      { name: "Laravel", icon: "laravel-original" },
      { name: "Python", icon: "python-original" },
    ],
  },
  {
    label: { en: "Languages & Data", ar: "لغات وبيانات" },
    color: "var(--amber)",
    items: [
      { name: "C++", icon: "cplusplus-original" },
      { name: "SQL", icon: "mysql-original" },
    ],
  },
  {
    label: { en: "Tooling", ar: "أدوات" },
    color: "var(--pink)",
    items: [{ name: "Git", icon: "git-original" }],
  },
];

const LOG_ENTRIES = [
  {
    hash: "f9910a5",
    color: "var(--blue)",
    tag: { en: "Job", ar: "وظيفة" },
    title: { en: "Website Management & Full-Stack Development", ar: "إدارة مواقع وتطوير Full-Stack" },
    org: { en: "Saudi-based Company", ar: "شركة سعودية" },
    lines: [
      { en: "Managed and maintained live company websites — stability, performance, uptime", ar: "إدارة ومتابعة المواقع الإلكترونية للشركة وضمان استقرارها وأدائها بشكل مستمر" },
      { en: "Operated and configured admin control panels (dashboards) for content & users", ar: "تشغيل وضبط لوحات التحكم (Dashboards) الخاصة بالمحتوى والمستخدمين" },
      { en: "Designed and built full-stack features, front-end to back-end", ar: "تصميم وتطوير مزايا Full-Stack، من الواجهة الأمامية للخلفية" },
    ],
  },
  {
    hash: "a3f9c2e",
    color: "var(--purple)",
    tag: { en: "Freelance", ar: "فريلانس" },
    title: { en: "Freelance Full-Stack Developer", ar: "مطوّر مواقع Full-Stack (فريلانس)" },
    org: { en: "Independent · International Clients", ar: "عمل مستقل · عملاء دوليون" },
    lines: [
      { en: "Built custom websites end-to-end for clients — UI/UX, front-end, back-end", ar: "بناء مواقع مخصصة لعملاء من البداية للنهاية — تجربة المستخدم والواجهات الأمامية والخلفية" },
      { en: "Projects available on request — links coming soon", ar: "المشاريع متاحة عند الطلب — الروابط قريباً" },
    ],
  },
  {
    hash: "c001de5",
    color: "var(--amber)",
    tag: { en: "Milestone", ar: "إنجاز" },
    title: { en: "Competitive Programming — Codeforces", ar: "البرمجة التنافسية — Codeforces" },
    org: { en: "University Contest", ar: "مسابقة جامعية" },
    lines: [{ en: "Solved algorithmic problems in C++ under contest conditions", ar: "حل مسائل خوارزمية بلغة ++C تحت ظروف المسابقة" }],
  },
];

const PROJECTS = [
  {
    name: "Shop — E-Commerce Platform",
    color: "var(--blue)",
    tagline: {
      en: "Full-stack e-commerce platform with seller & customer roles and secure checkout",
      ar: "منصة تجارة إلكترونية Full-Stack بأدوار بائع وزبون وعملية دفع آمنة",
    },
    stack: ["Laravel", "PHP", "MySQL", "Blade"],
    highlights: [
      { en: "Guard-based auth with separate seller and customer roles via Laravel Auth", ar: "مصادقة بأدوار منفصلة للبائع والزبون عبر Laravel Auth" },
      { en: "Eloquent ORM with automatic CSRF protection across every form", ar: "حماية CSRF تلقائية على كل نموذج عبر Eloquent ORM" },
      { en: "Race-condition-safe checkout using lockForUpdate() on stock during order transactions", ar: "عملية دفع آمنة من تعارض العمليات باستخدام lockForUpdate() على المخزون" },
    ],
    liveUrl: "https://shop-laravel-production-e709.up.railway.app",
    codeUrl: "https://github.com/HadiKarkoosh/shop-laravel",
  },
  {
    name: "Daffa — Team & Task Management Landing Platform",
    color: "var(--purple)",
    tagline: {
      en: "Arabic-language (RTL) SaaS landing platform with a live signup system",
      ar: "منصة SaaS عربية (RTL) بنظام تسجيل مباشر",
    },
    stack: ["Next.js", "TypeScript", "React"],
    highlights: [
      { en: "Real React state driving every tabbed section — product tiers, growth journey, roadmap", ar: "حالة React حقيقية تشغّل كل قسم متبوّب — خطط المنتج، رحلة النمو، خارطة الطريق" },
      { en: "Live signup API route with server-side validation, backed by a JSON store", ar: "مسار API للتسجيل المباشر مع تحقق من جهة السيرفر، مدعوم بتخزين JSON" },
      { en: "Admin page reading signups server-side, plus an original inline-SVG mascot component", ar: "صفحة إدارية تقرأ التسجيلات من السيرفر، إضافة لعنصر SVG أصلي للماسكوت" },
    ],
    liveUrl: "https://daffa-app.vercel.app",
    codeUrl: "https://github.com/HadiKarkoosh/daffa-app",
  },
  {
    name: "Tutoring Platform — Booking Marketplace",
    color: "var(--pink)",
    tagline: {
      en: "Full-stack tutor booking marketplace with race-condition-safe scheduling",
      ar: "سوق حجز مدرّسين Full-Stack بجدولة آمنة من تعارض العمليات",
    },
    stack: ["Next.js", "Nest.js", "TypeORM", "SQLite"],
    highlights: [
      { en: "Race-safe booking: atomic conditional UPDATE + unique constraint + an in-process mutex, verified by a concurrent-request test", ar: "حجز آمن من التعارض: UPDATE شرطي ذري + قيد تفرّد + mutex داخل العملية، مُتحقَّق منه باختبار طلبات متزامنة" },
      { en: "JWT auth with tutor/student roles, reviews, and editable availability slots", ar: "مصادقة JWT بأدوار مدرّس/طالب، تقييمات، وأوقات توفّر قابلة للتعديل" },
      { en: "17 automated Jest tests covering auth, booking races, and tutor search/pricing", ar: "17 اختبار Jest آلي يغطّي المصادقة وتعارض الحجز والبحث عن المدرّسين والتسعير" },
    ],
    liveUrl: "https://tutoring-platform-chi.vercel.app",
    codeUrl: "https://github.com/HadiKarkoosh/tutoring-platform",
  },
  {
    name: "Rating Ladder — Codeforces Progress Tracker",
    color: "var(--amber)",
    tagline: {
      en: "Look up any Codeforces handle and see its rank ladder, rating history, and solved problems",
      ar: "ابحث عن أي معرّف Codeforces وشوف سلم رتبته وتاريخ تقييمه والمسائل المحلولة",
    },
    stack: ["Next.js", "TypeScript", "Recharts"],
    highlights: [
      { en: "Fully client-side — no backend, fetches directly from the public Codeforces API in the browser", ar: "بالكامل من جهة المتصفح — بدون باك اند، يجلب البيانات مباشرة من API الخاص بـ Codeforces" },
      { en: "Rank ladder placement uses Codeforces' own real rating-tier colors, not arbitrary ones", ar: "سلم الرتب يستخدم ألوان مستويات التقييم الحقيقية من Codeforces نفسها" },
      { en: "Rating-history chart, solved-by-difficulty breakdown, and recent-submissions table via recharts", ar: "رسم بياني لتاريخ التقييم، توزيع المسائل حسب الصعوبة، وجدول آخر المحاولات عبر recharts" },
    ],
    liveUrl: "https://cf-rating-tracker-delta.vercel.app",
    codeUrl: "https://github.com/HadiKarkoosh/cf-rating-tracker",
  },
];

const TEXT = {
  toggleMenu: { en: "Toggle menu", ar: "فتح القائمة" },
  heroSubtitle: {
    en: "Full-stack developer & 4th-year Informatics Engineering student. I build, ship and maintain real websites — end to end.",
    ar: "مطوّر مواقع Full-Stack وطالب سنة رابعة هندسة معلوماتية. أبني وأنشر وأصون مواقع حقيقية من البداية للنهاية.",
  },
  liveStatus: { en: "Live Status", ar: "الحالة المباشرة" },
  statusLabel: { en: "Status", ar: "الحالة" },
  statusValue: { en: "Online · open to work", ar: "متصل · متاح للعمل" },
  roleLabel: { en: "Role", ar: "الدور" },
  roleValue: { en: "Full-stack developer", ar: "مطوّر مواقع Full-Stack" },
  educationLabel: { en: "Education", ar: "التعليم" },
  educationValue: { en: "Informatics Eng. · WPU · Yr 4", ar: "هندسة معلوماتية · WPU · سنة 4" },
  uptimeLabel: { en: "Uptime", ar: "مدة التشغيل" },
  aboutEyebrow: { en: "Background", ar: "خلفية" },
  aboutTitle: { en: "About", ar: "نبذة" },
  aboutText: {
    en: "I'm a full-stack developer with real production experience — managing and building websites for a Saudi-based company, and shipping custom projects for freelance clients. I work comfortably across the stack: React and Next.js on the front end, Laravel and Nest.js on the back end, with Python, C++ and SQL in the toolbox. Outside of client work, I compete in algorithmic programming contests and hold an ICDL certification in computer proficiency.",
    ar: "أنا مطوّر مواقع Full-Stack بخبرة إنتاجية حقيقية — إدارة وبناء مواقع لشركة سعودية، وتنفيذ مشاريع مخصصة لعملاء فريلانس. أعمل بارتياح على كامل الطبقات: React و Next.js بالواجهة الأمامية، و Laravel و Nest.js بالخلفية، مع Python و C++ و SQL. خارج عمل العملاء، أشارك في مسابقات البرمجة التنافسية وأحمل شهادة ICDL في مهارات الحاسوب.",
  },
  stackEyebrow: { en: "Toolkit", ar: "الأدوات" },
  stackTitle: { en: "Stack", ar: "الأدوات" },
  logEyebrow: { en: "Career Timeline", ar: "المسار المهني" },
  logTitle: { en: "Experience", ar: "الخبرة" },
  academicsEyebrow: { en: "Academics", ar: "أكاديمي" },
  educationTitle: { en: "Education", ar: "التعليم" },
  degreeLabel: { en: "Degree", ar: "الشهادة" },
  schoolLabel: { en: "School", ar: "الجامعة" },
  statusFieldLabel: { en: "Status", ar: "الحالة" },
  spokenLanguages: { en: "Spoken Languages", ar: "اللغات المحكية" },
  selectedWorkEyebrow: { en: "Selected Work", ar: "أعمال مختارة" },
  workTitle: { en: "Work", ar: "الأعمال" },
  workFooterPre: { en: "Check out more of my work — ", ar: "شوف باقي أعمالي — " },
  workFooterLink: { en: "follow along on GitHub", ar: "تابعني على GitHub" },
  codeLabel: { en: "Code", ar: "الكود" },
  liveLabel: { en: "Live", ar: "مباشر" },
  certsEyebrow: { en: "Certifications", ar: "الشهادات" },
  certsTitle: { en: "Certifications", ar: "الشهادات" },
  certName: { en: "ICDL — International Computer Driving License", ar: "ICDL — رخصة القيادة الدولية لاستخدام الحاسوب" },
  contactEyebrow: { en: "Get in Touch", ar: "تواصل معي" },
  contactTitle: { en: "Contact", ar: "تواصل" },
  emailLabel: { en: "Email", ar: "البريد" },
  githubLabel: { en: "GitHub", ar: "GitHub" },
  linkedinLabel: { en: "LinkedIn", ar: "LinkedIn" },
  footerText: { en: "Built with Next.js, TypeScript & Tailwind CSS", ar: "مبني بـ Next.js و TypeScript و Tailwind CSS" },
  langToggle: { en: "🌐 عربي", ar: "🌐 EN" },
};

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
  lang,
  codeLabel,
  liveLabel,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  lang: "en" | "ar";
  codeLabel: string;
  liveLabel: string;
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
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs px-2.5 py-1 rounded-full border hover:opacity-80 transition-opacity"
            style={{ color: "var(--text-dim)", borderColor: "var(--border)" }}
          >
            {codeLabel} ↗
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs px-2.5 py-1 rounded-full border hover:opacity-80 transition-opacity"
            style={{ color: project.color, borderColor: project.color + "55" }}
          >
            {liveLabel} ↗
          </a>
        </div>
      </div>
      <p className="font-mono text-sm text-text-dim mb-3">{project.tagline[lang]}</p>
      <ul className="space-y-1.5 mb-4">
        {project.highlights.map((line, i) => (
          <li key={i} className="text-text-dim text-sm flex gap-2">
            <span className="shrink-0" style={{ color: project.color }}>
              +
            </span>
            <span>{line[lang]}</span>
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
  lang,
}: {
  entry: (typeof LOG_ENTRIES)[number];
  isLast: boolean;
  lang: "en" | "ar";
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
            {entry.tag[lang]}
          </span>
        </div>
        <h3 className="text-text font-semibold text-lg mb-0.5">
          {entry.title[lang]}
        </h3>
        <p className="font-mono text-sm text-text-dim mb-2.5">{entry.org[lang]}</p>
        <ul className="space-y-1.5">
          {entry.lines.map((line, i) => (
            <li key={i} className="text-text-dim text-sm flex gap-2">
              <span className="shrink-0" style={{ color: entry.color }}>
                +
              </span>
              <span>{line[lang]}</span>
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
  const { lang, toggle } = useLang();
  const t = useT(TEXT);

  return (
    <main className="relative min-h-screen bg-bg text-text font-body">
      <BackgroundGlow />

      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 shrink-0">
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
            <button
              type="button"
              onClick={toggle}
              className="font-mono text-xs px-2.5 py-1.5 rounded-full border border-border text-text-dim hover:text-text hover:border-blue transition-colors whitespace-nowrap"
            >
              {t.langToggle}
            </button>
          </div>

          <nav className="hidden sm:flex gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-sm text-text-dim hover:text-text transition-colors whitespace-nowrap"
              >
                {l.label[lang]}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={t.toggleMenu}
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
                {l.label[lang]}
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
          {t.heroSubtitle}
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
              {t.liveStatus}
            </span>
          </div>
          <dl className="px-4 py-3 font-mono text-sm divide-y divide-border">
            {[
              [t.statusLabel, t.statusValue, "var(--accent)"],
              [t.roleLabel, t.roleValue, "var(--blue)"],
              [t.educationLabel, t.educationValue, "var(--purple)"],
              [t.uptimeLabel, uptime, "var(--pink)"],
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
      <Section id="about" eyebrow={t.aboutEyebrow} color="var(--blue)" title={t.aboutTitle}>
        <p className="text-text-dim leading-relaxed">{t.aboutText}</p>
      </Section>

      {/* Stack */}
      <Section id="stack" eyebrow={t.stackEyebrow} color="var(--purple)" title={t.stackTitle}>
        <div className="space-y-7">
          {STACK_GROUPS.map((group) => (
            <div key={group.label.en}>
              <p
                className="font-mono text-xs uppercase tracking-widest mb-2.5"
                style={{ color: group.color }}
              >
                {group.label[lang]}
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
      <Section id="log" eyebrow={t.logEyebrow} color="var(--pink)" title={t.logTitle}>
        <div>
          {LOG_ENTRIES.map((entry, i) => (
            <LogEntry key={entry.hash} entry={entry} isLast={i === LOG_ENTRIES.length - 1} lang={lang} />
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" eyebrow={t.academicsEyebrow} color="var(--amber)" title={t.educationTitle}>
        <div
          className="rounded-xl border border-border bg-bg-panel p-5 mb-8 max-w-lg"
          style={{ boxShadow: "0 0 30px -14px var(--amber)" }}
        >
          <p className="font-mono text-xs text-text-dim mb-1">{t.degreeLabel}</p>
          <p className="text-text font-semibold mb-4">{EDUCATION.degree[lang]}</p>
          <div className="flex justify-between gap-4 font-mono text-sm">
            <div>
              <p className="text-text-dim text-xs mb-1">{t.schoolLabel}</p>
              <p className="text-text">{EDUCATION.school[lang]}</p>
            </div>
            <div className="text-right">
              <p className="text-text-dim text-xs mb-1">{t.statusFieldLabel}</p>
              <p style={{ color: "var(--amber)" }}>{EDUCATION.status[lang]}</p>
            </div>
          </div>
        </div>

        <p className="font-mono text-xs text-text-dim uppercase tracking-widest mb-3">
          {t.spokenLanguages}
        </p>
        <div className="space-y-4 max-w-lg">
          {SPOKEN_LANGUAGES.map((spoken, i) => (
            <div key={spoken.name.en}>
              <div className="flex justify-between font-mono text-sm mb-1.5">
                <span className="text-text">{spoken.name[lang]}</span>
                <span className="text-text-dim">{spoken.level[lang]}</span>
              </div>
              <div className="h-2 rounded-full bg-bg-panel-2 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: spoken.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${spoken.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Work */}
      <Section id="work" eyebrow={t.selectedWorkEyebrow} color="var(--accent)" title={t.workTitle}>
        <div className="grid sm:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => (
            <WorkCard key={project.name} project={project} index={i} lang={lang} codeLabel={t.codeLabel} liveLabel={t.liveLabel} />
          ))}
        </div>
        <p className="font-mono text-sm text-text-dim mt-5">
          {t.workFooterPre}
          <a
            href="https://github.com/HadiKarkoosh"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-base hover:underline"
            style={{ color: "var(--purple)" }}
          >
            {t.workFooterLink}
          </a>
        </p>
      </Section>

      {/* Certifications */}
      <Section id="certs" eyebrow={t.certsEyebrow} color="var(--blue)" title={t.certsTitle}>
        <div className="flex flex-wrap gap-2.5">
          <SkillChip name={t.certName} color="var(--blue)" index={0} />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow={t.contactEyebrow} color="var(--purple)" title={t.contactTitle}>
        <div className="rounded-xl border border-border bg-bg-panel divide-y divide-border max-w-lg overflow-hidden">
          <a
            href="mailto:hadikarkoosh2005.che@gmail.com"
            className="flex items-center justify-between px-4 py-4 hover:bg-bg-panel-2 transition-colors group"
          >
            <span className="font-mono text-sm text-text-dim">{t.emailLabel}</span>
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
            <span className="font-mono text-sm text-text-dim">{t.githubLabel}</span>
            <span
              className="font-mono text-sm transition-colors group-hover:opacity-80"
              style={{ color: "var(--purple)" }}
            >
              github.com/HadiKarkoosh
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/hadi-karkoosh/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-4 py-4 hover:bg-bg-panel-2 transition-colors group"
          >
            <span className="font-mono text-sm text-text-dim">{t.linkedinLabel}</span>
            <span
              className="font-mono text-sm transition-colors group-hover:opacity-80"
              style={{ color: "var(--pink)" }}
            >
              hadi-karkoosh
            </span>
          </a>
        </div>
      </Section>

      <footer className="max-w-4xl mx-auto px-5 sm:px-8 py-10 border-t border-border">
        <p className="font-mono text-xs text-text-dim">{t.footerText}</p>
      </footer>
    </main>
  );
}
