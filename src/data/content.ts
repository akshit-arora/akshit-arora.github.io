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
    problem: string;
    solution: string;
    impact: string;
    technologies: string[];
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

export interface Service {
    title: string;
    description: string;
    icon: string;
    technologies: string[];
}

export interface ProcessStep {
    title: string;
    description: string;
    icon: string;
}

// Content
export const siteConfig = {
    name: 'Akshit Arora',
    title: 'Technical Lead & System Architect',
    headline: 'Building Scalable Digital Products for Startups & Enterprise',
    subheadline: 'Technical Lead specializing in Mobile, Desktop, and Web solutions. 12+ years crafting high-performance systems that handle 100k+ daily transactions.',
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

export const services: Service[] = [
    {
        title: 'MVP Development',
        description: 'Helping startups go from 0 to 1 quickly. Rapid prototyping and iterative development to validate your ideas and get to market fast.',
        icon: '🚀',
        technologies: ['Laravel', 'React', 'PostgreSQL', 'AWS'],
    },
    {
        title: 'Full-Stack Engineering',
        description: 'Scalable architecture built on battle-tested technologies. From database design to API development to frontend implementation.',
        icon: '⚙️',
        technologies: ['PHP/Laravel', 'Rust', 'Node.js', 'React', 'Vue.js'],
    },
    {
        title: 'AI Integration',
        description: 'Practical AI solutions that add real business value. From intelligent automation to LLM-powered features that enhance user experience.',
        icon: '🤖',
        technologies: ['OpenAI', 'LangChain', 'Python', 'RAG'],
    },
];

export const processSteps: ProcessStep[] = [
    {
        title: 'Discovery',
        description: 'Understanding your business goals, user needs, and technical requirements.',
        icon: '🔍',
    },
    {
        title: 'Design',
        description: 'Architecting scalable solutions with clear technical specifications.',
        icon: '📐',
    },
    {
        title: 'Rapid Development',
        description: 'AI-augmented workflows for faster iteration and delivery.',
        icon: '⚡',
    },
    {
        title: 'Deployment',
        description: 'CI/CD pipelines, monitoring, and production-ready infrastructure.',
        icon: '🚀',
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
        title: 'QuestioCare',
        problem: 'Healthcare providers lacked tools to assess student mental, physical, and emotional health efficiently, missing critical warning signs.',
        solution: 'Built a comprehensive questionnaire system with customizable assessments, real-time feedback, and automated urgent notifications for critical issues like suicidal tendencies and bullying.',
        impact: 'Enabled early intervention for at-risk students, reducing response time to critical issues by 70%',
        technologies: ['Laravel', 'MySQL', 'JavaScript', 'jQuery', 'GitHub Actions'],
    },
    {
        title: 'Multichannel E-commerce System',
        problem: 'Sellers struggled to manage inventory and pricing across 30+ marketplaces, leading to overselling and pricing inconsistencies.',
        solution: 'Architected a unified platform with automatic price adjustments based on supply-demand, centralized inventory management, and real-time sync across all channels.',
        impact: 'Processing 10,000+ orders and 100,000+ inventory transactions daily with 99.9% accuracy',
        technologies: ['Laravel', 'CodeIgniter', 'MySQL', 'AWS Lambda', 'EC2', 'Redis'],
    },
    {
        title: 'Volga Billing System',
        problem: 'SME factory needed fast invoice generation with custom pricing per customer but existing solutions were too slow and inflexible.',
        solution: 'Developed a LAN-based billing system with customer-specific pricing rules and automated PDF bill generation on company letterheads.',
        impact: 'Reduced invoice generation time by 80%, eliminating manual pricing errors',
        technologies: ['Laravel', 'Vue.js', 'MySQL'],
    },
    {
        title: 'ConsultOn',
        problem: 'Users seeking expert advice on health, finances, and relationships had no unified platform to connect with verified professionals.',
        solution: 'Created an online consultation platform with Q&A forums, expert verification, and integrated scheduling with IVR-based call booking.',
        impact: 'Connected 5,000+ users with verified experts across multiple domains',
        technologies: ['CodeIgniter', 'Slim Framework', 'IVR Setup', 'MySQL'],
    },
    {
        title: 'Fleet Management System',
        problem: 'EY LLP India needed to efficiently manage cab bookings for guests and employees while tracking usage and contractor payments.',
        solution: 'Built a scheduling system with vehicle type selection, automated billing based on fleet usage, and real-time vehicle tracking via Google Maps.',
        impact: 'Streamlined fleet operations, reducing booking time by 60% and improving billing accuracy',
        technologies: ['CodeIgniter', 'Slim Framework', 'JavaScript', 'Google Maps API'],
    },
];

export const techStack: TechCategory[] = [
    {
        name: 'Backend',
        icon: '⚙️',
        technologies: ['Laravel', 'PHP', 'Node.js', 'Rust', 'Python'],
    },
    {
        name: 'Infrastructure',
        icon: '☁️',
        technologies: ['AWS Lambda', 'EC2', 'Redis', 'CI/CD', 'Docker'],
    },
    {
        name: 'Frontend',
        icon: '🎨',
        technologies: ['JavaScript', 'Vue.js', 'React', 'TypeScript', 'Tailwind CSS'],
    },
];
