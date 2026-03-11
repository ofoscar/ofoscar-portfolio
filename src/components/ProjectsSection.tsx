import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import bng from '../assets/projects/bng.png';
import layout from '../assets/projects/layout.png';
import siperros from '../assets/projects/siperros.png';
import { theme } from '../theme';
import { ProjectTile } from './ProjectTile';

const sansFont = theme.typography.fontFamily.sans.join(', ');

function ProjectsSection() {
  const { t } = useTranslation();
  const rowRef = useRef<HTMLDivElement>(null);
  const secondCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rowRef.current && secondCardRef.current) {
      const row = rowRef.current;
      const card = secondCardRef.current;
      row.scrollLeft =
        card.offsetLeft - (row.offsetWidth - card.offsetWidth) / 2;
    }
  }, []);

  return (
    <div className='flex flex-col items-center gap-[16px] md:gap-[32px] w-full'>
      <div className='text-center flex flex-col gap-2'>
        <h2
          className='text-3xl font-bold'
          style={{
            color: theme.colors.text.primary,
            fontFamily: sansFont,
          }}
        >
          {t('projects.title')}
        </h2>
        <p
          className='text-base sm:text-lg'
          style={{
            color: theme.colors.text.secondary,
            fontFamily: sansFont,
          }}
        >
          {t('projects.subtitle')}
        </p>
      </div>
      <div
        className='flex flex-row gap-6 overflow-auto w-[1280px] max-w-[100vw] px-4 md:px-0 scrollbar-hide'
        ref={rowRef}
        style={
          {
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          } as React.CSSProperties
        }
      >
        <ProjectTile
          project={{
            name: 'BNG Agro: Web empresarial',
            background_image: bng,
            link_label: 'bngagroproductos.com',
            link_href: 'https://www.bngagroproductos.com',
            description:
              'Sitio web empresarial, con catálogo interactivo, buscador y diseño profesional que refuerza la identidad y presencia digital de la marca.',
          }}
          style={{
            backgroundSize: '800px',
            backgroundPosition: '0px -1px',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div ref={secondCardRef} className='snap-center'>
          <ProjectTile
            project={{
              name: 'SiPerros: Mapa pet-friendly',
              background_image: siperros,
              link_label: 'siperros.com',
              link_href: 'https://www.siperros.com',
              description:
                'Aplicación web móvil en React para descubrir lugares pet-friendly cerca de ti, con Google Maps, reseñas y aportes de usuarios.',
            }}
            style={{
              backgroundSize: '850px',
              backgroundPosition: '-70px -1px',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
        <ProjectTile
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
