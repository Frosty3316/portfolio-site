import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    title: "Inkroom",
    desc: "A shared writing room. Open a page, send the link, and someone can join live. Named pages, presence, and find-in-page, over Socket.IO.",
    live: "https://inkroom-swart.vercel.app/",
    github: "https://github.com/Frosty3316/mini-docs",
    tech: "React, Node.js, Socket.IO, TipTap",
    accent: "#e8a07a",
    image: "projects/inkroom.png",
    featured: true,
  },
  {
    title: "Atmo",
    desc: "A Next.js weather app with a server-only API layer. Search a city for current conditions, the next 12 hours, and a 7-day outlook, with a sky that follows the weather.",
    live: "https://atmo-pink.vercel.app/",
    github: "https://github.com/Frosty3316/weather-app",
    tech: "Next.js, React, Open-Meteo, API",
    accent: "#38bdf8",
    image: "projects/atmo.jpg",
  },
  {
    title: "Dossier",
    desc: "A GPT-style assistant for this site. Ask about my work as often as you like; general questions go through a hosted model, with a daily cap and no sign-in.",
    live: "https://dossier-pink.vercel.app/",
    github: "https://github.com/Frosty3316/ai-chatbot",
    tech: "React, TypeScript, Groq, Vercel",
    accent: "#d4b896",
    image: "projects/dossier.png",
  },
  {
    title: "TaskNest",
    desc: "A today-first daily planner. Inbox is capture; Today is what you’ll finish. Local-only persistence, keyboard shortcuts, drag-and-drop, and an undo that doesn’t punish a misclick.",
    live: "https://tasknest-wheat.vercel.app/",
    github: "https://github.com/Frosty3316/todo-app",
    tech: "React, TypeScript, Vite, Vitest",
    accent: "#34d399",
    image: "projects/tasknest.png",
  },
  {
    title: "FocusFlow",
    desc: "A local-first focus timer wrapped in a product landing page. The hero clock is real. Pick 25, 15, or 5 minutes, work until the ring empties, and keep streaks on this device.",
    live: "https://frosty3316.github.io/focusflow-landing/",
    github: "https://github.com/Frosty3316/focusflow-landing",
    tech: "React, TypeScript, Vite, Vitest",
    accent: "#818cf8",
    image: "projects/focusflow-hero.png",
  },
];

const skills = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Vite",
      "UI/UX",
      "TipTap",
      "dnd-kit",
      "Mantine UI",
      "Recharts",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "REST APIs",
      "JWT",
      "Socket.IO",
      "WebSockets",
    ],
  },
  {
    label: "AI",
    items: ["Groq", "Vercel AI SDK", "AI/ML basics"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "Prisma", "Hive", "Data Analysis"],
  },
  {
    label: "Forensics",
    items: [
      "Fingerprints",
      "Questioned documents",
      "Digital and cyber forensics",
    ],
  },
  {
    label: "Mobile",
    items: ["Flutter", "Dart", "Riverpod"],
  },
  {
    label: "Testing",
    items: ["Vitest", "Playwright"],
  },
  {
    label: "Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Netlify",
      "Vercel",
      "Render",
      "GitHub Pages",
      "Figma",
      "Adobe Creative Suite",
      "Microsoft Office",
      "Postman",
    ],
  },
];

export default function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#projects">
        Skip to projects
      </a>

      <header className="site-header">
        <a className="logo" href="#top">
          FY
        </a>
        <nav aria-label="Primary">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <p className="eyebrow">Full stack developer</p>
          <h1 id="hero-heading">Hi, I’m Faustina Yarathingal</h1>
          <p className="lede">
            I design, build, and ship complete web and mobile applications; from
            responsive interfaces to real-time backends.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#projects">
              View projects
            </a>
            <a className="button button--ghost" href="mailto:frostyarathingal@gmail.com">
              Email me
            </a>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-heading">
          <div className="section-head">
            <h2 id="projects-heading">Work</h2>
          </div>
          <div className="projects">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="fade-in"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <ProjectCard project={project} featured={Boolean(project.featured)} />
              </div>
            ))}
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading">
          <div className="section-head">
            <h2 id="about-heading">About</h2>
          </div>
          <div className="about-grid">
            <p className="about-copy">
              I design, build, and ship complete web and mobile applications.
              Interfaces on the client, APIs and sockets on the server, and data
              in between. Auth, CRUD, API work, real-time features, and layouts
              that hold up on a phone, from first sketch through deploy. I also
              have forensic-science training in fingerprints, questioned
              documents, and digital forensics, plus UI/UX and data analysis.
            </p>
            <ul className="skill-groups">
              {skills.map((group) => (
                <li key={group.label}>
                  <h3>{group.label}</h3>
                  <ul className="chips">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer id="contact">
        <h2>Contact</h2>
        <p>Open to internships, collaborations, and interesting work.</p>
        <ul className="contact-links">
          <li>
            <a href="mailto:frostyarathingal@gmail.com">frostyarathingal@gmail.com</a>
          </li>
          <li>
            <a
              href="https://github.com/Frosty3316"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
            >
              github.com/Frosty3316
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
