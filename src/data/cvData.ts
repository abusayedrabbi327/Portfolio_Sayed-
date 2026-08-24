export interface ResearchItem {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: 'Cybersecurity' | 'Explainable AI' | 'LLM Optimization' | 'Network Defense';
  status: 'Published' | 'In Preparation' | 'Under Review' | 'Preprint';
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
  category: 'AI/ML' | 'Cybersecurity' | 'Full-Stack' | 'Desktop';
  description: string;
  highlights: string[];
  architectureDetails: string;
  techStack: string[];
  role: string;
  year: string;
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  isFeatured: boolean;
  colorTheme: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient' | 'Familiar';
    categoryTag?: string;
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
  badges: string[];
  availability: {
    status: 'available' | 'busy';
    text: string;
  };
  stats: { label: string; value: string; suffix?: string }[];
  education: EducationItem[];
  research: ResearchItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  leadership: LeadershipItem[];
}

export const cvData: ProfileData = {
  name: "Abu Sayed Rabbi",
  title: "Undergraduate Computer Science & Engineering Researcher & Software Engineer",
  roleSubtitle: "Building Intelligent Systems at the Intersection of AI, Cybersecurity & Software Engineering",
  location: "Dhaka, Bangladesh",
  email: "abusayedrabbi327@gmail.com",
  github: "https://github.com/abusayedrabbi327",
  linkedin: "https://linkedin.com/in/abusayedrabbi",
  bioSummary: "Final-year Computer Science and Engineering undergraduate at United International University (UIU). Specializing in AI-driven cybersecurity, Explainable AI (XAI) for real-time intrusion detection, high-performance desktop systems, and modern scalable full-stack web applications. Passionate about turning complex academic research into deployable, human-interpretable engineering solutions.",
  badges: [
    "🎓 UIU CSE Senior",
    "🔒 Cyber Defense & IDS",
    "🤖 Explainable AI (XAI)",
    "⚡ Full-Stack & Systems"
  ],
  availability: {
    status: "available",
    text: "Open for Research Collaborations & Software Engineering Roles"
  },
  stats: [
    { label: "Research Innovations", value: "4", suffix: "+" },
    { label: "Production Projects", value: "10", suffix: "+" },
    { label: "Intrusion Detection Acc.", value: "99.4", suffix: "%" },
    { label: "Leadership Tenures", value: "4", suffix: " Orgs" }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      field: "Intelligent Systems, Cybersecurity & Software Engineering",
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
      status: "In Preparation",
      authors: ["Abu Sayed Rabbi", "Research Team", "Faculty Advisors @ UIU"],
      venue: "IEEE / Springer Cyber Defense Track (Targeted)",
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
      codeUrl: "https://github.com/abusayedrabbi327",
      isFeatured: true
    },
    {
      id: "rt-xnids",
      title: "RT-XNIDS: Real-Time Explainable Network Intrusion Detection with High-Throughput Flows",
      shortTitle: "RT-XNIDS",
      tagline: "Explainable deep learning framework for zero-day network anomaly detection and flow classification",
      category: "Network Defense",
      status: "In Preparation",
      authors: ["Abu Sayed Rabbi", "Collaborators"],
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
      tags: ["Cybersecurity", "Network IDS", "Machine Learning", "Scikit-Learn", "Snort/Suricata", "Wireshark"],
      codeUrl: "https://github.com/abusayedrabbi327",
      isFeatured: true
    },
    {
      id: "sift-engine",
      title: "SIFT: Scalable Interpretable Feature Transformation for High-Dimensional Telemetry",
      shortTitle: "SIFT Pipeline",
      tagline: "Dimensionality reduction preserving human-interpretable security semantic attributes",
      category: "Explainable AI",
      status: "Preprint",
      authors: ["Abu Sayed Rabbi"],
      year: "2024",
      abstract: "Standard dimensionality reduction techniques like PCA and UMAP destroy the physical meaning of network features (such as packet size, TTL, and TCP flags). SIFT introduces structured semantic clustering that compresses 80+ network telemetry features into orthogonal, human-understandable meta-dimensions without losing predictive fidelity.",
      contributions: [
        "Preserved 98.7% variance while maintaining 100% human-interpretable semantic metadata tags",
        "Reduced downstream SHAP computation overhead by 4.2x for real-time edge devices"
      ],
      metrics: [
        { label: "SHAP Speedup", value: "4.2x", detail: "Compared to full feature space" },
        { label: "Semantic Retention", value: "100%", detail: "Direct mapping to physical network properties" }
      ],
      tags: ["XAI", "Feature Engineering", "Interpretability", "Data Science", "Python"],
      isFeatured: false
    },
    {
      id: "ecocode-llm",
      title: "EcoCode-LLM: Carbon-Aware Code Optimization and Efficient Inference",
      shortTitle: "EcoCode-LLM",
      tagline: "Exploring algorithmic efficiency and energy footprint minimization in automated code generation",
      category: "LLM Optimization",
      status: "In Preparation",
      authors: ["Abu Sayed Rabbi"],
      year: "2025",
      abstract: "Investigating the intersection between large language model code synthesis, computational runtime complexity, and carbon energy footprint. Developing heuristic evaluation benchmarks that guide LLMs toward generating energy-efficient, memory-optimized algorithms.",
      contributions: [
        "Constructed synthetic benchmark suites measuring CPU cycles and memory footprint of LLM-generated code",
        "Evaluated prompt-engineering strategies enforcing algorithmic O(n) bounds in generated Python and C++ code"
      ],
      metrics: [
        { label: "Energy Optimization", value: "28%", detail: "Reduction in runtime CPU cycles on benchmark loops" }
      ],
      tags: ["LLMs", "Green Computing", "Algorithmic Efficiency", "PyTorch", "Python"],
      isFeatured: false
    }
  ],
  projects: [
    {
      id: "pocketguru",
      title: "PocketGuru",
      subtitle: "AI-Powered Student Financial & Academic Companion",
      category: "Full-Stack",
      description: "A comprehensive, high-velocity web platform designed to streamline student academic planning, expense management, and AI-driven study schedules with interactive visual dashboards.",
      highlights: [
        "Engineered responsive, accessible UI using React 18, TypeScript, Tailwind CSS, and Radix UI primitives",
        "Designed end-to-end interactive mockups and design system in Figma before translating to production code",
        "Integrated client-side state caching, optimistic UI updates, and dark/light theme switching with zero layout shift"
      ],
      architectureDetails: "Modular React 18 component tree with custom hook state management, Radix headless accessible primitives, and fluid Tailwind CSS utility tokens.",
      techStack: ["React 18", "TypeScript", "Tailwind CSS", "Radix UI", "Figma", "Vite"],
      role: "Lead Frontend Architect & UI/UX Designer",
      year: "2024",
      metrics: [
        { label: "Component Count", value: "35+" },
        { label: "Lighthouse Performance", value: "98/100" }
      ],
      githubUrl: "https://github.com/abusayedrabbi327/pocketguru",
      liveUrl: "https://pocketguru-preview.vercel.app",
      isFeatured: true,
      colorTheme: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30"
    },
    {
      id: "fender-v35",
      title: "Fender v3.5 Professional",
      subtitle: "High-Performance Multi-Threaded Duplicate File Hunter & Storage Organizer",
      category: "Desktop",
      description: "A production-grade, multi-threaded desktop utility engineered in Python and PyQt5. Utilizes xxhash (C-level hashing) and tiered size-hash verification to index and deduplicate terabytes of disk storage with real-time document previewing.",
      highlights: [
        "Implemented 3-stage deduplication pipeline: quick size triage -> chunked xxhash64 header -> full byte-level validation",
        "Built rich multi-format preview engine supporting PDF (PyMuPDF), Word (.docx), PowerPoint (.pptx), and Images (Pillow)",
        "Integrated asynchronous QThread worker pools for unfreezing UI during multi-gigabyte disk scans",
        "Designed modern custom dark GUI with batch auto-selection heuristics and safe trash bin recovery (send2trash)"
      ],
      architectureDetails: "PyQt5 MVC architecture with decoupled scanning worker threads, xxhash fast-hashing native binding, and robust error-handling file locks.",
      techStack: ["Python 3", "PyQt5", "xxhash (C-speed)", "PyMuPDF", "python-docx", "Pillow", "send2trash"],
      role: "Sole Creator & Lead Systems Developer",
      year: "2024 — 2025",
      metrics: [
        { label: "Scanning Speed", value: "50,000+ files/min" },
        { label: "Preview Formats", value: "PDF, DOCX, PPTX, Images" }
      ],
      githubUrl: "https://github.com/abusayedrabbi327/fender-file-manager",
      isFeatured: true,
      colorTheme: "from-amber-500/20 to-orange-500/20 border-amber-500/30"
    },
    {
      id: "thikana",
      title: "Thikana Marketplace",
      subtitle: "Full-Stack Real-Time Housing & Student Marketplace",
      category: "Full-Stack",
      description: "A multi-vendor real-time student housing and marketplace ecosystem built with React 19, Node.js, Express, Socket.io, and relational MySQL database.",
      highlights: [
        "Built bi-directional real-time chat and instantaneous bidding notifications using Socket.io WebSockets",
        "Architected normalized relational database schema in MySQL for user auth, property listings, and escrow records",
        "Implemented JWT-based secure role-based access control (RBAC) with sanitized SQL queries preventing injection"
      ],
      architectureDetails: "Client-server architecture with React 19 frontend communicating via RESTful API and WebSocket event channels to an Express.js backend cluster.",
      techStack: ["React 19", "Node.js", "Express", "Socket.io", "MySQL", "JWT", "Tailwind CSS"],
      role: "Full-Stack Engineer & Database Architect",
      year: "2024",
      metrics: [
        { label: "Real-Time Latency", value: "< 45ms" },
        { label: "Relational Tables", value: "14 Normalized" }
      ],
      githubUrl: "https://github.com/abusayedrabbi327/thikana",
      isFeatured: true,
      colorTheme: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30"
    },
    {
      id: "neighborhood-sustainability-network",
      title: "Neighborhood Sustainability Network (NSN)",
      subtitle: "Community Carbon-Footprint & Resource Sharing Web Portal",
      category: "Full-Stack",
      description: "A community-focused web platform empowering local neighborhoods to coordinate eco-friendly initiatives, tree planting drives, and localized carbon footprint reduction logs.",
      highlights: [
        "Engineered responsive server-rendered web application with PHP, MySQL, and modern CSS/JavaScript",
        "Created dynamic impact analytics dashboard tracking saved kilograms of CO2 per neighborhood zone",
        "Implemented automated monthly neighborhood leaderboard system with verified activity logs"
      ],
      architectureDetails: "LAMP stack application with structured MVC routing, relational database foreign key cascades, and AJAX live data polling.",
      techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap/Tailwind"],
      role: "Backend & Database Developer",
      year: "2023 — 2024",
      metrics: [
        { label: "Community Actions", value: "1,200+ Logged" }
      ],
      githubUrl: "https://github.com/abusayedrabbi327/nsn-sustainability-portal",
      isFeatured: false,
      colorTheme: "from-green-500/20 to-emerald-500/20 border-green-500/30"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      iconName: "Code2",
      skills: [
        { name: "Python", level: "Expert", isPrimary: true },
        { name: "TypeScript", level: "Advanced", isPrimary: true },
        { name: "JavaScript (ES6+)", level: "Expert", isPrimary: true },
        { name: "C / C++", level: "Proficient", isPrimary: true },
        { name: "Java", level: "Proficient" },
        { name: "PHP", level: "Proficient" },
        { name: "SQL", level: "Advanced", isPrimary: true },
        { name: "HTML5 / CSS3", level: "Expert" }
      ]
    },
    {
      category: "AI, ML & Explainability",
      iconName: "BrainCircuit",
      skills: [
        { name: "PyTorch", level: "Advanced", isPrimary: true },
        { name: "Scikit-Learn", level: "Expert", isPrimary: true },
        { name: "SHAP (XAI)", level: "Advanced", isPrimary: true },
        { name: "LIME (XAI)", level: "Advanced", isPrimary: true },
        { name: "Pandas & NumPy", level: "Expert", isPrimary: true },
        { name: "OpenCV", level: "Proficient" },
        { name: "Feature Engineering & SIFT", level: "Expert" },
        { name: "Neural Networks & GBDT", level: "Advanced" }
      ]
    },
    {
      category: "Cybersecurity & Systems",
      iconName: "ShieldAlert",
      skills: [
        { name: "Network Intrusion Detection (NIDS)", level: "Advanced", isPrimary: true },
        { name: "Host Intrusion Detection (HIDS)", level: "Advanced", isPrimary: true },
        { name: "Wireshark & PCAP Analysis", level: "Advanced", isPrimary: true },
        { name: "Snort / Suricata", level: "Proficient" },
        { name: "eBPF & Syscall Telemetry", level: "Proficient" },
        { name: "Linux System Hardening", level: "Advanced" },
        { name: "Reverse Engineering Basics", level: "Proficient" },
        { name: "Multi-threaded Systems (xxhash)", level: "Expert" }
      ]
    },
    {
      category: "Web & Backend Engineering",
      iconName: "Layers",
      skills: [
        { name: "React (18 / 19)", level: "Expert", isPrimary: true },
        { name: "Next.js / Astro", level: "Advanced", isPrimary: true },
        { name: "Node.js & Express", level: "Advanced", isPrimary: true },
        { name: "Socket.io (WebSockets)", level: "Advanced" },
        { name: "Tailwind CSS v4", level: "Expert", isPrimary: true },
        { name: "RESTful API Architecture", level: "Expert" },
        { name: "Radix UI / Headless UI", level: "Advanced" }
      ]
    },
    {
      category: "Databases, DevOps & Cloud",
      iconName: "ServerCrash",
      skills: [
        { name: "MySQL / MariaDB", level: "Advanced", isPrimary: true },
        { name: "PostgreSQL", level: "Proficient" },
        { name: "MongoDB", level: "Proficient" },
        { name: "Docker & Containerization", level: "Advanced", isPrimary: true },
        { name: "Git & GitHub Actions CI/CD", level: "Advanced", isPrimary: true },
        { name: "Nginx & Reverse Proxies", level: "Advanced" },
        { name: "Linux (Ubuntu, Debian, Alpine)", level: "Advanced" },
        { name: "Cloudflare Pages & Vercel Edge", level: "Advanced" }
      ]
    },
    {
      category: "Desktop & UI Design",
      iconName: "AppWindow",
      skills: [
        { name: "PyQt5 / Qt Desktop", level: "Advanced", isPrimary: true },
        { name: "Figma (UI/UX Systems)", level: "Advanced", isPrimary: true },
        { name: "PyMuPDF & Document Parsing", level: "Advanced" },
        { name: "Pillow Image Processing", level: "Advanced" }
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
      badge: "Executive Board"
    },
    {
      role: "Head of IT & Digital Systems",
      organization: "UIU Theater & Film Club",
      period: "2023 — Present",
      type: "Leadership",
      location: "United International University",
      achievements: [
        "Directed all digital IT infrastructure, event ticketing systems, and multimedia stage tech for major drama productions",
        "Coordinated sound, lighting automation, and live projection systems across multiple stage productions and film festivals",
        "Designed promotional media and led technical logistics for campus entertainment events"
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
        "Participated in national robotics competitions and mentored junior members in Python/C++ micro-controller scripting",
        "Organized inter-departmental technical exhibitions and robotic design hackathons"
      ],
      badge: "Technical Executive"
    },
    {
      role: "Peer Mentorship & Code Contributor",
      organization: "Scaler Academy Community",
      period: "2023 — Present",
      type: "Mentorship",
      location: "Remote / Global",
      achievements: [
        "Mentored undergraduate peers in Data Structures & Algorithms, Clean Code principles, and Python optimization",
        "Conducted code review sessions and problem-solving workshops covering graph theory, dynamic programming, and systems design"
      ],
      badge: "Community Mentor"
    }
  ]
};
