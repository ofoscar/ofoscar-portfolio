import React from 'react';
import LazyImage from './LazyImage';

interface ProfileImageProps {
  src: string;
  alt?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt = 'Profile',
}) => {
  return (
    <div className='w-48 h-48 md:w-56 md:h-56 rounded-full bg-gray-200 overflow-hidden relative z-10'>
      <LazyImage src={src} alt={alt} className='w-full h-full object-cover' />
    </div>
  );
};

export default ProfileImage;
