// src/components/Topbar.jsx
import resumePdf from '../assets/Resume - Anaclet Jan 2026-compressed.pdf';

export default function Topbar() {
  return (
    <header className="topbar">
      <span className="topbar-path">~/portfolio</span>
      <a 
        className="resume-btn" 
        href={resumePdf} 
        target="_blank" 
        rel="noreferrer"
      >
        resume.pdf ↗
      </a>
    </header>
  );
}