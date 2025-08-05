import type { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: 'casino-management-system',
    title: 'Comprehensive Casino Management System',
    description:
      'A complete casino management ecosystem consisting of multiple interconnected applications for operations, customer service, and terminal management. Successfully deployed and implemented in a live casino environment.',
    fullDescription:
      'Led the development and deployment of a comprehensive casino management system comprising four distinct applications designed to streamline casino operations. The project involved creating management dashboards, self-service kiosks, operational tools, and terminal tracking systems. Successfully traveled to the first casino location to oversee installation and provide hands-on training to casino staff.',
    technologies: ['React.js', 'Flutter', 'SQL', 'Canvas API', 'Desktop Apps'],
    imageUrl:
      'https://images.unsplash.com/photo-1491644386567-d98960637850?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Multi-application ecosystem for complete casino operations',
      'Real-time reporting with virtualized tables for performance',
      'Self-service customer kiosks with card reader integration',
      'Desktop Flutter application for casino worker operations',
      'Interactive canvas-based terminal management system',
      'Advanced data visualization and analytics',
      'Cross-platform compatibility and deployment',
      'Live production deployment and staff training',
    ],
    challenges: [
      'Coordinating development across multiple application types and platforms',
      'Implementing secure card reader integration for customer self-service',
      'Creating intuitive interfaces for casino workers with varying technical skills',
      'Ensuring real-time data synchronization across all applications',
      'Managing complex SQL queries for comprehensive reporting',
      'Optimizing virtualized tables for large datasets',
      'Handling deployment logistics and on-site installation',
    ],
    learnings: [
      'Multi-platform development coordination and project management',
      'Advanced React.js patterns for complex data visualization',
      'Flutter desktop application development and deployment',
      'Canvas API for interactive terminal management interfaces',
      'Hardware integration with card readers and casino equipment',
      'SQL optimization for high-performance reporting systems',
      'Client training and change management in production environments',
      'Real-world software deployment and maintenance strategies',
    ],
    sections: [
      {
        title: 'Management Dashboard System',
        description:
          'Built with React.js and SQL backend, this comprehensive management system provides casino administrators with detailed reporting capabilities and operational insights.',
        content: [
          'Developed virtualized tables to handle large datasets efficiently, ensuring smooth performance even with thousands of records',
          'Created dynamic reporting modules that allow managers to generate custom reports based on various parameters',
          'Implemented real-time data synchronization to provide up-to-the-minute operational statistics',
          'Designed intuitive dashboard interfaces that present complex data in easily digestible formats',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Customer Self-Service Kiosks',
        description:
          'React.js powered self-service stations that allow casino customers to check their loyalty card points and account information independently.',
        content: [
          'Integrated card reader hardware to securely access customer accounts',
          'Developed user-friendly interfaces suitable for customers of all technical levels',
          'Implemented secure authentication and data protection measures',
          'Created responsive designs that work effectively on kiosk touchscreen displays',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Casino Operations Desktop Application',
        description:
          'A Flutter-based desktop application that serves as the primary tool for casino workers to perform daily operations and customer service tasks.',
        content: [
          'Built a comprehensive desktop application using Flutter for cross-platform compatibility',
          'Designed workflows that match the natural processes of casino operations',
          'Implemented features for customer account management, transaction processing, and service requests',
          'Created training-friendly interfaces that reduce the learning curve for new casino staff',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Interactive Terminal Management System',
        description:
          'An innovative React.js application featuring a canvas-based interface for managing and monitoring casino gaming terminals in real-time.',
        content: [
          'Developed an interactive canvas system where terminals are represented as moveable, resizable boxes',
          'Implemented drag-and-drop functionality for easy terminal repositioning and floor plan management',
          'Created real-time monitoring capabilities that display terminal status and performance metrics',
          'Built comprehensive reporting features with sorting and filtering options for terminal analytics',
          'Designed visual indicators for quick identification of terminal issues or maintenance needs',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Deployment and Training',
        description:
          'Successfully traveled to the first casino location to oversee the complete system installation and provide comprehensive training to casino staff.',
        content: [
          'Coordinated the installation of all four applications across different hardware setups',
          'Conducted hands-on training sessions for casino managers and operational staff',
          'Provided detailed documentation and user guides for each application component',
          'Established support protocols and troubleshooting procedures for ongoing maintenance',
          'Gathered user feedback and implemented immediate improvements based on real-world usage',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    id: 'bng-agroproductos-website',
    title: 'BNG Agroproductos Business Website',
    description:
      'A comprehensive business website for BNG Agroproductos, an agricultural company focused on innovation and sustainable land care. Features product catalog, company information, and integrated contact system.',
    fullDescription:
      'Developed a professional business website for BNG Agroproductos, showcasing their commitment to agricultural innovation and sustainable land management. The site serves as a digital presence for the company, featuring their product catalog, company values, and providing customers with an easy way to get in touch through a custom contact form system with email integration.',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Contact Forms',
      'Email Integration',
      'Responsive Design',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Professional business website with modern design',
      'Comprehensive product catalog showcasing agricultural products',
      'Responsive design optimized for all devices',
      'Custom contact form with email integration',
      'Domain-specific email setup and configuration',
      'Company information and values presentation',
      'SEO optimization for agricultural industry',
      'Fast loading times and optimized performance',
    ],
    challenges: [
      'Creating a professional design that reflects agricultural innovation',
      'Implementing a reliable contact form system',
      'Setting up custom domain email integration',
      'Optimizing the site for search engines in the agricultural sector',
      'Ensuring mobile responsiveness for farmers and business clients',
      'Balancing modern web design with agricultural industry aesthetics',
    ],
    learnings: [
      'Business website development and client communication',
      'Email system integration and domain configuration',
      'Agricultural industry web design principles',
      'Contact form security and spam prevention',
      'SEO strategies for niche industries',
      'Client requirement analysis and implementation',
    ],
    sections: [
      {
        title: 'Product Catalog System',
        description:
          'Comprehensive catalog showcasing BNG Agroproductos agricultural products with detailed information and professional presentation.',
        content: [
          'Designed and implemented a user-friendly product catalog interface',
          'Created detailed product pages with specifications and benefits',
          'Organized products into logical categories for easy navigation',
          'Implemented responsive image galleries for product visualization',
          'Added search and filtering capabilities for product discovery',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Contact Form Integration',
        description:
          'Custom contact form system with email integration, allowing customers to reach BNG Agroproductos directly through their business domain.',
        content: [
          'Built a secure and reliable contact form with form validation',
          'Integrated email functionality with custom domain setup',
          'Implemented spam protection and security measures',
          'Created automatic email responses for customer inquiries',
          'Designed user-friendly form interface with clear call-to-actions',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Company Branding and Design',
        description:
          'Professional web design that reflects BNG Agroproductos values of innovation and sustainable agriculture practices.',
        content: [
          'Developed a visual identity that reflects agricultural innovation and sustainability',
          'Created a modern, professional layout that appeals to business clients',
          'Implemented consistent branding throughout all pages and sections',
          'Designed engaging sections highlighting company values and mission',
          'Ensured the design conveys trust and professionalism for B2B clients',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Responsive Web Development',
        description:
          'Mobile-first responsive design ensuring optimal user experience across all devices and platforms.',
        content: [
          'Implemented mobile-first responsive design for optimal viewing on all devices',
          'Optimized navigation and user interface for touch interactions',
          'Ensured fast loading times across different network conditions',
          'Created accessible design following web accessibility standards',
          'Optimized images and content for various screen sizes and resolutions',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Domain and Email Setup',
        description:
          'Complete domain and email system configuration, providing BNG Agroproductos with professional communication channels.',
        content: [
          'Configured custom domain setup and DNS management',
          'Implemented professional email system with company domain',
          'Set up email forwarding and auto-responder systems',
          'Ensured reliable email delivery and security configurations',
          'Provided training and documentation for email system management',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    id: 'restaurant-management-flutter',
    title: 'Restaurant Management System',
    description:
      'A comprehensive Flutter application for restaurant operations management featuring real-time table tracking, order management, live floor plan visualization, and notification systems for managers.',
    fullDescription:
      'Developed a complete restaurant management solution using Flutter that provides restaurant managers with real-time insights into their operations. The application features interactive floor plan management, order tracking, table status monitoring, and intelligent notification systems to alert managers of unusual activities or issues requiring attention.',
    technologies: [
      'Flutter',
      'Dart',
      'Real-time Database',
      'Push Notifications',
      'Mobile Development',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Real-time table status tracking and management',
      'Comprehensive order management system',
      'Interactive restaurant floor plan visualization',
      'Push notification system for unusual activity alerts',
      'Advanced reporting and analytics dashboard',
      'Live status updates across all connected devices',
      'Intuitive mobile-first interface design',
      'Multi-restaurant support and management',
    ],
    challenges: [
      'Implementing real-time synchronization across multiple devices',
      'Creating an intuitive and responsive floor plan interface',
      'Designing an effective notification system without overwhelming managers',
      'Optimizing performance for real-time updates in busy restaurant environments',
      'Ensuring data consistency during high-traffic periods',
      'Building a scalable architecture for multiple restaurant locations',
    ],
    learnings: [
      'Advanced Flutter development and state management patterns',
      'Real-time database synchronization and conflict resolution',
      'Mobile app performance optimization for business-critical applications',
      'User experience design for high-stress restaurant environments',
      'Push notification implementation and management strategies',
      'Cross-platform mobile development best practices',
    ],
    sections: [
      {
        title: 'Table Management System',
        description:
          'Real-time table tracking system that provides instant visibility into table status, occupancy, and turnover rates across the entire restaurant.',
        content: [
          'Developed real-time table status updates that sync instantly across all connected devices',
          'Created intuitive visual indicators for table availability, occupancy, and cleaning status',
          'Implemented table reservation and waitlist management capabilities',
          'Built analytics to track table turnover rates and optimize seating efficiency',
          'Designed touch-friendly interfaces for quick status updates by restaurant staff',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Order Management System',
        description:
          'Comprehensive order tracking system that monitors all orders from placement to completion, ensuring smooth kitchen operations and customer satisfaction.',
        content: [
          'Built a complete order lifecycle management system from placement to delivery',
          'Implemented real-time order status updates for kitchen staff and servers',
          'Created order prioritization algorithms to optimize kitchen workflow',
          'Developed integration capabilities with POS systems and kitchen display systems',
          'Designed order modification and cancellation workflows with proper audit trails',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Live Restaurant Floor Plan',
        description:
          'Interactive visual representation of the restaurant layout that provides real-time status updates and enables efficient floor management.',
        content: [
          'Created an interactive floor plan interface that updates in real-time',
          'Implemented drag-and-drop functionality for table layout modifications',
          'Built visual status indicators that show table occupancy at a glance',
          'Developed zoom and pan capabilities for large restaurant layouts',
          'Designed color-coded systems for quick identification of table states and issues',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Intelligent Notification System',
        description:
          'Smart notification system that alerts managers to unusual activities, operational issues, and important events requiring immediate attention.',
        content: [
          'Developed intelligent algorithms to detect unusual activity patterns',
          'Implemented customizable notification rules and priority levels',
          'Created push notification system for immediate manager alerts',
          'Built notification history and tracking for audit purposes',
          'Designed escalation procedures for critical issues that require immediate response',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Advanced Reporting and Analytics',
        description:
          'Comprehensive reporting system that provides insights into restaurant performance, operational efficiency, and business intelligence.',
        content: [
          'Built comprehensive reporting modules for daily, weekly, and monthly analytics',
          'Created performance dashboards with key operational metrics and KPIs',
          'Implemented data visualization tools for trend analysis and insights',
          'Developed export capabilities for financial and operational reporting',
          'Designed predictive analytics features to forecast busy periods and staffing needs',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
];
