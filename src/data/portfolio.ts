/** Non-translatable identity + structural data */

export const site = {
  name: "Matias Perrone",
  shortName: "Matias",
  email: "matias.perrone3877@outlook.com",
  phone: "+5491155662732",
  phoneDisplay: "+54 911 5566 2732",
  linkedin: "https://www.linkedin.com/in/matiasperrone/",
  resumeUrl: "/Matias-Resume(English).pdf",
  resumePageUrl: "/resume",
} as const;

export const navHrefs = [
  { href: "#about", key: "about" as const },
  { href: "#skills", key: "skills" as const },
  { href: "#impact", key: "impact" as const },
  { href: "#projects", key: "projects" as const },
  { href: "#experience", key: "experience" as const },
  { href: "#contact", key: "contact" as const },
] as const;

export const skillCategories = [
  {
    id: "languages",
    items: ["JavaScript", "TypeScript", "Python", "PHP", "SQL", "HTML", "CSS"],
  },
  {
    id: "frontend",
    items: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Gatsby",
      "Tailwind CSS",
      "Bootstrap",
      "Shopify",
      "Liquid",
    ],
  },
  {
    id: "backend",
    items: ["Laravel", "Django", "Express.js", "NestJS", "FastAPI", "Flask"],
  },
  {
    id: "cloud",
    items: [
      "AWS EC2",
      "AWS S3",
      "AWS RDS",
      "AWS Lambda",
      "Docker",
      "Kubernetes",
      "Nginx",
      "CI/CD",
      "GitHub Actions",
      "OpenAPI",
      "OpenTelemetry",
    ],
  },
  {
    id: "databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "MongoDB",
      "SQL Server",
      "Oracle",
      "Redis",
      "Prisma",
      "SQLAlchemy",
    ],
  },
  {
    id: "testing",
    items: [
      "Jest",
      "Vitest",
      "React Testing Library",
      "PyTest",
      "PHPUnit",
      "Cypress",
      "Playwright",
    ],
  },
] as const;

export const projectsMeta = [
  {
    id: "exomindset",
    company: "Exomindset",
    image: "/projects/exomindset.png",
    technologies: [
      "React.js",
      "Gatsby",
      "Laravel",
      "Django",
      "Docker",
      "OpenAPI",
      "OpenTelemetry",
    ],
  },
  {
    id: "command-link",
    company: "Command Link",
    image: "/projects/command-link.png",
    technologies: [
      "React.js",
      "TypeScript",
      "Laravel",
      "Yii",
      "Docker",
      "Azure",
      "SQL Server",
    ],
  },
  {
    id: "globant",
    company: "Globant",
    image: "/projects/globant.png",
    technologies: ["React.js", "Shopify", "Liquid", "Docker", "AWS", "MySQL"],
  },
  {
    id: "mahisoft",
    company: "Mahisoft",
    image: "/projects/mahisoft.png",
    technologies: [
      "Node.js",
      "NestJS",
      "Express.js",
      "React.js",
      "TypeScript",
      "Docker",
    ],
  },
  {
    id: "willdom",
    company: "Willdom",
    image: "/projects/willdom.png",
    technologies: ["Vue.js", "Laravel", "MySQL", "MongoDB", "Zoho CRM"],
  },
  {
    id: "wortise",
    company: "Wortise",
    image: "/projects/wortise.png",
    technologies: [
      "Node.js",
      "Vue.js",
      "PHP",
      "Laravel",
      "MongoDB",
      "PostgreSQL",
    ],
  },
] as const;

export const experienceMeta = [
  {
    company: "Exomindset",
    period: "Aug 2025 – Jun 2026",
    highlights: ["Gatsby", "Laravel", "Django", "OpenAPI", "OpenTelemetry"],
  },
  {
    company: "Command Link",
    period: "May 2024 – May 2025",
    highlights: ["React", "Laravel", "Azure", "SQL Server", "Docker"],
  },
  {
    company: "Globant",
    period: "Mar 2023 – May 2024",
    highlights: ["Shopify", "React", "AWS", "Liquid", "MySQL"],
  },
  {
    company: "Mahisoft",
    period: "Nov 2021 – Jan 2023",
    highlights: ["NestJS", "Node.js", "React", "TypeScript", "Docker"],
  },
  {
    company: "Willdom",
    period: "Mar 2021 – Nov 2021",
    highlights: ["Vue.js", "Laravel", "MySQL", "MongoDB", "Zoho CRM"],
  },
  {
    company: "Wortise",
    period: "May 2018 – Jan 2021",
    highlights: ["Node.js", "Vue.js", "PHP", "MongoDB", "PostgreSQL"],
  },
] as const;

export const educationPeriod = "1997 – 2005";
