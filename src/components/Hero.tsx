import React from 'react';
import GlassButton from './GlassButton';

interface HeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  buttonText?: string;
  onButtonClick?: () => void;
  showSocials?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  backgroundImage,
  buttonText,
  onButtonClick,
  showSocials = false,
}) => {
  return (
    <div className='relative w-full h-[350px] sm:h-[400px] lg:h-[450px] bg-gray-300'>
      <img
        src={backgroundImage}
        alt='Hero Background'
        className='absolute inset-0 w-full h-full object-cover'
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='absolute inset-0 bg-opacity-40 flex flex-col sm:flex-row sm:items-end sm:justify-between items-start justify-center w-full py-4 px-8 sm:py-6 lg:py-[40px] lg:px-[80px]'>
        <div className='flex flex-col max-w-[800px] w-full sm:w-auto'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center sm:text-left w-full'>
            {title}
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-3xl text-white text-center sm:text-left mt-2 w-full'>
            {description}
          </p>
          {buttonText && (
            <div className='mt-4 flex justify-center sm:justify-start'>
              <GlassButton
                className='gradient-border-wrapper text-sm sm:text-base md:text-lg lg:text-2xl'
                onClick={onButtonClick}
              >
                {buttonText}
              </GlassButton>
            </div>
          )}
        </div>

        {/* Social Links */}
        {showSocials && (
          <div className='flex flex-row items-center sm:justify-end justify-center sm:items-end mt-4 sm:mt-0 w-full'>
            <div className='flex gap-3'>
              <a
                href='https://github.com/ofoscar'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200'
                title='GitHub'
              >
                <svg
                  className='w-5 h-5 text-white'
                  fill='black'
                  viewBox='0 0 24 24'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>

              <a
                href='https://www.linkedin.com/in/ofoscar/'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200'
                title='LinkedIn'
              >
                <svg
                  className='w-5 h-5 text-white'
                  fill='black'
                  viewBox='0 0 24 24'
                >
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
              </a>

              <a
                href='mailto:me@ofoscar.com'
                className='w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200'
                title='Email'
              >
                <svg
                  className='w-5 h-5 text-white'
                  fill='black'
                  viewBox='0 0 24 24'
                >
                  <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
                  <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
                </svg>
              </a>

              <a
                href='https://www.instagram.com/ofoscar/'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200'
                title='Instagram'
              >
                <svg
                  className='w-5 h-5 text-white'
                  fill='black'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.741 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.741 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z' />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
