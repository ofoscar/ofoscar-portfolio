import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '../theme';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
  const { t } = useTranslation();
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
          <ProjectCard
            id='casino-management-system'
            title='Comprehensive Casino Management System'
            description='A complete casino management ecosystem consisting of multiple interconnected applications for operations, customer service, and terminal management. Successfully deployed and implemented in a live casino environment.'
            technologies={[
              'React.js',
              'Flutter',
              'SQL',
              'Canvas API',
              'Desktop Apps',
            ]}
            imageUrl='https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <ProjectCard
            id='restaurant-management-flutter'
            title='Restaurant Management System'
            description='A comprehensive Flutter application for restaurant operations management featuring real-time table tracking, order management, live floor plan visualization, and notification systems for managers.'
            technologies={[
              'Flutter',
              'Dart',
              'Real-time Database',
              'Push Notifications',
              'Mobile Development',
            ]}
            imageUrl='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <ProjectCard
            id='bng-agroproductos-website'
            title='BNG Agroproductos Business Website'
            description='A comprehensive business website for BNG Agroproductos, an agricultural company focused on innovation and sustainable land care. Features product catalog, company information, and integrated contact system.'
            technologies={[
              'HTML5',
              'CSS3',
              'JavaScript',
              'Contact Forms',
              'Email Integration',
              'Responsive Design',
            ]}
            imageUrl='https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
