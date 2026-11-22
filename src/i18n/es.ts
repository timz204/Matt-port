import type { Messages } from "./types";

export const es: Messages = {
  nav: {
    about: "Sobre mí",
    skills: "Habilidades",
    impact: "Impacto",
    projects: "Proyectos",
    experience: "Experiencia",
    contact: "Contacto",
  },
  common: {
    contact: "Contacto",
    downloadResume: "Descargar CV",
    linkedin: "LinkedIn",
    scroll: "Scroll",
    outcomes: "Resultados",
    education: "Educación",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchToLight: "Cambiar a modo claro",
    switchToDark: "Cambiar a modo oscuro",
    language: "Idioma",
    viewDetails: "Ver detalles",
    close: "Cerrar",
    problem: "Problema",
    challenge: "Desafío",
    solution: "Solución",
    role: "Rol",
    architecture: "Arquitectura",
    stack: "Stack tecnológico",
  },
  site: {
    role: "Ingeniero DevOps Senior",
    headline: "Infraestructura confiable. Releases rápidos. Entrega segura.",
    subheadline:
      "Más de 10 años de experiencia progresiva en ingeniería de software y liderazgo DevOps, con especialidad en AWS, CI/CD, Docker, Linux y aplicaciones cloud-native.",
    positioning:
      "Diseño infraestructura AWS escalable, automatizo despliegues y fortalecí la confiabilidad de plataformas — combinando experiencia en desarrollo de software y excelencia operativa.",
    location: "Tampa, Florida",
    remoteTag: "Tampa → el mundo · Remoto",
  },
  highlights: [
    "10+ años en ingeniería de software",
    "Infraestructura cloud AWS",
    "Automatización CI/CD",
    "Docker y Linux",
    "Confiabilidad de plataformas",
  ],
  hero: {
    viewProjects: "Ver experiencia",
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Sistemas de entrega en los que se puede confiar",
    lead: "Ingeniero senior de DevOps y software enfocado en infraestructura escalable, releases repetibles y plataformas resilientes.",
    paragraphs: [
      "Mi carrera progresó desde la ingeniería de software hacia roles senior de DevOps en SaaS, FinTech, salud y servicios gestionados. Combino experiencia en desarrollo de aplicaciones con infraestructura AWS, CI/CD y containerización.",
      "Construyo pipelines de entrega seguros y automatizados con Jenkins y GitLab, mejoro la confiabilidad cloud con Docker y Amazon CloudWatch, y optimizo recursos AWS por rendimiento y costo.",
      "Soy especialmente efectivo en entornos regulados o de alta disponibilidad donde importan la calidad del software, la automatización, la respuesta a incidentes y la colaboración entre equipos.",
    ],
    basedIn: "Basado en {location}. Disponible para roles senior de DevOps e ingeniería.",
    focus: [
      {
        icon: "cloud",
        label: "Infraestructura AWS",
        detail: "EC2, S3, DynamoDB, Serverless y gestión eficiente de recursos",
      },
      {
        icon: "api",
        label: "Entrega DevOps",
        detail: "Jenkins y GitLab CI/CD con validación automatizada y rollback",
      },
      {
        icon: "platforms",
        label: "Sistemas cloud-native",
        detail: "Servicios Docker, operaciones Linux, monitoreo y despliegues resilientes",
      },
      {
        icon: "speed",
        label: "Confiabilidad y rendimiento",
        detail: "Observabilidad centralizada y resolución más rápida de incidentes",
      },
    ],
  },
  skills: {
    eyebrow: "Habilidades técnicas",
    title: "Un stack de entrega preparado para producción",
    description:
      "Herramientas cloud, DevOps, backend, datos y ingeniería utilizadas en SaaS regulado y entornos de salud.",
    categories: {
      languages: {
        title: "Lenguajes",
        description: "Fundamentos de programación y sistemas.",
      },
      cloud: {
        title: "Cloud",
        description: "Infraestructura AWS y entrega serverless.",
      },
      devops: {
        title: "DevOps",
        description: "Integración continua, contenedores y automatización de releases.",
      },
      backend: {
        title: "Backend y prácticas",
        description: "APIs, servicios serverless y prácticas de entrega establecidas.",
      },
      databases: {
        title: "Bases de datos",
        description: "Plataformas relacionales y datos cloud-native.",
      },
      testing: {
        title: "Calidad y seguridad",
        description: "Validación automatizada, escaneo de seguridad y controles de despliegue.",
      },
    },
  },
  impact: {
    eyebrow: "Impacto",
    title: "Mejoras medibles en entrega",
    description:
      "Resultados en velocidad de despliegue, estabilidad, costo de infraestructura, seguridad y respuesta a incidentes.",
    stats: [
      { value: "10+", label: "Años de experiencia progresiva en ingeniería" },
      { value: "45%", label: "Menos tiempo de despliegue en SaaS y FinTech" },
      { value: "30%", label: "Menos fallos de entorno y despliegue" },
      { value: "40%", label: "Menor tiempo medio de resolución" },
    ],
  },
  projects: {
    eyebrow: "Proyectos",
    title: "Entregas destacadas",
    description:
      "Migraciones de plataformas, rebuilds de rendimiento y marketplaces para equipos de EE.UU. y globales.",
    items: {
      exomindset: {
        name: "Entrega AWS para SaaS y FinTech",
        summary:
          "Diseñé infraestructura AWS y automatización CI/CD para aplicaciones SaaS, FinTech y salud.",
        role: "Ingeniero DevOps de infraestructura",
        period: "Feb 2023 – Presente · Remoto",
        problem:
          "Las aplicaciones cloud-native necesitaban infraestructura escalable, releases repetibles y mayor confiabilidad en producción.",
        challenge:
          "Mejorar consistencia y seguridad de despliegues mientras se soportaban cargas SaaS, IA y entornos regulados.",
        solution:
          "Implementé infraestructura con EC2, S3, DynamoDB y Serverless Framework; optimicé Jenkins y GitLab; containericé servicios con Docker y centralicé monitoreo en CloudWatch.",
        architecture: ["AWS EC2, S3 y DynamoDB", "Jenkins y GitLab CI/CD", "Servicios Docker", "Monitoreo CloudWatch", "Escaneo de seguridad"],
        impact: ["Reduje el tiempo de despliegue 45%", "Reduje fallos de entorno 30%", "Reduje costos AWS 25%"],
      },
      "command-link": {
        name: "Confiabilidad cloud de salud",
        summary:
          "Lideré infraestructura AWS e iniciativas CI/CD para SaaS de salud, aplicaciones clínicas y servicios digitales.",
        role: "Lead DevOps Engineer",
        period: "Ene 2022 – Abr 2023 · Tampa, FL",
        problem:
          "Las plataformas de salud requerían infraestructura confiable, releases rápidos, seguridad y operación clínica resiliente.",
        challenge:
          "Estandarizar entregas entre entornos con controles alineados a HIPAA y alta disponibilidad.",
        solution:
          "Diseñé pipelines Jenkins y GitLab, containericé servicios, automatizé provisioning, fortalecí controles AWS y establecí validación de recuperación ante desastres.",
        architecture: ["Infraestructura AWS de salud", "Jenkins y GitLab", "Servicios Docker", "Provisioning automatizado", "Backup y recovery"],
        impact: ["Reduje el despliegue 40%", "Reduje fallos 30%", "Reduje MTTR 35%"],
      },
      globant: {
        name: "Ingeniería de aplicaciones de salud",
        summary:
          "Desarrollé aplicaciones digitales de salud, APIs REST y workflows clínicos seguros.",
        role: "Senior Software Engineer",
        period: "Abr 2021 – Dic 2021 · Tampa, FL",
        problem:
          "Los equipos de salud necesitaban aplicaciones confiables para workflows clínicos, integraciones EHR y gestión de pacientes.",
        challenge:
          "Mejorar el rendimiento de APIs y aplicaciones protegiendo datos sensibles y manteniendo entrega Agile.",
        solution:
          "Construí servicios JavaScript, TypeScript, Node.js y Java; optimicé APIs REST e integraciones EHR; e implementé autenticación segura y controles por roles.",
        architecture: ["Aplicaciones JavaScript y TypeScript", "APIs Node.js y Java", "Integraciones EHR", "Acceso por roles", "Testing automatizado"],
        impact: ["Procesamiento clínico 35% más eficiente", "Respuesta de aplicación 25% mejor", "Mayor calidad de software"],
      },
      mahisoft: {
        name: "Entrega de plataforma gestionada",
        summary:
          "Diseñé infraestructura cloud y automatización CI/CD para plataformas SaaS de gestión IT y monitoreo remoto.",
        role: "DevOps Engineer",
        period: "Jul 2019 – Abr 2021 · Tampa, FL",
        problem:
          "Las aplicaciones empresariales necesitaban despliegues consistentes e infraestructura confiable.",
        challenge:
          "Automatizar build, testing, despliegue y configuración entre desarrollo, staging y producción.",
        solution:
          "Diseñé infraestructura escalable, optimicé pipelines CI/CD y automatizé provisioning y configuración.",
        architecture: ["Infraestructura SaaS", "Pipelines automatizados", "Automatización de despliegue", "Configuración de entornos", "Operaciones Linux"],
        impact: ["Mayores releases más eficientes", "Menos trabajo de despliegue manual", "Mayor consistencia operativa"],
      },
      willdom: {
        name: "Integración de beneficios farmacéuticos",
        summary:
          "Construí software empresarial de salud y APIs REST para gestión de beneficios farmacéuticos y compensación laboral.",
        role: "Software Engineer",
        period: "Ene 2018 – Jun 2019 · Tampa, FL",
        problem:
          "El procesamiento de recetas y reclamos requería integraciones confiables entre sistemas PBM, proveedores y claims.",
        challenge:
          "Habilitar intercambio seguro de datos y agilizar adjudicación de reclamos y gestión de medicamentos.",
        solution:
          "Desarrollé servicios backend y APIs REST que conectaron plataformas PBM con sistemas de proveedores y compensación laboral.",
        architecture: ["Aplicaciones PBM", "Capa de APIs REST", "Interfaces con proveedores", "Workflow de reclamos", "Servicios PostgreSQL"],
        impact: ["Procesamiento de recetas más ágil", "Mayor interoperabilidad de reclamos", "Mayor confiabilidad"],
      },
      wortise: {
        name: "Optimización ERP",
        summary:
          "Optimicé software ERP para operaciones de proyectos, finanzas y recursos.",
        role: "Software Engineer",
        period: "Jun 2017 – Sep 2017 · Tampa, FL",
        problem:
          "Empresas de arquitectura, ingeniería y consultoría necesitaban mejor control de sus operaciones basadas en proyectos.",
        challenge:
          "Mejorar lifecycle de proyectos, presupuestos, asignación de recursos y rendimiento operativo.",
        solution:
          "Desarrollé componentes ERP para gestión de proyectos, operaciones financieras y planificación de recursos.",
        architecture: ["Componentes ERP", "Gestión del ciclo de proyectos", "Presupuestos y finanzas", "Asignación de recursos", "Reporting operativo"],
        impact: ["Mayor eficiencia operativa", "Mejor seguimiento de proyectos", "Workflows más ágiles"],
      },
    },
  },
  experience: {
    eyebrow: "Experiencia",
    title: "Trayectoria profesional",
    description:
      "Experiencia progresiva en infraestructura cloud, liderazgo DevOps, software de salud y SaaS empresarial.",
    jobs: [
      {
        title: "Ingeniero DevOps de infraestructura",
        place: "Stealth Startup · Remoto",
        points: [
          "Desarrollé infraestructura AWS con EC2, S3, DynamoDB y Serverless Framework.",
          "Optimicé Jenkins y GitLab CI/CD, mejorando despliegues 45%.",
          "Containericé aplicaciones con Docker, reduciendo fallos 30%.",
          "Integré escaneo de seguridad y monitoreo CloudWatch.",
          "Reduje costos cloud 25% manteniendo rendimiento.",
        ],
      },
      {
        title: "Lead DevOps Engineer",
        place: "Bravado Health · Tampa, FL",
        points: [
          "Lideré infraestructura AWS para SaaS de salud y aplicaciones clínicas.",
          "Diseñé pipelines Jenkins y GitLab, reduciendo despliegues 40%.",
          "Fortalecí seguridad AWS y salvaguardas alineadas a HIPAA.",
          "Automaticé provisioning, backup y recuperación ante desastres.",
          "Reduje MTTR 35% con mejor monitoreo y respuesta.",
        ],
      },
      {
        title: "Senior Software Engineer",
        place: "Bravado Health · Tampa, FL",
        points: [
          "Desarrollé aplicaciones de salud con JavaScript, TypeScript y Node.js.",
          "Mejoré el procesamiento clínico 35% con APIs REST optimizadas.",
          "Mejoré respuesta de aplicación 25% en workflows EHR y pacientes.",
          "Implementé autenticación segura y acceso por roles.",
        ],
      },
      {
        title: "DevOps Engineer",
        place: "ConnectWise · Tampa, FL",
        points: [
          "Mantuve infraestructura cloud para SaaS IT y monitoreo remoto.",
          "Automaticé build, testing, despliegue y configuración.",
          "Mejoré consistencia entre desarrollo, staging y producción.",
        ],
      },
      {
        title: "Software Engineer",
        place: "MyMatrixx · Tampa, FL",
        points: [
          "Mejoré software empresarial de beneficios farmacéuticos.",
          "Construí APIs REST entre plataformas PBM y sistemas de reclamos.",
          "Mejoré procesamiento de recetas e interoperabilidad de reclamos.",
        ],
      },
      {
        title: "Software Engineer",
        place: "BST Global · Tampa, FL",
        points: [
          "Desarrollé software ERP para gestión de proyectos y finanzas.",
          "Mejoré lifecycle de proyectos, presupuestos y asignación de recursos.",
        ],
      },
    ],
    educationDegree: "Maestría en Ciencias de la Computación (2016–2017) · Licenciatura en Ciencias de la Computación (2013–2016)",
    educationSchool: "University of South Florida",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos de tu próximo proyecto",
    description:
      "Elegí el canal que te quede mejor — o dejá un mensaje breve y te respondo por email. Basado en {location}, abierto a remoto en todo el mundo.",
    channels: {
      email: { label: "Email", hint: "Ideal para briefs detallados" },
      phone: { label: "Teléfono", hint: "Llamadas rápidas entre zonas horarias" },
      linkedin: { label: "LinkedIn", hint: "Conectá o enviá un mensaje" },
      resume: {
        label: "CV",
        value: "Descargar PDF",
        hint: "Experiencia y skills completas",
      },
    },
    formTitle: "Enviar un mensaje rápido",
    formHint: "Abre tu app de email con todo listo — sin crear cuenta.",
    nameLabel: "Tu nombre",
    namePlaceholder: "Alex Rivera",
    emailLabel: "Tu email",
    emailPlaceholder: "vos@empresa.com",
    messageLabel: "Mensaje",
    messagePlaceholder:
      "¿Qué estás construyendo? Timeline, stack o rol — lo que ayude.",
    formAside: "¿Preferís un contacto directo? Usá email o LinkedIn a la izquierda.",
    submit: "Abrir en email",
    subjectFallback: "Hola Jacob",
    subjectFrom: "Hola desde {name}",
    noMessage: "(Sin mensaje aún)",
  },
  footer: {
    crafted: "Diseñado y desarrollado por",
  },
  loader: {
    boot: "Secuencia de arranque del portfolio",
    lines: [
      "Inicializando arquitectura…",
      "Hidratando servicios cloud…",
      "Sincronizando API gateways…",
      "Encendiendo frontend…",
    ],
    tagline: "Ignite · Build · Scale",
  },
};
