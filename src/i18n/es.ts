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
    role: "Desarrollador Full Stack Senior",
    headline: "Sistemas escalables. Arquitectura limpia. Impacto real.",
    subheadline:
      "Más de 20 años creando plataformas web cloud-native con React, Next.js, Vue, Node, Python y PHP — desde APIs REST y microservicios hasta AWS, Docker y CI/CD.",
    positioning:
      "Modernizo sistemas legacy y entrego aplicaciones empresariales que escalan — con arquitectura sólida, diseño de APIs y rendimiento en el centro.",
    location: "Buenos Aires, Argentina",
    remoteTag: "Buenos Aires → el mundo · Remoto",
  },
  highlights: [
    "20+ años de experiencia",
    "Cloud-native en AWS",
    "APIs y microservicios",
    "Modernización de legacy",
    "Rendimiento a escala",
  ],
  hero: {
    viewProjects: "Ver proyectos",
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Plataformas que perduran más allá del sprint",
    lead: "Desarrollador Full Stack Senior que convierte plataformas complejas en sistemas rápidos y mantenibles que los equipos pueden apropiarse.",
    paragraphs: [
      "Con dos décadas en React, Next.js, Vue, Node.js, Python y PHP, diseño APIs REST y microservicios con NestJS, Express, Django, FastAPI, Flask y Laravel — y los llevo a producción como soluciones cloud-native en AWS con Docker, Kubernetes y CI/CD.",
      "Mi fortaleza es el ciclo completo de entrega: arquitectura de sistemas, diseño de bases de datos, integraciones de APIs, optimización de rendimiento y ejecución Agile. Tengo un historial comprobado modernizando sistemas legacy y entregando aplicaciones empresariales de alto impacto.",
      "Ya sea un ingeniero senior para un SaaS multi-tenant, una mejora de rendimiento en ecommerce u observabilidad sobre cientos de endpoints — construyo con claridad, velocidad y ownership a largo plazo.",
    ],
    basedIn: "Basado en {location}. Abierto a roles senior remotos en todo el mundo.",
    focus: [
      {
        icon: "platforms",
        label: "Arquitectura de sistemas",
        detail: "Servicios escalables, límites claros y bases de código mantenibles",
      },
      {
        icon: "api",
        label: "APIs y microservicios",
        detail: "NestJS, Express, Django, FastAPI, Laravel — documentados y observables",
      },
      {
        icon: "cloud",
        label: "Cloud y DevOps",
        detail: "AWS, Docker, Kubernetes y pipelines CI/CD que despliegan con confianza",
      },
      {
        icon: "speed",
        label: "Rendimiento",
        detail: "De interacciones de 16s a menos de uno — medido, optimizado y sostenido",
      },
    ],
  },
  skills: {
    eyebrow: "Stack",
    title: "Un stack pensado para escalar",
    description:
      "Lenguajes, frameworks, cloud y herramientas de testing que uso para entregar software empresarial confiable.",
    categories: {
      languages: {
        title: "Lenguajes",
        description: "Bases sólidas en todo el stack.",
      },
      frontend: {
        title: "Frontend",
        description: "Plataformas UI modernas y storefronts de ecommerce.",
      },
      backend: {
        title: "Backend",
        description: "APIs y servicios preparados para carga real de producción.",
      },
      cloud: {
        title: "Cloud y DevOps",
        description: "Infraestructura que se despliega y se observa a sí misma.",
      },
      databases: {
        title: "Bases de datos",
        description: "Diseño, ORM y rendimiento en distintos motores.",
      },
      testing: {
        title: "Testing",
        description: "Confianza unitaria, de integración y end-to-end.",
      },
    },
  },
  impact: {
    eyebrow: "Impacto",
    title: "Resultados que sorprenden a los stakeholders",
    description:
      "Resultados medibles en renovaciones de ecommerce, plataformas de APIs y modernización SaaS.",
    stats: [
      { value: "20+", label: "Años entregando software en producción" },
      { value: "1,200+", label: "Endpoints de API documentados con OpenAPI" },
      { value: "16s → <1s", label: "Tiempo de interacción Shopify optimizado" },
      { value: "24s → 1s", label: "Carga de video en homepage reducida" },
    ],
  },
  projects: {
    eyebrow: "Proyectos",
    title: "Entregas destacadas",
    description:
      "Migraciones de plataformas, rebuilds de rendimiento y marketplaces para equipos de EE.UU. y globales.",
    items: {
      exomindset: {
        name: "Plataforma de APIs y observabilidad",
        summary:
          "Migré apps SilverStripe a Gatsby, estandaricé OpenAPI en Laravel y Django, e implementé OpenTelemetry para acortar el troubleshooting en producción.",
        role: "Desarrollador Full Stack Senior",
        period: "Ago 2025 – Jun 2026 · Remoto",
        problem:
          "Aplicaciones SilverStripe legacy y documentación de APIs fragmentada ralentizaban la entrega y elevaban el costo de mantenimiento en múltiples entornos.",
        challenge:
          "Modernizar el frontend, unificar contratos de API entre Laravel y Django, y dar observabilidad de producción sin interrumpir el tráfico en vivo.",
        solution:
          "Lideré la migración a microsites Gatsby, introduje Decap CMS para publicación self-service, documenté 1,200+ endpoints con OpenAPI e implementé OpenTelemetry para diagnóstico centralizado.",
        architecture: [
          "Microsites frontend Gatsby",
          "Servicios REST Laravel y Django",
          "Capa de contenido Decap CMS",
          "Estándar de contratos OpenAPI",
          "Observabilidad OpenTelemetry",
          "Deploys con Docker",
        ],
        impact: [
          "1,200+ endpoints de API documentados",
          "Menor esfuerzo de publicación con Decap CMS",
          "Observabilidad centralizada redujo el tiempo de diagnóstico",
        ],
      },
      "command-link": {
        name: "Modernización SaaS multi-tenant",
        summary:
          "Modernicé una plataforma SaaS multi-tenant, conectando React con sistemas legacy y optimizando Azure SQL para cargas empresariales.",
        role: "Desarrollador Full Stack Senior",
        period: "May 2024 – May 2025 · Remoto",
        problem:
          "Una plataforma SaaS multi-tenant estaba limitada por acoplamiento legacy, consultas SQL lentas y migraciones riesgosas hacia clientes React.",
        challenge:
          "Mejorar escalabilidad y tiempos de respuesta conectando apps React modernas a sistemas legacy sin disrupción de deploys.",
        solution:
          "Construí arquitectura reutilizable, comunicación asíncrona Laravel entre microservicios, puentes React–legacy y optimización de Azure SQL para consultas empresariales complejas.",
        architecture: [
          "Clientes React + TypeScript",
          "Servicios Laravel",
          "Capa de integración Yii legacy",
          "Optimización Azure SQL",
          "Pipeline Docker",
        ],
        impact: [
          "Mayor escalabilidad y mejores tiempos de respuesta",
          "Cero disrupción durante la migración",
          "Arquitectura reutilizable para los equipos de ingeniería",
        ],
      },
      globant: {
        name: "Overhaul de rendimiento Shopify",
        summary:
          "Reconstruí el rendimiento ecommerce en Shopify — reduciendo tiempos de interacción y video, y entregando SDKs reutilizables.",
        role: "Desarrollador Full Stack Senior",
        period: "Mar 2023 – May 2024 · Remoto",
        problem:
          "Las interacciones del storefront llegaban a 16 segundos y la carga de video de homepage a 24 segundos, afectando conversión y experiencia de marca.",
        challenge:
          "Lograr ganancias drásticas de rendimiento en storefronts Shopify Liquid migrando módulos PHP legacy a React sin downtime.",
        solution:
          "Optimicé temas Liquid/JS, caché y carga de media; construí SDKs reutilizables; migré módulos Laravel/CodeIgniter a React; y mejoré la sincronización AWS RDS.",
        architecture: [
          "Storefront Shopify + Liquid",
          "Componentes SDK React",
          "Sincronización AWS RDS",
          "Caché y UI responsive",
          "Entrega con Docker",
        ],
        impact: [
          "Interacción: 16s → menos de 1s",
          "Carga de video: 24s → 1s",
          "Mejores scores Lighthouse con caché y UI responsive",
        ],
      },
      mahisoft: {
        name: "Marketplace inmobiliario",
        summary:
          "Construí APIs NestJS/Node y un frontend React desde cero para un marketplace inmobiliario de alto crecimiento, containerizado para deploys consistentes.",
        role: "Desarrollador Full Stack Senior",
        period: "Nov 2021 – Ene 2023 · Remoto",
        problem:
          "Un marketplace inmobiliario en rápido crecimiento necesitaba una base API y frontend escalable para entregar features sin drift entre entornos.",
        challenge:
          "Levantar servicios NestJS/Node y una UI React desde cero manteniendo alta velocidad de sprint y pocos defectos.",
        solution:
          "Diseñé APIs NestJS/Express, un sistema de componentes React reutilizable en TypeScript, y workflows containerizados para alinear local, staging y producción.",
        architecture: [
          "APIs NestJS + Express",
          "UI React + TypeScript",
          "Librería de componentes reutilizable",
          "Entornos Docker",
          "Entrega Agile por sprints",
        ],
        impact: [
          "Entrega de features más rápida con UI reutilizable",
          "Menos defectos en runtime gracias a TypeScript",
          "Entornos consistentes mediante containerización",
        ],
      },
      willdom: {
        name: "Estabilización Laravel legacy",
        summary:
          "Estabilicé una plataforma Laravel legacy durante la modernización, corregí errores críticos de Vue en producción y mejoré la precisión de reservas entre proveedores.",
        role: "Desarrollador Full Stack Senior",
        period: "Mar 2021 – Nov 2021 · Remoto",
        problem:
          "Una plataforma Laravel legacy era inestable durante la modernización, con errores Vue en producción y sync de reservas poco confiable.",
        challenge:
          "Mantener operaciones sin interrupción mientras se corregían defectos frontend, se optimizaba backend y se endurecían integraciones CRM/ERP.",
        solution:
          "Estabilicé servicios Laravel, reconstruí componentes Vue fallidos, mejoré tiempos de respuesta DB/app y fortalecí sincronización Zoho CRM y proveedores de reserva.",
        architecture: [
          "Plataforma core Laravel",
          "Módulos frontend Vue.js",
          "Capa de datos MySQL + MongoDB",
          "Sincronización Zoho CRM",
          "Servicios de booking de proveedores",
        ],
        impact: [
          "Operaciones ininterrumpidas durante la modernización",
          "Mayor precisión de reservas entre plataformas",
          "Sincronización Zoho CRM más confiable",
        ],
      },
      wortise: {
        name: "Escalado de plataforma publicitaria",
        summary:
          "Lideré el desarrollo full-stack de una plataforma publicitaria — APIs, automatización, fiabilidad del Ad Server y mentoring del equipo.",
        role: "Lead Software Developer",
        period: "May 2018 – Ene 2021 · Remoto",
        problem:
          "Una plataforma publicitaria necesitaba más escalabilidad, automatización y fiabilidad a medida que crecía la demanda y los entornos distribuidos.",
        challenge:
          "Liderar la entrega full-stack en Node, Vue y PHP mientras se mentoraba al equipo y se endurecía la infraestructura del Ad Server.",
        solution:
          "Dirigí arquitectura y entrega de APIs Laravel, automatización PHP, mejoras del Ad Server, optimización de analytics y prácticas de fiabilidad en microservicios.",
        architecture: [
          "Capa de producto Node.js + Vue.js",
          "APIs internas Laravel",
          "Herramientas de automatización PHP",
          "Infraestructura Ad Server",
          "MongoDB + PostgreSQL + MySQL",
        ],
        impact: [
          "Mayor escalabilidad en entornos distribuidos",
          "Menor overhead operativo con herramientas de automatización",
          "Mejor calidad de código mediante mentoring",
        ],
      },
    },
  },
  experience: {
    eyebrow: "Experiencia",
    title: "Línea de carrera",
    description:
      "Dos décadas de entrega senior en SaaS, ecommerce, publicidad y marketplaces.",
    jobs: [
      {
        title: "Desarrollador Full Stack Senior",
        place: "Florida, EE.UU. · Remoto",
        points: [
          "Migré aplicaciones SilverStripe a Gatsby, reduciendo mantenimiento y mejorando el rendimiento frontend.",
          "Construí microsites Gatsby y servicios Laravel, acelerando deploys en múltiples entornos de producción.",
          "Desarrollé y mantuve APIs REST Django para workflows internos e integraciones de terceros.",
          "Implementé Decap CMS para publicación editorial self-service; documenté 1,200+ endpoints con OpenAPI.",
          "Implementé OpenTelemetry, reduciendo el tiempo de troubleshooting en producción con observabilidad centralizada.",
        ],
      },
      {
        title: "Desarrollador Full Stack Senior",
        place: "Washington, EE.UU. · Remoto",
        points: [
          "Modernicé una plataforma SaaS multi-tenant, mejorando escalabilidad y tiempos de respuesta backend.",
          "Conecté aplicaciones React con sistemas legacy sin disrupciones de deploy durante la migración.",
          "Desarrollé servicios Laravel para comunicación asíncrona entre microservicios distribuidos.",
          "Optimicé el rendimiento de Azure SQL para cargas de consulta empresariales complejas.",
        ],
      },
      {
        title: "Desarrollador Full Stack Senior",
        place: "California, EE.UU. · Remoto",
        points: [
          "Optimicé el rendimiento del storefront Shopify, reduciendo la interacción de 16 segundos a menos de uno.",
          "Mejoré la carga de video de la homepage de 24 segundos a un segundo.",
          "Construí componentes SDK reutilizables que aceleraron integraciones en sitios externos.",
          "Migré módulos Laravel y CodeIgniter a React sin interrumpir producción.",
        ],
      },
      {
        title: "Desarrollador Full Stack Senior",
        place: "California, EE.UU. · Remoto",
        points: [
          "Desarrollé APIs NestJS y Node.js escalables para un marketplace inmobiliario de alto crecimiento.",
          "Construí el frontend React desde cero con componentes UI reutilizables.",
          "Apliqué TypeScript para reducir defectos en runtime y mejorar la mantenibilidad a largo plazo.",
          "Containericé workflows de desarrollo, reduciendo inconsistencias de deploy.",
        ],
      },
      {
        title: "Desarrollador Full Stack Senior",
        place: "Florida, EE.UU. · Remoto",
        points: [
          "Estabilicé una plataforma Laravel legacy durante una modernización a gran escala.",
          "Construí servicios de sincronización de proveedores mejorando la precisión de reservas.",
          "Corregí componentes Vue con errores de producción; optimicé tiempos de respuesta backend.",
          "Mejoré la sincronización Zoho CRM para consistencia de datos de clientes.",
        ],
      },
      {
        title: "Lead Software Developer",
        place: "Buenos Aires, Argentina · Remoto",
        points: [
          "Lideré el desarrollo full-stack, mejorando la escalabilidad de la plataforma publicitaria en entornos distribuidos.",
          "Construí APIs Laravel livianas y herramientas PHP de automatización reduciendo overhead operativo.",
          "Mejoré la infraestructura del Ad Server y la fiabilidad de microservicios durante la expansión continua.",
          "Mentoricé ingenieros, fortaleciendo calidad de código y prácticas colaborativas.",
        ],
      },
    ],
    educationDegree: "Licenciatura en Ciencias de la Computación",
    educationSchool: "Universidad Tecnológica Nacional (UTN)",
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
    subjectFallback: "Hola Matias",
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
