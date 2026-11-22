import type { Messages } from "./types";

export const en: Messages = {
  nav: {
    about: "About",
    skills: "Skills",
    impact: "Impact",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },
  common: {
    contact: "Contact",
    downloadResume: "Download resume",
    linkedin: "LinkedIn",
    scroll: "Scroll",
    outcomes: "Outcomes",
    education: "Education",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    language: "Language",
    viewDetails: "View details",
    close: "Close",
    problem: "Problem",
    challenge: "Challenge",
    solution: "Solution",
    role: "Role",
    architecture: "Architecture",
    stack: "Tech stack",
  },
  site: {
    role: "Senior DevOps Engineer",
    headline: "Reliable infrastructure. Faster releases. Secure delivery.",
    subheadline:
      "10+ years of progressive software engineering and DevOps leadership, with deep AWS, CI/CD, Docker, Linux, and cloud-native application experience.",
    positioning:
      "I design scalable AWS infrastructure, automate deployment workflows, and strengthen platform reliability — combining software engineering expertise with operational excellence.",
    location: "Tampa, Florida",
    remoteTag: "Tampa → the world · Remote",
  },
  highlights: [
    "10+ years in software engineering",
    "AWS cloud infrastructure",
    "CI/CD automation",
    "Docker & Linux",
    "Platform reliability",
  ],
  hero: {
    viewProjects: "View experience",
  },
  about: {
    eyebrow: "About",
    title: "Engineering delivery systems people can trust",
    lead: "Senior DevOps and software engineer focused on scalable infrastructure, repeatable releases, and resilient production platforms.",
    paragraphs: [
      "My career progresses from software engineering to lead DevOps roles across SaaS, FinTech, healthcare, and managed services. I bring strong application development expertise together with AWS infrastructure, CI/CD, and containerization.",
      "I build secure, automated delivery pipelines with Jenkins and GitLab, improve cloud reliability with Docker and Amazon CloudWatch, and optimize AWS resources for performance and cost.",
      "I am especially effective in regulated or high-availability environments where software quality, infrastructure automation, incident response, and cross-team collaboration all matter.",
    ],
    basedIn: "Based in {location}. Open to senior DevOps and engineering opportunities.",
    focus: [
      {
        icon: "cloud",
        label: "AWS infrastructure",
        detail: "EC2, S3, DynamoDB, Serverless, and cost-conscious resource management",
      },
      {
        icon: "api",
        label: "DevOps delivery",
        detail: "Jenkins and GitLab CI/CD with automated validation and rollback controls",
      },
      {
        icon: "platforms",
        label: "Cloud-native systems",
        detail: "Dockerized services, Linux operations, monitoring, and resilient deployments",
      },
      {
        icon: "speed",
        label: "Reliability & performance",
        detail: "Centralized observability and faster incident detection and resolution",
      },
    ],
  },
  skills: {
    eyebrow: "Technical Skills",
    title: "A delivery stack built for production",
    description:
      "Cloud, DevOps, backend, data, and software engineering tools used across regulated SaaS and healthcare environments.",
    categories: {
      languages: {
        title: "Languages",
        description: "Programming and systems foundations.",
      },
      cloud: {
        title: "Cloud",
        description: "AWS infrastructure and serverless delivery.",
      },
      devops: {
        title: "DevOps",
        description: "Continuous integration, delivery, containers, and release automation.",
      },
      backend: {
        title: "Backend & Practices",
        description: "APIs, serverless services, and established delivery practices.",
      },
      databases: {
        title: "Databases",
        description: "Relational and cloud-native data platforms.",
      },
      testing: {
        title: "Quality & Security",
        description: "Automated validation, security scanning, and deployment controls.",
      },
    },
  },
  impact: {
    eyebrow: "Impact",
    title: "Measurable delivery improvements",
    description:
      "Results across deployment speed, environment stability, infrastructure cost, security, and incident response.",
    stats: [
      { value: "10+", label: "Years of progressive engineering experience" },
      { value: "45%", label: "Deployment time reduction in SaaS and FinTech delivery" },
      { value: "30%", label: "Fewer environment and deployment failures" },
      { value: "40%", label: "Lower mean time to resolution for infrastructure incidents" },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Selected delivery highlights",
    description:
      "Platform migrations, performance rebuilds, and marketplace systems shipped for US and global teams.",
    items: {
      exomindset: {
        name: "AWS SaaS & FinTech Delivery",
        summary:
          "Engineered AWS infrastructure and automated CI/CD delivery for SaaS, FinTech, and healthcare applications.",
        role: "DevOps Infrastructure Engineer",
        period: "Feb 2023 – Present · Remote",
        problem:
          "Cloud-native applications needed scalable infrastructure, repeatable releases, and stronger production reliability.",
        challenge:
          "Improve deployment consistency and security while supporting SaaS, AI-enabled, and regulated application workloads.",
        solution:
          "Built AWS infrastructure with EC2, S3, DynamoDB, and Serverless Framework; optimized Jenkins and GitLab CI/CD; containerized services with Docker; and centralized monitoring in CloudWatch.",
        architecture: [
          "AWS EC2, S3, and DynamoDB",
          "Jenkins and GitLab CI/CD",
          "Dockerized backend applications",
          "CloudWatch monitoring and logging",
          "Automated security scanning",
        ],
        impact: [
          "Reduced deployment time by 45%",
          "Reduced environment-related failures by 30%",
          "Reduced infrastructure operating costs by 25%",
        ],
      },
      "command-link": {
        name: "Healthcare Cloud Reliability",
        summary:
          "Led AWS infrastructure and CI/CD initiatives for healthcare SaaS, clinical applications, and digital health services.",
        role: "Lead DevOps Engineer",
        period: "Jan 2022 – Apr 2023 · Tampa, FL",
        problem:
          "Healthcare platforms required reliable infrastructure, faster releases, stronger security, and resilient clinical operations.",
        challenge:
          "Standardize delivery across environments while supporting HIPAA-aligned safeguards and healthcare application availability.",
        solution:
          "Designed optimized Jenkins and GitLab pipelines, Dockerized backend services, automated provisioning, strengthened AWS controls, and established disaster recovery validation.",
        architecture: [
          "AWS healthcare infrastructure",
          "Jenkins and GitLab CI/CD",
          "Docker containerized services",
          "Automated provisioning",
          "Backup and recovery procedures",
        ],
        impact: [
          "Reduced deployment time by 40%",
          "Reduced deployment failures by 30%",
          "Reduced MTTR by 35%",
        ],
      },
      globant: {
        name: "Healthcare Application Engineering",
        summary:
          "Developed and enhanced digital health applications, REST APIs, and secure clinical workflows.",
        role: "Senior Software Engineer",
        period: "Apr 2021 – Dec 2021 · Tampa, FL",
        problem:
          "Healthcare teams needed reliable applications for clinical workflows, EHR integrations, and patient management.",
        challenge:
          "Improve API and application performance while protecting sensitive patient information and supporting Agile delivery.",
        solution:
          "Built JavaScript, TypeScript, Node.js, and Java services; optimized REST APIs and EHR integrations; and implemented secure authentication and role-based access controls.",
        architecture: [
          "JavaScript and TypeScript applications",
          "Node.js and Java REST APIs",
          "EHR integration workflows",
          "Role-based access controls",
          "Automated testing and code review",
        ],
        impact: [
          "Improved clinical data processing efficiency by 35%",
          "Improved application response times by 25%",
          "Strengthened healthcare software quality",
        ],
      },
      mahisoft: {
        name: "Managed Service Platform Delivery",
        summary:
          "Engineered cloud infrastructure and CI/CD automation for SaaS-based IT management and remote monitoring platforms.",
        role: "DevOps Engineer",
        period: "Jul 2019 – Apr 2021 · Tampa, FL",
        problem:
          "Enterprise IT management applications required consistent deployments and reliable production infrastructure.",
        challenge:
          "Automate build, test, deployment, and environment configuration across development, staging, and production.",
        solution:
          "Designed scalable infrastructure, optimized CI/CD pipelines, and automated provisioning and configuration management workflows.",
        architecture: [
          "Scalable SaaS infrastructure",
          "Automated build and test pipelines",
          "Deployment automation",
          "Environment configuration",
          "Linux production operations",
        ],
        impact: [
          "Improved release efficiency",
          "Reduced manual deployment overhead",
          "Improved operational consistency",
        ],
      },
      willdom: {
        name: "Pharmacy Benefit Integration",
        summary:
          "Built enterprise healthcare software and REST APIs for pharmacy benefit management and workers' compensation workflows.",
        role: "Software Engineer",
        period: "Jan 2018 – Jun 2019 · Tampa, FL",
        problem:
          "Prescription processing and pharmacy claims required dependable integrations across PBM, provider, and claims systems.",
        challenge:
          "Enable seamless healthcare data exchange while streamlining claims adjudication and medication management workflows.",
        solution:
          "Engineered backend services and scalable REST APIs that connected pharmacy benefit platforms with provider systems and workers' compensation applications.",
        architecture: [
          "Enterprise PBM applications",
          "REST API integration layer",
          "Provider system interfaces",
          "Claims adjudication workflows",
          "PostgreSQL data services",
        ],
        impact: [
          "Streamlined prescription processing",
          "Improved claims interoperability",
          "Improved application reliability",
        ],
      },
      wortise: {
        name: "ERP Platform Optimization",
        summary:
          "Enhanced enterprise resource planning software for project, financial, and resource operations.",
        role: "Software Engineer",
        period: "Jun 2017 – Sep 2017 · Tampa, FL",
        problem:
          "Architecture, engineering, and consulting teams needed better visibility and control across project-based operations.",
        challenge:
          "Improve project lifecycle management, budget tracking, resource allocation, and operational performance.",
        solution:
          "Engineered and optimized ERP application components supporting project management, financial operations, and resource planning.",
        architecture: [
          "ERP application components",
          "Project lifecycle management",
          "Budget and financial workflows",
          "Resource allocation features",
          "Operational reporting",
        ],
        impact: [
          "Enhanced operational efficiency",
          "Improved project tracking",
          "Streamlined project-based workflows",
        ],
      },
    },
  },
  experience: {
    eyebrow: "Experience",
    title: "Career timeline",
    description:
      "Progressive experience across cloud infrastructure, DevOps leadership, healthcare software, and enterprise SaaS.",
    jobs: [
      {
        title: "DevOps Infrastructure Engineer",
        place: "Stealth Startup · Remote",
        points: [
          "Engineered AWS infrastructure with EC2, S3, DynamoDB, and Serverless Framework.",
          "Optimized Jenkins and GitLab CI/CD, improving deployment speed by 45%.",
          "Containerized backend applications with Docker, reducing deployment failures by 30%.",
          "Integrated security scanning and centralized CloudWatch monitoring.",
          "Reduced cloud operating costs by 25% while maintaining performance.",
        ],
      },
      {
        title: "Lead DevOps Engineer",
        place: "Bravado Health · Tampa, FL",
        points: [
          "Led AWS infrastructure initiatives for healthcare SaaS and clinical applications.",
          "Designed Jenkins and GitLab pipelines, reducing deployment time by 40%.",
          "Strengthened cloud security and HIPAA-aligned safeguards for protected health information.",
          "Automated provisioning and established backup, disaster recovery, and deployment validation.",
          "Reduced MTTR by 35% through improved monitoring and incident response.",
        ],
      },
      {
        title: "Senior Software Engineer",
        place: "Bravado Health · Tampa, FL",
        points: [
          "Built healthcare applications with JavaScript, TypeScript, and Node.js.",
          "Improved clinical data processing efficiency by 35% with optimized REST APIs.",
          "Improved application response times by 25% across EHR and patient workflows.",
          "Implemented secure authentication and role-based access controls.",
        ],
      },
      {
        title: "DevOps Engineer",
        place: "ConnectWise · Tampa, FL",
        points: [
          "Maintained cloud infrastructure for SaaS IT management and remote monitoring platforms.",
          "Automated build, testing, deployment, and environment configuration workflows.",
          "Improved operational consistency across development, staging, and production.",
        ],
      },
      {
        title: "Software Engineer",
        place: "MyMatrixx · Tampa, FL",
        points: [
          "Enhanced enterprise pharmacy benefit management software.",
          "Built REST APIs connecting PBM platforms with provider and claims applications.",
          "Improved prescription processing and healthcare claims interoperability.",
        ],
      },
      {
        title: "Software Engineer",
        place: "BST Global · Tampa, FL",
        points: [
          "Engineered ERP software for project management and financial operations.",
          "Enhanced project lifecycle, budget tracking, and resource allocation components.",
        ],
      },
    ],
    educationDegree: "Master of Science, Computer Science (2016–2017) · Bachelor of Science, Computer Science (2013–2016)",
    educationSchool: "University of South Florida",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your next build",
    description:
      "Pick the channel that fits you — or leave a short note and I'll reply by email. Based in {location}, open to remote worldwide.",
    channels: {
      email: { label: "Email", hint: "Best for detailed project briefs" },
      phone: { label: "Phone", hint: "Quick calls across time zones" },
      linkedin: { label: "LinkedIn", hint: "Connect or send a message" },
      resume: {
        label: "Resume",
        value: "Download PDF",
        hint: "Full experience & skills",
      },
    },
    formTitle: "Send a quick message",
    formHint: "Opens your email app with everything filled in — no account needed.",
    nameLabel: "Your name",
    namePlaceholder: "Alex Rivera",
    emailLabel: "Your email",
    emailPlaceholder: "you@company.com",
    messageLabel: "Message",
    messagePlaceholder:
      "What are you building? Timeline, stack, or role — whatever helps.",
    formAside: "Prefer a direct ping? Use email or LinkedIn on the left.",
    submit: "Open in email",
    subjectFallback: "Hello Jacob",
    subjectFrom: "Hello from {name}",
    noMessage: "(No message yet)",
  },
  footer: {
    crafted: "Designed & engineered by",
  },
  loader: {
    boot: "Portfolio boot sequence",
    lines: [
      "Initializing architecture…",
      "Hydrating cloud services…",
      "Syncing API gateways…",
      "Igniting frontend…",
    ],
    tagline: "Ignite · Build · Scale",
  },
};
