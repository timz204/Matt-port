/** Non-translatable identity + structural data */

export const site = {
  name: "Jacob Venne Oliver",
  shortName: "Jacob",
  email: "jacob.v.oliver@outlook.com",
  phone: "+13129407341",
  phoneDisplay: "312-940-7341",
  linkedin: "https://www.linkedin.com/in/jvenne",
  resumeUrl: "/Resume.pdf",
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
    items: ["JavaScript", "TypeScript", "Node.js", "Java", "C++", "Linux"],
  },
  {
    id: "cloud",
    items: [
      "AWS",
      "EC2",
      "S3",
      "DynamoDB",
      "Serverless Framework",
      "CloudWatch",
    ],
  },
  {
    id: "devops",
    items: [
      "Jenkins",
      "GitLab CI/CD",
      "GitHub",
      "Git",
      "Docker",
      "CI/CD",
      "Build Automation",
      "Release Automation",
    ],
  },
  {
    id: "backend",
    items: ["REST APIs", "Serverless", "Node.js", "Java", "Agile/Scrum", "SDLC"],
  },
  {
    id: "databases",
    items: ["PostgreSQL", "Amazon DynamoDB"],
  },
  {
    id: "testing",
    items: [
      "Automated Testing",
      "Deployment Validation",
      "Security Scanning",
      "Vulnerability Assessments",
    ],
  },
] as const;

export const projectsMeta = [
  {
    id: "exomindset",
    company: "Stealth Startup",
    image: "/images/img1.png",
    technologies: ["AWS", "Jenkins", "GitLab", "Docker", "Node.js", "CloudWatch"],
  },
  {
    id: "command-link",
    company: "Bravado Health",
    image: "/images/img2.png",
    technologies: ["AWS", "Jenkins", "GitLab", "Docker", "HIPAA-aligned security"],
  },
  {
    id: "globant",
    company: "Bravado Health",
    image: "/images/img3.png",
    technologies: ["JavaScript", "TypeScript", "Node.js", "Java", "REST APIs"],
  },
  {
    id: "mahisoft",
    company: "ConnectWise",
    image: "/images/img4.png",
    technologies: ["AWS", "CI/CD", "Infrastructure Automation", "Linux"],
  },
  {
    id: "willdom",
    company: "MyMatrixx",
    image: "/images/img5.png",
    technologies: ["REST APIs", "Healthcare integrations", "PostgreSQL", "Node.js"],
  },
  {
    id: "wortise",
    company: "BST Global",
    image: "/images/img6.png",
    technologies: ["ERP", "JavaScript", "Project Management", "C++"],
  },
] as const;

export const experienceMeta = [
  {
    company: "Stealth Startup",
    period: "Feb 2023 – Present",
    highlights: ["AWS", "Jenkins", "GitLab", "Docker", "Node.js", "CloudWatch"],
  },
  {
    company: "Bravado Health",
    period: "Jan 2022 – Apr 2023",
    highlights: ["AWS", "Jenkins", "GitLab", "Docker", "Healthcare SaaS"],
  },
  {
    company: "Bravado Health",
    period: "Apr 2021 – Dec 2021",
    highlights: ["JavaScript", "TypeScript", "Node.js", "Java", "REST APIs"],
  },
  {
    company: "ConnectWise",
    period: "Jul 2019 – Apr 2021",
    highlights: ["AWS", "CI/CD", "Automation", "Linux", "SaaS"],
  },
  {
    company: "MyMatrixx",
    period: "Jan 2018 – Jun 2019",
    highlights: ["Healthcare", "REST APIs", "PBM", "PostgreSQL", "Integrations"],
  },
  {
    company: "BST Global",
    period: "Jun 2017 – Sep 2017",
    highlights: ["ERP", "JavaScript", "C++", "Project lifecycle"],
  },
] as const;

export const educationPeriod = "2013 – 2017";
