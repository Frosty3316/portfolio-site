import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    title: "Mini Docs",
    desc: "A real-time collaborative editor with live cursors, presence, and multiple documents — built so more than one person can write in the same file at once.",
    live: "https://harmonious-klepon-777dcc.netlify.app/",
    tech: "React, WebSockets, Node.js, Socket.IO",
    accent: "#6366f1",
    image: "projects/mini-docs.png",
    featured: true,
  },
  {
    title: "Weather App",
    desc: "Looks up live conditions with the OpenWeather API, including loading and error states so the UI stays honest when the network fails.",
    live: "https://atmo-pink.vercel.app/",
    tech: "React, API, JavaScript",
    accent: "#38bdf8",
    image: "projects/weather.png",
  },
  {
    title: "AI Portfolio Chatbot",
    desc: "A lightweight chatbot that answers questions about my projects and this portfolio, wired to an API rather than hardcoded replies.",
    live: "https://frosty3316.github.io/ai-chatbot/",
    tech: "JavaScript, API Integration",
    accent: "#a78bfa",
    image: "projects/ai-chatbot.png",
  },
  {
    title: "TaskNest To-Do App",
    desc: "Add, complete, and delete tasks with localStorage so the list survives a refresh — a small app with a complete user flow.",
    live: "https://Frosty3316.github.io/todo-app/",
    tech: "HTML, CSS, JavaScript",
    accent: "#34d399",
    image: "projects/todo-app.png",
  },
  {
    title: "FocusFlow Landing Page",
    desc: "A responsive marketing landing page with a clear hierarchy, mobile-first layout, and reusable CSS sections.",
    live: "https://Frosty3316.github.io/focusflow-landing/",
    tech: "HTML, CSS",
    accent: "#4ade80",
    image: "projects/focusflow.png",
  },
];

const skills = [
  {
    label: "Frontend",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Vite",
      "Mantine UI",
      "React DnD",
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
    label: "Data",
    items: ["PostgreSQL", "MySQL", "Prisma", "Hive"],
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
      "Render",
      "GitHub Pages",
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
            I design, build, and ship complete web applications — from
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
            <h2 id="projects-heading">Selected work</h2>
            <p>Live demos first. Mini Docs is the fullest stack piece.</p>
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
              I work across the stack: interfaces on the client, APIs and
              sockets on the server, and data in between. Comfortable with
              authentication, CRUD, API integration, backend structure, and
              real-time, responsive apps. Recent work includes a collaborative
              editor, a weather client with honest loading and error states,
              and smaller HTML/CSS/JS projects that keep the fundamentals
              sharp.
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
        <p>Open to internships, collaborations, and interesting web work.</p>
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
