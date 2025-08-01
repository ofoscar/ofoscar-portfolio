import { useTranslation } from 'react-i18next';
import { projectsData } from '../data/projects';
import { theme } from '../theme';
import Footer from './Footer';
import ProjectCard from './ProjectCard';

function Projects() {
  const { t } = useTranslation();

  return (
    <div className='min-h-screen'>
      {/* Header Section */}
      <div className='w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16'>
        <div className='max-w-7xl mx-auto text-center'>
          <h1
            className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6'
            style={{
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            {t('projects.title')}
          </h1>
          <p
            className='text-lg sm:text-xl max-w-3xl mx-auto'
            style={{
              color: theme.colors.text.secondary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            {t('projects.subtitle')}
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className='w-full px-4 sm:px-6 lg:px-8 pb-16'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex flex-col lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8'>
            {projectsData.map((project) => (
              <div key={project.id} className='w-full'>
                <div className='h-full'>
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    imageUrl={project.imageUrl}
                    variant='grid'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Projects;
