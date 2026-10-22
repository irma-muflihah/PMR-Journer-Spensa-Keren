import React from 'react';

interface PeacockEmblemProps {
  size?: number;
  className?: string;
}

export const PeacockEmblem: React.FC<PeacockEmblemProps> = ({ size = 80, className = '' }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500/20 via-emerald-500/30 to-amber-500/25 blur-xl animate-pulse"></div>

      <svg
        viewBox="0 0 120 120"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(20,184,166,0.7)] animate-peacock-glow"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="emblemFeatherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="45%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
        </defs>

        {/* Circular Medallion Background */}
        <circle cx="60" cy="60" r="54" fill="#032015" stroke="url(#goldRing)" strokeWidth="3" />
        <circle cx="60" cy="60" r="50" fill="#042f2e" stroke="#0d9488" strokeWidth="1" strokeDasharray="4 2" />

        {/* Peacock Fan Feathers (7 radiant feathers) */}
        {[-45, -30, -15, 0, 15, 30, 45].map((angle, idx) => (
          <g key={idx} transform={`rotate(${angle} 60 75)`}>
            {/* Feather stem */}
            <line x1="60" y1="75" x2="60" y2="22" stroke="#fde047" strokeWidth="1.5" />
            {/* Feather eye */}
            <ellipse cx="60" cy="22" rx="7" ry="10" fill="url(#emblemFeatherGrad)" stroke="#facc15" strokeWidth="1" />
            <circle cx="60" cy="22" r="4.5" fill="#0284c7" />
            <circle cx="60" cy="22" r="2.2" fill="#1e3a8a" />
            <circle cx="59" cy="21" r="0.8" fill="#ffffff" />
          </g>
        ))}

        {/* Peacock Body & Crown */}
        <ellipse cx="60" cy="72" rx="14" ry="18" fill="#065f46" stroke="#f59e0b" strokeWidth="1.5" />
        <circle cx="60" cy="52" r="10" fill="#047857" stroke="#f59e0b" strokeWidth="1.2" />

        {/* Beak & Eye */}
        <polygon points="60,49 65,52 60,54" fill="#f59e0b" />
        <circle cx="58" cy="51" r="1.5" fill="#fef08a" />
        <circle cx="58" cy="51" r="0.7" fill="#0f172a" />

        {/* Peacock Crown Tuft */}
        <line x1="60" y1="42" x2="57" y2="36" stroke="#f59e0b" strokeWidth="1.2" />
        <line x1="60" y1="42" x2="60" y2="34" stroke="#f59e0b" strokeWidth="1.2" />
        <line x1="60" y1="42" x2="63" y2="36" stroke="#f59e0b" strokeWidth="1.2" />
        <circle cx="57" cy="35" r="1.5" fill="#14b8a6" />
        <circle cx="60" cy="33" r="1.8" fill="#eab308" />
        <circle cx="63" cy="35" r="1.5" fill="#14b8a6" />

        {/* PMR Red Cross Shield on Breast */}
        <rect x="52" y="65" width="16" height="15" rx="3" fill="#ffffff" stroke="#ef4444" strokeWidth="1.2" />
        <rect x="57" y="68" width="6" height="9" fill="#ef4444" />
        <rect x="54" y="70" width="12" height="5" fill="#ef4444" />

        {/* Kontingen Merak Ribbon / Banner */}
        <path d="M 30 96 Q 60 104 90 96 Q 94 103 90 106 Q 60 114 30 106 Q 26 103 30 96 Z" fill="#b45309" stroke="#f59e0b" strokeWidth="1" />
        <text x="60" y="103" textAnchor="middle" fill="#fef08a" fontSize="6.5" fontWeight="bold" letterSpacing="0.5">
          MERAK · SPENSAKE
        </text>
      </svg>
    </div>
  );
};
