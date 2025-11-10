import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getProjectsData } from '../data/projects';
import { theme } from '../theme';
import Footer from './Footer';
import ProjectCard from './ProjectCard';

function Projects() {
  const { t, i18n } = useTranslation();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showTagsModal, setShowTagsModal] = useState(false);

  // Get projects data based on current language
  const projectsData = getProjectsData(i18n.language);

  // Available tags for filtering
  const availableTags = [
    'JavaScript',
    'Flutter',
    'Figma',
    'Push Notifications',
    'React.js',
    'Mobile Development',
    'Web Development',
    'Real-time',
    'Email Integration',
    'Inventory Management',
    'Responsive Design',
  ];

  // Filter projects based on selected tags
  const filteredProjects =
    selectedTags.length === 0
      ? projectsData
      : projectsData.filter((project) =>
          selectedTags.some(
            (tag) =>
              project.technologies.some(
                (tech) =>
                  tech.toLowerCase().includes(tag.toLowerCase()) ||
                  tag.toLowerCase().includes(tech.toLowerCase()),
              ) ||
              (tag === 'Mobile Development' &&
                project.technologies.some((tech) =>
                  ['Flutter', 'Dart', 'Mobile Development'].some((mobile) =>
                    tech.toLowerCase().includes(mobile.toLowerCase()),
                  ),
                )) ||
              (tag === 'Web Development' &&
                project.technologies.some((tech) =>
                  ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Node.js'].some(
                    (web) => tech.toLowerCase().includes(web.toLowerCase()),
                  ),
                )) ||
              (tag === 'Real-time' &&
                project.technologies.some((tech) =>
                  ['Socket.io', 'Real-time', 'Push Notifications'].some(
                    (realtime) =>
                      tech.toLowerCase().includes(realtime.toLowerCase()),
                  ),
                )),
          ),
        );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const clearAllTags = () => {
    setSelectedTags([]);
  };

  const openTagsModal = () => {
    setShowTagsModal(true);
  };

  const closeTagsModal = () => {
    setShowTagsModal(false);
  };

  return (
    <div className='min-h-screen'>
      {/* Header Section */}
      <div className='w-full px-4 sm:px-6 lg:px-8 py-8'>
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

      {/* Tags Filter Row */}
      <div className='w-full px-4 sm:px-6 lg:px-8 mb-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex items-center gap-[6px]'>
            {/* Scrollable tags row */}
            <div className='flex items-center gap-3 overflow-x-auto scrollbar-hide flex-1'>
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`cursor-pointer px-3 py-1 text-sm rounded-full whitespace-nowrap flex-shrink-0 transition-all duration-200 ${
                    selectedTags.includes(tag)
                      ? 'scale-105 shadow-md'
                      : 'hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: selectedTags.includes(tag)
                      ? theme.colors.brand.primary
                      : theme.colors.surfaceSecondary,
                    color: selectedTags.includes(tag)
                      ? '#ffffff'
                      : theme.colors.text.primary,
                    border: selectedTags.includes(tag)
                      ? `1px solid ${theme.colors.brand.primary}`
                      : `1px solid ${theme.colors.border.light}`,
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* More options button - fixed position */}
            <button
              onClick={openTagsModal}
              className='cursor-pointer px-3 py-1 text-sm rounded-full whitespace-nowrap flex-shrink-0 transition-all duration-200 hover:scale-105'
              style={{
                backgroundColor: theme.colors.surfaceSecondary,
                color: theme.colors.text.primary,
                border: `1px solid ${theme.colors.border.light}`,
              }}
              title={t('projects.showAllTags')}
            >
              ⋯
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className='w-full px-4 sm:px-6 lg:px-8 pb-16'>
        <div className='max-w-7xl mx-auto'>
          {filteredProjects.length === 0 ? (
            <div className='text-center py-12'>
              <p
                className='text-lg'
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                }}
              >
                {t('projects.noProjectsFound')}
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
              {filteredProjects.map((project) => (
                <div key={project.id} className='w-full'>
                  <div className='h-full'>
                    <ProjectCard
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      imageUrl={project.imageUrl}
                      variant='grid'
                      review={project.review}
                      features={project.features}
                      logo={project.logo}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tags Modal Overlay */}
      {showTagsModal && (
        <div
          className='fixed inset-0 bg-black/60 flex items-center justify-center z-2000 p-4'
          onClick={closeTagsModal}
        >
          <div
            className='bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex items-center justify-between mb-6'>
              <h3
                className='text-xl font-semibold'
                style={{
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                }}
              >
                {t('projects.filterByTags')}
              </h3>
              <button
                onClick={closeTagsModal}
                className='text-2xl hover:scale-110 transition-transform duration-200'
                style={{ color: theme.colors.text.secondary }}
              >
                ×
              </button>
            </div>

            {/* All Tags in Flex Wrap */}
            <div className='flex flex-wrap gap-3 mb-6'>
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 text-sm rounded-full whitespace-nowrap transition-all duration-200 ${
                    selectedTags.includes(tag)
                      ? 'scale-105 shadow-md'
                      : 'hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: selectedTags.includes(tag)
                      ? theme.colors.brand.primary
                      : theme.colors.surfaceSecondary,
                    color: selectedTags.includes(tag)
                      ? '#ffffff'
                      : theme.colors.text.primary,
                    border: selectedTags.includes(tag)
                      ? `1px solid ${theme.colors.brand.primary}`
                      : `1px solid ${theme.colors.border.light}`,
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Modal Actions */}
            <div className='flex gap-3 justify-end'>
              <button
                onClick={clearAllTags}
                className='px-4 py-2 text-sm rounded-lg transition-all duration-200 hover:scale-105'
                style={{
                  backgroundColor: theme.colors.surfaceSecondary,
                  color: theme.colors.text.primary,
                  border: `1px solid ${theme.colors.border.light}`,
                }}
              >
                {t('projects.clearAll')}
              </button>
              <button
                onClick={closeTagsModal}
                className='px-4 py-2 text-sm rounded-lg transition-all duration-200 hover:scale-105'
                style={{
                  backgroundColor: theme.colors.brand.primary,
                  color: '#ffffff',
                  border: `1px solid ${theme.colors.brand.primary}`,
                }}
              >
                {t('projects.done')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Projects;
