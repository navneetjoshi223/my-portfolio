export const personalInfo = {
    name: "Navneet Joshi",
    roles: ["Senior Software Engineer", "Full-Stack Engineer", "React & JavaScript Specialist"],
    email: "joshi.nav@northeastern.edu",
    phone: "(857) 423-5259",
    location: "Boston, MA",
    bio: "Software Engineer with 6+ years of experience building high-performance web applications. I turn complex problems into elegant, user-friendly interfaces.",
    resumeUrl: "/resume.pdf",
    social: {
      github: "https://github.com/navneetjoshi223",
      linkedin: "https://linkedin.com/in/navneetjoshi7",
      portfolio: "https://navneetjoshi223.github.io",
    },
  };
  
  export const stats = [
    { value: "6+", label: "Years Experience" },
    { value: "100K+", label: "Data Points Visualized" },
    { value: "$8.9M", label: "Savings Delivered" },
    { value: "40%", label: "Performance Boost" },
  ];
  
  export const skills = {
    frontend: [
      "React", "Next.js", "TypeScript", "JavaScript", "Redux", "Zustand",
      "Tailwind CSS", "Material UI", "Styled Components", "Framer Motion"
    ],
    backend: ["Node.js", "Express", "GraphQL", "REST APIs", "Python", "Java Spring Boot"],
    tools: ["Git", "Docker", "AWS", "Webpack", "Vite", "Jest", "Cypress", "Storybook"],
    databases: ["PostgreSQL", "MongoDB", "Redis"],
  };
  
  export const projects = [
    {
      title: "Boston Transit Copilot",
      description: "An AI agent for checking MBTA (the T) status and arrivals in plain language, chaining its own tool calls against live data with the AI SDK, Next.js, and TypeScript.",
      images: [
        "/images/projects/boston-transit-copilot-1.png",
        "/images/projects/boston-transit-copilot-2.png",
        "/images/projects/boston-transit-copilot-3.png",
        "/images/projects/boston-transit-copilot-4.png",
        "/images/projects/boston-transit-copilot-5.png",
      ],
      tags: ["Next.js", "TypeScript", "Vercel AI SDK", "Gemini", "MBTA API"],
      liveUrl: "#",
      githubUrl: "https://github.com/navneetjoshi223/boston-transit-copilot",
      featured: true,
    },
    {
      title: "Science of Forgetting",
      description: "An interactive storytelling experience that explains how memory fades over time using scroll-based narrative, animation, and data visualization. Built with React, Framer Motion, Recharts and Tailwind",
      images: [
        "/images/projects/science-of-forgetting-1.png",
        "/images/projects/science-of-forgetting-2.png",
        "/images/projects/science-of-forgetting-3.png",
        "/images/projects/science-of-forgetting-4.png"
      ],
      tags: ["React", "JavaScript", "Framer Motion", "Recharts", "Tailwind CSS"],
      liveUrl: "https://science-of-forgetting.vercel.app/",
      githubUrl: "https://github.com/navneetjoshi223/science-of-forgetting",
      featured: true,
    },
    {
      title: "Wyckoff Trading AI Chatbot",
      description: "RAG-powered chatbot for trading queries using Python, FAISS, LangChain, and GPT-5. Features interactive Streamlit visualizations.",
      images: [
        "/images/projects/wyckoff-chatbot-1.png",
        "/images/projects/wyckoff-chatbot-2.png",
      ],
      tags: ["React", "Python", "LangChain", "GPT-5", "Streamlit"],
      liveUrl: "#",
      githubUrl: "https://github.com/navneetjoshi223/wyckoff-chatbot",
      featured: true,
    },
    {
      title: "Verbello",
      description: "Language learning platform for native English speakers to learn Spanish, French, German, Italian, and Portuguese with interactive lessons.",
      images: [
        "/images/projects/verbello1.png",
        "/images/projects/verbello2.png",
        "/images/projects/verbello4.png",
        "/images/projects/verbello5.png",
      ],
      tags: ["React", "TypeScript", "Express", "MongoDB"],
      liveUrl: "https://verbello.netlify.app/",
      githubUrl: "https://github.com/navneetjoshi223/verbello",
      featured: true,
    },
    {
      title: "Supply Chain App",
      description: "Supply chain application displaying companies and locations on an interactive map with Flask backend and React Leaflet integration.",
      images: [
        "/images/projects/SupplyChainApp1.png",
        "/images/projects/SupplyChainApp2.png",
      ],
      tags: ["React", "Flask", "Python", "Docker", "Leaflet"],
      liveUrl: "#",
      githubUrl: "https://github.com/navneetjoshi223/SupplyChainApp",
      featured: false,
    },
  ];
  
  export const experience = [
    {
      company: "IpserLab (Stealth Startup)",
      role: "Full Stack Engineer",
      period: "Mar 2026 - Present",
      location: "Boston, MA (remote)",
      highlights: [
        "Built consumer-facing auth and checkout features in TypeScript with React Hook Form and Zod validation",
        "Automated code quality guardrails within CI/CD (ESLint, static analysis), preventing build regressions across 10+ services",
        "Leveraged GitHub Copilot for automated test generation and component scaffolding, speeding up feature delivery by 30%",
      ],
      technologies: ["TypeScript", "React", "React Hook Form", "Zod", "CI/CD", "ESLint"],
    },
    {
      company: "Metropolitan Area Planning Council",
      role: "Software Engineering Co-op",
      period: "Sep 2024 - Dec 2024",
      location: "Boston, MA",
      highlights: [
        "Developed responsive React apps with Next.js (SSR); integrated CMS via custom React Hooks, enabling 101 municipalities to self-serve content updates, reducing manual turnaround from 3 hours to <5 minutes",
        "Owned end-to-end delivery of a climate planning platform built with React and Redux; deployed on AWS EC2 with S3 for images, enabling planners across Massachusetts to filter and act on 120+ climate resilience strategies",
        "Authored a WCAG 2.1 accessible React component library in Storybook, reducing duplicate UI by ~40% over 3 projects",
      ],
      technologies: ["React", "Next.js", "Redux", "Storybook", "AWS"],
    },
    {
      company: "Baker Hughes (formerly GE)",
      role: "Senior Software Engineer",
      period: "Nov 2019 - Jun 2023",
      location: "Mumbai, India",
      highlights: [
        "Built real-time IoT dashboards in React + TypeScript, merging WebSocket streams with historical API data into graphs with 100K+ points; resolved performance bottlenecks via Webpack code splitting and lazy loading, cutting LCP from 5.6s to 3.2s",
        "Implemented a sensor anomaly alerting system in Spring Boot with REST APIs and API Gateway routing, notifying 200+ oil fields in real time; slashed API response times 4x (from ~2s to <500ms) via Redis caching and PostgreSQL query indexing",
        "Delivered a multi-tenant user management platform with React and OAuth2 RBAC, enabling 200+ clients to self-manage provisioning and secure access for 15+ applications, decreasing support tickets by 60% and onboarding time by 40%",
        "Engineered asset workflows with React, Java Spring Boot and GraphQL, giving geologists real-time visibility into oil well construction planning, boosting asset utilization by 150%",
        "Architected a Jest/RTL/Cypress testing strategy for 100+ legacy React components, reducing technical debt and achieving ~85% coverage, and cutting QA cycles from 5 to 2 days",
      ],
      technologies: ["React", "TypeScript", "Spring Boot", "GraphQL", "Redis", "PostgreSQL", "Jest", "Cypress"],
    },
    {
      company: "Baker Hughes (formerly GE)",
      role: "Software Engineer",
      period: "Jun 2017 - Oct 2019",
      location: "Mumbai, India",
      highlights: [
        "Built custom D3.js timeseries visualizations to translate complex AI/ML forecasts into simple actionable KPIs, enabling predictive maintenance that saved clients $8.9M in repair costs",
        "Developed a Node.js/Express Backend-for-Frontend (BFF) layer to sanitize requests, manage authentication, and aggregate responses from 4 backend microservices, reducing frontend API calls by 60%",
        "Drove 25% increase in user retention through feature-flag driven internationalization (i18n) across Arabic, French, Mandarin, and Hindi, unlocking 4 new international markets",
      ],
      technologies: ["D3.js", "Node.js", "Express", "Java", "Spring Boot"],
    },
  ];
  
  export const education = [
    {
      school: "Northeastern University",
      degree: "Master of Science, Information Systems",
      period: "Sep 2023 - Aug 2025",
      location: "Boston, MA",
      note: "Paused Sep - Dec 2024 for a software engineering co-op at MAPC",
    },
    {
      school: "University of Mumbai",
      degree: "Bachelor of Engineering, Computer Engineering",
      period: "2013 - 2017",
      location: "Mumbai, India",
    },
  ];