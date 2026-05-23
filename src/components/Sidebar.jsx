// src/components/Sidebar.jsx
import Avatar from './Avatar';
import { NAV_ITEMS } from '../data/navItems';

export default function Sidebar({ active, onSwitch }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-profile">
        <Avatar />
        <div className="sidebar-name">Anaclet<br/>Ahishakiye</div>
        <div className="sidebar-role">Software Engineer · Kigali, RW</div>
      </div>
      <nav className="nav">
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            className={`nav-item${active === item.id ? ' active' : ''}`}
            onClick={() => onSwitch(item.id)}
          >
            <i className={`ti ${item.icon}`} aria-hidden="true" />
            <span><span className="nav-num">{item.num}. </span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-socials">
        <a href="https://github.com/anaclet922" title="GitHub" target="_blank" rel="noreferrer">
          <i className="ti ti-brand-github" />
        </a>
        <a href="https://www.linkedin.com/in/anaclet-ahishakiye-b3b18618b/" title="LinkedIn" target="_blank" rel="noreferrer">
          <i className="ti ti-brand-linkedin" />
        </a>
        <a href="https://twitter.com/AnacletAhisha" title="Twitter" target="_blank" rel="noreferrer">
          <i className="ti ti-brand-twitter" />
        </a>
        <a href="https://www.instagram.com/iam_anaclet/" title="Instagram" target="_blank" rel="noreferrer">
          <i className="ti ti-brand-instagram" />
        </a>
        <a href="mailto:a.anaclet920@gmail.com" title="Email">
          <i className="ti ti-mail" />
        </a>
      </div>
    </aside>
  );
}