import React from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '../theme';
import CloudTextureBackground from './CloudTextureBackground';

interface BioCardProps {
  profileImage: string;
}

const BioCard: React.FC<BioCardProps> = ({ profileImage }) => {
  const { t } = useTranslation();

  const name = t('bio.name');
  const bio = t('bio.description');
  const skills = t('bio.skills', { returnObjects: true }) as string[];

  return (
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
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    backdropFilter: 'blur(12px)',
                    color: theme.colors.text.primary,
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow:
                      'inset 0px -1px 2px rgba(0, 0, 0, 0.1), inset 0px 1px 2px rgba(255, 255, 255, 0.8)',
                    transition: 'all 0.2s ease-in-out',
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
};

export default BioCard;
