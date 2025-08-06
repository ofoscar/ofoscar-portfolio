import type { Project } from '../types/project';

// English projects data
const projectsDataEn: Project[] = [
  {
    starred: true,
    id: 'casino-management-system',
    title: 'BetCore: Comprehensive Casino Management System',
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
    /*  review: {
      rating: 5,
      reviewerName: 'Casino Manager',
      comment:
        'Exceptional system that revolutionized our operations. The team delivered beyond expectations and provided excellent on-site support.',
    }, */
  },
  {
    starred: true,
    id: 'bng-agroproductos-website',
    title: 'BNG Agroproductos: Business Website',
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
    demoUrl: 'https://bngagroproductos.com',
    imageUrl:
      'https://images.unsplash.com/photo-1594771804886-a933bb2d609b?q=80&w=2682&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    review: {
      rating: 5,
      reviewerName: 'Daniel Bojórquez (BNG Team Lead)',
      comment:
        'Professional website that perfectly represents our agricultural values. Great attention to detail and responsive design.',
      imageUrl: '/bng_logo.png',
    },
  },
  {
    starred: true,
    id: 'restaurant-management-flutter',
    title: 'Tably: Restaurant Management System',
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
    /*  review: {
      rating: 3,
      reviewerName: 'Restaurant Owner',
      comment:
        'Good functionality overall, though it took some time to adapt to the new system. The real-time tracking is very helpful.',
    }, */
  },
  {
    starred: false,
    id: 'pawn-in-management-system',
    title: 'Pawn In: Comprehensive Pawn Shop Management System',
    description:
      'A real-time web application for managing pawn shop operations across multiple branches. Features live inventory updates, product management, and multi-branch coordination using socket connections.',
    fullDescription:
      'Developed a comprehensive web-based management system for pawn shop operations that enables real-time coordination across multiple branch locations. The application provides live inventory tracking, product management, and seamless communication between branches using socket technology for instant updates.',
    technologies: [
      'React.js',
      'Socket.io',
      'Node.js',
      'Real-time Updates',
      'Multi-branch Management',
      'Inventory Management',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Real-time inventory synchronization across all branches',
      'Comprehensive product management and cataloging system',
      'Multi-branch coordination and communication',
      'Live updates using socket connections',
      'Product addition and modification capabilities',
      'Branch-specific inventory tracking and reporting',
      'User role management for different branch levels',
      'Real-time notifications for inventory changes',
    ],
    challenges: [
      'Implementing real-time synchronization across multiple branch locations',
      'Managing complex inventory states with concurrent users',
      'Ensuring data consistency during high-traffic operations',
      'Designing an intuitive interface for pawn shop workers',
      'Optimizing socket connections for reliable real-time updates',
      'Handling offline scenarios and data synchronization',
      'Managing user permissions across different branch hierarchies',
    ],
    learnings: [
      'Advanced socket.io implementation for real-time applications',
      'Multi-branch business logic and data architecture',
      'Real-time state management and conflict resolution',
      'Pawn shop industry operations and workflow optimization',
      'Scalable web application architecture for multiple locations',
      'User experience design for business-critical operations',
      'Performance optimization for real-time data synchronization',
    ],
    sections: [
      {
        title: 'Real-time Inventory Management',
        description:
          'Advanced inventory system that provides instant synchronization across all pawn shop branches, ensuring accurate product tracking and availability.',
        content: [
          'Implemented socket.io for real-time inventory updates across all connected branches',
          'Created comprehensive product cataloging with detailed item specifications and pricing',
          'Developed instant notification system for inventory changes and new product additions',
          'Built conflict resolution mechanisms for concurrent inventory modifications',
          'Designed visual indicators for real-time stock level changes and product status updates',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Multi-Branch Coordination System',
        description:
          'Comprehensive branch management system that enables seamless coordination and communication between multiple pawn shop locations.',
        content: [
          'Built centralized branch management with location-specific inventory tracking',
          'Implemented branch-to-branch product transfer and coordination features',
          'Created real-time communication channels between branch managers and staff',
          'Developed branch-specific reporting and analytics dashboards',
          'Designed hierarchical user permissions for different branch management levels',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Product Management Interface',
        description:
          'User-friendly product management system that allows staff to easily add, modify, and track items across the pawn shop inventory.',
        content: [
          'Developed intuitive product entry forms with comprehensive item categorization',
          'Created photo upload and management system for product documentation',
          'Implemented barcode scanning integration for quick product identification',
          'Built product search and filtering capabilities with advanced query options',
          'Designed product history tracking for loan and sale transaction records',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Live Updates and Notification System',
        description:
          'Advanced real-time communication system using socket technology to provide instant updates and notifications across all branch locations.',
        content: [
          'Implemented robust socket.io architecture for reliable real-time communication',
          'Created intelligent notification system for critical inventory and operational updates',
          'Built real-time dashboard displays showing live activity across all branches',
          'Developed connection management and automatic reconnection handling',
          'Designed scalable message broadcasting system for multi-branch coordination',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Analytics and Reporting Dashboard',
        description:
          'Comprehensive reporting system providing insights into pawn shop performance, inventory trends, and multi-branch analytics.',
        content: [
          'Built detailed analytics dashboards for inventory performance and branch comparisons',
          'Created comprehensive reporting modules for daily, weekly, and monthly operations',
          'Implemented data visualization tools for trend analysis and business insights',
          'Developed export capabilities for financial and operational reporting',
          'Designed predictive analytics for inventory forecasting and business planning',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    /*  review: {
      rating: 4,
      reviewerName: 'Pawn Shop Manager',
      comment:
        'Great system for coordinating our multiple locations. The real-time updates have significantly improved our inventory management.',
    }, */
  },
  {
    starred: false,
    id: 'inma-influencer-management-app',
    title: 'INMA: Influencer Collaboration Management App (Figma UI Design)',
    imageUrl: '/inma_screen.png',
    description:
      'Figma prototype for INMA, a web app designed to manage influencer collaborations, events, and payments with admin and influencer-specific roles and data views.',
    fullDescription:
      'Designed a complete user interface prototype in Figma for INMA, an influencer management application that helps marketing teams and agencies coordinate collaborations, track event participation, manage payments, and generate monthly reports. The system includes distinct views and functionalities for administrators and influencers, ensuring transparency and streamlined collaboration workflows.',
    technologies: ['Figma', 'UI/UX Design', 'Design Systems', 'Prototyping'],
    features: [
      'Role-based login screens for influencers and administrators',
      'Dashboard with real-time collaboration payment summary',
      'Categorized payment tracking: Paid, Pending, No Closure Date',
      '“Next Events” section for upcoming scheduled campaigns',
      'Detailed collaboration cards with influencer payment status',
      'Event details view with linked influencer participants',
      'Admin-exclusive functionality to create events and collaborations',
      'Confirmation flow for influencers to acknowledge received payments',
      'Reports section with line charts summarizing monthly collaborations',
    ],
    challenges: [
      'Designing a multi-role interface that balances complexity and clarity',
      'Ensuring all interaction flows were intuitive and complete',
      'Creating scalable component-based layouts in Figma',
      'Establishing a clear visual language for payment states and event statuses',
    ],
    learnings: [
      'Designing enterprise-level dashboard systems in Figma',
      'Creating adaptive UI systems for multiple user roles',
      'Building consistent design systems with reusable components',
      'Designing data visualization components like line charts',
    ],
    sections: [
      {
        title: 'Login and Role-based Access',
        description:
          'Separate login experiences designed for influencers and admins with tailored navigation and permissions.',
        content: [
          'Created intuitive login flow distinguishing between influencers and administrators',
          'Designed user-specific dashboards with clear separation of responsibilities',
          'Ensured visual consistency across all login and auth-related screens',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Collaboration & Payments Dashboard',
        description:
          'Main dashboard for quick insight into collaborations and payment statuses.',
        content: [
          'Designed a card-based interface to summarize collaboration statuses',
          'Created visual distinctions for Paid, Pending, and No Closure Date statuses',
          'Ensured easy navigation to collaboration detail views',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1600267166115-7cbb964e92c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Event Management System',
        description:
          'Admin-managed event creation and influencer linking system with detailed event views.',
        content: [
          'Designed admin-only event creation workflows',
          'Built UI for linking influencers to events',
          'Included event detail views with time, location, and linked influencer data',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1580234758340-4c0fdbf6a548?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Collaboration Detail View',
        description:
          'Deep-dive screens for each collaboration showing influencer, status, payment, and confirmation flow.',
        content: [
          'Showed full collaboration data including payment status and influencer confirmation',
          'Created user-friendly layouts for multi-step collaboration workflows',
          'Implemented confirmation steps for influencers to acknowledge payment',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1581092334516-df8e2b6dbbdd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Reports and Analytics Page',
        description:
          'Data-driven reporting interface with monthly collaboration trends visualized in line charts.',
        content: [
          'Created line chart components for monthly collaboration data',
          'Designed export-friendly layouts for sharing reports',
          'Included filters for date ranges and collaboration types',
        ],
        imageUrl: '/inma_screen.png',
      },
    ],
  },
];

// Spanish projects data
const projectsDataEs: Project[] = [
  {
    starred: true,
    id: 'casino-management-system',
    title: 'BetCore: Sistema Integral de Gestión de Casino',
    description:
      'Un ecosistema completo de gestión de casino que consta de múltiples aplicaciones interconectadas para operaciones, servicio al cliente y gestión de terminales. Implementado exitosamente en un entorno de casino en vivo.',
    fullDescription:
      'Lideré el desarrollo e implementación de un sistema integral de gestión de casino que comprende cuatro aplicaciones distintas diseñadas para optimizar las operaciones del casino. El proyecto involucró la creación de paneles de gestión, quioscos de autoservicio, herramientas operativas y sistemas de seguimiento de terminales. Viajé exitosamente a la primera ubicación del casino para supervisar la instalación y brindar capacitación práctica al personal del casino.',
    technologies: [
      'React.js',
      'Flutter',
      'SQL',
      'Canvas API',
      'Aplicaciones de Escritorio',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1491644386567-d98960637850?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Ecosistema de múltiples aplicaciones para operaciones completas de casino',
      'Reportes en tiempo real con tablas virtualizadas para rendimiento',
      'Quioscos de autoservicio para clientes con integración de lectores de tarjetas',
      'Aplicación Flutter de escritorio para operaciones de trabajadores del casino',
      'Sistema de gestión de terminales interactivo basado en canvas',
      'Visualización avanzada de datos y análisis',
      'Compatibilidad multiplataforma y despliegue',
      'Despliegue de producción en vivo y capacitación del personal',
    ],
    challenges: [
      'Coordinar el desarrollo entre múltiples tipos de aplicaciones y plataformas',
      'Implementar integración segura de lectores de tarjetas para autoservicio del cliente',
      'Crear interfaces intuitivas para trabajadores del casino con diferentes niveles técnicos',
      'Asegurar sincronización de datos en tiempo real entre todas las aplicaciones',
      'Gestionar consultas SQL complejas para reportes integrales',
      'Optimizar tablas virtualizadas para grandes conjuntos de datos',
      'Manejar logística de despliegue e instalación en sitio',
    ],
    learnings: [
      'Coordinación de desarrollo multiplataforma y gestión de proyectos',
      'Patrones avanzados de React.js para visualización compleja de datos',
      'Desarrollo y despliegue de aplicaciones Flutter para escritorio',
      'Canvas API para interfaces interactivas de gestión de terminales',
      'Integración de hardware con lectores de tarjetas y equipos de casino',
      'Optimización SQL para sistemas de reportes de alto rendimiento',
      'Capacitación de clientes y gestión del cambio en entornos de producción',
      'Estrategias de despliegue y mantenimiento de software del mundo real',
    ],
    sections: [
      {
        title: 'Sistema de Panel de Gestión',
        description:
          'Construido con React.js y backend SQL, este sistema integral de gestión proporciona a los administradores del casino capacidades detalladas de reportes e insights operacionales.',
        content: [
          'Desarrollé tablas virtualizadas para manejar grandes conjuntos de datos de manera eficiente, asegurando un rendimiento fluido incluso con miles de registros',
          'Creé módulos de reportes dinámicos que permiten a los gerentes generar reportes personalizados basados en varios parámetros',
          'Implementé sincronización de datos en tiempo real para proporcionar estadísticas operacionales al minuto',
          'Diseñé interfaces intuitivas de panel que presentan datos complejos en formatos fácilmente digeribles',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Quioscos de Autoservicio para Clientes',
        description:
          'Estaciones de autoservicio potenciadas por React.js que permiten a los clientes del casino verificar los puntos de su tarjeta de lealtad e información de cuenta de forma independiente.',
        content: [
          'Integré hardware de lectores de tarjetas para acceder de forma segura a las cuentas de los clientes',
          'Desarrollé interfaces amigables para el usuario adecuadas para clientes de todos los niveles técnicos',
          'Implementé medidas seguras de autenticación y protección de datos',
          'Creé diseños responsivos que funcionan efectivamente en pantallas táctiles de quioscos',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Aplicación de Escritorio para Operaciones del Casino',
        description:
          'Una aplicación de escritorio basada en Flutter que sirve como la herramienta principal para que los trabajadores del casino realicen operaciones diarias y tareas de servicio al cliente.',
        content: [
          'Construí una aplicación de escritorio integral usando Flutter para compatibilidad multiplataforma',
          'Diseñé flujos de trabajo que coinciden con los procesos naturales de las operaciones del casino',
          'Implementé características para gestión de cuentas de clientes, procesamiento de transacciones y solicitudes de servicio',
          'Creé interfaces amigables para la capacitación que reducen la curva de aprendizaje para nuevo personal del casino',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Sistema Interactivo de Gestión de Terminales',
        description:
          'Una aplicación innovadora de React.js que presenta una interfaz basada en canvas para gestionar y monitorear terminales de juego del casino en tiempo real.',
        content: [
          'Desarrollé un sistema de canvas interactivo donde las terminales se representan como cajas movibles y redimensionables',
          'Implementé funcionalidad de arrastrar y soltar para fácil reposicionamiento de terminales y gestión de planos de planta',
          'Creé capacidades de monitoreo en tiempo real que muestran el estado y métricas de rendimiento de las terminales',
          'Construí características integrales de reportes con opciones de ordenación y filtrado para análisis de terminales',
          'Diseñé indicadores visuales para identificación rápida de problemas de terminales o necesidades de mantenimiento',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Despliegue y Capacitación',
        description:
          'Viajé exitosamente a la primera ubicación del casino para supervisar la instalación completa del sistema y proporcionar capacitación integral al personal del casino.',
        content: [
          'Coordiné la instalación de las cuatro aplicaciones en diferentes configuraciones de hardware',
          'Realicé sesiones de capacitación práctica para gerentes del casino y personal operativo',
          'Proporcioné documentación detallada y guías de usuario para cada componente de aplicación',
          'Establecí protocolos de soporte y procedimientos de solución de problemas para mantenimiento continuo',
          'Recopilé comentarios de usuarios e implementé mejoras inmediatas basadas en el uso del mundo real',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    starred: true,
    id: 'bng-agroproductos-website',
    title: 'BNG Agroproductos: Sitio Web Empresarial',
    description:
      'Un sitio web empresarial integral para BNG Agroproductos, una empresa agrícola enfocada en la innovación y el cuidado sostenible de la tierra. Incluye catálogo de productos, información de la empresa y sistema de contacto integrado.',
    fullDescription:
      'Desarrollé un sitio web empresarial profesional para BNG Agroproductos, mostrando su compromiso con la innovación agrícola y la gestión sostenible de la tierra. El sitio sirve como presencia digital para la empresa, presentando su catálogo de productos, valores de la empresa y proporcionando a los clientes una forma fácil de ponerse en contacto a través de un sistema personalizado de formularios de contacto con integración de email.',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Formularios de Contacto',
      'Integración de Email',
      'Diseño Responsivo',
    ],
    demoUrl: 'https://bngagroproductos.com',
    imageUrl:
      'https://images.unsplash.com/photo-1594771804886-a933bb2d609b?q=80&w=2682&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Sitio web empresarial profesional con diseño moderno',
      'Catálogo integral de productos mostrando productos agrícolas',
      'Diseño responsivo optimizado para todos los dispositivos',
      'Formulario de contacto personalizado con integración de email',
      'Configuración y configuración de email específico de dominio',
      'Presentación de información y valores de la empresa',
      'Optimización SEO para la industria agrícola',
      'Tiempos de carga rápidos y rendimiento optimizado',
    ],
    challenges: [
      'Crear un diseño profesional que refleje la innovación agrícola',
      'Implementar un sistema confiable de formularios de contacto',
      'Configurar integración de email de dominio personalizado',
      'Optimizar el sitio para motores de búsqueda en el sector agrícola',
      'Asegurar capacidad de respuesta móvil para agricultores y clientes empresariales',
      'Equilibrar el diseño web moderno con la estética de la industria agrícola',
    ],
    learnings: [
      'Desarrollo de sitios web empresariales y comunicación con clientes',
      'Integración de sistemas de email y configuración de dominios',
      'Principios de diseño web para la industria agrícola',
      'Seguridad de formularios de contacto y prevención de spam',
      'Estrategias SEO para industrias especializadas',
      'Análisis e implementación de requisitos del cliente',
    ],
    sections: [
      {
        title: 'Sistema de Catálogo de Productos',
        description:
          'Catálogo integral que muestra los productos agrícolas de BNG Agroproductos con información detallada y presentación profesional.',
        content: [
          'Diseñé e implementé una interfaz de catálogo de productos amigable para el usuario',
          'Creé páginas detalladas de productos con especificaciones y beneficios',
          'Organicé productos en categorías lógicas para navegación fácil',
          'Implementé galerías de imágenes responsivas para visualización de productos',
          'Agregué capacidades de búsqueda y filtrado para descubrimiento de productos',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Integración de Formulario de Contacto',
        description:
          'Sistema personalizado de formularios de contacto con integración de email, permitiendo a los clientes contactar a BNG Agroproductos directamente a través de su dominio empresarial.',
        content: [
          'Construí un formulario de contacto seguro y confiable con validación de formularios',
          'Integré funcionalidad de email con configuración de dominio personalizado',
          'Implementé protección contra spam y medidas de seguridad',
          'Creé respuestas automáticas de email para consultas de clientes',
          'Diseñé interfaz de formulario amigable para el usuario con llamadas a la acción claras',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Marca de la Empresa y Diseño',
        description:
          'Diseño web profesional que refleja los valores de BNG Agroproductos de innovación y prácticas agrícolas sostenibles.',
        content: [
          'Desarrollé una identidad visual que refleja la innovación agrícola y la sostenibilidad',
          'Creé un diseño moderno y profesional que atrae a clientes empresariales',
          'Implementé marca consistente en todas las páginas y secciones',
          'Diseñé secciones atractivas destacando los valores y misión de la empresa',
          'Aseguré que el diseño transmita confianza y profesionalismo para clientes B2B',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Desarrollo Web Responsivo',
        description:
          'Diseño responsivo mobile-first asegurando experiencia de usuario óptima en todos los dispositivos y plataformas.',
        content: [
          'Implementé diseño responsivo mobile-first para visualización óptima en todos los dispositivos',
          'Optimicé navegación e interfaz de usuario para interacciones táctiles',
          'Aseguré tiempos de carga rápidos en diferentes condiciones de red',
          'Creé diseño accesible siguiendo estándares de accesibilidad web',
          'Optimicé imágenes y contenido para varios tamaños y resoluciones de pantalla',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Configuración de Dominio y Email',
        description:
          'Configuración completa de dominio y sistema de email, proporcionando a BNG Agroproductos canales de comunicación profesionales.',
        content: [
          'Configuré configuración de dominio personalizado y gestión de DNS',
          'Implementé sistema de email profesional con dominio de la empresa',
          'Configuré sistemas de reenvío de email y respuesta automática',
          'Aseguré entrega confiable de email y configuraciones de seguridad',
          'Proporcioné capacitación y documentación para gestión del sistema de email',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    review: {
      rating: 5,
      reviewerName: 'Daniel Bojórquez (Líder del Equipo BNG)',
      comment:
        'Sitio web profesional que representa perfectamente nuestros valores agrícolas. Gran atención al detalle y diseño responsivo.',
      imageUrl: '/bng_logo.png',
    },
  },
  {
    starred: true,
    id: 'restaurant-management-flutter',
    title: 'Tably: Sistema de Gestión de Restaurante',
    description:
      'Una aplicación Flutter integral para gestión de operaciones de restaurante que incluye seguimiento de mesas en tiempo real, gestión de pedidos, visualización de plano de planta en vivo y sistemas de notificación para gerentes.',
    fullDescription:
      'Desarrollé una solución completa de gestión de restaurante usando Flutter que proporciona a los gerentes de restaurante insights en tiempo real sobre sus operaciones. La aplicación incluye gestión interactiva de planos de planta, seguimiento de pedidos, monitoreo de estado de mesas y sistemas inteligentes de notificación para alertar a los gerentes sobre actividades inusuales o problemas que requieren atención.',
    technologies: [
      'Flutter',
      'Dart',
      'Base de Datos en Tiempo Real',
      'Notificaciones Push',
      'Desarrollo Móvil',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Seguimiento y gestión de estado de mesas en tiempo real',
      'Sistema integral de gestión de pedidos',
      'Visualización interactiva del plano de planta del restaurante',
      'Sistema de notificaciones push para alertas de actividad inusual',
      'Panel avanzado de reportes y análisis',
      'Actualizaciones de estado en vivo en todos los dispositivos conectados',
      'Diseño de interfaz intuitivo mobile-first',
      'Soporte y gestión para múltiples restaurantes',
    ],
    challenges: [
      'Implementar sincronización en tiempo real entre múltiples dispositivos',
      'Crear una interfaz de plano de planta intuitiva y responsiva',
      'Diseñar un sistema de notificación efectivo sin abrumar a los gerentes',
      'Optimizar rendimiento para actualizaciones en tiempo real en entornos de restaurante ocupados',
      'Asegurar consistencia de datos durante períodos de alto tráfico',
      'Construir una arquitectura escalable para múltiples ubicaciones de restaurantes',
    ],
    learnings: [
      'Desarrollo avanzado de Flutter y patrones de gestión de estado',
      'Sincronización de base de datos en tiempo real y resolución de conflictos',
      'Optimización de rendimiento de aplicaciones móviles para aplicaciones críticas de negocio',
      'Diseño de experiencia de usuario para entornos de restaurante de alto estrés',
      'Implementación y estrategias de gestión de notificaciones push',
      'Mejores prácticas de desarrollo móvil multiplataforma',
    ],
    sections: [
      {
        title: 'Sistema de Gestión de Mesas',
        description:
          'Sistema de seguimiento de mesas en tiempo real que proporciona visibilidad instantánea del estado de las mesas, ocupación y tasas de rotación en todo el restaurante.',
        content: [
          'Desarrollé actualizaciones de estado de mesas en tiempo real que se sincronizan instantáneamente en todos los dispositivos conectados',
          'Creé indicadores visuales intuitivos para disponibilidad de mesas, ocupación y estado de limpieza',
          'Implementé capacidades de gestión de reservas y lista de espera',
          'Construí análisis para rastrear tasas de rotación de mesas y optimizar eficiencia de asientos',
          'Diseñé interfaces táctiles amigables para actualizaciones rápidas de estado por el personal del restaurante',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Sistema de Gestión de Pedidos',
        description:
          'Sistema integral de seguimiento de pedidos que monitorea todos los pedidos desde la colocación hasta la finalización, asegurando operaciones fluidas de cocina y satisfacción del cliente.',
        content: [
          'Construí un sistema completo de gestión del ciclo de vida de pedidos desde la colocación hasta la entrega',
          'Implementé actualizaciones de estado de pedidos en tiempo real para personal de cocina y meseros',
          'Creé algoritmos de priorización de pedidos para optimizar el flujo de trabajo de la cocina',
          'Desarrollé capacidades de integración con sistemas POS y sistemas de pantalla de cocina',
          'Diseñé flujos de trabajo de modificación y cancelación de pedidos con pistas de auditoría apropiadas',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Plano de Planta de Restaurante en Vivo',
        description:
          'Representación visual interactiva del diseño del restaurante que proporciona actualizaciones de estado en tiempo real y permite gestión eficiente del piso.',
        content: [
          'Creé una interfaz de plano de planta interactiva que se actualiza en tiempo real',
          'Implementé funcionalidad de arrastrar y soltar para modificaciones de diseño de mesas',
          'Construí indicadores de estado visual que muestran ocupación de mesas de un vistazo',
          'Desarrollé capacidades de zoom y paneo para diseños de restaurantes grandes',
          'Diseñé sistemas codificados por colores para identificación rápida de estados de mesas y problemas',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Sistema Inteligente de Notificaciones',
        description:
          'Sistema inteligente de notificaciones que alerta a los gerentes sobre actividades inusuales, problemas operacionales y eventos importantes que requieren atención inmediata.',
        content: [
          'Desarrollé algoritmos inteligentes para detectar patrones de actividad inusual',
          'Implementé reglas de notificación personalizables y niveles de prioridad',
          'Creé sistema de notificaciones push para alertas inmediatas a gerentes',
          'Construí historial de notificaciones y seguimiento para propósitos de auditoría',
          'Diseñé procedimientos de escalación para problemas críticos que requieren respuesta inmediata',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Reportes Avanzados y Análisis',
        description:
          'Sistema integral de reportes que proporciona insights sobre rendimiento del restaurante, eficiencia operacional e inteligencia de negocio.',
        content: [
          'Construí módulos integrales de reportes para análisis diarios, semanales y mensuales',
          'Creé paneles de rendimiento con métricas operacionales clave y KPIs',
          'Implementé herramientas de visualización de datos para análisis de tendencias e insights',
          'Desarrollé capacidades de exportación para reportes financieros y operacionales',
          'Diseñé características de análisis predictivo para pronosticar períodos ocupados y necesidades de personal',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    starred: false,
    id: 'pawn-in-management-system',
    title: 'Pawn In: Sistema Integral de Gestión de Casa de Empeño',
    description:
      'Una aplicación web en tiempo real para gestionar operaciones de casas de empeño en múltiples sucursales. Incluye actualizaciones de inventario en vivo, gestión de productos y coordinación entre múltiples sucursales usando conexiones socket.',
    fullDescription:
      'Desarrollé un sistema integral de gestión basado en web para operaciones de casas de empeño que permite coordinación en tiempo real entre múltiples ubicaciones de sucursales. La aplicación proporciona seguimiento de inventario en vivo, gestión de productos y comunicación fluida entre sucursales usando tecnología socket para actualizaciones instantáneas.',
    technologies: [
      'React.js',
      'Socket.io',
      'Node.js',
      'Actualizaciones en Tiempo Real',
      'Gestión Multi-sucursal',
      'Gestión de Inventario',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Sincronización de inventario en tiempo real entre todas las sucursales',
      'Sistema integral de gestión y catalogación de productos',
      'Coordinación y comunicación entre múltiples sucursales',
      'Actualizaciones en vivo usando conexiones socket',
      'Capacidades de adición y modificación de productos',
      'Seguimiento y reportes de inventario específico por sucursal',
      'Gestión de roles de usuario para diferentes niveles de sucursal',
      'Notificaciones en tiempo real para cambios de inventario',
    ],
    challenges: [
      'Implementar sincronización en tiempo real entre múltiples ubicaciones de sucursales',
      'Gestionar estados complejos de inventario con usuarios concurrentes',
      'Asegurar consistencia de datos durante operaciones de alto tráfico',
      'Diseñar una interfaz intuitiva para trabajadores de casas de empeño',
      'Optimizar conexiones socket para actualizaciones confiables en tiempo real',
      'Manejar escenarios sin conexión y sincronización de datos',
      'Gestionar permisos de usuario entre diferentes jerarquías de sucursales',
    ],
    learnings: [
      'Implementación avanzada de socket.io para aplicaciones en tiempo real',
      'Lógica de negocio multi-sucursal y arquitectura de datos',
      'Gestión de estado en tiempo real y resolución de conflictos',
      'Operaciones de la industria de casas de empeño y optimización de flujos de trabajo',
      'Arquitectura de aplicaciones web escalables para múltiples ubicaciones',
      'Diseño de experiencia de usuario para operaciones críticas de negocio',
      'Optimización de rendimiento para sincronización de datos en tiempo real',
    ],
    sections: [
      {
        title: 'Gestión de Inventario en Tiempo Real',
        description:
          'Sistema avanzado de inventario que proporciona sincronización instantánea entre todas las sucursales de casas de empeño, asegurando seguimiento preciso de productos y disponibilidad.',
        content: [
          'Implementé socket.io para actualizaciones de inventario en tiempo real entre todas las sucursales conectadas',
          'Creé catalogación integral de productos con especificaciones detalladas de artículos y precios',
          'Desarrollé sistema de notificación instantánea para cambios de inventario y adiciones de nuevos productos',
          'Construí mecanismos de resolución de conflictos para modificaciones concurrentes de inventario',
          'Diseñé indicadores visuales para cambios de niveles de stock en tiempo real y actualizaciones de estado de productos',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Sistema de Coordinación Multi-sucursal',
        description:
          'Sistema integral de gestión de sucursales que permite coordinación fluida y comunicación entre múltiples ubicaciones de casas de empeño.',
        content: [
          'Construí gestión centralizada de sucursales con seguimiento de inventario específico por ubicación',
          'Implementé características de transferencia y coordinación de productos entre sucursales',
          'Creé canales de comunicación en tiempo real entre gerentes de sucursales y personal',
          'Desarrollé paneles de reportes y análisis específicos por sucursal',
          'Diseñé permisos de usuario jerárquicos para diferentes niveles de gestión de sucursales',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Interfaz de Gestión de Productos',
        description:
          'Sistema de gestión de productos amigable para el usuario que permite al personal agregar, modificar y rastrear fácilmente artículos en el inventario de la casa de empeño.',
        content: [
          'Desarrollé formularios intuitivos de entrada de productos con categorización integral de artículos',
          'Creé sistema de carga y gestión de fotos para documentación de productos',
          'Implementé integración de escaneo de códigos de barras para identificación rápida de productos',
          'Construí capacidades de búsqueda y filtrado de productos con opciones de consulta avanzadas',
          'Diseñé seguimiento de historial de productos para registros de transacciones de préstamos y ventas',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Sistema de Actualizaciones en Vivo y Notificaciones',
        description:
          'Sistema avanzado de comunicación en tiempo real usando tecnología socket para proporcionar actualizaciones instantáneas y notificaciones en todas las ubicaciones de sucursales.',
        content: [
          'Implementé arquitectura robusta de socket.io para comunicación confiable en tiempo real',
          'Creé sistema inteligente de notificación para actualizaciones críticas de inventario y operacionales',
          'Construí pantallas de panel en tiempo real mostrando actividad en vivo en todas las sucursales',
          'Desarrollé gestión de conexiones y manejo automático de reconexión',
          'Diseñé sistema escalable de difusión de mensajes para coordinación multi-sucursal',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Panel de Análisis y Reportes',
        description:
          'Sistema integral de reportes que proporciona insights sobre rendimiento de casas de empeño, tendencias de inventario y análisis multi-sucursal.',
        content: [
          'Construí paneles detallados de análisis para rendimiento de inventario y comparaciones de sucursales',
          'Creé módulos integrales de reportes para operaciones diarias, semanales y mensuales',
          'Implementé herramientas de visualización de datos para análisis de tendencias e insights de negocio',
          'Desarrollé capacidades de exportación para reportes financieros y operacionales',
          'Diseñé análisis predictivo para pronóstico de inventario y planificación de negocio',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    starred: false,
    id: 'inma-influencer-management-app',
    title:
      'INMA: App de Gestión de Colaboración de Influencers (Diseño UI en Figma)',
    imageUrl: '/inma_screen.png',
    description:
      'Prototipo en Figma para INMA, una aplicación web diseñada para gestionar colaboraciones de influencers, eventos y pagos con roles específicos de administrador e influencer y vistas de datos.',
    fullDescription:
      'Diseñé un prototipo completo de interfaz de usuario en Figma para INMA, una aplicación de gestión de influencers que ayuda a equipos de marketing y agencias a coordinar colaboraciones, rastrear participación en eventos, gestionar pagos y generar reportes mensuales. El sistema incluye vistas y funcionalidades distintas para administradores e influencers, asegurando transparencia y flujos de trabajo de colaboración optimizados.',
    technologies: [
      'Figma',
      'Diseño UI/UX',
      'Sistemas de Diseño',
      'Prototipado',
    ],
    features: [
      'Pantallas de inicio de sesión basadas en roles para influencers y administradores',
      'Panel con resumen de pagos de colaboración en tiempo real',
      'Seguimiento de pagos categorizado: Pagado, Pendiente, Sin Fecha de Cierre',
      'Sección "Próximos Eventos" para campañas programadas próximas',
      'Tarjetas detalladas de colaboración con estado de pago de influencer',
      'Vista de detalles de eventos con participantes influencers vinculados',
      'Funcionalidad exclusiva de administrador para crear eventos y colaboraciones',
      'Flujo de confirmación para que influencers reconozcan pagos recibidos',
      'Sección de reportes con gráficos de líneas resumiendo colaboraciones mensuales',
    ],
    challenges: [
      'Diseñar una interfaz multi-rol que equilibre complejidad y claridad',
      'Asegurar que todos los flujos de interacción fueran intuitivos y completos',
      'Crear diseños escalables basados en componentes en Figma',
      'Establecer un lenguaje visual claro para estados de pago y estados de eventos',
    ],
    learnings: [
      'Diseñar sistemas de panel a nivel empresarial en Figma',
      'Crear sistemas de UI adaptativos para múltiples roles de usuario',
      'Construir sistemas de diseño consistentes con componentes reutilizables',
      'Diseñar componentes de visualización de datos como gráficos de líneas',
    ],
    sections: [
      {
        title: 'Inicio de Sesión y Acceso Basado en Roles',
        description:
          'Experiencias de inicio de sesión separadas diseñadas para influencers y administradores con navegación y permisos adaptados.',
        content: [
          'Creé flujo de inicio de sesión intuitivo distinguiendo entre influencers y administradores',
          'Diseñé paneles específicos de usuario con clara separación de responsabilidades',
          'Aseguré consistencia visual en todas las pantallas relacionadas con inicio de sesión y autenticación',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Panel de Colaboraciones y Pagos',
        description:
          'Panel principal para insight rápido sobre colaboraciones y estados de pago.',
        content: [
          'Diseñé una interfaz basada en tarjetas para resumir estados de colaboración',
          'Creé distinciones visuales para estados Pagado, Pendiente y Sin Fecha de Cierre',
          'Aseguré navegación fácil a vistas detalladas de colaboración',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1600267166115-7cbb964e92c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Sistema de Gestión de Eventos',
        description:
          'Sistema de creación de eventos gestionado por administrador y sistema de vinculación de influencers con vistas detalladas de eventos.',
        content: [
          'Diseñé flujos de trabajo de creación de eventos solo para administradores',
          'Construí UI para vincular influencers a eventos',
          'Incluí vistas detalladas de eventos con datos de tiempo, ubicación e influencers vinculados',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1580234758340-4c0fdbf6a548?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Vista Detallada de Colaboración',
        description:
          'Pantallas de profundización para cada colaboración mostrando influencer, estado, pago y flujo de confirmación.',
        content: [
          'Mostré datos completos de colaboración incluyendo estado de pago y confirmación de influencer',
          'Creé diseños amigables para el usuario para flujos de trabajo de colaboración de múltiples pasos',
          'Implementé pasos de confirmación para que influencers reconozcan el pago',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1581092334516-df8e2b6dbbdd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'Página de Reportes y Análisis',
        description:
          'Interfaz de reportes orientada a datos con tendencias de colaboración mensuales visualizadas en gráficos de líneas.',
        content: [
          'Creé componentes de gráficos de líneas para datos de colaboración mensuales',
          'Diseñé diseños amigables para exportación para compartir reportes',
          'Incluí filtros para rangos de fechas y tipos de colaboración',
        ],
        imageUrl: '/inma_screen.png',
      },
    ],
  },
];

// Function to get projects data based on language
export const getProjectsData = (language: string = 'en'): Project[] => {
  return language === 'es' ? projectsDataEs : projectsDataEn;
};

// Export default as English for backward compatibility
export const projectsData = projectsDataEn;
