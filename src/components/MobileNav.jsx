// src/components/MobileNav.jsx
import { NAV_ITEMS } from '../data/navItems';

export default function MobileNav({ active, onSwitch }) {
  return (
    <div className="mobile-nav">
      {NAV_ITEMS.map(item => (
        <button
          key={item.id}
          className={`mobile-tab${active === item.id ? ' active' : ''}`}
          onClick={() => onSwitch(item.id)}
        >
          {item.num}. {item.label}
        </button>
      ))}
    </div>
  );
}