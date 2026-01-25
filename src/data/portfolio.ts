export const personalInfo = {
    name: "Navneet Joshi",
    roles: ["Frontend Engineer", "Full Stack Developer", "React Specialist"],
    email: "joshi.nav@northeastern.edu",
    phone: "(857) 423-5259",
    location: "Boston, MA",
    bio: "Frontend Engineer with 6+ years of experience building high-performance React and Next.js applications. I turn complex problems into elegant, user-friendly interfaces.",
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
    { value: "$60M", label: "Savings Delivered" },
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
      title: "Wyckoff Trading AI Chatbot",
      description: "RAG-powered chatbot for trading queries using Python, FAISS, LangChain, and GPT-5. Features React frontend with interactive Streamlit visualizations.",
      image: "/images/projects/wyckoff.png",
      tags: ["React", "Python", "LangChain", "GPT-5", "Streamlit"],
      liveUrl: "#",
      githubUrl: "https://github.com/navneetjoshi223/wyckoff-chatbot",
      featured: true,
    },
    {
      title: "Verbello",
      description: "Language learning platform for native English speakers to learn Spanish, French, German, Italian, and Portuguese with interactive lessons.",
      image: "/images/projects/verbello.png",
      tags: ["React", "TypeScript", "Express", "MongoDB"],
      liveUrl: "https://verbello.netlify.app/",
      githubUrl: "https://github.com/navneetjoshi223/verbello",
      featured: true,
    },
    {
      title: "Supply Chain App",
      description: "Supply chain application displaying companies and locations on an interactive map with Flask backend and React Leaflet integration.",
      image: "/images/projects/supplychain.png",
      tags: ["React", "Flask", "Python", "Docker", "Leaflet"],
      liveUrl: "#",
      githubUrl: "https://github.com/navneetjoshi223/SupplyChainApp",
      featured: false,
    },
  ];
  
  export const experience = [
    {
      company: "Metropolitan Area Planning Council",
      role: "Software Engineering Co-op",
      period: "Sep 2024 - Dec 2024",
      location: "Boston, MA",
      highlights: [
        "Developed React apps with Next.js SSR for 101 municipalities",
        "Built accessible component library in Storybook with WCAG 2.1 compliance",
        "Delivered climate planning platform with Zustand state management",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Zustand", "GraphQL", "AWS"],
    },
    {
      company: "Baker Hughes",
      role: "Senior Software Engineer",
      period: "Nov 2019 - Jun 2023",
      location: "Mumbai, India",
      highlights: [
        "Built real-time IoT dashboards with 100K+ data points, optimized load time from 5.6s to 3.2s",
        "Collaborated with ML team to visualize predictive maintenance models, saving $60M annually",
        "Architected multi-tenant admin console with OAuth2 RBAC for 200+ clients",
      ],
      technologies: ["React", "TypeScript", "D3.js", "GraphQL", "Node.js", "AWS"],
    },
    {
      company: "GE Oil & Gas / Baker Hughes",
      role: "Software Engineer",
      period: "Jun 2017 - Oct 2019",
      location: "Mumbai, India",
      highlights: [
        "Built D3.js visualizations for ML-driven failure predictions",
        "Implemented Node.js BFF layer reducing frontend API calls by 60%",
        "Drove 20% customer retention via A/B testing and i18n across 4 languages",
      ],
      technologies: ["Angular", "D3.js", "Node.js", "Spring Boot", "Kafka"],
    },
  ];
  
  export const education = [
    {
      school: "Northeastern University",
      degree: "Master of Science, Information Systems",
      period: "2023 - 2025",
      location: "Boston, MA",
    },
    {
      school: "University of Mumbai",
      degree: "Bachelor of Engineering, Computer Engineering",
      period: "2013 - 2017",
      location: "Mumbai, India",
    },
  ];