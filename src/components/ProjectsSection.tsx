import { useEffect, useRef, useState } from 'react';
import link from '../assets/icons/link.svg';
import bng from '../assets/projects/bng.png';
import layout from '../assets/projects/layout.png';
import siperros from '../assets/projects/siperros.png';

function ProjectsSection() {
  const rowRef = useRef<HTMLDivElement>(null);
  const secondCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (secondCardRef.current) {
      secondCardRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, []);

  return (
    <div className='flex flex-col items-center gap-[16px] md:gap-[32px] w-full'>
      <div className='flex justify-center'>
        <h1 className='font-bold text-3xl text-gray-800'>
          Proyectos Destacados
        </h1>
      </div>
      <div
        className='flex flex-row gap-6 overflow-auto w-[1280px] max-w-[100vw] px-4 scrollbar-hide'
        ref={rowRef}
        style={
          {
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          } as React.CSSProperties
        }
      >
        <ProjectCard
          project={{
            name: 'BNG Agro: Web empresarial',
            background_image: bng,
            link_label: 'bngagroproductos.com',
            link_href: 'https://www.bngagroproductos.com',
            description:
              'Sitio web empresarial, con catálogo interactivo, buscador y diseño profesional que refuerza la identidad y presencia digital de la marca.',
          }}
          style={{
            backgroundSize: '800px',
            backgroundPosition: '0px -1px',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div ref={secondCardRef} className='snap-center'>
          <ProjectCard
            project={{
              name: 'SiPerros: Mapa pet-friendly',
              background_image: siperros,
              link_label: 'siperros.com',
              link_href: 'https://www.siperros.com',
              description:
                'Aplicación web móvil en React para descubrir lugares pet-friendly cerca de ti, con Google Maps, reseñas y aportes de usuarios.',
            }}
            style={{
              backgroundSize: '850px',
              backgroundPosition: '-70px -1px',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
        <ProjectCard
          project={{
            name: 'Restaurant Map: Sistema interactivo',
            background_image: layout,
            link_label: 'ofoscar.com/layout',
            link_href: 'layout',
            description:
              'Sistema web en React para gestión de mesas en restaurantes, con mapa interactivo, seguimiento de órdenes y generación de reportes dinámicos.',
          }}
          style={{
            backgroundSize: '690px',
            backgroundPosition: '0px -2px',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    </div>
  );
}

export default ProjectsSection;

type Project = {
  name: string;
  background_image: string;
  link_label: string;
  link_href: string;
  description: string;
};

type ProjectCardProps = {
  project: Project;
  style?: {};
};

export const ProjectCard = ({ project, style }: ProjectCardProps) => {
  const { name, background_image, link_label, link_href, description } =
    project;
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
        w-[320px] md:w-[402px] h-[480px] md:h-[420px] 
        rounded-2xl border border-[#DCDCDC]
        relative overflow-hidden flex-shrink-0 cursor-pointer
        snap-center
      '
      onClick={handleLinkClick}
      style={{
        backgroundImage: loaded ? `url(${background_image})` : 'none',
        backgroundColor: loaded ? 'transparent' : '#e5e5e5', // gray placeholder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
        ...style,
      }}
    >
      <div className='absolute bottom-0 left-0 right-0 bg-gray-900/80 px-4 py-3 flex flex-col gap-1 md:gap-0'>
        <h3 className='text-white font-bold text-xl md:text-2xl'>{name}</h3>
        <div className='flex flex-col gap-1 md:gap-2'>
          <p className='text-white md:text-md text-justify'>{description}</p>
          <div className='flex flex-row gap-2 items-center'>
            <img src={link} alt='link icon' className='w-5 h-5' />
            <p className='text-gray-200 text-md font-semibold'>{link_label}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
