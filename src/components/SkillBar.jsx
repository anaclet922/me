// src/components/SkillBar.jsx
export default function SkillBar({ name, level }) {
  return (
    <div className="skill-bar-wrap">
      <div className="skill-bar-top">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-pct">{level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{width:`${level}%`}} />
      </div>
    </div>
  );
}