import type { TranslationsType, Language } from '../types';

export const translations: Record<Language, TranslationsType> = {
  en: {
    name: "Antonio Jesús Alguacil Espejo",
    nav: {
      home: "Home",
      about: "About Me",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      experience: "Experience"
    },
    hero: {
      title: "Hi, I'm Antonio Jesús Alguacil Espejo",
      subtitle: "Welcome to my personal portfolio"
    },
    about: {
      title: "About Me",
      p1: "I am Antonio Jesús Alguacil Espejo, a Full Stack developer specialized in offensive and defensive cybersecurity. I develop all kinds of applications, with special attention to secure web development. I work with technologies such as Java, C, Python, Laravel for backend development and React for frontend, combining software construction with the ability to audit, controlled attack and protect real environments. I use C language for low-level exploiting tasks, while Python allows me to automate auditing and pentesting processes.",
      p2: "In web cybersecurity, I use Burp Suite together with sqlmap or commix to audit applications and detect vulnerabilities such as SQL injection, a flaw that can allow an attacker to extract all passwords from a database and take control of sensitive company information. Also through code injection with commix, remote access to equipment can be achieved through the web itself, turning the application into a gateway to the organization's internal network. I complement these audits with Metasploit and other Kali Linux tools, simulating real attacks to evaluate the real resistance of the infrastructure.",
      p3: "I also consider that the web is not the only attack vector: the weakest link is often the human factor. Therefore, I master social engineering techniques, since an unaware access or a personnel error can compromise all perimeter security. I apply hardening in Linux environments, Windows Server and Cisco networks, eliminating unnecessary services, applying minimum privileges and closing unsafe access doors. In infrastructure deployment, I work with Docker and Kubernetes for container orchestration, use Cloudflare to protect domains and mitigate DDoS attacks, thus maintaining the availability and security of services exposed on the internet.",
      p4: "I perform digital forensic analysis in incidents on all types of devices including mobile phones: log review, detection of anomalous activity, attack reconstruction and secure system restoration. My methodology combines agile development with security by design (DevSecOps), OWASP best practices and a realistic vision of the risks a company currently faces.",
      programming: "Development & Security",
      programmingText: "Experienced in web development, proficient in key technologies like HTML, CSS, JavaScript, Java, C, Python and frameworks such as React, Laravel, with a focus on cybersecurity, I specialize in creating scalable, optimized, and maintainable solutions for both frontend and backend applications, ensuring proactive security practices throughout the development process.",
      design: "Design",
      designText: "My ability to design intuitive and attractive interfaces combines with a user-centered (UX) approach, creating visually appealing, accessible, and easy-to-use interfaces aligned with the latest web design trends. Always focused on meeting end-user needs through simple and pleasant navigation flows.",
      teamwork: "Teamwork",
      teamworkText: "Collaborative work is one of my fundamental pillars. I enjoy working in multidisciplinary teams, sharing ideas, and seeking the best solutions to problems. My ability to communicate clearly and effectively with designers, developers, and clients allows me to achieve common goals, create quality products, and deliver successful projects within established deadlines."
    },
    projects: {
      title: "My Projects",
      lyraTitle: "Lyra",
      lyraDesc: "Lyra is my personal watch brand. I developed its entire website using JavaScript, PHP, HTML and CSS, combining elegant design with precision engineering.",
      lyraExtended: "The Lyra website showcases the collection of watches, allowing users to explore models, learn about the brand's philosophy and get in touch. A project that reflects my passion for design and development.",
      fenixTitle: "F.E.N.I.X.",
      fenixDesc: "Web exploitation framework similar to Metasploit but with a web interface. Allows automated attacks, vulnerability scanning and network intrusion in an intuitive way.",
      fenixExtended: "F.E.N.I.X. features an intuitive dashboard, automated exploit modules and real-time reporting. Designed for professional penetration testing.",
      spectreTitle: "Spectre",
      spectreDesc: "Offensive malware developed in Python that performs the complete spyware stack: keylogging, webcam access, screenshots and real-time video capture.",
      spectreExtended: "Spectre includes advanced antivirus evasion techniques, encrypted communication with the C2 server and remote modular control. Complete espionage tool.",
      arpvenomTitle: "Arpvenom",
      arpvenomDesc: "Automated tool for ARP poisoning attacks. Allows DDoS attacks and network sniffing by redirecting traffic through the attacker.",
      arpvenomExtended: "Arpvenom automates the entire MITM attack process, from network scanning to traffic interception. Ideal for network security audits.",
      supplyTitle: "Supply Chain Simulator for Carrier",
      supplyDesc: "Interactive simulation tool developed for Carrier's Supply Chain department. Optimizes production planning and order management with short/medium-term scenarios.",
      supplyExtended: "Developed with React and Laravel. Enables future production planning optimization, order management, visualization of capacity and material needs, anticipating resource requirements and facilitating strategic decision-making through an intuitive and dynamic interface."
    },
    see_more: "See more",
    see_less: "See less",
    contact: {
      title: "Contact",
      email: "antonioalguacil49@gmail.com"
    },
    experience: {
      title: "Experience",
      imibic: "IMIBIC",
      webdev: "Web development",
      pentesting: "Pentesting and security",
      databases: "Database management",
      servers: "Server assembly and configuration",
      carrier: "Carrier",
      simulator: "Development of a simulator with React and Laravel for supply chain automation",
      tutoring: "Private Tutoring Teacher",
      subjects: "Programming, Networking, Cybersecurity, Office Suite, Databases, Cloud Computing",
      students: "+20 students trained",
      preparation: "Preparation for certifications and school exams",
      internshipDuration: "3-month internship",
      carrierDuration: "3 months",
      tutoringDuration: "2 years"
    },
    footer: {
      rights: "All rights reserved."
    },
    education: {
      title: "Education",
      formal: "Formal Education",
      eso: "Compulsory Secondary Education (ESO)",
      cfgm: "Vocational Training - Computer Systems and Networks",
      cfgs: "Higher Vocational Training - Web Application Development",
      cybersecuritySpecialization: "Specialization Course in Cybersecurity",
      complementary: "Additional Training",
      complementaryItems: {
        cisco: "Cisco Systems - Networking",
        ethicalHacking: "Ethical Hacking and Pentesting",
        docker: "Docker and Kubernetes",
        aws: "AWS and Cloud Computing",
        cloudflare: "Cloudflare and DDoS Mitigation",
        mysql: "MySQL and Databases",
        java: "Java Programming",
        python: "Python for Automation and Pentesting",
        cLang: "C Language for Low-Level Exploiting",
        frameworks: "Laravel, React and Yii",
        linux: "Linux System Administration",
        hardware: "Hardware Assembly and Maintenance",
        forensics: "Digital Forensics and Incident Response",
        burp: "Burp Suite for Web Auditing",
        metasploit: "Metasploit and Kali Linux",
        socialEngineering: "Social Engineering Techniques"
      }
    },
    skills: {
      title: "Skills",
      technical: "Technical Skills",
      soft: "Soft Skills",
      teamwork: "Teamwork",
      languages: "Languages",
      english: "English - B1 Level",
      fullstack: "Full Stack Programming",
      webdev: "Web Development",
      networking: "Networking",
      security: "Cybersecurity",
      databases: "Databases",
      cloud: "Cloud Computing",
      linux: "Linux System Administration",
      hardware: "Hardware Management",
      communication: "Effective Communication",
      problem: "Problem Solving",
      adaptability: "Adaptability",
      leadership: "Leadership"
    }
  },
  es: {
    name: "Antonio Jesús Alguacil Espejo",
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      education: "Formación",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      experience: "Experiencia"
    },
    hero: {
      title: "Hola, soy Antonio Jesús Alguacil Espejo",
      subtitle: "Bienvenido a mi portafolio personal"
    },
    about: {
      title: "Sobre mí",
      p1: "Soy Antonio Jesús Alguacil Espejo, un desarrollador Full Stack especializado en ciberseguridad ofensiva y defensiva. Desarrollo aplicaciones de todo tipo, con especial atención al desarrollo web seguro. Trabajo con tecnologías como Java, C, Python, Laravel para desarrollo backend y React para frontend, y combino la construcción de software con la capacidad de auditar, atacar controladamente y proteger entornos reales. El lenguaje C lo utilizo para tareas de exploiting a bajo nivel, mientras que Python me permite automatizar procesos de auditoría y pentesting.",
      p2: "En el ámbito de la ciberseguridad web, utilizo Burp Suite junto con sqlmap o commix para auditar aplicaciones y detectar vulnerabilidades como por ejemplo la inyección SQL, un fallo que puede permitir a un atacante extraer todas las contraseñas de una base de datos y tomar el control de la información sensible de una empresa. También mediante inyección de código con commix se puede acceder remotamente a los equipos a través de la propia web, convirtiendo la aplicación en una puerta de entrada a la red interna de la organización. Complemento estas auditorías con Metasploit y otras herramientas de Kali Linux, simulando ataques reales para evaluar la resistencia real de la infraestructura.",
      p3: "Además, tengo en cuenta que la web no es el único vector de ataque: el eslabón más débil suele ser el factor humano. Por ello domino técnicas de ingeniería social, ya que un acceso no concienciado o un error del personal puede comprometer toda la seguridad perimetral. Aplico hardening en entornos Linux, Windows Server y redes Cisco, eliminando servicios innecesarios, aplicando privilegios mínimos y cerrando puertas de acceso no seguras. En el despliegue de infraestructuras, trabajo con Docker y Kubernetes para orquestación de contenedores, utilizo Cloudflare para proteger dominios y mitigar ataques DDoS, manteniendo así la disponibilidad y seguridad de los servicios expuestos en internet.",
      p4: "Realizo análisis forense digital ante incidentes a todo tipo de dispositivos incluyendo móviles: revisión de logs, detección de actividad anómala, reconstrucción del ataque y restauración segura de los sistemas. Mi metodología combina desarrollo ágil con seguridad desde el diseño (DevSecOps), buenas prácticas OWASP y una visión realista de los riesgos que enfrenta una empresa actualmente.",
      programming: "Desarrollo y Seguridad",
      programmingText: "Con experiencia en desarrollo web, manejo de tecnologías clave como HTML, CSS, JavaScript, Java, C, Python y frameworks como React y Laravel con un enfoque en seguridad informática, me especializo en crear soluciones escalables, optimizadas y fáciles de mantener, tanto para aplicaciones frontend como backend, garantizando prácticas de seguridad proactivas en todo el proceso de desarrollo.",
      design: "Diseño",
      designText: "Mi habilidad para diseñar interfaces intuitivas y atractivas se combina con un enfoque centrado en la experiencia del usuario (UX), creando interfaces visualmente atractivas, accesibles y fáciles de usar, alineadas con las últimas tendencias en diseño web y siempre enfocadas en satisfacer las necesidades del usuario final mediante flujos de navegación simples y agradables.",
      teamwork: "Trabajo en equipo",
      teamworkText: "El trabajo colaborativo es uno de mis pilares fundamentales. Disfruto trabajar en equipos multidisciplinarios, compartiendo ideas y buscando las mejores soluciones a los problemas. Mi capacidad para comunicarme de manera clara y efectiva con diseñadores, desarrolladores y clientes me permite lograr objetivos comunes, crear productos de calidad y entregar proyectos exitosos dentro de los plazos establecidos."
    },
    projects: {
      title: "Mis Proyectos",
      lyraTitle: "Lyra",
      lyraDesc: "Lyra es mi marca personal de relojes. Desarrollé toda su web utilizando JavaScript, PHP, HTML y CSS, combinando diseño elegante con ingeniería de precisión.",
      lyraExtended: "La web de Lyra muestra la colección de relojes, permitiendo explorar modelos, conocer la filosofía de la marca y contactar. Un proyecto que refleja mi pasión por el diseño y el desarrollo.",
      fenixTitle: "F.E.N.I.X.",
      fenixDesc: "Framework de explotación web similar a Metasploit pero con interfaz web. Permite realizar ataques automatizados, escaneo de vulnerabilidades e intrusión en redes de forma intuitiva.",
      fenixExtended: "F.E.N.I.X. cuenta con un panel intuitivo, módulos de explotación automatizados y reportes en tiempo real. Diseñado para pentesting profesional.",
      spectreTitle: "Spectre",
      spectreDesc: "Malware ofensivo desarrollado en Python que realiza el stack completo de spyware: keylogging, acceso a webcam, capturas de pantalla y vídeo en tiempo real.",
      spectreExtended: "Spectre incluye técnicas avanzadas de evasión de antivirus, comunicación cifrada con el servidor C2 y control remoto modular. Herramienta completa de espionaje.",
      arpvenomTitle: "Arpvenom",
      arpvenomDesc: "Herramienta automatizada para ataques de envenenamiento ARP. Permite realizar ataques de denegación de servicio (DoS) y sniffing redirigiendo el tráfico a través del atacante.",
      arpvenomExtended: "Arpvenom automatiza todo el proceso de ataque MITM, desde el escaneo de red hasta la interceptación de tráfico. Ideal para auditorías de seguridad en redes locales.",
      supplyTitle: "Simulador Supply Chain para Carrier",
      supplyDesc: "Herramienta interactiva de simulación desarrollada para el departamento de Supply Chain de Carrier. Optimiza la planificación de producción y la gestión de pedidos con escenarios a corto y medio plazo.",
      supplyExtended: "Desarrollado con React y Laravel. Permite optimizar la planificación futura de producción, la gestión de pedidos, la visualización de necesidades de capacidad y materiales, anticipando necesidades de recursos y facilitando la toma de decisiones estratégicas mediante una interfaz intuitiva y dinámica."
    },
    see_more: "Ver más",
    see_less: "Ver menos",
    contact: {
      title: "Contacto",
      email: "antonioalguacil49@gmail.com"
    },
    experience: {
      title: "Experiencia",
      imibic: "IMIBIC",
      webdev: "Desarrollo web",
      pentesting: "Pentesting y seguridad",
      databases: "Gestión de bases de datos",
      servers: "Montaje y configuración de servidores",
      carrier: "Carrier",
      simulator: "Desarrollo de un simulador con React y Laravel para la automatización del supply chain",
      tutoring: "Profesor de Clases particulares",
      subjects: "Programación, Redes, Ciberseguridad, Ofimática, Bases de datos, Cloud computing",
      students: "+20 alumnos formados",
      preparation: "Preparación para certificaciones y exámenes escolares",
      internshipDuration: "3 meses ",
      carrierDuration: "3 meses",
      tutoringDuration: "2 años"
    },
    footer: {
      rights: "Todos los derechos reservados."
    },
    education: {
      title: "Formación",
      formal: "Educación Reglada",
      eso: "Educación Secundaria Obligatoria (ESO)",
      cfgm: "Ciclo Formativo Grado Medio - Sistemas Microinformáticos y Redes",
      cfgs: "Ciclo Formativo Grado Superior - Desarrollo de Aplicaciones Web",
      cybersecuritySpecialization: "Curso de Especialización en Ciberseguridad",
      complementary: "Formación Complementaria",
      complementaryItems: {
        cisco: "Cisco Systems - Redes",
        ethicalHacking: "Ethical Hacking y Pentesting",
        docker: "Docker y Kubernetes",
        aws: "AWS y Cloud Computing",
        cloudflare: "Cloudflare y Mitigación de DDoS",
        mysql: "MySQL y Bases de Datos",
        java: "Programación en Java",
        python: "Python para Automatización y Pentesting",
        cLang: "Lenguaje C para Exploiting de Bajo Nivel",
        frameworks: "Laravel, React y Yii",
        linux: "Administración de sistemas Linux",
        hardware: "Ensamblaje y mantenimiento de hardware",
        forensics: "Análisis Forense y Respuesta a Incidentes",
        burp: "Burp Suite para Auditoría Web",
        metasploit: "Metasploit y Kali Linux",
        socialEngineering: "Técnicas de Ingeniería Social"
      }
    },
    skills: {
      title: "Habilidades",
      technical: "Habilidades Técnicas",
      soft: "Habilidades Blandas",
      teamwork: "Trabajo en equipo",
      languages: "Idiomas",
      english: "Inglés - Nivel B1",
      fullstack: "Programación Full Stack",
      webdev: "Desarrollo Web",
      networking: "Redes",
      security: "Seguridad Informática",
      databases: "Bases de Datos",
      cloud: "Cloud Computing",
      linux: "Administración de sistemas Linux",
      hardware: "Gestión de hardware",
      communication: "Comunicación efectiva",
      problem: "Resolución de problemas",
      adaptability: "Adaptabilidad",
      leadership: "Liderazgo"
    }
  }
};