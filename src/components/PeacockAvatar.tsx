import React from 'react';
import { CadetProfile } from '../types/game';

interface PeacockAvatarProps {
  cadet: CadetProfile;
  size?: number;
  isAnimated?: boolean;
  state?: 'idle' | 'walking' | 'victory' | 'hurt';
}

export const PeacockAvatar: React.FC<PeacockAvatarProps> = ({
  cadet,
  size = 64,
  isAnimated = true,
  state = 'idle'
}) => {
  const isPutri = cadet.gender === 'putri';

  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 ${isAnimated ? 'animate-float-gentle' : ''}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Peacock Feather Crest Glow */}
          <linearGradient id="featherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>

          {/* PMR Blue Slayer Gradient */}
          <linearGradient id="slayerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>

          {/* Cadet Skin Tone */}
          <radialGradient id="skinGrad" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#fba364" />
          </radialGradient>
        </defs>

        {/* Peacock Badge Background Aura */}
        <circle cx="50" cy="50" r="46" fill="#064e3b" stroke="#f59e0b" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="43" fill="#042f2e" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 2" />

        {/* Peacock Feather Emblem Behind Hat/Head */}
        <path
          d="M 50 14 C 44 6, 40 2, 50 2 C 60 2, 56 6, 50 14 Z"
          fill="url(#featherGrad)"
          stroke="#f59e0b"
          strokeWidth="1"
        />
        <circle cx="50" cy="6" r="2.5" fill="#eab308" />
        <circle cx="50" cy="6" r="1.2" fill="#0369a1" />

        {/* Side mini feathers */}
        <path d="M 43 16 C 36 10, 34 8, 40 7 C 44 10, 44 14, 43 16 Z" fill="#0d9488" />
        <path d="M 57 16 C 64 10, 66 8, 60 7 C 56 10, 56 14, 57 16 Z" fill="#0d9488" />

        {/* Back Head & Hair/Jilbab */}
        {isPutri ? (
          // Jilbab / Hijab Putri PMR (Clean White / Light Blue Syari)
          <path
            d="M 32 36 C 32 20, 68 20, 68 36 C 74 48, 70 72, 50 74 C 30 72, 26 48, 32 36 Z"
            fill="#e2e8f0"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
        ) : (
          // Hair Cadet Putra (Neat cartoon black hair with side parting)
          <path
            d="M 30 35 C 30 20, 70 20, 70 35 C 72 40, 70 45, 68 45 C 66 45, 66 32, 50 30 C 34 32, 34 45, 32 45 C 30 45, 28 40, 30 35 Z"
            fill="#1e293b"
          />
        )}

        {/* Face */}
        <circle cx="50" cy="40" r="18" fill="url(#skinGrad)" />

        {/* Cadet Cap (Topi Lapangan PMR Madya dengan pin Palang Merah) */}
        {!isPutri && (
          <g>
            <path
              d="M 30 30 C 32 18, 68 18, 70 30 C 72 32, 68 35, 50 34 C 32 35, 28 32, 30 30 Z"
              fill="#0284c7"
            />
            {/* Cap Visor */}
            <path
              d="M 28 32 Q 50 38 72 32 Q 74 36 50 37 Q 26 36 28 32 Z"
              fill="#0369a1"
            />
            {/* Red Cross badge on Cap */}
            <rect x="47" y="24" width="6" height="2" fill="#ef4444" rx="0.5" />
            <rect x="49" y="22" width="2" height="6" fill="#ef4444" rx="0.5" />
          </g>
        )}

        {/* Eyes & Eyebrows */}
        <ellipse cx="44" cy="38" rx="2.5" ry="3.5" fill="#0f172a" />
        <ellipse cx="56" cy="38" rx="2.5" ry="3.5" fill="#0f172a" />
        {/* Eye sparkles */}
        <circle cx="45" cy="37" r="1" fill="#ffffff" />
        <circle cx="57" cy="37" r="1" fill="#ffffff" />

        {/* Rosy Cheeks */}
        <ellipse cx="40" cy="43" rx="2.8" ry="1.6" fill="#f43f5e" opacity="0.45" />
        <ellipse cx="60" cy="43" rx="2.8" ry="1.6" fill="#f43f5e" opacity="0.45" />

        {/* Cheerful Smile / Expression */}
        {state === 'hurt' ? (
          <path d="M 45 47 Q 50 43 55 47" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
        ) : (
          <path d="M 45 45 Q 50 50 55 45" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />
        )}

        {/* PMR Uniform Shirt (White Collared PMR Shirt) */}
        <path
          d="M 32 58 L 36 78 L 64 78 L 68 58 L 58 55 L 50 58 L 42 55 Z"
          fill="#f8fafc"
          stroke="#cbd5e1"
          strokeWidth="1.5"
        />

        {/* Blue Slayer Leher PMR Madya (Syal Biru Madya & Cincin Slayer) */}
        <path
          d="M 40 55 L 50 71 L 60 55 L 50 58 Z"
          fill="url(#slayerGrad)"
          stroke="#0284c7"
          strokeWidth="1"
        />
        {/* Slayer Ring (Cincin Kacu Emas Berlogo Merak) */}
        <rect x="47" y="60" width="6" height="4" rx="1.5" fill="#f59e0b" stroke="#b45309" strokeWidth="0.8" />
        <circle cx="50" cy="62" r="1" fill="#0369a1" />

        {/* Small PMR Red Cross Emblem on Left Chest Pocket */}
        <rect x="36" y="64" width="7" height="6" fill="#ffffff" stroke="#94a3b8" strokeWidth="0.6" rx="1" />
        <rect x="38" y="66" width="3" height="1.2" fill="#ef4444" />
        <rect x="39" y="65" width="1" height="3" fill="#ef4444" />

        {/* Kontingen Merak Patch on Right Pocket */}
        <circle cx="61" cy="67" r="3" fill="#0d9488" stroke="#f59e0b" strokeWidth="0.6" />
        <circle cx="61" cy="67" r="1.2" fill="#eab308" />

        {/* Navy Blue Trousers/Skirt Belt */}
        <path d="M 36 78 L 64 78 L 63 88 L 37 88 Z" fill="#1e3a8a" />
        <rect x="47" y="78" width="6" height="3" fill="#f59e0b" rx="0.5" />
      </svg>
    </div>
  );
};
