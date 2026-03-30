'use client';

import { useState } from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  photo?: string;
  bio: string;
  linkedin?: string;
}

export default function TeamCard({
  name,
  role,
  photo,
  bio,
  linkedin,
}: TeamCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped(!flipped)}
      onKeyDown={(e) => e.key === 'Enter' && setFlipped(!flipped)}
      role="button"
      tabIndex={0}
      aria-label={`${name} - ${role}. Click to ${flipped ? 'see photo' : 'read bio'}`}
    >
      <div
        className="relative w-full h-80 transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-white shadow-md"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {photo ? (
            <img
              src={photo}
              alt={name}
              className="w-full h-56 object-cover"
            />
          ) : (
            <div className="w-full h-56 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <span className="text-5xl font-display font-bold text-white/80">
                {name.charAt(0)}
              </span>
            </div>
          )}
          <div className="p-4">
            <h3 className="font-display text-lg font-bold text-gray-900">{name}</h3>
            <p className="text-sm text-blue-500 font-body">{role}</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-[#0D1117] text-white p-6 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div>
            <h3 className="font-display text-lg font-bold mb-1">{name}</h3>
            <p className="text-sm text-blue-400 font-body mb-4">{role}</p>
            <p className="text-sm text-gray-300 font-body leading-relaxed">{bio}</p>
          </div>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-body transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn Profile
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
