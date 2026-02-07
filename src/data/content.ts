// Portfolio content data with type safety
export interface Experience {
    company: string;
    location: string;
    role: string;
    period: string;
    highlights: string[];
    tags: string[];
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    impact: string;
}

export interface TechCategory {
    name: string;
    icon: string;
    technologies: string[];
}

export interface Stat {
    label: string;
    value: string;
    icon: string;
    description: string;
}

// Content
export const siteConfig = {
    name: 'Akshit Arora',
    title: 'Technical Lead & System Architect',
    headline: 'Akshit Arora | Technical Lead & System Architect',
    subheadline: '12+ years experience building 10x faster applications and scaling microservices for 100k+ daily transactions',
    description: 'Technical Lead and System Architect with 12+ years of experience in PHP, Laravel, and cloud-native solutions. Expert in system design, performance optimization, and leading high-performing engineering teams.',
    email: 'hello@akshitarora.dev',
    social: {
        twitter: 'https://twitter.com/akshitarora0907',
        github: 'https://github.com/akshit-arora/',
        linkedin: 'https://linkedin.com/in/akshitaroradev',
    },
    image: '/assets/image/home-img.jpg',
    siteUrl: 'https://www.akshitarora.dev',
    gaId: 'G-8DKQPTB9FB',
} as const;

export const stats: Stat[] = [
    {
        label: 'Years Exp',
        value: '12+',
        icon: '📅',
        description: 'Professional experience in software engineering',
    },
    {
        label: 'Daily Txns',
        value: '100k+',
        icon: '⚡',
        description: 'Handling high-volume transaction systems',
    },
    {
        label: 'Performance Gains',
        value: '10x',
        icon: '🚀',
        description: 'Application speed improvements delivered',
    },
    {
        label: 'Team Leadership',
        value: '20+',
        icon: '👥',
        description: 'Engineers mentored and led',
    },
];

export const experiences: Experience[] = [
    {
        company: 'Growexx',
        location: 'Ahmedabad',
        role: 'Technical Lead',
        period: 'August 2025 - Present',
        highlights: [
            'Lead system architecture for enterprise-grade applications',
            'Designed microservices handling 100k+ daily transactions',
            'Implemented CI/CD pipelines reducing deployment time by 80%',
            'Mentored team of 8+ engineers on clean coding practices',
        ],
        tags: ['System Design', 'Architecture', 'Team Leadership'],
    },
    {
        company: 'Scopely',
        location: 'Bengaluru',
        role: 'Senior Software Engineer',
        period: 'January 2025 - August 2025',
        highlights: [
            'Built scalable backend systems for gaming platforms',
            'Optimized database queries achieving 10x performance gains',
            'Implemented event-driven architecture using AWS services',
            'Championed clean code principles and code review standards',
        ],
        tags: ['Clean Coding', 'Scalable Systems', 'AWS'],
    },
    {
        company: 'Eastern Enterprise LLP',
        location: 'Remote',
        role: 'Senior Software Engineer - Project Lead',
        period: 'August 2022 - December 2024',
        highlights: [
            'Led development of enterprise web applications',
            'Architected scalable solutions for high-traffic systems',
            'Managed cross-functional teams and project deliverables',
            'Implemented best practices for code quality and testing',
        ],
        tags: ['Project Leadership', 'Enterprise Solutions', 'Team Management'],
    },
    {
        company: 'TOPS Infosolutions Pvt. Ltd.',
        location: 'Ahmedabad',
        role: 'Senior Software Engineer - Project Lead',
        period: 'March 2018 - August 2022',
        highlights: [
            'Delivered multiple client projects using Laravel and PHP',
            'Built e-commerce solutions handling thousands of daily orders',
            'Optimized application performance and database efficiency',
            'Trained junior developers on development best practices',
        ],
        tags: ['Laravel', 'E-commerce', 'Performance Optimization'],
    },
    {
        company: 'W3Coding Labs',
        location: 'New Delhi',
        role: 'Project Manager',
        period: 'December 2016 - August 2017',
        highlights: [
            'Managed end-to-end project delivery for web applications',
            'Coordinated with clients to gather requirements and deliver solutions',
            'Led team of developers ensuring timely project completion',
            'Implemented agile methodologies improving delivery speed',
        ],
        tags: ['Project Management', 'Client Relations', 'Agile'],
    },
    {
        company: 'Innovative Jumbo',
        location: 'Punjab / New Delhi',
        role: 'Freelance IT Consultant',
        period: 'September 2012 - November 2016',
        highlights: [
            'Provided IT consulting for small and medium businesses',
            'Developed custom web applications and WordPress sites',
            'Managed client relationships and project requirements',
            'Delivered solutions for diverse industry verticals',
        ],
        tags: ['Consulting', 'Web Development', 'WordPress'],
    },
];

export const projects: Project[] = [
    {
        title: 'E-commerce Platform',
        description: 'Unified platform managing 30+ global marketplaces with real-time inventory sync, order management, and analytics.',
        technologies: ['AWS Lambda', 'Node.js', 'Redis', 'PostgreSQL'],
        impact: '30+ Global Marketplaces',
    },
    {
        title: 'QuestioCare',
        description: 'Real-time mental health diagnostic platform with intelligent questionnaire routing and analytics dashboard.',
        technologies: ['Laravel', 'MySQL', 'Vue.js', 'Redis'],
        impact: 'Real-time Diagnostics',
    },
    {
        title: 'Fleet Management System',
        description: 'Enterprise fleet management solution with live vehicle tracking, route optimization, and fuel analytics.',
        technologies: ['Google Maps API', 'Laravel', 'WebSockets'],
        impact: 'Built for EY LLP',
    },
];

export const techStack: TechCategory[] = [
    {
        name: 'Backend',
        icon: '⚙️',
        technologies: ['Laravel', 'Node.js', 'PHP', 'Python'],
    },
    {
        name: 'Infrastructure',
        icon: '☁️',
        technologies: ['AWS Lambda', 'EC2', 'Redis', 'CI/CD', 'Docker'],
    },
    {
        name: 'Frontend',
        icon: '🎨',
        technologies: ['JavaScript', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    },
];
