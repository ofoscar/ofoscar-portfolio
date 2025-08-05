import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { theme } from '../theme';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the middle card (card 2) on component mount
    const scrollToCenter = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        // Responsive card width based on screen size
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        let cardWidth;

        if (isMobile) {
          cardWidth = container.clientWidth - 32; // 32px for padding on mobile
        } else if (isTablet) {
          cardWidth = Math.min(600, container.clientWidth - 64); // Smaller cards on tablet
        } else {
          cardWidth = 840; // Full size on desktop
        }

        const gap = isMobile ? 20 : 40;
        const containerWidth = container.clientWidth;

        // Only center on desktop, let mobile/tablet start from first card
        if (!isMobile && !isTablet) {
          const cardIndex = 1; // Second card (0-indexed)
          const cardPosition = (cardWidth + gap) * cardIndex;
          const scrollPosition =
            cardPosition - (containerWidth - cardWidth) / 2;
          container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
        }
      }
    };

    // Use setTimeout to ensure layout is complete
    setTimeout(scrollToCenter, 100);
  }, []);
  return (
    <div className='w-full'>
      <div className='max-w-[1280px] mx-auto'>
        <div className='text-center mb-8 md:mb-12'>
          <h2
            className='text-2xl sm:text-3xl font-bold mb-3 md:mb-4'
            style={{
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            {t('projects.title')}
          </h2>
          <p
            className='text-base sm:text-lg'
            style={{
              color: theme.colors.text.secondary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            {t('projects.subtitle')}
          </p>
        </div>
        <div
          ref={scrollContainerRef}
          className='flex flex-row gap-5 md:gap-[40px] scroll-smooth snap-x snap-mandatory scrollbar-hide overflow-x-auto px-0 py-2'
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {projectsData
            .filter((project) => project.starred)
            .map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                review={project.review}
                features={project.features}
              />
            ))}
        </div>

        {/* See More Button */}
        <div className='text-center mt-8 md:mt-12'>
          <button
            onClick={() => navigate('/projects')}
            className='px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg'
            style={{
              backgroundColor: theme.colors.surface,
              color: theme.colors.text.primary,
              border: `2px solid ${theme.colors.border.light}`,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                theme.colors.surfaceSecondary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.surface;
            }}
          >
            {t('projects.seeMore', 'See More Projects')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
