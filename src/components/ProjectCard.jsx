// src/components/ProjectCard.jsx
export default function ProjectCard({ project }) {
  return (
    <div className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-top">
        <i className={`ti ${project.icon} project-icon`} aria-hidden="true" />
        <div className="project-links">
          {project.live && 
            <a href={project.live} title="Live site" target="_blank" rel="noreferrer">
              <i className="ti ti-external-link" />
            </a>
          }
          {project.github && 
            <a href={project.github} title="GitHub" target="_blank" rel="noreferrer">
              <i className="ti ti-brand-github" />
            </a>
          }
          {project.npm && 
            <a href={project.npm} title="npm package" target="_blank" rel="noreferrer">
              <i className="ti ti-brand-npm" />
            </a>
          }
          {project.pub && 
            <a href={project.pub} title="Pub.dev package" target="_blank" rel="noreferrer">
              <i className="ti ti-brand-flutter" />
            </a>
          }
        </div>
      </div>
      <div className="project-name">{project.name}</div>
      <div className="project-desc">{project.desc}</div>
      {project.downloads && (
        <div className="project-downloads">
          <i className="ti ti-download" />
          <span>{project.downloads} downloads</span>
        </div>
      )}
      <div className="project-stack">
        {project.stack.map((s, i) => (
          <span key={s} className="stack-tag">{i > 0 ? ' · ' : ''}{s}</span>
        ))}
      </div>
    </div>
  );
}