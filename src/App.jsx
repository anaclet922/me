// src/App.jsx
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import MobileNav from './components/MobileNav';
import StatusBar from './components/StatusBar';
import AboutPanel from './components/panels/AboutPanel';
import ExperiencePanel from './components/panels/ExperiencePanel';
import WorkPanel from './components/panels/WorkPanel';
import SkillsPanel from './components/panels/SkillsPanel';
import ContactPanel from './components/panels/ContactPanel';

const PANELS = {
  about:      <AboutPanel />,
  experience: <ExperiencePanel />,
  work:       <WorkPanel />,
  skills:     <SkillsPanel />,
  contact:    <ContactPanel />,
};

function App() {
  const [activeTab, setActiveTab] = useState('about');
  
  return (
    <div className="shell">
      <Sidebar active={activeTab} onSwitch={setActiveTab} />
      <Topbar />
      <MobileNav active={activeTab} onSwitch={setActiveTab} />
      <main className="content" key={activeTab}>
        {PANELS[activeTab]}
      </main>
      <StatusBar />
    </div>
  );
}

export default App;