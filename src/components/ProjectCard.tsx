import { useNavigate } from 'react-router-dom';
import { theme } from '../theme';
import type { ProjectReview } from '../types/project';

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  variant?: 'scroll' | 'grid';
  review?: ProjectReview;
  features?: string[];
};

function ProjectCard({
  id,
  title,
  description,
  technologies,
  imageUrl,
  variant = 'scroll',
  review,
  features,
}: ProjectCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${id}`);
  };

  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className='flex items-center gap-1'>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className='w-4 h-4'
            fill={star <= rating ? '#FFD700' : '#E5E5E5'}
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        ))}
      </div>
    );
  };

  // Different styles for different variants
  const baseClasses =
    'rounded-lg p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-lg cursor-pointer ';
  const scrollClasses =
    'flex-shrink-0 snap-center w-[calc(100vw-4rem)] sm:w-[calc(100vw-6rem)] md:w-[calc(100vw-8rem)] lg:w-[calc(100vw-12rem)] xl:w-[840px]';
  const gridClasses = 'w-full h-full';

  const containerClasses =
    variant === 'scroll'
      ? `${baseClasses} ${scrollClasses}`
      : `${baseClasses} ${gridClasses}`;

  return (
    <div
      className={containerClasses}
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
      <div
        className={`${
          variant === 'grid' ? 'flex flex-col' : 'flex flex-col lg:flex-row'
        } gap-4 md:gap-6 h-full`}
      >
        <div
          className={
            variant === 'grid' ? 'w-full relative' : 'w-full lg:w-1/3 relative'
          }
        >
          <img
            src={imageUrl}
            alt={title}
            className='w-full h-48 sm:h-56 md:h-full object-cover rounded-lg'
          />
          {/* Logo overlay in bottom left */}
          {review?.imageUrl && (
            <div className='absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-md p-1.5 shadow-md'>
              <img
                src={review.imageUrl}
                alt={`${review.reviewerName} logo`}
                className='w-8 h-8 sm:w-10 sm:h-10 object-contain'
              />
            </div>
          )}
        </div>
        <div
          className={`${
            variant === 'grid' ? 'w-full' : 'w-full h-full lg:w-2/3'
          } flex flex-col justify-between`}
        >
          <div className='flex flex-col gap-3 md:gap-4 max-h-[400px] overflow-hidden'>
            <h3
              className='text-lg sm:text-xl font-semibold'
              style={{
                color: theme.colors.text.primary,
                fontFamily: theme.typography.fontFamily.sans.join(', '),
              }}
            >
              {title}
            </h3>
            <p
              className='text-sm sm:text-base leading-relaxed'
              style={{
                color: theme.colors.text.secondary,
                fontFamily: theme.typography.fontFamily.sans.join(', '),
              }}
            >
              {description}
            </p>

            {/* Review Section */}
            {review && (
              <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-2'>
                  <StarRating rating={review.rating} />
                  <span
                    className='text-xs sm:text-sm font-bold'
                    style={{ color: theme.colors.text.secondary }}
                  >
                    {review.reviewerName}
                  </span>
                </div>
                <p
                  className='text-xs sm:text-sm italic'
                  style={{ color: theme.colors.text.secondary }}
                >
                  "{review.comment}"
                </p>
              </div>
            )}

            {/* Features Section - Only show when no review */}
            {features && features.length > 0 && (
              <div className='flex flex-col gap-2 mb-2'>
                <h4
                  className='text-xs sm:text-sm font-semibold'
                  style={{ color: theme.colors.text.primary }}
                >
                  Key Features:
                </h4>
                <ul className='flex flex-col gap-1'>
                  {features.slice(0, 3).map((feature, index) => (
                    <li
                      key={index}
                      className='text-xs sm:text-sm flex items-start gap-2'
                      style={{ color: theme.colors.text.secondary }}
                    >
                      <span
                        className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0'
                        style={{ backgroundColor: theme.colors.text.secondary }}
                      />
                      <span className='leading-relaxed'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className='flex gap-2 overflow-x-auto scrollbar-hide max-w-full'>
            {technologies.map((tech) => (
              <span
                key={tech}
                className='px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full whitespace-nowrap flex-shrink-0'
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
