export interface ResearchItem {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: 'Cybersecurity' | 'Explainable AI' | 'LLM Optimization' | 'Network Defense' | 'Applied AI';
  status: 'Active Focus' | 'Published' | 'In Preparation' | 'Preprint';
  authors: string[];
  venue?: string;
  year: string;
  abstract: string;
  contributions: string[];
  architectureDiagram?: {
    nodes: { id: string; label: string; desc: string; type: 'input' | 'process' | 'ai' | 'output' }[];
    pipelineSummary: string;
  };
  metrics?: { label: string; value: string; detail?: string }[];
  tags: string[];
  paperUrl?: string;
  codeUrl?: string;
  isFeatured: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Enterprise' | 'AI/ML' | 'Cybersecurity' | 'Full-Stack' | 'Educational' | 'Desktop';
  description: string;
  highlights: string[];
  architectureDetails: string;
  techStack: string[];
  role: string;
  year: string;
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
  colorTheme?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient' | 'Familiar';
    isPrimary?: boolean;
  }[];
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  type: 'Leadership' | 'Community' | 'Mentorship' | 'Extracurricular';
  location: string;
  achievements: string[];
  badge: string;
  repoUrl?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpaBadge?: string;
  relevantCoursework: string[];
  highlights: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  roleSubtitle: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  bioSummary: string;
  quote: string;
  badges: string[];
  availability: {
    status: 'available' | 'busy';
    text: string;
  };
  stats: { label: string; value: string; suffix?: string }[];
  currentFocus: { title: string; desc: string; tag: string }[];
  education: EducationItem[];
  research: ResearchItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  leadership: LeadershipItem[];
}

export const cvData: ProfileData = {
  name: "Abu Sayed Rabbi",
  title: "Full-Stack Developer, AI Engineer & Cybersecurity Researcher",
  roleSubtitle: "Building Scalable Intelligent Systems Across AI, Cybersecurity, Enterprise Systems & Web",
  location: "Dhaka, Bangladesh",
  email: "abusayed102188@gmail.com",
  github: "https://github.com/abusayedrabbi327",
  linkedin: "https://www.linkedin.com/in/abu-sayed-rabbi-915541226/",
  quote: "Coding is easy. Changing the world is hard — I'm here for both. Dreaming beyond code: building trillion-dollar solutions that fix real problems.",
  bioSummary: "Computer Science and Engineering undergraduate at United International University (UIU). Specializing in AI-driven cybersecurity, Explainable AI (XAI) for real-time intrusion detection, full-stack systems, database management, and enterprise software solutions. Passionate about architecting mission-critical applications that bridge complex AI research with rock-solid production code.",
  badges: [
    "🎓 UIU CSE Senior",
    "🔒 Cyber Defense & IDS",
    "🤖 AI/ML & LLM Systems",
    "⚡ Full-Stack & Enterprise"
  ],
  availability: {
    status: "available",
    text: "Open for AI / Full-Stack Roles & Research Collaborations"
  },
  stats: [
    { label: "Public Repositories", value: "20", suffix: "+" },
    { label: "Intrusion Detection Acc.", value: "99.4", suffix: "%" },
    { label: "Core Tech Stacks", value: "8", suffix: "+" },
    { label: "Leadership Tenures", value: "4", suffix: " Orgs" }
  ],
  currentFocus: [
    {
      title: "Global Mirror AI",
      desc: "An AI-driven truth detection and geopolitical discourse analysis system for international politics and narrative tracking.",
      tag: "AI / Geopolitics"
    },
    {
      title: "RT-XNIDS & AEGIS",
      desc: "Multi-layer real-time network intrusion detection and explainable host defense monitoring with sub-millisecond local attribution.",
      tag: "Cybersecurity"
    },
    {
      title: "E-CMH Platform",
      desc: "Multi-role enterprise hospital management system with advanced patient triage, medical records encryption, and billing workflows.",
      tag: "Enterprise Healthcare"
    },
    {
      title: "AI-Powered PDF Reader",
      desc: "Smart reading companion with real-time semantic retrieval, contextual learning synthesis, and interactive document Q&A.",
      tag: "LLMs / RAG"
    },
    {
      title: "Water Quality Detection AI",
      desc: "Personalized environmental care tech and water safety inference system based on hyper-local parameter telemetry.",
      tag: "Green AI / IoT"
    },
    {
      title: "Cybersecurity Sandbox Toolkit",
      desc: "Multi-layer automated URL analysis, phishing detection, and isolated telemetry sandboxing.",
      tag: "SecOps"
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      field: "Intelligent Systems, Cybersecurity & Enterprise Software Engineering",
      institution: "United International University (UIU)",
      location: "Dhaka, Bangladesh",
      period: "2021 — 2025 (Expected)",
      gpaBadge: "Final Year / Capstone Research",
      relevantCoursework: [
        "Artificial Intelligence & Machine Learning",
        "Network Security & Cryptography",
        "Explainable AI & Model Interpretability",
        "Data Structures & Algorithms",
        "Operating Systems & System Programming",
        "Database Management Systems (RDBMS & NoSQL)",
        "Software Engineering & System Design",
        "Computer Networks & Telemetry"
      ],
      highlights: [
        "Leading Capstone Final Year Project (AEGIS) on Real-Time Explainable Multi-Layered Intrusion Detection",
        "Active member and executive leader across UIU English Language Forum, Theater & Film Club, and Robotics Club"
      ]
    }
  ],
  research: [
    {
      id: "aegis-fyp",
      title: "AEGIS: Autonomous Explainable Host & Network Intrusion Detection Framework",
      shortTitle: "AEGIS (Capstone Research)",
      tagline: "Multi-layered autonomous cyber defense architecture with real-time SHAP/LIME explainability",
      category: "Cybersecurity",
      status: "Active Focus",
      authors: ["Abu Sayed Rabbi", "Collaborators", "Faculty Advisors @ UIU"],
      venue: "Targeting Top-tier IEEE / Springer Security Tracks",
      year: "2025",
      abstract: "Modern cyber defense systems generate millions of high-dimensional telemetry events but suffer from black-box decision making and prohibitive false alarm rates. AEGIS integrates network-level packet telemetry (XNIDS) and host-level system call sequences (HIDS) into a unified neural-symbolic detection pipeline. Through an interpretable feature transformation (SIFT) layer and sub-millisecond local explainability kernels, AEGIS delivers actionable, transparent threat attribution to security operations centers (SOCs).",
      contributions: [
        "Architected dual-pipeline streaming telemetry ingesting multi-gigabit network flows alongside OS syscall traces",
        "Engineered Scalable Interpretable Feature Transformation (SIFT) reducing feature space dimensional collapse by 42%",
        "Implemented real-time local attribution engine giving SOC analysts instant SHAP-based feature importance heatmaps",
        "Achieved 99.4% detection accuracy across standard benchmark datasets (CICIDS2017, NSL-KDD) with < 1.2ms inference latency"
      ],
      architectureDiagram: {
        nodes: [
          { id: "telemetry", label: "Real-Time Telemetry", desc: "Network Packets (PCAP) + Syscall Traces (eBPF)", type: "input" },
          { id: "sift", label: "SIFT Transformation", desc: "Scalable Interpretable Feature Extraction", type: "process" },
          { id: "ensemble", label: "Hybrid Neural Classifier", desc: "Temporal ConvNet + Gradient Boosted Ensemble", type: "ai" },
          { id: "xai", label: "XAI Kernel (SHAP/LIME)", desc: "Sub-millisecond Threat Attribution & Evidence", type: "ai" },
          { id: "soc", label: "SOC Action Dashboard", desc: "Automated mitigation triggers & explainable alerts", type: "output" }
        ],
        pipelineSummary: "Telemetry Ingestion ➔ SIFT Feature Vectorization ➔ Dual Hybrid Neural-GBDT Classifier ➔ Local XAI Attribution ➔ SOC Automated Mitigation"
      },
      metrics: [
        { label: "Detection Accuracy", value: "99.4%", detail: "Across multi-class network attack vectors" },
        { label: "Inference Latency", value: "< 1.2 ms", detail: "Per network flow record" },
        { label: "False Positive Reduction", value: "37.8%", detail: "Compared to vanilla Random Forest baseline" }
      ],
      tags: ["Explainable AI", "Network Security", "Host Intrusion Detection", "eBPF", "SHAP", "PyTorch", "Real-Time Telemetry"],
      codeUrl: "https://github.com/abusayedrabbi327/AEGIS",
      isFeatured: true
    },
    {
      id: "rt-xnids",
      title: "RT-XNIDS: Real-Time Explainable Network Intrusion Detection System",
      shortTitle: "RT-XNIDS",
      tagline: "Explainable deep learning framework for zero-day network anomaly detection and flow classification",
      category: "Network Defense",
      status: "Active Focus",
      authors: ["Abu Sayed Rabbi"],
      year: "2024 — 2025",
      abstract: "Network intrusion detection requires both microsecond classification throughput and transparent decision boundaries for auditability. RT-XNIDS benchmarks high-throughput deep neural ensembles against tree-based architectures with post-hoc surrogate explainers, optimizing gradient attribution trees for line-rate network monitoring.",
      contributions: [
        "Formulated high-throughput packet feature vectors using rolling statistical window calculations",
        "Benchmarked tree-ensemble surrogates against deep neural nets for zero-day attack generalization",
        "Designed lightweight visualization matrices for instant triage of DDoS, PortScan, and Brute-force anomalies"
      ],
      metrics: [
        { label: "Throughput", value: "120k flows/s", detail: "Single-core CPU benchmark" },
        { label: "F1-Score", value: "0.991", detail: "Macro average on benchmark attacks" }
      ],
      tags: ["Cybersecurity", "Network IDS", "Machine Learning", "Scikit-Learn", "Snort", "Wireshark", "Python"],
      codeUrl: "https://github.com/abusayedrabbi327/RT-XNIDS",
      isFeatured: true
    },
    {
      id: "global-mirror-ai",
      title: "Global Mirror AI: Truth Detection & Geopolitical Narrative Analysis",
      shortTitle: "Global Mirror AI",
      tagline: "AI-driven discourse modeling and truth detection system for international politics",
      category: "Applied AI",
      status: "Active Focus",
      authors: ["Abu Sayed Rabbi"],
      year: "2025",
      abstract: "Developing automated narrative verification pipelines using LLMs and transformer architectures to cross-examine political press statements, news feeds, and statistical fact databases, highlighting bias vectors and verified truth claims.",
      contributions: [
        "Built multi-source web ingestion pipeline for international news releases and policy documents",
        "Engineered contextual fact-checking kernels comparing claims against historical reference databases"
      ],
      tags: ["NLP", "Transformers", "LLMs", "Truth Detection", "Python", "FastAPI"],
      isFeatured: false
    }
  ],
  projects: [
    {
      id: "aegis-proj",
      title: "AEGIS",
      subtitle: "Enterprise Advanced Security & System Integration (Final Year Project)",
      category: "Enterprise",
      description: "Collaborative flagship cybersecurity framework uniting AI-driven threat classification, host event telemetry, and high-performance database management for mission-critical enterprise defense.",
      highlights: [
        "Engineered multi-layer threat detection engine processing real-time network and system events",
        "Integrated robust database backend with normalized security audit logging and automated alerts",
        "Collaborated with cross-functional engineering peers to build end-to-end telemetry pipelines"
      ],
      architectureDetails: "Distributed telemetry pipeline with neural-symbolic classifier, relational security event logging, and modern web interface.",
      techStack: ["Python", "AI / Machine Learning", "Cybersecurity", "MySQL", "Flask / FastAPI"],
      role: "Lead Security Researcher & Co-Developer",
      year: "2024 — 2025",
      metrics: [
        { label: "Accuracy", value: "99.4%" },
        { label: "Audit Throughput", value: "Real-Time" }
      ],
      githubUrl: "https://github.com/abusayedrabbi327/AEGIS",
      isFeatured: true
    },
    {
      id: "rt-xnids-proj",
      title: "RT-XNIDS",
      subtitle: "Real-Time Network Intrusion Detection System",
      category: "Cybersecurity",
      description: "A production-oriented network intrusion detection system capable of monitoring high-speed packet traffic, analyzing TCP/IP flow characteristics, and classifying cyber attacks with actionable explainability.",
      highlights: [
        "Engineered live packet capture and flow aggregation engine using Scapy and Socket streams",
        "Trained high-accuracy machine learning classifiers for DDoS, infiltration, and port scanning",
        "Built instant alert dispatch system with telemetry feature importance breakdown"
      ],
      architectureDetails: "Low-latency packet ingestion buffer connected to feature engineering pipeline and ML inference engine.",
      techStack: ["Python", "Scikit-learn", "Scapy", "Wireshark", "Network Security", "Pandas"],
      role: "Sole Creator & Lead Security Developer",
      year: "2024 — 2025",
      metrics: [
        { label: "Throughput", value: "120k flows/s" },
        { label: "Detection Latency", value: "< 2ms" }
      ],
      githubUrl: "https://github.com/abusayedrabbi327/RT-XNIDS",
      isFeatured: true
    },
    {
      id: "bankms",
      title: "BANKMS",
      subtitle: "Core Enterprise Banking & Financial Transaction System",
      category: "Enterprise",
      description: "Robust core banking backend system engineered with ACID transaction guarantees, secure account balance ledgering, multi-factor customer authentication, and complete audit trail management.",
      highlights: [
        "Architected strict transactional ledger schema preventing race conditions and double-spending",
        "Implemented customer account creation, fund transfers, loan schedules, and interest calculations",
        "Enforced encrypted credentials and role-based permissions for teller and manager tiers"
      ],
      architectureDetails: "Three-tier enterprise backend architecture with parameterized database transaction layers.",
      techStack: ["Java / Python", "MySQL", "RDBMS", "Security", "Backend System"],
      role: "Backend & Database Architect",
      year: "2024",
      githubUrl: "https://github.com/abusayedrabbi327/BANKMS",
      isFeatured: true
    },
    {
      id: "hrms",
      title: "HRMS",
      subtitle: "Human Resources & Payroll Management Enterprise System",
      category: "Enterprise",
      description: "Full-scale Java and MySQL Human Resources Management platform handling automated monthly payroll calculations, attendance tracking, employee lifecycle records, and department analytics.",
      highlights: [
        "Designed normalized MySQL database schema handling employee hierarchies and tax brackets",
        "Automated salary generation, bonus allocations, deduction rules, and pay-slip exports",
        "Built intuitive administrative dashboard for leave requests and employee appraisal logs"
      ],
      architectureDetails: "Java MVC enterprise desktop/server application connected via JDBC to a normalized MySQL cluster.",
      techStack: ["Java", "MySQL", "JDBC", "Desktop UI / Swing", "Database Design"],
      role: "Lead Software Developer",
      year: "2023 — 2024",
      githubUrl: "https://github.com/abusayedrabbi327/HRMS",
      isFeatured: true
    },
    {
      id: "pocketguru",
      title: "Pocket_Guru",
      subtitle: "AI-Powered Educational & Personalized Learning Companion",
      category: "Educational",
      description: "Interactive educational web platform designed to provide students with personalized academic pathways, interactive study tools, and AI-driven guidance.",
      highlights: [
        "Engineered responsive, dynamic web interface with modern component-driven architecture",
        "Integrated customized learning recommendations and student progress telemetry",
        "Designed clean UX for interactive quiz modules and concept reinforcement"
      ],
      architectureDetails: "Modular frontend connected to intelligent recommendation APIs and persistent progress state.",
      techStack: ["React", "TypeScript / JavaScript", "Tailwind CSS", "Node.js", "AI APIs"],
      role: "Lead Frontend Architect & UI Designer",
      year: "2024",
      githubUrl: "https://github.com/abusayedrabbi327/Pocket_Guru",
      isFeatured: true
    },
    {
      id: "graph-math",
      title: "Graph_Math",
      subtitle: "Interactive Equation Explorer & 2D/3D Graph Visualizer",
      category: "Educational",
      description: "An educational web visualizer for students and educators to explore mathematical functions, graph transformations, calculus limits, and algebraic curves in real time.",
      highlights: [
        "Implemented real-time mathematical expression parser and coordinate plane canvas renderer",
        "Built interactive sliders for parametric equations and dynamic trigonometric waves",
        "Optimized 60 FPS rendering pipeline for smooth zooming and panning"
      ],
      architectureDetails: "Client-side React application leveraging HTML5 Canvas and math expression tree evaluation.",
      techStack: ["React", "JavaScript", "HTML5 Canvas", "MathJS", "CSS3"],
      role: "Creator & Algorithm Engineer",
      year: "2024",
      githubUrl: "https://github.com/abusayedrabbi327/Graph_Math",
      isFeatured: true
    },
    {
      id: "doforge",
      title: "DoForge",
      subtitle: "Dynamic Task Management & Agile Project Planning Platform",
      category: "Full-Stack",
      description: "A full-stack collaborative task management ecosystem featuring Kanban boards, sprint tracking, priority matrix scoring, and team assignment workflows.",
      highlights: [
        "Engineered RESTful backend with Express.js and MongoDB for high-velocity document storage",
        "Built drag-and-drop Kanban interface with instant optimistic UI state updates",
        "Implemented JWT authentication, team workspaces, and activity timeline audit trails"
      ],
      architectureDetails: "MERN stack architecture (MongoDB, Express, React, Node.js) with JWT authorization.",
      techStack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "REST API"],
      role: "Full-Stack Engineer",
      year: "2024",
      githubUrl: "https://github.com/abusayedrabbi327/DoForge",
      isFeatured: true
    },
    {
      id: "thikana3",
      title: "Thikana3",
      subtitle: "Full-Stack Location-Based Property & Address Management Portal",
      category: "Full-Stack",
      description: "Location-aware property listing and address registry platform facilitating student housing searches, verified property inquiries, and interactive mapping.",
      highlights: [
        "Built responsive location search engine with dynamic filtering by neighborhood and budget",
        "Architected relational database backend handling listings, media assets, and verified landlord profiles",
        "Integrated direct messaging and inquiry management system"
      ],
      architectureDetails: "Full-stack client-server architecture with REST endpoints and relational data layer.",
      techStack: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "REST APIs"],
      role: "Full-Stack Developer",
      year: "2024",
      githubUrl: "https://github.com/abusayedrabbi327/Thikana3",
      isFeatured: true
    },
    {
      id: "nsn-wellness",
      title: "NSN_for_better_life",
      subtitle: "Community Wellness, Health Tracking & Lifestyle Optimization",
      category: "Full-Stack",
      description: "A holistic community and lifestyle optimization web portal empowering users to log health metrics, track sustainable living habits, and access wellness resources.",
      highlights: [
        "Created daily habit tracking dashboard with interactive progress analytics",
        "Implemented community eco-action challenges with verified activity logs",
        "Engineered responsive UI accessible on mobile and desktop browsers"
      ],
      architectureDetails: "Full-stack application with normalized user habit logs and analytics aggregates.",
      techStack: ["JavaScript", "PHP / Node.js", "MySQL", "HTML5", "CSS3 / Tailwind"],
      role: "Lead Full-Stack Developer",
      year: "2023 — 2024",
      githubUrl: "https://github.com/abusayedrabbi327/NSN_for_better_life",
      isFeatured: false
    },
    {
      id: "library-ms",
      title: "Library-MS",
      subtitle: "Digital Library Management & Automated Cataloging System",
      category: "Enterprise",
      description: "Enterprise database system for institutional libraries managing digital book inventories, barcode cataloging, student loan privileges, and overdue fine calculations.",
      highlights: [
        "Designed comprehensive relational schema with foreign key cascades and book reservation queues",
        "Implemented automated fine calculation heuristics and loan return tracking",
        "Built searchable catalog index supporting ISBN, author, and genre queries"
      ],
      architectureDetails: "RDBMS architecture with ACID transactions and structured SQL stored procedures.",
      techStack: ["MySQL", "SQL", "Database Design", "Java / Python", "Backend"],
      role: "Database Architect & Developer",
      year: "2023",
      githubUrl: "https://github.com/abusayedrabbi327/Library-MS",
      isFeatured: false
    },
    {
      id: "spin-wheel",
      title: "Spin_wheel_for_fun",
      subtitle: "Interactive Physics-Based Wheel of Fortune & Decision Game",
      category: "Full-Stack",
      description: "Interactive HTML5 Canvas web application featuring smooth physics damping, customizable prize segments, sound effects, and randomized outcome verification.",
      highlights: [
        "Engineered custom angular acceleration and friction deceleration physics loop on HTML5 Canvas",
        "Built dynamic modal for users to input custom item labels and weighted probabilities",
        "Zero-dependency pure JavaScript implementation"
      ],
      architectureDetails: "Canvas 2D rendering loop with RAF (requestAnimationFrame) physics calculation.",
      techStack: ["JavaScript (ES6+)", "HTML5 Canvas", "CSS3 Animations", "Web Audio API"],
      role: "Creator & Frontend Developer",
      year: "2023",
      githubUrl: "https://github.com/abusayedrabbi327/Spin_wheel_for_fun",
      isFeatured: false
    },
    {
      id: "user-manager",
      title: "User-Manager-",
      subtitle: "Secure User Authentication & RBAC Management Microservice",
      category: "Enterprise",
      description: "Backend authentication and user lifecycle service featuring hashed credentials, JWT token lifecycle management, password resets, and role-based access control.",
      highlights: [
        "Implemented bcrypt password hashing and secure token refresh rotation",
        "Built middleware for granular route protection across user, moderator, and admin roles"
      ],
      architectureDetails: "Express.js REST microservice with token authorization middleware.",
      techStack: ["Node.js", "Express", "JWT", "Bcrypt", "MongoDB / MySQL"],
      role: "Backend Developer",
      year: "2023",
      githubUrl: "https://github.com/abusayedrabbi327/User-Manager-",
      isFeatured: false
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      iconName: "Code2",
      skills: [
        { name: "Python", level: "Expert", isPrimary: true },
        { name: "JavaScript (ES6+)", level: "Expert", isPrimary: true },
        { name: "TypeScript", level: "Advanced", isPrimary: true },
        { name: "Java", level: "Advanced", isPrimary: true },
        { name: "C / C++", level: "Proficient", isPrimary: true },
        { name: "PHP", level: "Proficient" },
        { name: "SQL", level: "Expert", isPrimary: true },
        { name: "Bash / Shell", level: "Proficient" },
        { name: "HTML5 / CSS3", level: "Expert" }
      ]
    },
    {
      category: "AI, ML & NLP",
      iconName: "BrainCircuit",
      skills: [
        { name: "PyTorch", level: "Advanced", isPrimary: true },
        { name: "TensorFlow", level: "Proficient", isPrimary: true },
        { name: "Scikit-Learn", level: "Expert", isPrimary: true },
        { name: "OpenAI API & LangChain", level: "Advanced", isPrimary: true },
        { name: "Transformers / HuggingFace", level: "Advanced" },
        { name: "SHAP & LIME (XAI)", level: "Advanced", isPrimary: true },
        { name: "Pandas & NumPy", level: "Expert", isPrimary: true },
        { name: "Feature Engineering", level: "Expert" }
      ]
    },
    {
      category: "Web & Full-Stack Frameworks",
      iconName: "Layers",
      skills: [
        { name: "React (18 / 19)", level: "Expert", isPrimary: true },
        { name: "Next.js / Astro", level: "Advanced", isPrimary: true },
        { name: "Node.js & Express", level: "Expert", isPrimary: true },
        { name: "Flask & Django", level: "Proficient", isPrimary: true },
        { name: "Tailwind CSS v4", level: "Expert", isPrimary: true },
        { name: "Socket.io (WebSockets)", level: "Advanced" },
        { name: "RESTful API Design", level: "Expert" }
      ]
    },
    {
      category: "Cybersecurity & Systems",
      iconName: "ShieldAlert",
      skills: [
        { name: "Network Intrusion Detection (NIDS)", level: "Advanced", isPrimary: true },
        { name: "Real-Time Telemetry Analysis", level: "Advanced", isPrimary: true },
        { name: "Wireshark & PCAP Inspection", level: "Advanced", isPrimary: true },
        { name: "Security Sandboxing & URL Analysis", level: "Advanced" },
        { name: "Linux Hardening & Syscalls", level: "Advanced" },
        { name: "Cryptographic Hashing", level: "Advanced" }
      ]
    },
    {
      category: "Databases & Storage",
      iconName: "Database",
      skills: [
        { name: "MySQL", level: "Expert", isPrimary: true },
        { name: "PostgreSQL", level: "Proficient", isPrimary: true },
        { name: "MongoDB", level: "Advanced", isPrimary: true },
        { name: "SQLite", level: "Expert" },
        { name: "Schema Normalization & ACID", level: "Expert" }
      ]
    },
    {
      category: "DevOps, Cloud & Design Tools",
      iconName: "ServerCrash",
      skills: [
        { name: "Docker & Containers", level: "Advanced", isPrimary: true },
        { name: "Git & GitHub Actions CI/CD", level: "Expert", isPrimary: true },
        { name: "Linux (Ubuntu / Debian)", level: "Advanced" },
        { name: "Nginx & Apache", level: "Advanced" },
        { name: "Postman API Testing", level: "Expert" },
        { name: "AWS & Firebase", level: "Proficient" },
        { name: "Figma & UI Prototyping", level: "Advanced" }
      ]
    }
  ],
  leadership: [
    {
      role: "Treasurer & Organizing Head",
      organization: "UIU English Language Forum (UIU ELF)",
      period: "2023 — Present",
      type: "Leadership",
      location: "United International University",
      achievements: [
        "Managed financial budgeting, vendor negotiations, and asset accounting for university-wide workshops and flagship inter-university language festivals",
        "Supervised executive organizing teams across multiple large-scale student conferences with 500+ attendees",
        "Spearheaded digital registration pipelines and automated tracking workflows for club events"
      ],
      badge: "Executive Board",
      repoUrl: "https://github.com/Minhajh2o/UIU-English-Language-Forum-UIUELF-"
    },
    {
      role: "Head of IT & Digital Systems",
      organization: "UIU Theater & Film Club",
      period: "2023 — Present",
      type: "Leadership",
      location: "United International University",
      achievements: [
        "Directed all digital IT infrastructure, event ticketing systems, and multimedia stage tech for major drama productions",
        "Coordinated sound, lighting automation, and live projection systems across multiple stage productions and film festivals"
      ],
      badge: "IT Leadership"
    },
    {
      role: "Senior Executive",
      organization: "UIU Robotics Club",
      period: "2022 — 2024",
      type: "Extracurricular",
      location: "United International University",
      achievements: [
        "Assisted in hardware-software integration workshops, sensor telemetry calibration, and micro-controller programming sessions",
        "Participated in national robotics competitions and mentored junior members in Python/C++ micro-controller scripting"
      ],
      badge: "Technical Executive"
    },
    {
      role: "Enterprise Collaborative Development",
      organization: "BiniOrbit-SE Team",
      period: "2024",
      type: "Community",
      location: "Academic Enterprise Collaboration",
      achievements: [
        "Collaborated on enterprise software engineering practices, testing matrices, and architecture reviews",
        "Participated in team pull-request reviews, sprint planning, and system modularization"
      ],
      badge: "Software Engineering",
      repoUrl: "https://github.com/Ishrak-1520/BiniOrbit-SE"
    }
  ]
};
