export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <p className="tech">{project.tech}</p>
      <a href={project.live} target="_blank" rel="noreferrer">
        Live Demo →
      </a>
    </div>
  );
}