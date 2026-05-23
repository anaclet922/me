// src/components/panels/AboutPanel.jsx
export default function AboutPanel() {
  return (
    <div className="tab-panel">
      {/* Hero Section */}
      <div className="about-hero">
        <h1 className="panel-heading">
          Hi, I'm <em>Anaclet</em>
          {/* <span className="wave-emoji">👋</span> */}
        </h1>
        <p className="hero-subtitle">I build exceptional digital solutions for the web and beyond.</p>
      </div>
      
      <p className="body-text">
        My journey in software engineering began in 2016 when I hacked together my first WordPress theme.
        Since then, I've evolved into a full-stack developer passionate about creating impactful digital experiences
        that solve real-world problems.
      </p>

      {/* Stats / Quick Facts */}
      <div className="about-stats">
        <div className="stat-item">
          <span className="stat-number">5+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">20+</span>
          <span className="stat-label">Projects Delivered</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">2</span>
          <span className="stat-label">Open Source Packages</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">4K+</span>
          <span className="stat-label">Package Downloads</span>
        </div>
      </div>

      {/* Info Grid - Education, Languages, Certificates */}
      <div className="about-info-grid">
        {/* Education Card */}
        <div className="info-card">
          <div className="card-header">
            <div className="card-icon-wrapper">
              <i className="ti ti-school" />
            </div>
            <h3>Education</h3>
          </div>
          <div className="card-content">
            <div className="timeline-item-card">
              <div className="timeline-dot-card"></div>
              <div>
                <div className="card-degree">Bachelor's in Computer Science</div>
                <div className="card-institution">University of Rwanda</div>
                <div className="card-date">2016 – 2021</div>
              </div>
            </div>
          </div>
        </div>

        {/* Languages Card */}
        <div className="info-card">
          <div className="card-header">
            <div className="card-icon-wrapper">
              <i className="ti ti-language" />
            </div>
            <h3>Languages</h3>
          </div>
          <div className="card-content">
            <div className="language-item-card">
              <div className="language-info">
                <span className="language-name-card">English</span>
                <span className="language-level-badge professional">Professional</span>
              </div>
              <div className="language-level-bar">
                <div className="language-level-fill" style={{width: '90%'}}></div>
              </div>
            </div>
            <div className="language-item-card">
              <div className="language-info">
                <span className="language-name-card">Kinyarwanda</span>
                <span className="language-level-badge native">Native</span>
              </div>
              <div className="language-level-bar">
                <div className="language-level-fill" style={{width: '100%'}}></div>
              </div>
            </div>
            <div className="language-item-card">
              <div className="language-info">
                <span className="language-name-card">French</span>
                <span className="language-level-badge limited">Limited</span>
              </div>
              <div className="language-level-bar">
                <div className="language-level-fill" style={{width: '40%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Card */}
        <div className="info-card certificates-card">
          <div className="card-header">
            <div className="card-icon-wrapper">
              <i className="ti ti-certificate" />
            </div>
            <h3>Certificates</h3>
          </div>
          <div className="card-content">
            <div className="certificate-item">
              <div className="certificate-icon">
                <i className="ti ti-brand-aws" />
              </div>
              <div className="certificate-details">
                <div className="certificate-name-card">AWS AI Practitioner</div>
                <div className="certificate-issuer-card">Amazon Web Services</div>
                <div className="certificate-year-card">2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-stack-section">
        <div className="tech-stack-header">
          <i className="ti ti-code" />
          <h3>Technologies I work with</h3>
        </div>
        <div className="tech-grid-modern">
          {['PHP', 'Flutter/Dart', 'JavaScript', 'Python', 'Three.js', 'CodeIgniter', 'Laravel', 'Django', 'React', 'Node.js', 'TypeScript', 'Docker', 'RabbitMQ', 'USSD', 'REST API', 'Linux', 'MySQL', 'MariaDB', 'MS SQL Server', 'PostgreSQL', 'Redis', 'MongoDB'].map(t => (
            <span key={t} className="tech-chip">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}