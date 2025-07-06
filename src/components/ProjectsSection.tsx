import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '../theme';

function ProjectsSection() {
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the middle card (card 2) on component mount
    const scrollToCenter = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = 840;
        const gap = 40; // Updated to match gap-[40px]
        const containerWidth = container.clientWidth;
        // Calculate position to center card 2
        const cardIndex = 1; // Second card (0-indexed)
        const cardPosition = (cardWidth + gap) * cardIndex;
        const scrollPosition = cardPosition - (containerWidth - cardWidth) / 2;

        container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      }
    };

    // Use setTimeout to ensure layout is complete
    setTimeout(scrollToCenter, 100);
  }, []);
  return (
    <div className='w-full px-4 mt-16'>
      <div className='max-w-[1280px] mx-auto'>
        <div className='text-center mb-12'>
          <h2
            className='text-3xl font-bold mb-4'
            style={{
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            {t('projects.title')}
          </h2>
          <p
            className='text-lg'
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
          className='flex flex-row gap-[40px] scroll-smooth snap-x snap-mandatory scrollbar-hide overflow-x-auto'
          style={{
            scrollPaddingLeft: 'calc(50% - 420px)',
            scrollPaddingRight: 'calc(50% - 420px)',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {/* Project Card 1 */}
          <div
            className='rounded-lg p-8 transition-all duration-300 hover:shadow-lg flex-shrink-0 snap-center'
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border.light}`,
              boxShadow: theme.colors.shadow.md,
              width: '840px',
            }}
          >
            <div className='flex flex-col lg:flex-row gap-6'>
              <div className='lg:w-1/3'>
                <img
                  src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Project 1'
                  className='w-full h-48 object-cover rounded-lg'
                />
              </div>
              <div className='lg:w-2/3'>
                <h3
                  className='text-xl font-semibold mb-3'
                  style={{
                    color: theme.colors.text.primary,
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
                  }}
                >
                  Modern Web Application
                </h3>
                <p
                  className='text-base leading-relaxed mb-4'
                  style={{
                    color: theme.colors.text.secondary,
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
                  }}
                >
                  A full-stack web application built with React, TypeScript, and
                  Node.js. Features modern UI/UX design, responsive layouts, and
                  seamless user experience.
                </p>
                <div className='flex flex-wrap gap-2'>
                  {['React', 'TypeScript', 'Node.js', 'Tailwind CSS'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className='px-3 py-1 text-sm rounded-full'
                        style={{
                          backgroundColor: theme.colors.surfaceSecondary,
                          color: theme.colors.text.primary,
                        }}
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div
            className='rounded-lg p-8 transition-all duration-300 hover:shadow-lg flex-shrink-0 snap-center'
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border.light}`,
              boxShadow: theme.colors.shadow.md,
              width: '840px',
            }}
          >
            <div className='flex flex-col lg:flex-row gap-6'>
              <div className='lg:w-1/3'>
                <img
                  src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Project 2'
                  className='w-full h-48 object-cover rounded-lg'
                />
              </div>
              <div className='lg:w-2/3'>
                <h3
                  className='text-xl font-semibold mb-3'
                  style={{
                    color: theme.colors.text.primary,
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
                  }}
                >
                  Data Visualization Dashboard
                </h3>
                <p
                  className='text-base leading-relaxed mb-4'
                  style={{
                    color: theme.colors.text.secondary,
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
                  }}
                >
                  Interactive dashboard for data visualization and analytics.
                  Built with modern charting libraries and real-time data
                  processing capabilities.
                </p>
                <div className='flex flex-wrap gap-2'>
                  {['Vue.js', 'D3.js', 'Python', 'PostgreSQL'].map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 text-sm rounded-full'
                      style={{
                        backgroundColor: theme.colors.surfaceSecondary,
                        color: theme.colors.text.primary,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div
            className='rounded-lg p-8 transition-all duration-300 hover:shadow-lg flex-shrink-0 snap-center'
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border.light}`,
              boxShadow: theme.colors.shadow.md,
              width: '840px',
            }}
          >
            <div className='flex flex-col lg:flex-row gap-6'>
              <div className='lg:w-1/3'>
                <img
                  src='https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Project 3'
                  className='w-full h-48 object-cover rounded-lg'
                />
              </div>
              <div className='lg:w-2/3'>
                <h3
                  className='text-xl font-semibold mb-3'
                  style={{
                    color: theme.colors.text.primary,
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
                  }}
                >
                  Mobile-First E-commerce Platform
                </h3>
                <p
                  className='text-base leading-relaxed mb-4'
                  style={{
                    color: theme.colors.text.secondary,
                    fontFamily: theme.typography.fontFamily.sans.join(', '),
                  }}
                >
                  Responsive e-commerce platform optimized for mobile devices.
                  Features secure payment integration, inventory management, and
                  user-friendly shopping experience.
                </p>
                <div className='flex flex-wrap gap-2'>
                  {['Next.js', 'Stripe', 'MongoDB', 'Vercel'].map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 text-sm rounded-full'
                      style={{
                        backgroundColor: theme.colors.surfaceSecondary,
                        color: theme.colors.text.primary,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
