import React from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '../theme';
import BioContent from './BioContent';
import CloudTextureBackground from './CloudTextureBackground';
import ProfileImage from './ProfileImage';

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
              <ProfileImage src={profileImage} />
            </div>
          </div>

          {/* Bio Content */}
          <BioContent name={name} bio={bio} skills={skills} />
        </div>
      </div>
    </div>
  );
};

export default BioCard;
