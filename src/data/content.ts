import type { Language } from "../hooks/useLanguage";

export const content = {
  en: {
    loading: "Initializing portfolio...",
    nav: [
      { label: "About", href: "about" },
      { label: "Experience", href: "experience" },
      { label: "Projects", href: "projects" },
      { label: "Stack", href: "stack" },
      { label: "Contact", href: "contact" }
    ],
    hero: {
      label: "backend systems • APIs • integrations",
      name: "Kaan Topcu",
      title: "Backend Developer",
      description:
        "I build backend systems focused on APIs, databases, integrations, and scalable service architecture.",
      secondary:
        "Working with Node.js, ASP.NET Core, Spring Boot, PostgreSQL, Redis, RabbitMQ, Docker, and API Gateway architectures.",
      ctas: {
        projects: "View Projects",
        cv: "Download CV",
        github: "GitHub",
        linkedin: "LinkedIn"
      },
      scroll: "Scroll down"
    },
    about: {
      eyebrow: "About",
      title: "Who I Am",
      description:
        "I am a backend-focused developer who likes turning messy workflows into clear APIs, reliable data flows, and maintainable service boundaries. I usually think from the backend outward: what data should look like, how services should communicate, where performance can degrade, and how the system can stay understandable as it grows.",
      secondary:
        "My main work is shaped by Node.js, ASP.NET Core, Spring Boot, PostgreSQL, Redis, RabbitMQ, Docker, and API Gateway patterns. I also work comfortably with React and TypeScript when a product needs a clean interface around the backend. I care about performance, clean code, explicit contracts, well-structured data models, and architectures that can scale without becoming difficult to operate.",
      markers: ["Clean code", "Performance", "Scalable systems"],
      education: {
        label: "Education",
        school: "Kocaeli University",
        department: "Computer Engineering"
      }
    },
    projects: {
      eyebrow: "Selected work",
      title: "Backend systems with clear service boundaries.",
      intro:
        "Detailed project snapshots focused on API governance, real-time systems, asynchronous workflows, and reliable service design.",
      items: [
        {
          title: "KOU Mobile API Gateway",
          role: "Backend / API Gateway Architecture",
          description:
            "Built a scalable API Gateway for KOU Mobile using ASP.NET Core and Kong to centralize routing, authentication, and request management across internal services. Implemented JWT-based access control, monitoring, logging, and rate limiting to standardize API governance and improve system reliability.",
          highlights: [
            "Centralized API routing and request management",
            "JWT-based authentication and access control",
            "Monitoring, logging, and rate limiting",
            "Standardized API governance across 30+ internal microservices",
            "Reduced request errors by approximately 15%"
          ],
          stack: ["ASP.NET Core", "Kong", "JWT", "Microservices", "Logging", "Rate Limiting"],
          architecture: ["Client", "Kong Gateway", "Auth / Logging / Rate Limit", "Internal Services"]
        },
        {
          title: "WordBrust",
          role: "Lead Backend Developer",
          description:
            "Designed and developed the backend for a real-time multiplayer word game using Node.js, PostgreSQL, and Socket.IO. Implemented authentication flows with JWT and OAuth 2.0, handled real-time game communication, and prepared the backend for Docker-based deployment.",
          highlights: [
            "Real-time multiplayer game backend",
            "Socket.IO-based event communication",
            "JWT and OAuth 2.0 authentication",
            "PostgreSQL-based persistence",
            "Docker-based deployment setup"
          ],
          stack: ["Node.js", "PostgreSQL", "Socket.IO", "JWT", "OAuth 2.0", "Docker"],
          links: [{ label: "GitHub", url: "https://github.com/kaantpcc/wordbrust-server" }]
        },
        {
          title: "Spendly",
          role: "Lead Backend & AI Developer",
          status: "In Progress",
          description:
            "Developing an AI-powered personal finance assistant focused on receipt processing, categorization, and financial insights. The backend is designed around Spring Boot, PostgreSQL, Redis, and RabbitMQ to support asynchronous OCR and ML pipeline workflows.",
          highlights: [
            "Spring Boot backend architecture",
            "OCR and ML pipeline orchestration",
            "Asynchronous task handling with Redis and RabbitMQ",
            "PostgreSQL-based persistence",
            "Receipt categorization and financial insight generation"
          ],
          stack: ["Spring Boot", "PostgreSQL", "Redis", "RabbitMQ", "OCR", "ML Pipeline"]
        }
      ]
    },
    additionalWork: {
      eyebrow: "More on GitHub",
      title: "Additional public repositories.",
      intro:
        "Smaller repositories and learning projects that show practice across backend, frontend, data workflows, and API integrations.",
      viewMore: "View more on GitHub",
      items: [
        {
          title: "Football App",
          label: "Full Stack",
          description: "React and ASP.NET Core football application with JWT authentication, PostgreSQL, Docker support, and league data workflows.",
          stack: ["React", "ASP.NET Core", "PostgreSQL", "JWT", "Docker"],
          url: "https://github.com/kaantpcc/football-app"
        },
        {
          title: "Big Data Analysis",
          label: "Data Pipeline",
          description: "University big data project using Docker, Kafka, Spark Streaming, Delta Lake, notebooks, and ML-oriented analysis workflows.",
          stack: ["Docker", "Kafka", "Spark", "Python", "MLflow"],
          url: "https://github.com/kaantpcc/big-data-analysis"
        },
        {
          title: "Event App",
          label: "Backend API",
          description: "Express.js backend practice project with JWT authentication, PostgreSQL, Sequelize, file uploads, event participation, and messaging routes.",
          stack: ["Node.js", "Express", "PostgreSQL", "Sequelize", "JWT"],
          url: "https://github.com/kaantpcc/event-app"
        },
        {
          title: "KOU Fatura Sistemi",
          label: "ASP.NET MVC",
          description: "ASP.NET Core MVC billing system project with SQL Server persistence and server-rendered application workflows.",
          stack: ["ASP.NET Core", "MSSQL", "MVC", "EF Core"],
          url: "https://github.com/kaantpcc/KOU-Fatura-Sistemi"
        }
      ]
    },
    experience: {
      eyebrow: "Experience",
      title: "Experience shaped around production backend delivery.",
      intro: "Roles spanning APIs, query optimization, integrations, workflow systems, and service communication.",
      items: [
        {
          company: "BitkaSoft",
          title: "Junior Backend Developer",
          date: "Ara 2025 – Nis 2026",
          description:
            "Developed and maintained Node.js backend services for client-facing workflows, designed REST APIs, optimized PostgreSQL queries through schema refinement and indexing, implemented authentication mechanisms, and built production-ready Kommo CRM integrations for real customer operations."
        },
        {
          company: "Emakin",
          title: "Full Stack Developer Intern",
          date: "Tem 2025 – Ağu 2025",
          description:
            "Integrated .NET Framework services and REST APIs, supported SQL operations, configured XML-based business workflows on Emakin BPM, and contributed to the Arbalet AI Agent by ensuring stable backend service communication."
        },
        {
          company: "KOU Embedded Systems Lab",
          title: "Full Stack Developer",
          date: "Mar 2024 – Nis 2025",
          description:
            "Developed university-wide software solutions using ASP.NET Core MVC and MSSQL, focusing on REST API development, relational database design, and backend-driven application workflows. Built the KOU Mobile API Gateway with ASP.NET Core and Kong."
        }
      ]
    },
    stack: {
      eyebrow: "Technical stack",
      title: "Tools selected for dependable product and service design.",
      intro: "Technologies I use to design, build, and maintain backend systems, APIs, and supporting interfaces.",
      categories: [
        {
          name: "API & Backend Services",
          description: "Service boundaries, REST APIs, backend workflows, and production service logic.",
          items: ["Node.js", "Express", "ASP.NET Core", "Spring Boot", "REST APIs"]
        },
        {
          name: "Frontend Interfaces",
          description: "Clean React interfaces around backend systems, dashboards, and product workflows.",
          items: ["React", "TypeScript", "Vite", "Tailwind CSS"]
        },
        {
          name: "Data & Cache",
          description: "Relational models, query performance, persistence, and fast access layers.",
          items: ["PostgreSQL", "MSSQL", "Redis"]
        },
        {
          name: "Architecture & Messaging",
          description: "API governance, asynchronous processing, service communication, and integration boundaries.",
          items: ["Microservices", "RabbitMQ", "Kong API Gateway"]
        },
        {
          name: "Auth & Delivery",
          description: "Authentication flows, deployment preparation, API testing, and development workflow.",
          items: ["JWT", "OAuth 2.0", "Docker", "Git", "Postman"]
        }
      ]
    },
    contact: {
      title: "Let’s build reliable backend systems.",
      description:
        "I’m open to backend-focused roles, production-grade API development, and system integration projects.",
      footer: "Designed and built with a focus on clarity, performance, and backend engineering."
    },
    notFound: {
      title: "404",
      headline: "Oops! Page not found",
      description: "Looks like this route got lost in the backend.\nLet’s get you back on track.",
      button: "Back to Home",
      technical: "GET /unknown-route → 404 Not Found",
      traceTitle: "Route Trace",
      traceDescription: "Request could not be resolved",
      traceRows: [
        ["GET", "/unknown-route"],
        ["MATCH", "no route handler"],
        ["RETURN", "404 Not Found"]
      ],
      flow: ["Client", "Router", "Fallback", "Home"]
    }
  },
  tr: {
    loading: "Portfolyo başlatılıyor...",
    nav: [
      { label: "Hakkımda", href: "about" },
      { label: "Deneyim", href: "experience" },
      { label: "Projeler", href: "projects" },
      { label: "Teknolojiler", href: "stack" },
      { label: "İletişim", href: "contact" }
    ],
    hero: {
      label: "backend sistemler • API’ler • entegrasyonlar",
      name: "Kaan Topcu",
      title: "Backend Developer",
      description:
        "API’ler, veritabanları, entegrasyonlar ve ölçeklenebilir servis mimarileri üzerine backend sistemler geliştiriyorum.",
      secondary:
        "Node.js, ASP.NET Core, Spring Boot, PostgreSQL, Redis, RabbitMQ, Docker ve API Gateway mimarileriyle çalışıyorum.",
      ctas: {
        projects: "Projeleri Gör",
        cv: "CV İndir",
        github: "GitHub",
        linkedin: "LinkedIn"
      },
      scroll: "Aşağı kaydır"
    },
    about: {
      eyebrow: "Hakkımda",
      title: "Ben Kimim",
      description:
        "Backend odaklı çalışan; dağınık iş akışlarını net API’lere, güvenilir veri akışlarına ve sürdürülebilir servis sınırlarına dönüştürmeyi seven bir geliştiriciyim. Genelde sistemi backend’den başlayarak düşünürüm: veri nasıl modellenmeli, servisler nasıl konuşmalı, performans nerede düşebilir ve yapı büyüdükçe nasıl anlaşılır kalır?",
      secondary:
        "Ana çalışma alanım Node.js, ASP.NET Core, Spring Boot, PostgreSQL, Redis, RabbitMQ, Docker ve API Gateway mimarileri. Backend etrafında temiz bir ürün deneyimi gerektiğinde React ve TypeScript tarafında da rahat çalışıyorum. Performans, temiz kod, açık kontratlar, düzenli veri modelleri ve operasyonu zorlaştırmadan ölçeklenebilen mimariler benim için önemli.",
      markers: ["Temiz kod", "Performans", "Ölçeklenebilir sistemler"],
      education: {
        label: "Eğitim",
        school: "Kocaeli Üniversitesi",
        department: "Bilgisayar Mühendisliği"
      }
    },
    projects: {
      eyebrow: "Seçili projeler",
      title: "Servis sınırları net backend sistemleri.",
      intro:
        "API yönetişimi, gerçek zamanlı sistemler, asenkron iş akışları ve güvenilir servis tasarımı odağında detaylı proje özetleri.",
      items: [
        {
          title: "KOU Mobile API Gateway",
          role: "Backend / API Gateway Architecture",
          description:
            "KOU Mobile için ASP.NET Core ve Kong kullanarak merkezi yönlendirme, kimlik doğrulama ve istek yönetimi sağlayan ölçeklenebilir bir API Gateway geliştirdim. JWT tabanlı erişim kontrolü, izleme, loglama ve rate limiting yapılarıyla API yönetimini standartlaştırdım ve sistem kararlılığını iyileştirdim.",
          highlights: [
            "Merkezi API yönlendirme ve istek yönetimi",
            "JWT tabanlı kimlik doğrulama ve erişim kontrolü",
            "İzleme, loglama ve rate limiting",
            "30+ iç mikroservis için standart API yönetişimi",
            "İstek hata oranında yaklaşık %15 azalma"
          ],
          stack: ["ASP.NET Core", "Kong", "JWT", "Microservices", "Logging", "Rate Limiting"],
          architecture: ["İstemci", "Kong Gateway", "Auth / Loglama / Rate Limit", "İç Servisler"]
        },
        {
          title: "WordBrust",
          role: "Lead Backend Developer",
          description:
            "Node.js, PostgreSQL ve Socket.IO kullanarak gerçek zamanlı çok oyunculu bir kelime oyununun backend tarafını tasarladım ve geliştirdim. JWT ve OAuth 2.0 tabanlı kimlik doğrulama akışlarını oluşturdum, gerçek zamanlı oyun iletişimini yönettim ve Docker tabanlı dağıtım yapısını hazırladım.",
          highlights: [
            "Gerçek zamanlı multiplayer oyun backend’i",
            "Socket.IO tabanlı olay iletişimi",
            "JWT ve OAuth 2.0 kimlik doğrulama",
            "PostgreSQL tabanlı veri yönetimi",
            "Docker tabanlı dağıtım hazırlığı"
          ],
          stack: ["Node.js", "PostgreSQL", "Socket.IO", "JWT", "OAuth 2.0", "Docker"],
          links: [{ label: "GitHub", url: "https://github.com/kaantpcc/wordbrust-server" }]
        },
        {
          title: "Spendly",
          role: "Lead Backend & AI Developer",
          status: "Devam Ediyor",
          description:
            "Fiş işleme, gider kategorilendirme ve finansal içgörüler üretmeye odaklanan AI destekli kişisel finans asistanı geliştiriyorum. Backend mimarisi; OCR ve ML pipeline süreçlerini asenkron yönetmek için Spring Boot, PostgreSQL, Redis ve RabbitMQ üzerine kurgulanıyor.",
          highlights: [
            "Spring Boot backend mimarisi",
            "OCR ve ML pipeline orchestration",
            "Redis ve RabbitMQ ile asenkron task yönetimi",
            "PostgreSQL tabanlı veri kalıcılığı",
            "Fiş kategorilendirme ve finansal içgörü üretimi"
          ],
          stack: ["Spring Boot", "PostgreSQL", "Redis", "RabbitMQ", "OCR", "ML Pipeline"]
        }
      ]
    },
    additionalWork: {
      eyebrow: "GitHub’da daha fazlası",
      title: "Ek public repository’ler.",
      intro:
        "Backend, frontend, veri iş akışları ve API entegrasyonları tarafında pratik yaptığım daha küçük repository ve öğrenme projeleri.",
      viewMore: "GitHub’da daha fazlasını gör",
      items: [
        {
          title: "Football App",
          label: "Full Stack",
          description: "JWT kimlik doğrulama, PostgreSQL, Docker desteği ve lig verisi iş akışları içeren React ve ASP.NET Core futbol uygulaması.",
          stack: ["React", "ASP.NET Core", "PostgreSQL", "JWT", "Docker"],
          url: "https://github.com/kaantpcc/football-app"
        },
        {
          title: "Big Data Analysis",
          label: "Veri Pipeline",
          description: "Docker, Kafka, Spark Streaming, Delta Lake, notebook’lar ve ML odaklı analiz iş akışları içeren üniversite büyük veri projesi.",
          stack: ["Docker", "Kafka", "Spark", "Python", "MLflow"],
          url: "https://github.com/kaantpcc/big-data-analysis"
        },
        {
          title: "Event App",
          label: "Backend API",
          description: "JWT kimlik doğrulama, PostgreSQL, Sequelize, dosya yükleme, etkinlik katılımı ve mesajlaşma route’ları içeren Express.js backend pratik projesi.",
          stack: ["Node.js", "Express", "PostgreSQL", "Sequelize", "JWT"],
          url: "https://github.com/kaantpcc/event-app"
        },
        {
          title: "KOU Fatura Sistemi",
          label: "ASP.NET MVC",
          description: "SQL Server veri kalıcılığı ve server-rendered uygulama iş akışları içeren ASP.NET Core MVC fatura sistemi projesi.",
          stack: ["ASP.NET Core", "MSSQL", "MVC", "EF Core"],
          url: "https://github.com/kaantpcc/KOU-Fatura-Sistemi"
        }
      ]
    },
    experience: {
      eyebrow: "Deneyim",
      title: "Üretim ortamına yönelik backend geliştirme deneyimi.",
      intro: "API’ler, sorgu optimizasyonu, entegrasyonlar, iş akışı sistemleri ve servis iletişimi üzerine roller.",
      items: [
        {
          company: "BitkaSoft",
          title: "Junior Backend Developer",
          date: "Dec 2025 – Apr 2026",
          description:
            "Müşteri operasyonlarına bağlı iş akışları için Node.js backend servisleri geliştirdim ve bakımını yaptım. REST API tasarımı, PostgreSQL sorgu optimizasyonu, şema düzenlemeleri, indeksleme, kimlik doğrulama mekanizmaları ve Kommo CRM entegrasyonları üzerinde çalıştım."
        },
        {
          company: "Emakin",
          title: "Full Stack Developer Intern",
          date: "July 2025 – Aug 2025",
          description:
            ".NET Framework servisleri ve REST API entegrasyonları üzerinde çalıştım, SQL operasyonlarını destekledim, Emakin BPM üzerinde XML tabanlı iş akışları yapılandırdım ve Arbalet AI Agent için backend servis iletişimine katkı sağladım."
        },
        {
          company: "KOU Embedded Systems Lab",
          title: "Full Stack Developer",
          date: "Mar 2024 – Apr 2025",
          description:
            "ASP.NET Core MVC ve MSSQL kullanarak üniversite genelinde kullanılan yazılım çözümleri geliştirdim. REST API geliştirme, ilişkisel veritabanı tasarımı ve backend odaklı uygulama iş akışları üzerinde çalıştım. ASP.NET Core ve Kong ile KOU Mobile API Gateway’i geliştirdim."
        }
      ]
    },
    stack: {
      eyebrow: "Teknik yığın",
      title: "Güvenilir ürün ve servis tasarımı için seçilmiş araçlar.",
      intro: "Backend sistemleri, API’leri ve destekleyici arayüzleri tasarlamak, geliştirmek ve sürdürmek için kullandığım teknolojiler.",
      categories: [
        {
          name: "API & Backend Servisleri",
          description: "Servis sınırları, REST API’ler, backend iş akışları ve üretim ortamına yönelik servis mantığı.",
          items: ["Node.js", "Express", "ASP.NET Core", "Spring Boot", "REST APIs"]
        },
        {
          name: "Frontend Arayüzleri",
          description: "Backend sistemleri, dashboard’lar ve ürün iş akışları etrafında temiz React arayüzleri.",
          items: ["React", "TypeScript", "Vite", "Tailwind CSS"]
        },
        {
          name: "Veri & Önbellek",
          description: "İlişkisel veri modelleri, sorgu performansı, veri kalıcılığı ve hızlı erişim katmanları.",
          items: ["PostgreSQL", "MSSQL", "Redis"]
        },
        {
          name: "Mimari & Mesajlaşma",
          description: "API yönetişimi, asenkron işleme, servis iletişimi ve entegrasyon sınırları.",
          items: ["Microservices", "RabbitMQ", "Kong API Gateway"]
        },
        {
          name: "Kimlik Doğrulama & Teslimat",
          description: "Kimlik doğrulama akışları, dağıtım hazırlığı, API testleri ve geliştirme akışı.",
          items: ["JWT", "OAuth 2.0", "Docker", "Git", "Postman"]
        }
      ]
    },
    contact: {
      title: "Güvenilir backend sistemleri geliştirelim.",
      description:
        "Backend odaklı pozisyonlar, üretime hazır API geliştirme ve sistem entegrasyonu projeleriyle ilgileniyorum.",
      footer: "Netlik, performans ve backend mühendisliği odağıyla tasarlandı ve geliştirildi."
    },
    notFound: {
      title: "404",
      headline: "Oops! Sayfa bulunamadı",
      description: "Görünüşe göre bu rota backend tarafında kayboldu.\nSeni tekrar doğru yola döndürelim.",
      button: "Ana Sayfaya Dön",
      technical: "GET /bilinmeyen-rota → 404 Not Found",
      traceTitle: "Rota İzleme",
      traceDescription: "İstek eşleşen bir rota bulamadı",
      traceRows: [
        ["GET", "/bilinmeyen-rota"],
        ["EŞLEŞME", "rota işleyicisi bulunamadı"],
        ["DÖNÜŞ", "404 Not Found"]
      ],
      flow: ["İstemci", "Router", "Fallback", "Ana Sayfa"]
    }
  }
} as const;

export type SiteContent = (typeof content)[Language];

export const links = {
  email: "mailto:kaantopcudev@gmail.com",
  emailLabel: "kaantopcudev@gmail.com",
  linkedin: "https://linkedin.com/in/kaantopcudev/",
  linkedinLabel: "linkedin.com/in/kaantopcudev/",
  github: "https://github.com/kaantpcc",
  githubLabel: "github.com/kaantpcc",
  cv: "/kaan_topcu_backend_developer.pdf"
};
