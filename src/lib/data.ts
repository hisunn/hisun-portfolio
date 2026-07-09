import { Project, ExperienceEntry, SkillGroup } from '@/types/content'

/**
 * Fallback content served when the Spring Boot API is unreachable.
 * Once the backend is live, /api/projects overrides this list.
 * Replace the placeholder URLs before going live.
 */

export const projects: Project[] = [
    {
      slug: 'event-management-system',
      name: 'Event Management System',
      status: 'WIP',
      summary:
          'Full-stack app for building ATS-optimized resumes: live preview, keyword-match scoring, and export to DOCX/PDF via docx.js and Puppeteer.',
      stack: ['PHP', 'Tailwind CSS', 'BootStrap' , 'JQuery', 'Alpine JS', 'MYSQL'],
      demoUrl: '',
      repoUrl: 'https://github.com/hisunn/ProdigyStudio',
    },
    {
    slug: 'ats-resume-builder',
    name: 'ATS Resume Builder',
    status: 'WIP',
    summary:
      'Full-stack app for building ATS-optimized resumes: live preview, keyword-match scoring, and export to DOCX/PDF via docx.js and Puppeteer.',
    stack: ['React 18', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    demoUrl: 'https://resume-builder.ihsandzahri.com',
    repoUrl: 'https://github.com/your-github/resume-builder',
  },
  {
    slug: 'payment-gateway-simulator',
    name: 'Payment Gateway Simulator',
    status: 'WIP',
    summary:
      'ISO 8583 message parsing, transaction persistence, Redis idempotency keys, and Kafka-based async settlement — a compact model of a real acquiring host.',
    stack: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Redis', 'Kafka'],
    repoUrl: 'https://github.com/your-github/payment-gateway-simulator',
  },
  {
    slug: 'car-management-system',
    name: 'Car Management System',
    status: 'CASE STUDY',
    summary:
      'End-to-end system for reconditioned vehicle inventory, costing, pricing, and sales tracking, built for a dealership operations team.',
    stack: ['PHP', 'Laravel', 'MySQL'],
  },
  {
    slug: 'nlp-classification-api',
    name: 'NLP Name Classification API',
    status: 'CASE STUDY',
    summary:
      'Classification API that derives user attributes from names, removing hours of manual segmentation from digital marketing workflows.',
    stack: ['Python', 'Flask', 'AWS Lambda'],
  },
]

export const experience: ExperienceEntry[] = [
  {
    company: 'Soft Space',
    role: 'Software Engineer',
    period: 'May 2024 — Present',
    location: 'Kuala Lumpur · fintech payments',
    points: [
      'Implement ISO 8583 host integrations connecting external payment hosts to the internal gateway, enabling card acceptance across merchant terminals.',
      'Develop and maintain Spring Boot services and REST APIs powering payment authorization flows in production.',
      'Resolve production incidents through log analysis and root cause analysis, cutting recurring failure categories.',
    ],
  },
  {
    company: 'Digital Symphony',
    role: 'Junior Software Engineer',
    period: 'Apr 2023 — Apr 2024',
    location: 'Petaling Jaya · digital solutions',
    points: [
      'Built Go backend APIs integrating client microsites with internal and third-party CRM platforms.',
      'Delivered a Laravel-based car management system covering inventory, costing, and sales tracking.',
      'Deployed applications on AWS (EC2, Lambda, DynamoDB, S3, API Gateway), including serverless architectures.',
    ],
  },
]

export const skills: SkillGroup[] = [
  {
    field: 'F02',
    label: 'Languages',
    items: ['Java (8 / 17)', 'Go', 'TypeScript', 'PHP', 'Python', 'SQL'],
  },
  {
    field: 'F04',
    label: 'Backend',
    items: ['Spring Boot', 'ISO 8583', 'REST APIs', 'Laravel', 'Flask', 'Node.js'],
  },
  {
    field: 'F22',
    label: 'Data',
    items: ['MySQL / MariaDB', 'PostgreSQL', 'MongoDB', 'DynamoDB'],
  },
  {
    field: 'F48',
    label: 'Infra',
    items: ['AWS', 'Docker', 'Linux', 'Git', 'GitHub Actions'],
  },
]

export const links = {
  email: 'ihsandzahri@gmail.com',
  github: 'https://github.com/hisunn',
  linkedin: 'https://www.linkedin.com/in/ihsan-dzahri-7095361a5/',
  resume: '/Ihsan_Dzahri_Resume.pdf',
}
