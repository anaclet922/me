// src/components/panels/ExperiencePanel.jsx
import { useState } from 'react';
import { EXPERIENCE } from '../../data/experience';

export default function ExperiencePanel() {
    const [active, setActive] = useState('opensource');
    const current = EXPERIENCE.find(e => e.id === active);

    return (
        <div className="tab-panel">
            <h1 className="panel-heading">Where I've <em>worked</em></h1>

            <div className="experience-container">
                {/* Timeline Navigation */}
                <div className="experience-timeline-nav">
                    {EXPERIENCE.map((exp, index) => (
                        <button
                            key={exp.id}
                            className={`timeline-item ${active === exp.id ? 'active' : ''}`}
                            onClick={() => setActive(exp.id)}
                        >
                            <div className="timeline-marker">
                                <div className="timeline-dot"></div>
                                {index < EXPERIENCE.length - 1 && <div className="timeline-line"></div>}
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-company">{exp.label}</div>
                                <div className="timeline-role">{exp.role.split('→')[0].trim()}</div>
                                <div className="timeline-period">{exp.period}</div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Selected Experience Details */}
                {current && (
                    <div className="experience-details" key={current.id}>
                        <div className="exp-header">
                            <div className="exp-title">
                                <h2>{current.role}</h2>
                                <a href={current.href} target="_blank" rel="noreferrer" className="exp-company-link">
                                    @ {current.company}
                                    <i className="ti ti-external-link" />
                                </a>
                            </div>
                            <div className="exp-period-badge">{current.period}</div>
                        </div>

                        <ul className="exp-highlights">
                            {current.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>

                        {current.id === 'opensource' && (
                            <div className="opensource-showcase">
                                <div className="packages-stats">
                                    <div className="stat-card">
                                        <i className="ti ti-brand-npm" />
                                        <div className="stat-info">
                                            <span className="stat-value">1.2.2</span>
                                            <span className="stat-label">Latest Version</span>
                                        </div>
                                    </div>
                                    <div className="stat-card">
                                        <i className="ti ti-download" />
                                        <div className="stat-info">
                                            <span className="stat-value">4K+</span>
                                            <span className="stat-label">Downloads</span>
                                        </div>
                                    </div>
                                    <div className="stat-card">
                                        <i className="ti ti-brand-github" />
                                        <div className="stat-info">
                                            <span className="stat-value">Open Source</span>
                                            <span className="stat-label">MIT License</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="package-demo">
                                    <div className="demo-header">
                                        <i className="ti ti-code" />
                                        <span>Quick Start</span>
                                    </div>
                                    <pre className="code-block">
                                        <code>{`// npm install rwanda-locations
                                            import { getProvinces, getDistricts } from 'rwanda-locations';

                                            const provinces = getProvinces();
                                            // ["City Of Kigali", "Eastern Province", ...]

                                            const districts = getDistricts("City Of Kigali");
                                            // ["Nyarugenge", "Gasabo", "Kicukiro"]`}
                                        </code>
                                    </pre>
                                    <div className="package-links">
                                        <a href="https://www.npmjs.com/package/rwanda-locations" target="_blank" rel="noreferrer" className="package-link">
                                            <i className="ti ti-brand-npm" />
                                            View on npm
                                        </a>
                                        <a href="https://pub.dev/packages/rwanda_locations" target="_blank" rel="noreferrer" className="package-link">
                                            <i className="ti ti-brand-flutter" />
                                            View on Pub.dev
                                        </a>
                                        <a href="https://github.com/anaclet922/rwanda-locations" target="_blank" rel="noreferrer" className="package-link">
                                            <i className="ti ti-brand-github" />
                                            GitHub Repository
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}

                        {current.id === 'freelance' && (
                            <div className="freelance-projects">
                                <div className="projects-header">
                                    <i className="ti ti-briefcase" />
                                    <span>Featured Projects</span>
                                </div>
                                <div className="project-tags">
                                    <span className="project-tag">RSE.rw</span>
                                    <span className="project-tag">Mo-Capital</span>
                                    <span className="project-tag">Bauinzu</span>
                                    <span className="project-tag">Munezero.rw</span>
                                    <span className="project-tag">Investment Clinic</span>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}