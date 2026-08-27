import React from 'react';

export default function GspIllustration({ className = '' }) {
  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1440 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto object-cover object-bottom"
        preserveAspectRatio="none"
      >
        {/* Sky / Base Grha Sabha Pramana Silhouette */}
        <defs>
          <linearGradient id="gspGrad" x1="720" y1="0" x2="720" y2="240" gradientUnits="userSpaceOnUse">
            <stop stopColor="#90CF69" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="roofGrad" x1="720" y1="20" x2="720" y2="240" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="1" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Trees & Lawn Silhouette */}
        <path
          d="M0 160C120 150 240 170 360 155C480 140 600 165 720 150C840 135 960 160 1080 148C1200 136 1320 165 1440 155V240H0V160Z"
          fill="url(#gspGrad)"
        />

        {/* Central GSP Colonnade Building */}
        {/* Main Base Platform */}
        <rect x="420" y="110" width="600" height="90" rx="4" fill="#F8FAFC" />
        <rect x="440" y="125" width="560" height="15" fill="#E2E8F0" />
        
        {/* Columns */}
        {Array.from({ length: 16 }).map((_, i) => (
          <rect key={i} x={450 + i * 34} y="138" width="14" height="62" rx="2" fill="#CBD5E1" />
        ))}

        {/* Roof Structure */}
        <polygon points="720,25 380,110 1060,110" fill="url(#roofGrad)" />
        <polygon points="720,40 430,110 1010,110" fill="#B45309" fillOpacity="0.4" />
        
        {/* Roof Spire / Crown */}
        <rect x="715" y="10" width="10" height="20" rx="2" fill="#FEF08A" />
        <circle cx="720" cy="8" r="6" fill="#F59E0B" />

        {/* Front Stairs */}
        <polygon points="560,200 880,200 920,240 520,240" fill="#E2E8F0" />
        <line x1="535" y1="210" x2="905" y2="210" stroke="#94A3B8" strokeWidth="2" />
        <line x1="525" y1="225" x2="915" y2="225" stroke="#94A3B8" strokeWidth="2" />

        {/* Flanking Trees */}
        <circle cx="180" cy="150" r="45" fill="#047857" fillOpacity="0.9" />
        <circle cx="280" cy="160" r="35" fill="#059669" fillOpacity="0.95" />
        <circle cx="1260" cy="150" r="45" fill="#047857" fillOpacity="0.9" />
        <circle cx="1160" cy="160" r="35" fill="#059669" fillOpacity="0.95" />
      </svg>
    </div>
  );
}
