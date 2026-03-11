import { useEffect, useState } from 'react';
import link from '../assets/icons/link.svg';

export type Project = {
  name: string;
  background_image: string;
  link_label: string;
  link_href: string;
  description: string;
};

type ProjectTileProps = {
  project: Project;
  style?: {};
};

export const ProjectTile = ({ project, style }: ProjectTileProps) => {
  const { name, background_image, link_label, link_href, description } = project;
  const [loaded, setLoaded] = useState(false);

  const handleLinkClick = () => {
    window.open(link_href, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const img = new Image();
    img.src = background_image;
    img.onload = () => setLoaded(true);
  }, [background_image]);

  return (
    <div
      className='
        w-[320px] md:w-[410px] h-[480px] md:h-[420px]
        rounded-2xl border border-[#DCDCDC]
        relative overflow-hidden flex-shrink-0 cursor-pointer
        snap-center group
      '
      onClick={handleLinkClick}
      style={{
        backgroundImage: loaded ? `url(${background_image})` : 'none',
        backgroundColor: loaded ? 'transparent' : '#e5e5e5', // gray placeholder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...style,
      }}
    >
      {/* Always-visible link badge */}
      <div
        className='absolute bottom-3 left-3 px-3 py-1 text-sm font-medium text-white rounded-full flex items-center gap-1.5
          group-hover:opacity-0 transition-opacity duration-300'
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <img src={link} alt='link icon' className='w-4 h-4' />
        {link_label}
      </div>

      {/* Slide-up overlay */}
      <div
        className='absolute bottom-0 left-0 right-0
          translate-y-full group-hover:translate-y-0
          transition-transform duration-300 ease-in-out
          px-4 py-4 flex flex-col gap-2'
        style={{
          backgroundColor: 'rgba(17, 24, 39, 0.85)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <h3 className='text-white font-bold text-lg leading-tight'>{name}</h3>
        <p className='text-gray-200 text-sm leading-snug'>{description}</p>
        <div className='flex items-center gap-1.5 mt-1'>
          <img src={link} alt='link icon' className='w-4 h-4' />
          <span className='text-gray-300 text-sm font-medium'>{link_label}</span>
        </div>
      </div>
    </div>
  );
};
