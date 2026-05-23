// src/components/Avatar.jsx
import { useState } from 'react';
import profileImage from '../assets/profile.jpg';

export default function Avatar() {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="avatar">
      {!imageError ? (
        <img 
          src={profileImage} 
          alt="Anaclet Ahishakiye"
          onError={() => setImageError(true)}
        />
      ) : (
        <span>AA</span>
      )}
    </div>
  );
}