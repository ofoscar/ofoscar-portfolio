import { useNavigate, useParams } from 'react-router-dom';
import { theme } from '../theme';
import type { Project } from '../types/project';
import GlassButton from './GlassButton';

// Mock project data - in a real app, this would come from an API or context
const projectsData: Project[] = [
  {
    id: 'modern-web-app',
    title: 'Modern Web Application',
    description:
      'A full-stack web application built with React, TypeScript, and Node.js. Features modern UI/UX design, responsive layouts, and seamless user experience.',
    fullDescription:
      'This comprehensive web application showcases modern development practices and cutting-edge technologies. Built from the ground up with a focus on performance, accessibility, and user experience, it demonstrates proficiency in full-stack development.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    imageUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://example.com/demo',
    codeUrl: 'https://github.com/example/repo',
    features: [
      'Responsive design that works on all devices',
      'Real-time data synchronization',
      'Advanced authentication and authorization',
      'Interactive UI components',
      'Optimized performance and SEO',
    ],
    challenges: [
      'Implementing complex state management',
      'Ensuring cross-browser compatibility',
      'Optimizing for mobile performance',
    ],
    learnings: [
      'Advanced React patterns and hooks',
      'TypeScript best practices',
      'Modern CSS techniques with Tailwind',
    ],
  },
  {
    id: 'data-visualization-dashboard',
    title: 'Data Visualization Dashboard',
    description:
      'Interactive dashboard for data visualization and analytics. Built with modern charting libraries and real-time data processing capabilities.',
    fullDescription:
      'An advanced analytics dashboard that transforms complex data into intuitive visualizations. This project demonstrates expertise in data processing, real-time updates, and creating engaging user interfaces for data-driven applications.',
    technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://example.com/dashboard',
    codeUrl: 'https://github.com/example/dashboard',
    features: [
      'Interactive charts and graphs',
      'Real-time data updates',
      'Customizable dashboard layouts',
      'Export capabilities',
      'Advanced filtering and search',
    ],
    challenges: [
      'Handling large datasets efficiently',
      'Creating smooth animations',
      'Implementing real-time websocket connections',
    ],
    learnings: [
      'D3.js and advanced data visualization',
      'Vue.js composition API',
      'Backend data processing optimization',
    ],
  },
  {
    id: 'ecommerce-platform',
    title: 'Mobile-First E-commerce Platform',
    description:
      'Responsive e-commerce platform optimized for mobile devices. Features secure payment integration, inventory management, and user-friendly shopping experience.',
    fullDescription:
      'A complete e-commerce solution built with mobile-first approach. This platform handles everything from product catalog management to secure payments, demonstrating full-stack e-commerce development skills.',
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'Vercel'],
    imageUrl:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://example.com/shop',
    codeUrl: 'https://github.com/example/ecommerce',
    features: [
      'Mobile-optimized shopping experience',
      'Secure payment processing with Stripe',
      'Inventory management system',
      'User authentication and profiles',
      'Order tracking and history',
    ],
    challenges: [
      'Implementing secure payment flows',
      'Managing complex state across pages',
      'Optimizing for mobile performance',
    ],
    learnings: [
      'Next.js advanced features',
      'Payment gateway integration',
      'E-commerce best practices',
    ],
  },
];

function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1
            className='text-2xl font-bold mb-4'
            style={{ color: theme.colors.text.primary }}
          >
            Project Not Found
          </h1>
          <GlassButton onClick={() => navigate('/')}>Back to Home</GlassButton>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        {/* Project Header */}
        <div className='mt-8'>
          <h1
            className='text-3xl sm:text-4xl font-bold mb-4'
            style={{
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            {project.title}
          </h1>
          <p
            className='text-lg leading-relaxed mb-6'
            style={{
              color: theme.colors.text.secondary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            {project.fullDescription || project.description}
          </p>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4'>
            {project.demoUrl && (
              <GlassButton
                onClick={() => window.open(project.demoUrl, '_blank')}
                className='text-base'
              >
                View Live Demo
              </GlassButton>
            )}
            {project.codeUrl && (
              <GlassButton
                onClick={() => window.open(project.codeUrl, '_blank')}
                className='text-base'
              >
                View Source Code
              </GlassButton>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className='mb-8'>
          <img
            src={project.imageUrl}
            alt={project.title}
            className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg'
          />
        </div>

        {/* Technologies */}
        <div className='mb-8'>
          <h2
            className='text-2xl font-semibold mb-4'
            style={{
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.sans.join(', '),
            }}
          >
            Technologies Used
          </h2>
          <div className='flex flex-wrap gap-3'>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className='px-4 py-2 text-sm font-medium rounded-full'
                style={{
                  backgroundColor: theme.colors.surfaceSecondary,
                  color: theme.colors.text.primary,
                  border: `1px solid ${theme.colors.border.light}`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        {project.features && (
          <div className='mb-8'>
            <h2
              className='text-2xl font-semibold mb-4'
              style={{
                color: theme.colors.text.primary,
                fontFamily: theme.typography.fontFamily.sans.join(', '),
              }}
            >
              Key Features
            </h2>
            <ul className='space-y-2'>
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className='flex items-start'
                  style={{ color: theme.colors.text.secondary }}
                >
                  <span className='text-green-500 mr-2'>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenges */}
        {project.challenges && (
          <div className='mb-8'>
            <h2
              className='text-2xl font-semibold mb-4'
              style={{
                color: theme.colors.text.primary,
                fontFamily: theme.typography.fontFamily.sans.join(', '),
              }}
            >
              Challenges Overcome
            </h2>
            <ul className='space-y-2'>
              {project.challenges.map((challenge, index) => (
                <li
                  key={index}
                  className='flex items-start'
                  style={{ color: theme.colors.text.secondary }}
                >
                  <span className='text-orange-500 mr-2'>⚡</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Learnings */}
        {project.learnings && (
          <div className='mb-8'>
            <h2
              className='text-2xl font-semibold mb-4'
              style={{
                color: theme.colors.text.primary,
                fontFamily: theme.typography.fontFamily.sans.join(', '),
              }}
            >
              Key Learnings
            </h2>
            <ul className='space-y-2'>
              {project.learnings.map((learning, index) => (
                <li
                  key={index}
                  className='flex items-start'
                  style={{ color: theme.colors.text.secondary }}
                >
                  <span className='text-blue-500 mr-2'>💡</span>
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
