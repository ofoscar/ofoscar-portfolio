import { theme } from '../theme';

interface HeroSlideProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

function HeroSlide({
  backgroundImage,
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: HeroSlideProps) {
  return (
    <div
      className='w-full relative flex items-center justify-center overflow-hidden h-[480px] bg-cover bg-center'
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}

      {/* Content */}
      <div className='relative z-10 text-left max-w-4xl mx-auto px-4'>
        <h1
          className='text-5xl md:text-6xl font-bold mb-6 text-white'
          style={{
            fontFamily: theme.typography.fontFamily.sans.join(', '),
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          {title}
        </h1>
        <p
          className='text-xl md:text-2xl leading-relaxed text-white mb-8'
          style={{
            fontFamily: theme.typography.fontFamily.sans.join(', '),
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
          }}
        >
          {subtitle}
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-start'>
          <button
            className='px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:transform hover:scale-105'
            style={{
              background: theme.colors.brand.gradient,
              boxShadow: theme.colors.shadow.lg,
            }}
            onClick={onPrimaryClick}
          >
            {primaryButtonText}
          </button>
          <button
            className='px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:transform hover:scale-105 border-2 border-white text-white hover:bg-white hover:text-gray-900'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
            }}
            onClick={onSecondaryClick}
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSlide;
