import { Project, Service } from './types';

export const translations = {
  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      analysis: "Sys_Analysis",
      contact: "Init Contract",
      mobile_menu_open: "Open menu",
      mobile_menu_close: "Close menu"
    },
    hero: {
      status_label: "System Status: Operational",
      status_label_global: "Systems Online // Global Ops",
      title: "Engineering Critical Infrastructure",
      subtitle: "We are a heavy-lifting software collective. We architect proprietary AI agents, scale microservices to millions of concurrent users, and build the backend systems that power enterprise valuation.",
      cta_primary: "Initialize Project",
      cta_secondary: "View Deployments",
      stack_title: "CORE_STACK_OVERVIEW",
      tech_strip_label: "Deep Tech //"
    },
    services: {
      label: "/ Capabilities",
      title: "Factory Output",
      subtitle: "Specialized engineering for high-value problems.",
      list: [
        {
          id: 's1',
          title: 'High-Scale Distributed Systems',
          description: 'Migration from monolithic structures to resilient microservices (Go/Rust/Node). Proven track record of scaling CCU by 1000x.',
          icon: 'factory'
        },
        {
          id: 's2',
          title: 'Custom AI & Neural Architectures',
          description: 'Beyond wrappers. We build custom TensorFlow/PyTorch agents, NLP pipelines for engagement, and automated decision systems.',
          icon: 'consult'
        },
        {
          id: 's3',
          title: 'DevOps & Cloud Engineering',
          description: 'Infrastructure as Code (Terraform). AWS/Azure architecture optimization reducing infrastructure costs by up to 96%.',
          icon: 'code'
        },
        {
          id: 's4',
          title: 'Real-Time Game Networking',
          description: 'Multiplayer game backends, custom SDKs, and WebGL/Unity integration with real-time state synchronization.',
          icon: 'cloud'
        },
        {
          id: 's5',
          title: 'Enterprise Automation',
          description: 'Deep business logic automation. We replace manual departments with autonomous code flows and intelligent bots.',
          icon: 'rocket'
        },
        {
          id: 's6',
          title: 'Mobile & Native Solutions',
          description: 'High-performance native modules (C++/Obj-C) bridged to React Native/Flutter for uncompromising mobile experiences.',
          icon: 'rocket'
        }
      ] as Service[]
    },
    work: {
      label: "/ Deployment_Log",
      title: "Case Studies",
      git_link: "Git_Repository",
      view_all: "View All Repos",
      list: [
        {
          id: 'p1',
          title: 'TGA Entertainment Architecture',
          description: 'Refactorored legacy monoliths into scalable microservices, handling 1000x User Capacity (CCU) increase. Implemented real-time WebGL sync.',
          tech: ['Microservices', 'Node.js', 'NestJS', 'Docker', 'Jenkins'],
          link: 'https://github.com/OpenDNDApps',
          image: 'https://picsum.photos/800/600?random=1'
        },
        {
          id: 'p2',
          title: 'Fenix Ent. Cloud Migration',
          description: 'Led cloud migration and re-architected e-commerce microservices, achieving a 96% reduction in infrastructure costs while serving 100k+ users.',
          tech: ['AWS', 'Cost-Opt', 'Architecture', 'High-Traffic'],
          link: 'https://github.com/OpenDNDApps',
          image: 'https://picsum.photos/800/600?random=2'
        },
        {
          id: 'p3',
          title: 'Globant / Electronic Arts',
          description: 'Developed custom SDKs for NFLClash and NBAClash. Optimized C# backend APIs boosting system throughput by 300%.',
          tech: ['C#', 'Unity', 'SDK Dev', 'Performance'],
          link: 'https://github.com/OpenDNDApps',
          image: 'https://picsum.photos/800/600?random=3'
        },
        {
          id: 'p4',
          title: 'GameCloudNet AI Pipelines',
          description: 'Built AI-powered microservices for data processing and ship-flag backend logic using Go and C#, enhancing security pipelines.',
          tech: ['Go', 'C#', 'AI Agents', 'Security'],
          link: 'https://github.com/OpenDNDApps',
          image: 'https://picsum.photos/800/600?random=4'
        }
      ] as Project[]
    },
    ai: {
      label: "Automated Systems",
      title: "Deep Analysis & Automation",
      description: "We don't just write code; we deploy intelligent agents that audit, optimize, and secure your infrastructure 24/7.",
      step1_title: "Threat Detection",
      step1_desc: "Real-time vulnerability scanning across distributed microservices.",
      step2_title: "Cost Optimization",
      step2_desc: "Automated resource allocation to reduce AWS/GCP bills by significant margins.",
      step3_title: "Autonomous Workflows",
      step3_desc: "Self-healing pipelines that keep your business running while you sleep.",
      terminal: {
        title: "OPEN_DND_CORE_ANALYZER",
        live: "LIVE",
        cpu: "CPU",
        mem: "MEM",
        secure: "SECURE CONNECTION",
        logs: [
          { text: "Initializing Core Systems...", type: 'info' },
          { text: "Connecting to Neural Grid [v2.4.1]...", type: 'info' },
          { text: "Accessing AWS Cluster: us-east-1...", type: 'info' },
          { text: "WARNING: High Latency Detected in Legacy Module", type: 'warning' },
          { text: "Deploying Autonomous Agent 'Optimizer-X'...", type: 'success' },
          { text: "Refactoring Microservice Architecture...", type: 'process' },
          { text: ">> Compiling Go Modules...", type: 'code' },
          { text: ">> Optimizing SQL Queries...", type: 'code' },
          { text: "Reducing Cloud Infrastructure Costs by 94%...", type: 'success' },
          { text: "Running Security Audit (OWASP Top 10)...", type: 'process' },
          { text: "Vulnerability Patch Applied: CVE-2024-8892", type: 'success' },
          { text: "System Throughput Increased: 1000x CCU", type: 'success' },
          { text: "Waiting for next batch job...", type: 'info' }
        ]
      }
    },
    contact: {
      title: "Initialize Partnership",
      description: "We are currently accepting new contracts for the 2026 fiscal year. Contact us for a full capabilities deck and rate card.",
      locations: [
        {
          country: "USA",
          address: "131 Continental Dr, Suite 305\nNewark, DE 19713",
          phone: "(657) 274-8711"
        },
        {
          country: "Chile",
          address: "Miguel Claro 164, Providencia\n7500992 Santiago",
          phone: "(+56) 9 2904-9640"
        }
      ]
    },
    footer: {
      established: "// 2026",
      ready: "// SYSTEM_READY"
    }
  },
  es: {
    nav: {
      services: "Servicios",
      projects: "Proyectos",
      analysis: "Sis_Análisis",
      contact: "Iniciar Contrato",
      mobile_menu_open: "Abrir menú",
      mobile_menu_close: "Cerrar menú"
    },
    hero: {
      status_label: "Estado del Sistema: Operativo",
      status_label_global: "Sistemas Online // Ops Globales",
      title: "Ingeniería de Infraestructura Crítica",
      subtitle: "Somos un colectivo de software de alto rendimiento. Diseñamos agentes de IA propietarios, escalamos microservicios a millones de usuarios concurrentes y construimos los sistemas backend que impulsan la valoración empresarial.",
      cta_primary: "Inicializar Proyecto",
      cta_secondary: "Ver Despliegues",
      stack_title: "RESUMEN_STACK_CORE",
      tech_strip_label: "Tecnología Profunda //"
    },
    services: {
      label: "/ Capacidades",
      title: "Producción de Fábrica",
      subtitle: "Ingeniería especializada para problemas de alto valor.",
      list: [
        {
          id: 's1',
          title: 'Sistemas Distribuidos de Alta Escala',
          description: 'Migración de estructuras monolíticas a microservicios resilientes (Go/Rust/Node). Historial probado de escalar CCU en 1000x.',
          icon: 'factory'
        },
        {
          id: 's2',
          title: 'IA Personalizada y Arquitecturas Neuronales',
          description: 'Más allá de los wrappers. Construimos agentes TensorFlow/PyTorch personalizados, pipelines NLP para engagement y sistemas de decisión automatizados.',
          icon: 'consult'
        },
        {
          id: 's3',
          title: 'Ingeniería DevOps y Cloud',
          description: 'Infraestructura como Código (Terraform). Optimización de arquitectura AWS/Azure reduciendo costos de infraestructura hasta un 96%.',
          icon: 'code'
        },
        {
          id: 's4',
          title: 'Redes de Juegos en Tiempo Real',
          description: 'Backends de juegos multijugador, SDKs personalizados e integración WebGL/Unity con sincronización de estado en tiempo real.',
          icon: 'cloud'
        },
        {
          id: 's5',
          title: 'Automatización Empresarial',
          description: 'Automatización profunda de lógica de negocios. Reemplazamos departamentos manuales con flujos de código autónomos y bots inteligentes.',
          icon: 'rocket'
        },
        {
          id: 's6',
          title: 'Soluciones Móviles y Nativas',
          description: 'Módulos nativos de alto rendimiento (C++/Obj-C) puenteados a React Native/Flutter para experiencias móviles sin concesiones.',
          icon: 'rocket'
        }
      ] as Service[]
    },
    work: {
      label: "/ Log_Despliegue",
      title: "Casos de Estudio",
      git_link: "Repositorio_Git",
      view_all: "Ver Todos los Repos",
      list: [
        {
          id: 'p1',
          title: 'Arquitectura TGA Entertainment',
          description: 'Refactorización de monolitos heredados a microservicios escalables, manejando un aumento de 1000x en Capacidad de Usuarios (CCU). Implementación de sync WebGL en tiempo real.',
          tech: ['Microservicios', 'Node.js', 'NestJS', 'Docker', 'Jenkins'],
          link: 'https://github.com/OpenDNDApps',
          image: 'https://picsum.photos/800/600?random=1'
        },
        {
          id: 'p2',
          title: 'Migración Cloud Fenix Ent.',
          description: 'Liderazgo en migración a la nube y re-arquitectura de microservicios e-commerce, logrando una reducción del 96% en costos de infraestructura sirviendo a 100k+ usuarios.',
          tech: ['AWS', 'Opt-Costos', 'Arquitectura', 'Alto-Tráfico'],
          link: 'https://github.com/OpenDNDApps',
          image: 'https://picsum.photos/800/600?random=2'
        },
        {
          id: 'p3',
          title: 'Globant / Electronic Arts',
          description: 'Desarrollo de SDKs personalizados para NFLClash y NBAClash. Optimización de APIs backend en C# aumentando el rendimiento del sistema en un 300%.',
          tech: ['C#', 'Unity', 'Desarrollo SDK', 'Rendimiento'],
          link: 'https://github.com/OpenDNDApps',
          image: 'https://picsum.photos/800/600?random=3'
        },
        {
          id: 'p4',
          title: 'Pipelines de IA GameCloudNet',
          description: 'Construcción de microservicios impulsados por IA para procesamiento de datos y lógica backend de ship-flag usando Go y C#, mejorando pipelines de seguridad.',
          tech: ['Go', 'C#', 'Agentes IA', 'Seguridad'],
          link: 'https://github.com/OpenDNDApps',
          image: 'https://picsum.photos/800/600?random=4'
        }
      ] as Project[]
    },
    ai: {
      label: "Sistemas Automatizados",
      title: "Análisis Profundo y Automatización",
      description: "No solo escribimos código; desplegamos agentes inteligentes que auditan, optimizan y aseguran su infraestructura 24/7.",
      step1_title: "Detección de Amenazas",
      step1_desc: "Escaneo de vulnerabilidades en tiempo real a través de microservicios distribuidos.",
      step2_title: "Optimización de Costos",
      step2_desc: "Asignación automatizada de recursos para reducir facturas de AWS/GCP por márgenes significativos.",
      step3_title: "Flujos de Trabajo Autónomos",
      step3_desc: "Pipelines de auto-reparación que mantienen su negocio funcionando mientras duerme.",
      terminal: {
        title: "ANALIZADOR_CORE_OPEN_DND",
        live: "VIVO",
        cpu: "CPU",
        mem: "MEM",
        secure: "CONEXIÓN SEGURA",
        logs: [
          { text: "Inicializando Sistemas Core...", type: 'info' },
          { text: "Conectando a Red Neuronal [v2.4.1]...", type: 'info' },
          { text: "Accediendo a Cluster AWS: us-east-1...", type: 'info' },
          { text: "ADVERTENCIA: Alta Latencia en Módulo Heredado", type: 'warning' },
          { text: "Desplegando Agente Autónomo 'Optimizer-X'...", type: 'success' },
          { text: "Refactorizando Arquitectura de Microservicios...", type: 'process' },
          { text: ">> Compilando Módulos Go...", type: 'code' },
          { text: ">> Optimizando Consultas SQL...", type: 'code' },
          { text: "Reduciendo Costos de Infraestructura Cloud en 94%...", type: 'success' },
          { text: "Ejecutando Auditoría de Seguridad (OWASP Top 10)...", type: 'process' },
          { text: "Parche de Vulnerabilidad Aplicado: CVE-2024-8892", type: 'success' },
          { text: "Rendimiento del Sistema Aumentado: 1000x CCU", type: 'success' },
          { text: "Esperando siguiente trabajo por lotes...", type: 'info' }
        ]
      }
    },
    contact: {
      title: "Inicializar Asociación",
      description: "Actualmente estamos aceptando nuevos contratos para el año fiscal 2026. Contáctenos para un deck completo de capacidades y tarifas.",
      locations: [
        {
          country: "EE.UU.",
          address: "131 Continental Dr, Suite 305\nNewark, DE 19713",
          phone: "(657) 274-8711"
        },
        {
          country: "Chile",
          address: "Miguel Claro 164, Providencia\n7500992 Santiago",
          phone: "(+56) 9 2904-9640"
        }
      ]
    },
    footer: {
      established: "// 2026",
      ready: "// SISTEMA_LISTO"
    }
  }
};