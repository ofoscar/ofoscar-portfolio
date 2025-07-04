import { theme } from '../theme';

function RecentPostsSection() {
  const posts = [
    {
      id: 1,
      title: 'The Future of Web Development',
      excerpt:
        'Exploring emerging trends and technologies that are shaping the future of web development, including AI integration and serverless architectures.',
      image:
        'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'July 2, 2025',
      readTime: '5 min read',
      tags: ['Web Dev', 'AI', 'Tech Trends'],
    },
    {
      id: 2,
      title: 'Building Scalable React Applications',
      excerpt:
        'Best practices and architectural patterns for creating maintainable and scalable React applications that can grow with your team.',
      image:
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'June 28, 2025',
      readTime: '8 min read',
      tags: ['React', 'Architecture', 'Best Practices'],
    },
    {
      id: 3,
      title: 'TypeScript Tips and Tricks',
      excerpt:
        'Advanced TypeScript techniques that will help you write more robust and type-safe code, improving your development experience.',
      image:
        'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'June 25, 2025',
      readTime: '6 min read',
      tags: ['TypeScript', 'Tips', 'Development'],
    },
    {
      id: 4,
      title: 'Designing Beautiful UIs',
      excerpt:
        'A comprehensive guide to creating visually appealing and user-friendly interfaces that enhance the overall user experience.',
      image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'June 22, 2025',
      readTime: '7 min read',
      tags: ['UI/UX', 'Design', 'User Experience'],
    },
    {
      id: 5,
      title: 'Modern DevOps Practices',
      excerpt:
        'Essential DevOps practices for modern development teams, including CI/CD pipelines, containerization, and cloud deployment strategies.',
      image:
        'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'June 18, 2025',
      readTime: '9 min read',
      tags: ['DevOps', 'CI/CD', 'Cloud'],
    },
    {
      id: 6,
      title: 'Performance Optimization Strategies',
      excerpt:
        'Proven techniques for optimizing web application performance, from bundle size reduction to runtime optimization strategies.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: 'June 15, 2025',
      readTime: '10 min read',
      tags: ['Performance', 'Optimization', 'Web Dev'],
    },
  ];

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
            Recent Posts
          </h2>
          <p
            className='text-lg'
            style={{
              color: theme.colors.text.secondary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            Latest insights and thoughts on technology, development, and design
          </p>
        </div>

        {/* Grid with 3 columns, 2 rows, 40px gap */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {posts.map((post) => (
            <div
              key={post.id}
              className='rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer group'
              style={{
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border.light}`,
                boxShadow: theme.colors.shadow.md,
              }}
            >
              {/* Post Image */}
              <div className='w-full h-48 overflow-hidden'>
                <img
                  src={post.image}
                  alt={post.title}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                />
              </div>

              {/* Post Content */}
              <div className='p-6'>
                {/* Meta Information */}
                <div className='flex items-center justify-between mb-3'>
                  <span
                    className='text-sm'
                    style={{
                      color: theme.colors.text.secondary,
                      fontFamily: theme.typography.fontFamily.sans.join(', '),
                    }}
                  >
                    {post.date}
                  </span>
                  <span
                    className='text-sm'
                    style={{
                      color: theme.colors.text.secondary,
                      fontFamily: theme.typography.fontFamily.sans.join(', '),
                    }}
                  >
                    {post.readTime}
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

                {/* Tags */}
                <div className='flex flex-wrap gap-2'>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 text-sm rounded-full'
                      style={{
                        backgroundColor: theme.colors.surfaceSecondary,
                        color: theme.colors.text.primary,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentPostsSection;
