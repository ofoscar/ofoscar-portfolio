import React from 'react';

interface EducationCardProps {
  logo: string;
  alt: string;
  title: string;
  description: string;
  details?: string;
  period?: string;
  level?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const EducationCard: React.FC<EducationCardProps> = ({
  logo,
  alt,
  title,
  description,
  details,
  period,
  level,
  onClick,
  className = '',
  style = {},
}) => {
  const defaultStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow:
      'inset 0px -1px 2px rgba(0, 0, 0, 0.1), inset 0px 1px 2px rgba(255, 255, 255, 0.1)',
    width: '400px',
    ...style,
  };

  return (
    <div
      className={`p-4 rounded-lg text-center md:text-left flex-shrink-0 cursor-pointer transition-all duration-300 hover:bg-opacity-80 ${className}`}
      style={defaultStyle}
      onClick={onClick}
    >
      <div className='flex items-start gap-3 h-full'>
        <img
          src={logo}
          alt={alt}
          className='w-16 h-full object-contain flex-shrink-0'
          style={{
            maxHeight: '100%',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
          }}
        />
        <div className='flex-1 min-w-0'>
          <h3 className='text-lg font-semibold text-white mb-2'>{title}</h3>
          <p className='text-sm text-gray-200 mb-1'>{description}</p>
          {details && <p className='text-xs text-gray-300 mb-1'>{details}</p>}
          {period && <p className='text-xs text-gray-300'>{period}</p>}
          {level && <p className='text-xs text-gray-300'>{level}</p>}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
