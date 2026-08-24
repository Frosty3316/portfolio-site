export default function ProjectCard({ project, featured = false }) {
  const techs = project.tech.split(",").map((item) => item.trim());
  const imageSrc = `${import.meta.env.BASE_URL}${project.image}`;

  return (
    <article className={featured ? "card card--featured" : "card"}>
      <div className="card__visual" style={{ "--accent": project.accent }}>
        <img src={imageSrc} alt="" />
      </div>
      <div className="card__body">
        {featured ? <p className="card__eyebrow">Featured</p> : null}
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <ul className="chips">
          {techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <a
          className="card__link"
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} live demo (opens in a new tab)`}
        >
          Live demo
          <span aria-hidden="true"> →</span>
        </a>
      </div>
    </article>
  );
}
