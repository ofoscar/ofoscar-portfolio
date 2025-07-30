import type { Project } from '../types/project';

export const projectsData: Project[] = [
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
  {
    id: 'api-integration-tool',
    title: 'API Integration Tool',
    description:
      'Developer tool for managing and testing API integrations. Features automated testing, documentation generation, and real-time monitoring.',
    fullDescription:
      'A comprehensive API management platform designed for developers and teams. This tool streamlines the API integration process with automated testing, comprehensive documentation, and real-time monitoring capabilities.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
    imageUrl:
      'https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://example.com/api-tool',
    codeUrl: 'https://github.com/example/api-tool',
    features: [
      'Automated API testing and validation',
      'Real-time monitoring and alerts',
      'Interactive API documentation',
      'Team collaboration features',
      'Integration with popular development tools',
    ],
    challenges: [
      'Handling multiple API protocols and formats',
      'Creating a flexible testing framework',
      'Implementing real-time monitoring at scale',
    ],
    learnings: [
      'API design patterns and best practices',
      'Real-time communication with Socket.io',
      'Scalable backend architecture',
    ],
  },
  {
    id: 'machine-learning-platform',
    title: 'Machine Learning Platform',
    description:
      'End-to-end ML platform for data scientists and engineers. Includes model training, deployment, and monitoring capabilities.',
    fullDescription:
      'A comprehensive machine learning platform that covers the entire ML lifecycle from data preparation to model deployment and monitoring. Built for data scientists and ML engineers who need a unified platform for their workflows.',
    technologies: ['Python', 'TensorFlow', 'Docker', 'Kubernetes'],
    imageUrl:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://example.com/ml-platform',
    codeUrl: 'https://github.com/example/ml-platform',
    features: [
      'Drag-and-drop model building interface',
      'Automated hyperparameter tuning',
      'Model versioning and experiment tracking',
      'One-click deployment to production',
      'Real-time model performance monitoring',
    ],
    challenges: [
      'Scaling model training across distributed systems',
      'Managing complex ML workflows',
      'Ensuring model reproducibility',
    ],
    learnings: [
      'MLOps best practices and tools',
      'Container orchestration with Kubernetes',
      'Distributed computing for ML workloads',
    ],
  },
  {
    id: 'social-media-scheduler',
    title: 'Social Media Scheduler',
    description:
      'Social media management tool with scheduling, analytics, and content optimization features. Built for marketing teams and content creators.',
    fullDescription:
      'A powerful social media management platform that helps marketing teams and content creators plan, schedule, and analyze their social media presence across multiple platforms with advanced analytics and AI-powered content suggestions.',
    technologies: ['React', 'Python', 'Redis', 'AWS'],
    imageUrl:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1539&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://example.com/social-scheduler',
    codeUrl: 'https://github.com/example/social-scheduler',
    features: [
      'Multi-platform content scheduling',
      'Advanced analytics and reporting',
      'AI-powered content suggestions',
      'Team collaboration and approval workflows',
      'Social media trend analysis',
    ],
    challenges: [
      'Integrating with multiple social media APIs',
      'Building a reliable scheduling system',
      'Implementing real-time analytics processing',
    ],
    learnings: [
      'Social media API integration patterns',
      'Background job processing with Redis',
      'Building scalable web applications on AWS',
    ],
  },
];
