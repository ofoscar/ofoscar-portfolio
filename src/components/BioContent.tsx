import React from 'react';
import { theme } from '../theme';

interface BioContentProps {
  name: string;
  bio: string;
  skills: string[];
}

const BioContent: React.FC<BioContentProps> = ({ name, bio, skills }) => {
  return (
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
  );
};

export default BioContent;
