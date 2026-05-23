// src/components/panels/WorkPanel.jsx
import { useState } from 'react';
import { PROJECTS } from '../../data/projects';
import ProjectCard from '../ProjectCard';

export default function WorkPanel() {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Projects', icon: 'ti-layout-grid' },
    { id: 'featured', label: 'Featured', icon: 'ti-star' },
    { id: 'enterprise', label: 'Enterprise', icon: 'ti-settings' },
    { id: 'mobile', label: 'Mobile & USSD', icon: 'ti-device-mobile' },
    { id: 'web', label: 'Web Apps', icon: 'ti-world' },
    { id: 'opensource', label: 'Open Source', icon: 'ti-brand-github' }
  ];
  
  const getCategory = (project) => {
    if (project.npm || project.pub) return 'opensource';
    if (project.company === 'RADIANT YACU') return 'enterprise';
    if (project.stack?.some(s => s.includes('Flutter') || s.includes('USSD'))) return 'mobile';
    if (project.live || project.name.includes('.rw') || project.name.includes('.com')) return 'web';
    return 'featured';
  };
  
  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => {
        if (filter === 'featured') return p.featured;
        return getCategory(p) === filter;
      });
  
  return (
    <div className="tab-panel">
      <h1 className="panel-heading">Things I've <em>built</em></h1>
      <p className="body-text">
        A collection of my work including enterprise systems, mobile applications, web platforms, 
        and open source contributions that solve real-world problems.
      </p>
      
      {/* Category Filters */}
      <div className="project-filters">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
            onClick={() => setFilter(cat.id)}
          >
            <i className={`ti ${cat.icon}`} />
            {cat.label}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map(p => <ProjectCard key={p.name} project={p} />)}
      </div>
    </div>
  );
}