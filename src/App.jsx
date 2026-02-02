import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    title: "FocusFlow Landing Page",
    desc: "Responsive landing page built with HTML and CSS.",
    live: "https://Frosty3316.github.io/focusflow-landing/",
    tech: "HTML, CSS",
  },
  {
    title: "TaskNest To-Do App",
    desc: "Interactive to-do app with localStorage persistence.",
    live: "https://Frosty3316.github.io/todo-app/",
    tech: "HTML, CSS, JavaScript",
  },
  {
  title: "Weather App",
  desc: "React app that fetches real-time weather data using the OpenWeather API, with loading and error handling.",
  live: "https://Frosty3316.github.io/weather-app/",
  tech: "React, API, JavaScript",
  },
  {
    title: "Mini Docs",
    desc: "Real-time collaborative document editor with live cursors, presence indicators, and multi-document support.",
    live: "https://harmonious-klepon-777dcc.netlify.app/",
    tech: "React, WebSockets, Node.js, Socket.IO",
  },
  {
    title: "AI Portfolio Chatbot",
    desc: "Lightweight AI chatbot designed to answer questions about my projects and portfolio.",
    live: "https://frosty3316.github.io/ai-chatbot/",
    tech: "JavaScript, API Integration",
  },
];

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Hi, I’m Faustina Yarathingal</h1>
        <p>Frontend developer learning by building real projects.</p>
      </header>

      <section>
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="fade-in"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>

      </section>

      <footer>
        <p>Contact: frostyarathingal@gmail.com</p>
      </footer>
    </div>
  );
}