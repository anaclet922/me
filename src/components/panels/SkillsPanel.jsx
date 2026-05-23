// src/components/panels/SkillsPanel.jsx
import { SKILLS } from '../../data/skills';

function SkillCard({ category, data }) {
  return (
    <div className="skill-card">
      <div className="skill-card-header" style={{ borderBottomColor: data.color }}>
        <div className="skill-card-icon-wrapper" style={{ backgroundColor: `${data.color}15` }}>
          <i className={`ti ${data.icon}`} style={{ color: data.color }} />
        </div>
        <h3 className="skill-card-title">{category}</h3>
      </div>
      <div className="skill-card-content">
        <div className="skill-tags">
          {data.skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillsPanel() {
  return (
    <div className="tab-panel">
      <h1 className="panel-heading">Technical & Professional <em>Skills</em></h1>
      <div className="skills-cards-grid">
        {Object.entries(SKILLS).map(([category, data]) => (
          <SkillCard key={category} category={category} data={data} />
        ))}
      </div>
    </div>
  );
}