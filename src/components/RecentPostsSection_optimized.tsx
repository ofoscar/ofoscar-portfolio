import { useTranslation } from 'react-i18next';
import { usePosts } from '../hooks/usePosts';
import { theme } from '../theme';
import { formatDate } from '../utils/dateUtils';
import { getImageWithFallback, handleImageError } from '../utils/imageUtils';

function RecentPostsSection() {
  const { t } = useTranslation();

  const { posts, loading, error, refetch } = usePosts({
    limit: 6,
    sort: '-publishedAt',
    status: 'published',
  });

  // Fallback posts for when API fails or returns empty
  const fallbackPosts = [
    {
      id: '1',
      title: 'Modern Web Development',
      excerpt:
        'Exploring the latest trends and technologies in web development.',
      image:
        'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Web Development', 'JavaScript'],
      category: 'Development',
      publishedAt: '2025-07-02',
      createdAt: '2025-07-02',
      readTime: 5,
    },
    {
      id: '2',
      title: 'React Best Practices',
      excerpt: 'Learn the best practices for building React applications.',
      image:
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['React', 'Frontend'],
      category: 'Development',
      publishedAt: '2025-06-28',
      createdAt: '2025-06-28',
      readTime: 8,
    },
    {
      id: '3',
      title: 'TypeScript Guide',
      excerpt: 'A comprehensive guide to TypeScript for modern development.',
      image:
        'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['TypeScript', 'JavaScript'],
      category: 'Development',
      publishedAt: '2025-06-25',
      createdAt: '2025-06-25',
      readTime: 6,
    },
  ];

  const displayPosts = posts.length > 0 ? posts : fallbackPosts;

  return (
    <div className='w-full px-4'>
      <div className='max-w-[1280px] mx-auto'>
        <div className='text-center mb-12'>
          <h2
            className='text-3xl font-bold mb-4'
            style={{
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            {t('blog.title')}
          </h2>
          <p
            className='text-lg'
            style={{
              color: theme.colors.text.secondary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className='animate-pulse'>
                <div className='w-full h-[250px] bg-gray-300 rounded-lg mb-4'></div>
                <div className='space-y-3'>
                  <div className='flex justify-between'>
                    <div className='w-20 h-4 bg-gray-300 rounded'></div>
                    <div className='w-16 h-4 bg-gray-300 rounded'></div>
                  </div>
                  <div className='w-3/4 h-6 bg-gray-300 rounded'></div>
                  <div className='w-full h-4 bg-gray-300 rounded'></div>
                  <div className='w-5/6 h-4 bg-gray-300 rounded'></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className='text-center py-12'>
            <p className='text-red-500 mb-4'>{error}</p>
            <button
              onClick={refetch}
              className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
            >
              Try Again
            </button>
          </div>
        )}

        {/* Posts Grid */}
        {!loading && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {displayPosts.slice(0, 6).map((post) => (
              <div
                key={post.id}
                className='cursor-pointer group flex flex-col gap-4'
              >
                {/* Post Image */}
                <div
                  className='w-full h-[250px] overflow-hidden relative'
                  style={{ borderRadius: '12px' }}
                >
                  <img
                    src={getImageWithFallback(post.image)}
                    alt={post.title}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                    onError={handleImageError}
                  />
                  {/* Tag overlay */}
                  <div
                    className='absolute bottom-3 left-3 px-3 py-1 text-sm font-medium text-white rounded-full'
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow:
                        'inset 0px -1px 2px rgba(0, 0, 0, 0.1), inset 0px 1px 2px rgba(255, 255, 255, 0.8)',
                      transition: 'all 0.2s ease-in-out',
                    }}
                  >
                    {post.tags?.[0] || post.category || 'Blog'}
                  </div>
                </div>

                {/* Post Content */}
                <div className='rounded-lg transition-all duration-300'>
                  {/* Meta Information */}
                  <div className='flex items-center justify-between mb-3'>
                    <span
                      className='text-sm'
                      style={{
                        color: theme.colors.text.secondary,
                        fontFamily: theme.typography.fontFamily.sans.join(', '),
                      }}
                    >
                      {formatDate(post.publishedAt || post.createdAt)}
                    </span>
                    <span
                      className='text-sm'
                      style={{
                        color: theme.colors.text.secondary,
                        fontFamily: theme.typography.fontFamily.sans.join(', '),
                      }}
                    >
                      {`${post.readTime} ${t('blog.readTime')}`}
                    </span>
                  </div>

                  {/* Post Title */}
                  <h3
                    className='text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-200'
                    style={{
                      color: theme.colors.text.primary,
                      fontFamily: theme.typography.fontFamily.sans.join(', '),
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Post Excerpt */}
                  <p
                    className='text-base leading-relaxed mb-4'
                    style={{
                      color: theme.colors.text.secondary,
                      fontFamily: theme.typography.fontFamily.sans.join(', '),
                    }}
                  >
                    {post.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecentPostsSection;
