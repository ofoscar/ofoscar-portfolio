import { useTranslation } from 'react-i18next';
import { theme } from '../theme';
import CloudTextureBackground from './CloudTextureBackground';
import ProfileImage from './ProfileImage';
import profile_img from '/profile.jpg';

function About() {
  const { t } = useTranslation();
  const skills = t('bio.skills', { returnObjects: true }) as string[];

  return (
    <div
      className='relative flex items-center justify-center overflow-hidden'
      style={{
        width: '100dvw',
        height: '100dvh',
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.border.light}`,
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
      <div className='relative z-10 text-center md:text-left w-full max-w-[1280px] flex flex-col md:flex-row items-center justify-between gap-8 p-4 sm:p-8 md:p-[80px]'>
        {/* Mobile Layout: Profile Image First */}
        <div className='block md:hidden '>
          <ProfileImage src={profile_img} alt='About Profile' />
        </div>

        <div className='flex-col max-w-none md:max-w-[750px] w-full'>
          <h1
            className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white w-full leading-tight md:leading-none'
            style={{
              fontFamily: theme.typography.fontFamily.sans.join(', '),
              textShadow: 'none',
            }}
          >
            {t('about.title')}
          </h1>
          <p
            className='text-lg sm:text-xl leading-tight text-white mb-6 md:mb-8'
            style={{
              fontFamily: theme.typography.fontFamily.sans.join(', '),
              textShadow: 'none',
            }}
          >
            {t('about.subtitle')}
          </p>

          {/* Skills */}
          <div className='flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start mb-6 md:mb-8'>
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
        </div>

        {/* Desktop Layout: Profile Image on Right */}
        <div className='hidden md:block ml-8 flex-shrink-0'>
          <ProfileImage src={profile_img} alt='About Profile' />
        </div>
      </div>
    </div>
  );
}

export default About;
