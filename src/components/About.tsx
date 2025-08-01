import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { theme } from '../theme';
import CloudTextureBackground from './CloudTextureBackground';
import EducationCard from './EducationCard';
import Footer from './Footer';
import GlassButton from './GlassButton';
import ProfileImage from './ProfileImage';
import profile_img from '/profile.jpg';

function About() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const skills = t('bio.skills', { returnObjects: true }) as string[];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      // Check if screen is mobile (small)
      const isMobile = window.innerWidth < 640; // sm breakpoint
      const cardWidth = isMobile ? 280 : 400; // Responsive card width
      const gap = 16; // gap between cards (gap-4 = 1rem = 16px)
      const scrollPosition = index * (cardWidth + gap);

      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  // Education data array
  const educationData = [
    {
      logo: 'https://amo.org.mx/wp-content/uploads/2024/06/uas-logo.png',
      alt: 'Universidad Autónoma de Sinaloa',
      title: t('about.education.degree.title'),
      description: t('about.education.degree.description'),
      details: t('about.education.degree.details'),
      period: t('about.education.degree.period'),
      style: {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow:
          'inset 0px -1px 2px rgba(0, 0, 0, 0.1), inset 0px 1px 2px rgba(255, 255, 255, 0.15)',
      },
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Calgary_univ_full_coat_arms.svg/1200px-Calgary_univ_full_coat_arms.svg.png',
      alt: 'University of Calgary',
      title: t('about.education.english.title'),
      description: t('about.education.english.description'),
      level: t('about.education.english.level'),
    },
    {
      logo: 'https://cdn-icons-png.flaticon.com/512/10268/10268343.png',
      alt: 'Université de Mérici',
      title: t('about.education.french.title'),
      description: t('about.education.french.description'),
      level: t('about.education.french.level'),
    },
  ];

  return (
    <div className='flex flex-col w-full overflow-hidden'>
      <div
        className='relative flex items-center justify-center overflow-hidden md:h-[calc(100dvh-64px)]'
        style={{
          width: '100dvw',
          minHeight: 'calc(100dvh - 64px)', // Use minHeight for mobile flexibility
          backgroundColor: theme.colors.surface,
        }}
      >
        {/* Cloud Texture Background */}
        <CloudTextureBackground className='opacity-30' />

        {/* Overlay for better text readability */}
        <div
          className='absolute inset-0 bg-black opacity-40'
          aria-hidden='true'
        ></div>

        {/* Content */}
        <div className='relative z-10 text-center md:text-left w-full max-w-7xl flex flex-col md:flex-row items-center md:justify-between sm:p-8 about-mobile-content'>
          {/* Mobile Layout: Profile Image First */}
          <div className='block md:hidden flex-shrink-0'>
            <ProfileImage src={profile_img} alt='About Profile' />
          </div>

          <div className='flex flex-col md:gap-5 max-w-none md:max-w-[750px] w-full about-mobile-spacing'>
            <h1
              className='text-3xl sm:text-4xl md:text-5xl font-bold text-white w-full leading-tight md:leading-none'
              style={{
                fontFamily: theme.typography.fontFamily.sans.join(', '),
                textShadow: 'none',
              }}
            >
              {t('about.title')}
            </h1>
            <p
              className='text-lg sm:text-xl leading-tight text-white'
              style={{
                fontFamily: theme.typography.fontFamily.sans.join(', '),
                textShadow: 'none',
              }}
            >
              {t('about.subtitle')}
            </p>

            {/* Skills */}
            <div className='flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start'>
              {skills &&
                skills.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white'
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

            {/* Experience Stats */}
            <div className='flex flex-wrap gap-6 justify-center md:justify-start'>
              <div className='text-center md:text-left'>
                <div
                  className='text-2xl font-bold text-white'
                  style={{ textShadow: 'none' }}
                >
                  {t('about.experience.years')}
                </div>
                <div className='text-sm text-gray-200'>Experience</div>
              </div>
              <div className='text-center md:text-left'>
                <div
                  className='text-2xl font-bold text-white'
                  style={{ textShadow: 'none' }}
                >
                  {t('about.experience.projects')}
                </div>
                <div className='text-sm text-gray-200'>Completed</div>
              </div>
              <div className='text-center md:text-left'>
                <div
                  className='text-2xl font-bold text-white'
                  style={{ textShadow: 'none' }}
                >
                  {t('about.experience.technologies')}
                </div>
                <div className='text-sm text-gray-200'>Technologies</div>
              </div>
            </div>

            {/* Education Section */}
            <div className='w-full'>
              <h2
                className='text-xl sm:text-2xl font-bold mb-4 text-white text-center md:text-left'
                style={{
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                  textShadow: 'none',
                }}
              >
                {t('about.education.title')}
              </h2>

              {/* Education Cards - Horizontal Scrollable */}
              <div
                ref={scrollContainerRef}
                className='overflow-x-auto scrollbar-hide px-4 sm:px-0'
                style={{
                  scrollbarWidth: 'none' /* Firefox */,
                  msOverflowStyle: 'none' /* Internet Explorer 10+ */,
                }}
              >
                <div className='flex gap-4 min-w-max'>
                  {educationData.map((education, index) => (
                    <EducationCard
                      key={index}
                      logo={education.logo}
                      alt={education.alt}
                      title={education.title}
                      description={education.description}
                      details={education.details}
                      period={education.period}
                      level={education.level}
                      onClick={() => scrollToCard(index)}
                      style={education.style}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action Button - Mobile Only */}
            <div className='w-full flex justify-center md:justify-start mt-6'>
              <GlassButton
                onClick={() => navigate('/contact')}
                className='gradient-border-wrapper text-sm sm:text-base'
              >
                {t('about.cta.button', "Let's Work Together")}
              </GlassButton>
            </div>
          </div>

          {/* Desktop Layout: Profile Image on Right */}
          <div className='hidden md:block ml-8 flex-shrink-0'>
            <ProfileImage src={profile_img} alt='About Profile' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
