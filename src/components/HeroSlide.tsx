import { useTranslation } from 'react-i18next';
import { theme } from '../theme';
import CloudTextureBackground from './CloudTextureBackground';
import HeroContent from './HeroContent';

interface HeroSlideProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  profileImage?: string;
  onPrimaryClick?: () => void;
}

function HeroSlide({
  title,
  subtitle,
  primaryButtonText,
  profileImage,
  onPrimaryClick,
}: HeroSlideProps) {
  const { t } = useTranslation();
  const skills = t('bio.skills', { returnObjects: true }) as string[];

  return (
    <div
      className='w-full relative flex items-center justify-center overflow-hidden md:h-[600px] lg:min-h-[480px] lg:h-[480px] p-4 sm:p-8 md:p-[80px]'
      style={{
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.border.light}`,
      }}
    >
      {/* Cloud Texture Background */}
      <CloudTextureBackground className='opacity-90' />

      {/* Overlay for better text readability */}
      <div
        className='absolute inset-0 bg-black opacity-55'
        aria-hidden='true'
      ></div>

      {/* Content */}
      <HeroContent
        title={title}
        subtitle={subtitle}
        primaryButtonText={primaryButtonText}
        profileImage={profileImage}
        onPrimaryClick={onPrimaryClick}
        skills={skills}
      />
    </div>
  );
}

export default HeroSlide;
