import React from 'react';
import { theme } from '../theme';
import GlassButton from './GlassButton';
import ProfileImage from './ProfileImage';

interface HeroContentProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  profileImage?: string;
  onPrimaryClick?: () => void;
  skills: string[];
}

const HeroContent: React.FC<HeroContentProps> = ({
  title,
  subtitle,
  primaryButtonText,
  profileImage,
  onPrimaryClick,
  skills,
}) => {
  return (
    <div className='relative z-10 text-center md:text-left w-full max-w-[1280px] flex flex-col md:flex-row items-center justify-between gap-8'>
      {/* Mobile Layout: Profile Image First */}
      {profileImage && (
        <div className='block md:hidden'>
          <ProfileImage src={profileImage} alt='Hero Profile' />
        </div>
      )}

      <div className='flex-col max-w-none md:max-w-[750px] w-full'>
        <h1
          className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white w-full leading-tight md:leading-none'
          style={{
            fontFamily: theme.typography.fontFamily.sans.join(', '),
            textShadow: 'none',
          }}
        >
          {title}
        </h1>
        <p
          className='text-lg sm:text-xl leading-tight text-gray-200 mb-6 md:mb-8'
          style={{
            fontFamily: theme.typography.fontFamily.sans.join(', '),
            textShadow: 'none',
          }}
        >
          {subtitle}
        </p>

        {/* Skills */}
        <div className='flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start mb-6 md:mb-8'>
          {skills.map((skill) => (
            <span
              key={skill}
              className='px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white cursor-default'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow:
                  'inset 0px -1px 2px rgba(0, 0, 0, 0.1), inset 0px 1px 2px rgba(255, 255, 255, 0.2)',
                transition: 'all 0.2s ease-in-out',
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
          <GlassButton
            className='gradient-border-wrapper text-base sm:text-lg md:text-2xl w-full sm:w-[220px]'
            onClick={onPrimaryClick}
          >
            {primaryButtonText}
          </GlassButton>
        </div>
      </div>

      {/* Desktop Layout: Profile Image on Right */}
      {profileImage && (
        <div className='hidden md:block ml-8 flex-shrink-0'>
          <ProfileImage src={profileImage} alt='Hero Profile' />
        </div>
      )}
    </div>
  );
};

export default HeroContent;
