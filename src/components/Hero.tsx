import React from 'react';
import GlassButton from './GlassButton';

interface HeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  backgroundImage,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className='relative w-full h-[300px] sm:h-[400px] lg:h-[450px] bg-gray-300'>
      <img
        src={backgroundImage}
        alt='Hero Background'
        className='absolute inset-0 w-full h-full object-cover'
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='absolute inset-0 bg-opacity-40 flex items-start justify-center flex-col w-full py-4 px-4 sm:py-6 sm:px-8 lg:py-[40px] lg:px-[80px]'>
        <div className='flex flex-col max-w-[780px]'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white w-full'>
            {title}
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-3xl text-white mt-2 w-full'>
            {description}
          </p>
          {buttonText && (
            <div className='mt-4'>
              <GlassButton
                className='gradient-border-wrapper text-sm sm:text-base md:text-lg lg:text-2xl'
                onClick={onButtonClick}
              >
                {buttonText}
              </GlassButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
