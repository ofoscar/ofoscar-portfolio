import { useNavigate } from 'react-router-dom';
import { theme } from '../theme';

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
};

function ProjectCard({
  id,
  title,
  description,
  technologies,
  imageUrl,
}: ProjectCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div
      className='rounded-lg p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-lg flex-shrink-0 snap-center w-[calc(100vw-4rem)] sm:w-[calc(100vw-6rem)] md:w-[calc(100vw-8rem)] lg:w-[calc(100vw-12rem)] xl:w-[840px] cursor-pointer hover:scale-[1.02]'
      style={{
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.border.light}`,
        boxShadow: theme.colors.shadow.md,
      }}
      onClick={handleClick}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className='flex flex-col lg:flex-row gap-4 md:gap-6'>
        <div className='w-full lg:w-1/3'>
          <img
            src={imageUrl}
            alt={title}
            className='w-full h-48 sm:h-56 md:h-48 object-cover rounded-lg'
          />
        </div>
        <div className='w-full lg:w-2/3'>
          <h3
            className='text-lg sm:text-xl font-semibold mb-2 md:mb-3'
            style={{
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            {title}
          </h3>
          <p
            className='text-sm sm:text-base leading-relaxed mb-3 md:mb-4'
            style={{
              color: theme.colors.text.secondary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            {description}
          </p>
          <div className='flex flex-wrap gap-2'>
            {technologies.map((tech) => (
              <span
                key={tech}
                className='px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full'
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
  );
}

export default ProjectCard;
