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
  logo?: string;
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
  logo,
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

  return (
    <div
      className='rounded-lg p-4 sm:p-6 md:p-8 md:h-[450px] transition-all duration-300 hover:shadow-lg cursor-pointer'
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
      <div className={`flex flex-col md:flex-row gap-4 w-full h-full`}>
        <div className='h-[250px] lg:h-full relative'>
          <img
            src={imageUrl}
            alt={title}
            className='w-[550px] h-full object-cover rounded-lg'
          />
          {/* Logo overlay in bottom left */}
          {logo && (
            <div className='absolute bottom-3 left-3 bg-white backdrop-blur-sm rounded-md w-12 h-12 shadow-md flex items-center justify-center'>
              <img
                src={logo}
                alt={`${logo} logo`}
                className='w-full h-full px-1 object-contain'
              />
            </div>
          )}
        </div>
        <div
          className={`w-full h-full flex flex-col justify-between overflow-hidden`}
        >
          <div className='flex flex-col gap-3 md:gap-4 w-full'>
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
              className='text-sm sm:text-base leading-relaxed w-full break-words whitespace-normal'
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

          <div className='flex gap-2 overflow-x-auto scrollbar-hide'>
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
