import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Post as ApiPost } from '../services/apiService';
import { theme } from '../theme';

function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post] = useState<ApiPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setError('No post slug provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // This would be a getPostBySlug method in your API service
        // For now, just show a placeholder
        setTimeout(() => {
          setLoading(false);
          setError('Post detail view not implemented yet');
        }, 1000);
      } catch (err) {
        setError('Error loading post');
        console.error('Error fetching post:', err);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
          <p>Loading post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-4'>Post: {slug}</h1>
          <p className='text-red-600 mb-4'>{error}</p>
          <button
            onClick={() => navigate('/')}
            className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen'>
      <div className='max-w-4xl mx-auto px-4 py-16'>
        <button
          onClick={() => navigate('/')}
          className='mb-8 text-blue-600 hover:text-blue-700 transition-colors'
        >
          ← Back to Home
        </button>

        <article>
          <h1
            className='text-4xl font-bold mb-6'
            style={{
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            {post?.title || `Post: ${slug}`}
          </h1>

          <div className='prose max-w-none'>
            <p className='text-lg text-gray-600 mb-8'>
              This is where your blog post content would appear. Add a
              getPostBySlug method to your API service to fetch individual
              posts.
            </p>

            {post && (
              <div>
                <p>
                  <strong>Slug:</strong> {post.slug}
                </p>
                <p>
                  <strong>Category:</strong> {post.category}
                </p>
                <p>
                  <strong>Reading Time:</strong> {post.readingTime} minutes
                </p>
                <p>
                  <strong>Published:</strong>{' '}
                  {new Date(
                    post.publishedAt || post.createdAt,
                  ).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}

export default PostDetail;
