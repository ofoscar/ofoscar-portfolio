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
        <div className='flex-shrink-0'>
          <div
            className='w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 overflow-hidden'
            style={{
              border: `3px solid ${theme.colors.brand.primary}`,
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
