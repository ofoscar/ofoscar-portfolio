import React from 'react';
import { theme } from '../theme';
import CloudTextureBackground from './CloudTextureBackground';

interface BioCardProps {
  profileImage: string;
  name: string;
  bio: string;
  skills: string[];
}

const BioCard: React.FC<BioCardProps> = ({
  profileImage,
  name,
  bio,
  skills,
}) => (
  <div
    className='w-full h-[640px] p-8 md:p-12 flex items-center relative overflow-hidden'
    style={{
      backgroundColor: theme.colors.surface,
      border: `1px solid ${theme.colors.border.light}`,
      maxWidth: theme.maxWidth.card,
      margin: '0 auto',
      borderRadius: '24px',
    }}
  >
    {/* Cloud Texture Background */}
    <CloudTextureBackground className='opacity-30' />

    <div className='max-w-4xl mx-auto relative z-10'>
      <div className='flex flex-col md:flex-row gap-8 items-center'>
        {/* Profile Image */}
        <div className='flex-shrink-0 relative'>
          {/* Radar Sweep Effect */}
          <span
            className='pointer-events-none absolute top-1/2 left-1/2 w-[3200px] h-[3200px] -translate-x-1/2 -translate-y-1/2'
            style={{ zIndex: 5 }}
            aria-hidden='true'
          >
            <span
              className='block absolute left-1/2 top-1/2 w-[1600px] h-[6px] bg-gradient-to-r from-transparent via-gray-300 to-transparent origin-left animate-radar'
              style={{
                transform: 'rotate(0deg) translate(-50%, -50%)',
                borderRadius: '3px',
                opacity: 0.15,
                boxShadow: '0 0 10px 2px rgba(156,163,175,0.08)',
              }}
            />
          </span>
          {/* Decorative Circles */}
          {[2056, 1856, 1656, 1456, 1256, 1056, 856, 656, 456].map(
            (size, i) => (
              <div
                key={size}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 ${
                  i === 0
                    ? 'border-gray-200 opacity-5'
                    : i === 1
                    ? 'border-gray-300 opacity-5'
                    : i === 2
                    ? 'border-gray-300 opacity-6'
                    : i === 3
                    ? 'border-gray-400 opacity-6'
                    : i === 4
                    ? 'border-gray-400 opacity-7'
                    : i === 5
                    ? 'border-gray-400 opacity-7'
                    : 'border-gray-400 opacity-8'
                }`}
                style={{ width: size, height: size, zIndex: 1 + i }}
                aria-hidden='true'
              />
            ),
          )}
          <div
            className='w-48 h-48 md:w-56 md:h-56 rounded-full bg-gray-200 overflow-hidden relative z-10'
            style={{
              border: '3px solid #D1D5DB',
            }}
          >
            <img
              src={profileImage}
              alt='Profile'
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        {/* Bio Content */}
        <div className='flex-1 text-center md:text-left'>
          <h2
            className='text-3xl md:text-4xl font-bold mb-4'
            style={{
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            {name}
          </h2>
          <p
            className='text-lg leading-relaxed mb-6'
            style={{
              color: theme.colors.text.secondary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            {bio}
          </p>
          <div className='flex flex-wrap gap-3 justify-center md:justify-start'>
            {skills.map((skill) => (
              <span
                key={skill}
                className='px-4 py-2 rounded-full text-sm font-medium'
                style={{
                  backgroundColor: theme.colors.surfaceSecondary,
                  color: theme.colors.brand.primary,
                  border: `1px solid ${theme.colors.border.light}`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BioCard;
