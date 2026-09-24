import { Project, ExperienceItem, EducationItem, SkillCategory } from '../types';
import { KATRINE_PHOTO } from './avatarData';

export const PROFILE_INFO = {
  name: 'Katrine Perez',
  title: 'Senior Software Engineer & Scrum Master',
  tagline: 'Full-Stack Web Platforms & Agile Delivery',
  summary:
    'Senior Software Engineer & Scrum Master with over 10 years of experience building and maintaining web and mobile applications using React, Vue, Nuxt 3, and NestJS. Experienced in leading Agile teams, delivering enterprise features, and integrating cloud and API services.',
  location: 'Taguig City, Philippines',
  timezone: 'Asia/Manila (UTC+8)',
  emails: [
    { label: 'Direct Email', address: 'katrineperez29@gmail.com' }
  ],
  phone: '+63 926 208 0172',
  avatar: KATRINE_PHOTO,
  stats: [
    { label: 'Years Experience', value: '10+' },
    { label: 'Core Platforms', value: '4' },
    { label: 'Agile Delivery', value: 'Scrum Master' },
    { label: 'Production Uptime', value: '99.9%' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'activelink-mobile',
    title: 'ActiveLink Mobile App',
    subtitle: 'Employee Benefits & Healthcare Mobile Platform',
    category: 'Mobile Application',
    techStack: ['Sencha ExtJS', 'Cordova', 'Android', 'iOS', 'MySQL', 'SCSS'],
    framework: 'Sencha ExtJS + Cordova',
    image: '/activelink_app.jpg',
    description:
      'Cross-platform mobile application for employee benefits and healthcare. Policyholders can search clinics, schedule medical/dental appointments, and submit claims directly.',
    overview:
      'Built from the ground up using Sencha ExtJS and packaged natively for Android and iOS using Apache Cordova, connected to backend MySQL databases.',
    features: [
      'Clinic and hospital locator with geolocation',
      'Doctor and dentist appointment scheduling',
      'Direct secure messaging with administrators',
      'Medical documentation and claims upload'
    ],
    responsibilities: [
      'Built mobile application from the ground up using Sencha ExtJS',
      'Designed and maintained the mobile user interface',
      'Packaged and deployed native builds for Android and iOS via Cordova',
      'Connected frontend to backend MySQL services'
    ],
    architecture: [
      'Sencha ExtJS MVC architecture',
      'Cordova native plugins for camera and geolocation',
      'Fast client-side list rendering'
    ],
    architectureFlow: [
      { layer: 'Client Mobile App', technology: 'Sencha ExtJS 6 + SCSS', description: 'Cross-platform reactive UI with customized mobile touch widgets' },
      { layer: 'Native Bridge', technology: 'Apache Cordova Plugins', description: 'Native hardware bridge for device camera, secure storage, and GPS' },
      { layer: 'App Packaging', technology: 'Android SDK + iOS Xcode', description: 'Certified signed builds deployed to enterprise distribution channels' },
      { layer: 'Backend & Data', technology: 'MySQL & REST Services', description: 'Relational database handling claims, policy rules, and clinic directories' }
    ],
    impactMetrics: [
      { label: 'Platform Build', value: '100% Ground-up' },
      { label: 'Ecosystem', value: 'Android + iOS' },
      { label: 'Core Users', value: 'Policyholders' }
    ],
    badge: 'Mobile App'
  },
  {
    id: 'pollen-lms',
    title: 'Pollen Liquidation Management System',
    subtitle: 'Inventory Management & Waste Diversion Platform',
    category: 'B2B Enterprise SaaS',
    techStack: ['Nuxt 3', 'Twilio', 'Auth0', 'NestJS', 'Next.js', 'AWS', 'Temporal'],
    framework: 'Nuxt 3 + NestJS',
    image: '/pollen_lms.jpg',
    description:
      'B2B inventory management platform built to help enterprise brands predict, plan, and automate surplus stock liquidation.',
    overview:
      'Built during a Singapore-based engagement. Served as Scrum Master and Senior Engineer, delivering frontend interfaces with Nuxt 3 and backend services with NestJS.',
    features: [
      'Auth0 Single Sign-On authentication',
      'Twilio automated SMS and notification alerts',
      'Temporal workflow orchestration for batch liquidation',
      'Responsive dashboard with Nuxt 3 and Vuetify',
      'Automated CI/CD deployment on AWS'
    ],
    responsibilities: [
      'Facilitated sprint planning, daily standups, and retrospectives as Scrum Master',
      'Engineered and maintained the web platform using Nuxt 3 and Vue 3',
      'Built backend REST services with NestJS and TypeORM',
      'Integrated Auth0, Twilio, and Temporal workflows'
    ],
    architecture: [
      'Microservices orchestrated with Temporal',
      'Auth0 JWT authentication',
      'AWS infrastructure with GitHub Actions CI/CD'
    ],
    architectureFlow: [
      { layer: 'Frontend Dashboard', technology: 'Nuxt 3 + Vue 3 + Vuetify', description: 'SSR/CSR enterprise inventory portal with real-time analytics tables' },
      { layer: 'Identity & Security', technology: 'Auth0 SSO + JWT Tokens', description: 'Role-based access control (Superadmin, Brand Buyer, Operations)' },
      { layer: 'Business Logic API', technology: 'NestJS + TypeORM (Node.js)', description: 'Modular TypeScript microservices exposing performant REST endpoints' },
      { layer: 'Workflow Engine', technology: 'Temporal.io Orchestration', description: 'Fault-tolerant distributed workflows managing batch inventory transitions' },
      { layer: 'Alerts & Cloud', technology: 'Twilio SMS + AWS Cloud', description: 'Automated buyer dispatch alerts and scalable AWS container hosting' }
    ],
    impactMetrics: [
      { label: 'Role', value: 'Scrum Master & Senior SWE' },
      { label: 'Uptime Maintained', value: '99.9%' },
      { label: 'Pipelines', value: 'Temporal + Twilio' }
    ],
    badge: 'Enterprise SaaS'
  },
  {
    id: 'pollen-marketplace',
    title: 'Pollen Marketplace',
    subtitle: 'B2B Wholesale Liquidation Portal',
    category: 'Marketplace',
    techStack: ['React.js', 'Next.js', 'Node.js', 'AWS', 'REST APIs', 'Tailwind CSS'],
    framework: 'React.js',
    image: '/pollen_marketplace.jpg',
    description:
      'B2B marketplace allowing retail buyers to purchase verified brand surplus inventory directly with secured checkout and logistics.',
    overview:
      'Engineered responsive React.js buyer views, catalog search, SKU lookup, and live bidding offer flows.',
    features: [
      'Catalog browsing and multi-criteria lot filtering',
      'Real-time offer and bidding flow',
      'Verified seller badges and transaction management',
      'Fast responsive web layout'
    ],
    responsibilities: [
      'Built modular UI components using React.js and modern state management',
      'Resolved production defects and maintained system uptime',
      'Secured API transactions using JWT tokens and Postman validation'
    ],
    architecture: [
      'Component-driven React layout',
      'REST APIs and cloud media caching on AWS',
      'Optimized client-side catalog navigation'
    ],
    architectureFlow: [
      { layer: 'Buyer Frontend', technology: 'React.js + Tailwind CSS', description: 'Component-driven responsive buyer portal with instant filter and sorting' },
      { layer: 'API Layer', technology: 'Node.js Express + REST', description: 'Optimized endpoints for SKU search, lot details, and deal negotiation' },
      { layer: 'Auth & Validation', technology: 'JWT + Postman Testing', description: 'Strict token verification protecting wholesale pricing and buyer data' },
      { layer: 'Hosting & Assets', technology: 'AWS S3 + CloudFront CDN', description: 'High-speed edge asset delivery for high-resolution product inventory' }
    ],
    impactMetrics: [
      { label: 'Transactions', value: 'Real-time Offers' },
      { label: 'Architecture', value: 'Modular React.js' },
      { label: 'Client Quality', value: 'Zero-Defect Goal' }
    ],
    liveUrl: 'https://market.pollendirect.com',
    badge: 'B2B Marketplace'
  },
  {
    id: 'mamas-and-papas',
    title: 'Mamas & Papas Philippines',
    subtitle: 'Baby Goods & Nursery E-Commerce Store',
    category: 'E-Commerce',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'SCSS'],
    framework: 'Shopify',
    image: '/mamas_papas.jpg',
    description:
      'Official localized e-commerce storefront for British nursery brand Mamas & Papas in the Philippines.',
    overview:
      'Customized and maintained the Shopify storefront with bespoke Liquid templates, responsive product catalogs, and fast mobile navigation.',
    features: [
      'Custom Liquid storefront templates and styling',
      'Collection showcases for furniture, strollers, and apparel',
      'Delivery announcements and localized checkout options',
      'Mobile-friendly product carousels'
    ],
    responsibilities: [
      'Customized Shopify Liquid templates and responsive SCSS styling',
      'Implemented product filtering, dynamic cart interactions, and search',
      'Optimized page performance for mobile shoppers'
    ],
    architecture: [
      'Shopify Liquid template engine with SCSS and Vanilla JavaScript',
      'Shopify Storefront API for inventory synchronization'
    ],
    architectureFlow: [
      { layer: 'Storefront UI', technology: 'Custom Shopify Liquid + SCSS', description: 'Bespoke mobile-first British nursery brand design localized for PH' },
      { layer: 'Client Scripts', technology: 'Vanilla ES6+ JavaScript', description: 'Dynamic cart drawers, variant selection, and instant search index' },
      { layer: 'Checkout & Logistics', technology: 'Shopify Storefront Engine', description: 'Secure payment gateway integration with localized courier routing' }
    ],
    impactMetrics: [
      { label: 'Brand', value: 'British Nursery Leader' },
      { label: 'Store Engine', value: 'Shopify Liquid' },
      { label: 'UX Focus', value: 'Mobile First' }
    ],
    liveUrl: 'https://mamasandpapas.ph',
    badge: 'Shopify Store'
  }
];

export const SCRUM_CEREMONIES = [
  {
    id: 'sprint-planning',
    title: 'Sprint Planning & Story Point Sizing',
    cadence: 'Bi-weekly (2-week sprint cycles)',
    objective: 'Turn product roadmaps into well-groomed, achievable sprint backlogs with clear definition of done.',
    methods: [
      'Story Point estimation (Planning Poker / Fibonacci)',
      'Breakdown of high-level epics into testable engineering tasks',
      'Capacity planning accounting for team velocity and holidays'
    ],
    quote: 'Clear acceptance criteria upfront eliminate 80% of mid-sprint scope creep.'
  },
  {
    id: 'daily-standup',
    title: 'Daily Standup & Blocker Smashing',
    cadence: 'Daily (15-minute timebox)',
    objective: 'Keep engineering synchronized across timezones (Singapore, Manila, Global) and eliminate impediments immediately.',
    methods: [
      'What did we ship yesterday? What are we committing to today?',
      'Active impediment discovery: API blockers, dependency lags, QA bottlenecks',
      'Immediate 1-on-1 breakout sessions to resolve technical blocks'
    ],
    quote: 'The standup is not a status report to management — it is the engineering team coordinating to win the day.'
  },
  {
    id: 'sprint-review',
    title: 'Sprint Review & Stakeholder Demos',
    cadence: 'End of each sprint',
    objective: 'Showcase working software to product owners, business stakeholders, and clients for rapid feedback.',
    methods: [
      'Live software demonstrations in staging environments',
      'Direct feedback collection and backlog realignment',
      'Celebrating completed sprint goals with engineering'
    ],
    quote: 'Working software is the primary measure of real progress.'
  },
  {
    id: 'retrospective',
    title: 'Continuous Sprint Retrospectives',
    cadence: 'Post-review each sprint',
    objective: 'Fosters team psychological safety, reviews velocity metrics, and commits to 2-3 concrete process improvements.',
    methods: [
      'What went well? What slowed us down? Actionable experiments.',
      'Defect root-cause analysis with QA and senior developers',
      'Celebrating peer contributions and continuous team growth'
    ],
    quote: 'Retrospectives are where good teams steadily transform into high-velocity teams.'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'deltek',
    role: 'Senior Software Engineer',
    company: 'Deltek Systems (Philippines), Ltd.',
    location: 'Taguig City, Philippines',
    period: '2018 – Present',
    current: true,
    type: 'Full-time',
    highlights: [
      'Collaborate directly with global clients to translate complex business concepts into robust, functional software features.',
      'Diagnose and resolve critical production bugs while implementing new features across ExtJs, Angular, iOS, and Android platforms.',
      'Partner closely with customer care and QA teams to troubleshoot and resolve technical escalations, significantly improving issue turnaround.'
    ],
    technologies: ['ExtJS', 'Angular', 'iOS', 'Android', 'REST APIs', 'Agile Delivery', 'Defect Resolution']
  },
  {
    id: 'scrum-pollen',
    role: 'Scrum Master / Senior Software Engineer',
    company: 'Singapore-based engagement (Pollen Tech)',
    location: 'Singapore / Remote',
    period: '2016 – 2018',
    type: 'Contract / Engagement',
    highlights: [
      'Facilitated all Agile/Scrum ceremonies (sprint planning, daily standups, sprint reviews, and retrospectives) and actively removed team impediments, driving team velocity and consistent on-time delivery.',
      'Proactively triaged and resolved production defects while concurrently building new features, maintaining exceptional stability and uptime across three actively maintained production websites.',
      'Delivered and maintained web platforms built with Nuxt 3, Vue 3, Vuetify, and React.js, deployed and monitored on AWS with automated GitHub CI/CD pipelines.',
      'Built and maintained backend microservices with NestJS, TypeORM, and Node.js, orchestrating critical enterprise workflows with Temporal and deploying via Railway.',
      'Integrated third-party services — Twilio, Keycloak, HubSpot, Google Analytics, and Auth0 — via REST APIs to extend authentication, communication, and analytics capabilities.',
      'Validated and secured API integrations using Postman and robust JWT-based authentication across all products.'
    ],
    technologies: ['Nuxt 3', 'Vue.js', 'React.js', 'NestJS', 'TypeORM', 'Temporal', 'Auth0', 'Twilio', 'AWS', 'Railway', 'GitHub CI/CD']
  },
  {
    id: 'activelink',
    role: 'Web Developer',
    company: 'ActiveLink — Employee Benefits Made Better',
    location: 'Philippines',
    period: '2014 – 2016',
    type: 'Full-time',
    highlights: [
      'ActiveLink Mobile: Built the cross-platform employee benefits mobile application from the ground up using Sencha ExtJS; designed and maintained the full user interface.',
      'Packaged and deployed native application builds for both Android and iOS ecosystems using Apache Cordova.',
      'OMM (Operations Management Module): Created the internal operations system from the ground up using Sencha ExtJS, managing backend services and responsive styling with SCSS.',
      'Tech: Sencha ExtJS, MySQL, Apache Cordova, Android, iOS, Ruby on Rails, SCSS.'
    ],
    technologies: ['Sencha ExtJS', 'Cordova', 'Android', 'iOS', 'MySQL', 'Ruby on Rails', 'SCSS']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'pup-msit',
    degree: 'Master of Science in Information Technology (MSIT)',
    institution: 'Polytechnic University of the Philippines',
    period: 'June 2016 – 2020'
  },
  {
    id: 'plp-bsit',
    degree: 'Bachelor of Science in Information Technology (BSIT)',
    institution: 'Pamantasan ng Lungsod ng Pasig',
    period: 'Graduated April 2014'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Web Platforms & Frameworks',
    skills: [
      { name: 'React.js', level: 'Expert', years: '7+ yrs' },
      { name: 'Nuxt 3', level: 'Expert', years: '5+ yrs' },
      { name: 'Vue.js / Vue 3', level: 'Expert', years: '6+ yrs' },
      { name: 'NestJS', level: 'Advanced', years: '4+ yrs' },
      { name: 'Node.js', level: 'Advanced', years: '7+ yrs' },
      { name: 'Sencha ExtJS', level: 'Expert', years: '8+ yrs' },
      { name: 'Next.js', level: 'Advanced', years: '4+ yrs' },
      { name: 'Shopify / Liquid', level: 'Advanced', years: '3+ yrs' },
      { name: 'WordPress & Elementor', level: 'Proficient', years: '4+ yrs' }
    ]
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'NestJS', level: 'Advanced', years: '4+ yrs' },
      { name: 'TypeORM', level: 'Advanced', years: '4+ yrs' },
      { name: 'Node.js Express', level: 'Expert', years: '7+ yrs' },
      { name: 'MySQL', level: 'Expert', years: '8+ yrs' },
      { name: 'Ruby on Rails', level: 'Proficient', years: '3+ yrs' },
      { name: 'RESTful API Architecture', level: 'Expert', years: '10+ yrs' }
    ]
  },
  {
    category: 'Workflow & Cloud Infrastructure',
    skills: [
      { name: 'Temporal Workflow Orchestration', level: 'Advanced', years: '3+ yrs' },
      { name: 'AWS (EC2, S3, CloudFront)', level: 'Advanced', years: '5+ yrs' },
      { name: 'GitHub CI/CD Pipelines', level: 'Advanced', years: '6+ yrs' },
      { name: 'Railway & Vercel Deployments', level: 'Advanced', years: '4+ yrs' },
      { name: 'Cordova Mobile Packaging', level: 'Expert', years: '5+ yrs' }
    ]
  },
  {
    category: 'Authentication & Third-Party Integrations',
    skills: [
      { name: 'Auth0 Authentication', level: 'Expert', years: '5+ yrs' },
      { name: 'Keycloak SSO', level: 'Advanced', years: '3+ yrs' },
      { name: 'Twilio SMS & Communications', level: 'Advanced', years: '4+ yrs' },
      { name: 'HubSpot & Google Analytics', level: 'Proficient', years: '4+ yrs' },
      { name: 'JWT & Postman API Testing', level: 'Expert', years: '8+ yrs' }
    ]
  },
  {
    category: 'Methodology & Leadership',
    skills: [
      { name: 'Agile & Scrum Ceremony Facilitation', level: 'Expert', years: '8+ yrs' },
      { name: 'Sprint Planning & Backlog Grooming', level: 'Expert', years: '8+ yrs' },
      { name: 'Impediment Removal & Team Coaching', level: 'Expert', years: '8+ yrs' },
      { name: 'Cross-Functional Client Collaboration', level: 'Expert', years: '10+ yrs' },
      { name: 'Defect Triage & Production Support', level: 'Expert', years: '10+ yrs' }
    ]
  }
];
