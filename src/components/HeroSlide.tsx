import { useTranslation } from 'react-i18next';
import { theme } from '../theme';
import HeroContent from './HeroContent';

interface HeroSlideProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  profileImage?: string;
  backgroundImage?: string;
  onPrimaryClick?: () => void;
  gradientClassName?: string;
}

function HeroSlide({
  title,
  subtitle,
  primaryButtonText,
  profileImage,
  backgroundImage,
  onPrimaryClick,
  gradientClassName = 'from-[#BF1A2F] to-[#2F2F2F]',
}: HeroSlideProps) {
  const { t } = useTranslation();
  const skills = t('bio.skills', { returnObjects: true }) as string[];

  return (
    <div
      className={`w-full relative flex items-center justify-center overflow-hidden min-h-[500px] sm:min-h-[520px] md:h-[600px] lg:min-h-[480px] lg:h-[480px] p-4 sm:p-8 md:p-[80px] ${!backgroundImage ? `bg-gradient-to-br ${gradientClassName}` : ''}`}
      style={{
        border: `1px solid ${theme.colors.border.light}`,
      }}
    >
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt='Slide Background'
            className='absolute inset-0 w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/55 backdrop-blur-sm' />
        </>
      )}

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
