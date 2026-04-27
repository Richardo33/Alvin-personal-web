export type ProjectItem = {
  title: string;
  eyebrow: string;
  description: string;
  impact: string;
  image: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  stack: string[];
};

export type CertificateItem = {
  title: string;
  issuer: string;
  image: string;
  note: string;
};

export const profile = {
  name: "Alvin Rikardo",
  firstName: "Alvin",
  role: "Full-Stack Developer",
  location: "Bandung, Indonesia",
  availability: "Available for freelance, contract, and remote product teams",
  summary:
    "I design polished interfaces, build reliable backend flows, and turn product ideas into software that feels fast, thoughtful, and ready to grow.",
  about:
    "With a background that spans frontend delivery, backend integration, and data-driven systems, I enjoy building products that are clean in the UI, practical in the architecture, and dependable in production.",
  email: "alvinrikardo6@gmail.com",
  phone: "+62 819-9321-8599",
  whatsapp: "https://wa.me/6281993218599",
  github: "https://github.com/Richardo33",
  linkedin: "https://www.linkedin.com/in/alvin-rikardo/",
  instagram: "https://www.instagram.com/richardo_alvin?igsh=bnZ1YXFmZTAybG9j",
  cv: "https://drive.google.com/file/d/1H9OelTsA4Zf8ufHuSH_OSYSKDxbSYbtc/view?usp=drive_link",
  profileImage: "/portfolio/profile/alvin.jpeg",
};

export const metrics = [
  { label: "Years building in teams", value: "2.5+" },
  { label: "Flagship portfolio projects", value: "7" },
  { label: "Certificates highlighted", value: "6" },
];

export const strengths = [
  "Modern React and Next.js application development",
  "Practical backend integration with Express, Prisma, Supabase, and SQL",
  "Product-minded collaboration shaped by Agile delivery experience",
];

export const stackGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React", image: "/portfolio/stack/react.png" },
      { name: "Next.js", image: "/portfolio/stack/next.jpg" },
      { name: "TypeScript", image: "/portfolio/stack/typescript.png" },
      { name: "Tailwind CSS", image: "/portfolio/stack/tailwind.png" },
      { name: "Bootstrap", image: "/portfolio/stack/bootstrap.png" },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Express", image: "/portfolio/stack/javascript.png" },
      { name: "PostgreSQL", image: "/portfolio/stack/postgresql.png" },
      { name: "MySQL", image: "/portfolio/stack/mysql.png" },
      { name: "Prisma", image: "/portfolio/stack/prisma.png" },
    ],
  },
  {
    title: "Delivery & Analytics",
    items: [
      { name: "Databricks", image: "/portfolio/stack/databricks.png" },
      { name: "Jenkins", image: "/portfolio/stack/jenkins.png" },
      { name: "Git", image: "/portfolio/stack/git.png" },
    ],
  },
];

export const stackItems = stackGroups.flatMap((group) => group.items);

export const experiences: ExperienceItem[] = [
  {
    role: "Database Developer",
    company: "AIA Singapore",
    location: "Batam",
    period: "March 2023 - January 2025",

    highlights: [
      "Worked across data architecture and delivery pipelines to support business-critical analytics and application workflows.",
      "Designed and implemented scalable data architecture with PostgreSQL and Databricks.",
      "Managed ETL flows and supported cross-functional teams with reliable data solutions.",
      "Prepared UAT and production releases through Jenkins and Jira within Agile delivery cycles.",
    ],
    stack: ["PostgreSQL", "Databricks", "Jenkins", "Jira", "Git"],
  },
  {
    role: "Junior Data Architect",
    company: "AIA Singapore",
    location: "Batam",
    period: "June 2022 - March 2023",
    highlights: [
      "Built campaign data structures and helped internal teams ship dependable systems from planning through production support.",
      "Delivered end-to-end campaign architecture using PostgreSQL and Databricks.",
      "Developed new database systems aligned to stakeholder requirements.",
      "Contributed to internal front-end features and handled issue escalation for critical jobs.",
    ],
    stack: ["PostgreSQL", "Databricks", "Jenkins", "Jira", "Git"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Work Gantt Navigator",
    eyebrow: "Productivity platform",
    description:
      "A personal work tracker with a gantt-style timeline, task scheduling, and a dashboard-oriented experience for managing daily execution.",
    impact:
      "Focused on clarity, planning flow, and a clean decision-friendly dashboard.",
    image: "/portfolio/projects/work-gantt-navigator.png",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Neon",
      "Supabase",
    ],
    githubUrl: "https://github.com/Richardo33/work-tracker",
    demoUrl: "https://work-gantt-navigator.richardoo.life/",
  },
  {
    title: "NextStep RMS",
    eyebrow: "Recruitment workflow",
    description:
      "An AI-oriented recruitment platform that streamlines screening, scoring, interview flow, and HR communications.",
    impact:
      "Designed to reduce repetitive HR work and create a smoother hiring pipeline.",
    image: "/portfolio/projects/nextstep-rms.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "n8n"],
    githubUrl: "https://github.com/Richardo33/NextStep-rms",
  },
  {
    title: "Circle App",
    eyebrow: "Social platform",
    description:
      "A thread-based social media app with profile management, comments, likes, dislikes, and room for real-time interaction features.",
    impact:
      "Explores richer social UX patterns with a scalable TypeScript-based frontend foundation.",
    image: "/portfolio/projects/circle-app.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/Richardo33/Circle-FE",
  },
  {
    title: "WorkGroup Navigation",
    eyebrow: "Task management",
    description:
      "A personal to-do application with category grouping and drag-and-drop task movement for better organization.",
    impact:
      "Built to make personal planning feel structured without getting visually heavy.",
    image: "/portfolio/projects/workgroup-navigation.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/Richardo33/to-do-list-portfolio",
    demoUrl: "https://workgroup-navigation.richardoo.life/",
  },
  {
    title: "Slotify",
    eyebrow: "Booking system",
    description:
      "A booking platform that manages services, time slots, availability, and confirmation flows via webhooks.",
    impact:
      "Built around reducing scheduling friction and preventing double bookings.",
    image: "/portfolio/projects/slotify.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Express", "Neon"],
    githubUrl: "https://github.com/toriqkun/Bookus-fe",
  },
  {
    title: "Window of World",
    eyebrow: "Reading experience",
    description:
      "A free online reading app that lets users explore books and curate personal reading lists without subscription barriers.",
    impact:
      "Combines a friendly content experience with approachable product behavior.",
    image: "/portfolio/projects/window-of-world.png",
    tech: ["React", "Material UI"],
    githubUrl: "https://github.com/Richardo33/window-world",
    demoUrl: "https://window-world.netlify.app/",
  },
  {
    title: "WaysLink",
    eyebrow: "Reference landing page",
    description:
      "A social-media inspired landing page built as a clean marketing reference project.",
    impact:
      "Shows early product presentation instincts and front-end composition skills.",
    image: "/portfolio/projects/wayslink.png",
    tech: ["React", "Material UI", "Express", "MySQL"],
    githubUrl: "https://github.com/Richardo33/Dumb-link.git",
  },
];

export const certificates: CertificateItem[] = [
  {
    title: "SQL Intermediate",
    issuer: "Training Program",
    image: "/portfolio/certificates/waystalk10.jpg",
    note: "A strong signal of continued learning in database fundamentals and applied SQL.",
  },
  {
    title: "SQL Advanced",
    issuer: "Training Program",
    image: "/portfolio/certificates/sql-advanced.jpg",
    note: "Highlights deeper work around advanced query thinking and data processing.",
  },
  {
    title: "DumbWays Fullstack Certificate",
    issuer: "DumbWays",
    image: "/portfolio/certificates/certificate-dumbways.jpg",
    note: "Represents formal project-based learning in full-stack development.",
  },
  {
    title: "EF SET English Certificate",
    issuer: "EF SET",
    image: "/portfolio/certificates/efset.png",
    note: "Supports international communication readiness for distributed teams.",
  },
  {
    title: "Waystalk Certification",
    issuer: "Waystalk",
    image: "/portfolio/certificates/waystalk1.jpg",
    note: "Part of ongoing learning and technical upskilling efforts.",
  },
  {
    title: "DumbWays Training",
    issuer: "DumbWays",
    image: "/portfolio/certificates/dumbways.jpg",
    note: "A milestone from an intensive practical training environment.",
  },
];
