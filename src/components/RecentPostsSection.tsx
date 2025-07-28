import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  apiService,
  type Post as ApiPost,
  type PostsResponse,
} from '../services/apiService';
import { theme } from '../theme';

function RecentPostsSection() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecentPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      const params = {
        page: 1,
        limit: 6,
        sort: '-createdAt',
        status: 'published',
      };

      const response: PostsResponse = await apiService.getPosts(params);

      if (response.success) {
        setPosts(response.data.posts);
      } else {
        setError('Failed to fetch posts');
      }
    } catch (err) {
      setError('Error loading posts');
      console.error('Error fetching recent posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentPosts();
  }, []);

  if (loading) {
    return (
      <div className='w-full px-4 py-16'>
        <div className='max-w-[1280px] mx-auto flex flex-col gap-8'>
          <div className='text-center flex flex-col gap-2'>
            <h2
              className='text-3xl font-bold'
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

          {/* Skeleton Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {[...Array(6)].map((_, index) => (
              <PostSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full px-4 py-16'>
        <div className='max-w-[1280px] mx-auto flex flex-col gap-8'>
          <div className='text-center flex flex-col gap-2'>
            <h2
              className='text-3xl font-bold'
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
          <div className='text-center text-red-600'>
            <p>{error}</p>
            <button
              onClick={fetchRecentPosts}
              className='mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full px-4 py-16'>
      <div className='max-w-[1280px] mx-auto flex flex-col gap-8'>
        <div className='text-center flex flex-col gap-2'>
          <h2
            className='text-3xl font-bold'
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

        {/* Grid with 3 columns, 2 rows, 40px gap */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {posts.map((post) => (
            <ApiPostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentPostsSection;

interface ApiPostCardProps {
  post: ApiPost;
}

export const ApiPostCard = ({ post }: ApiPostCardProps) => {
  const handleClick = () => {
    window.open(`https://blog.ofoscar.com/post/${post.slug}`, '_blank');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div
      className='cursor-pointer group flex flex-col gap-4'
      onClick={handleClick}
    >
      {/* Post Image */}
      <div
        className='w-full h-[250px] overflow-hidden relative'
        style={{ borderRadius: '12px' }}
      >
        {post.featuredImage ? (
          <img
            src={post.featuredImage}
            alt={post.title}
            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          />
        ) : (
          <div className='w-full h-full bg-gray-200 flex items-center justify-center transition-transform duration-300 group-hover:scale-105'>
            <span className='text-gray-400 text-sm'>No Image</span>
          </div>
        )}
        {/* Tag overlay */}
        {post.category && (
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
            {post.category}
          </div>
        )}
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
            <ReturnReadingTime minutes={post.readingTime} />
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
          {post.excerpt || post.content.substring(0, 150) + '...'}
        </p>
      </div>
    </div>
  );
};

export const ReturnReadingTime = ({ minutes }: { minutes: number }) => {
  if (minutes < 1) return 'Less than a min read';
  if (minutes === 1) return '1 min read';
  return `${minutes} min read`;
};

// PostSkeleton component for loading animation
const PostSkeleton = () => {
  return (
    <div className='flex flex-col gap-4'>
      {/* Image skeleton */}
      <div
        className='w-full h-[250px] bg-gray-200 animate-pulse relative overflow-hidden'
        style={{ borderRadius: '12px' }}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 -translate-x-full animate-shimmer'></div>
        {/* Tag skeleton */}
        <div className='absolute bottom-3 left-3 w-16 h-6 bg-gray-300 rounded-full animate-pulse'></div>
      </div>

      {/* Content skeleton */}
      <div className='flex flex-col gap-3'>
        {/* Meta information skeleton */}
        <div className='flex items-center justify-between'>
          <div className='h-4 bg-gray-200 rounded w-24 animate-pulse'></div>
          <div className='h-4 bg-gray-200 rounded w-20 animate-pulse'></div>
        </div>

        {/* Title skeleton */}
        <div className='space-y-2'>
          <div className='h-6 bg-gray-200 rounded w-3/4 animate-pulse'></div>
          <div className='h-6 bg-gray-200 rounded w-1/2 animate-pulse'></div>
        </div>

        {/* Excerpt skeleton */}
        <div className='space-y-2'>
          <div className='h-4 bg-gray-200 rounded w-full animate-pulse'></div>
          <div className='h-4 bg-gray-200 rounded w-5/6 animate-pulse'></div>
          <div className='h-4 bg-gray-200 rounded w-4/5 animate-pulse'></div>
        </div>
      </div>
    </div>
  );
};
