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
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      <footer>
        <p>Contact: frostyarathingal@gmail.com</p>
      </footer>
    </div>
  );
}