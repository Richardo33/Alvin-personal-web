import { createReadStream, existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@sanity/client";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function loadEnvFile(filename) {
  const envPath = path.join(rootDir, filename);
  if (!existsSync(envPath)) return;

  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) continue;

    const [, key, rawValue] = match;
    const value = rawValue.trim().replace(/^["']|["']$/g, "");

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(".env");
loadEnvFile(".env.local");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-04-28";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || projectId === "your_project_id") {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Add it to .env.local first."
  );
}

if (!token || token === "your_write_token_for_seed_script") {
  throw new Error(
    "Missing SANITY_API_WRITE_TOKEN. Create a Sanity token with Editor permissions and add it to .env.local."
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const profile = {
  name: "Alvin Rikardo",
  firstName: "Alvin",
  role: "Full-Stack Developer",
  location: "Bandung, Indonesia",
  available: true,
  availabilityText:
    "Available for freelance, contract, and remote product teams",
  bio:
    "A full-stack developer who enjoys taking ideas from interface concept to production-ready workflows with a focus on clarity, performance, and polished detail.",
  summary:
    "I design polished interfaces, build reliable backend flows, and turn product ideas into software that feels fast, thoughtful, and ready to grow.",
  about:
    "With a background that spans frontend delivery, backend integration, and data-driven systems, I enjoy building products that are clean in the UI, practical in the architecture, and dependable in production.",
  aboutList: [
    "Modern React and Next.js application development",
    "Practical backend integration with Express, Prisma, Supabase, and SQL",
    "Product-minded collaboration shaped by Agile delivery experience",
  ],
  email: "alvinrikardo6@gmail.com",
  phone: "+62 819-9321-8599",
  whatsapp: "https://wa.me/6281993218599",
  github: "https://github.com/Richardo33",
  linkedin: "https://www.linkedin.com/in/alvin-rikardo/",
  instagram:
    "https://www.instagram.com/richardo_alvin?igsh=bnZ1YXFmZTAybG9j",
  cvUrl:
    "https://drive.google.com/file/d/1H9OelTsA4Zf8ufHuSH_OSYSKDxbSYbtc/view?usp=drive_link",
  profileImagePath: "/portfolio/profile/alvin.jpeg",
};

const projects = [
  {
    name: "Work Gantt Navigator",
    shortDetail: "Productivity platform",
    description:
      "A personal work tracker with a gantt-style timeline, task scheduling, and a dashboard-oriented experience for managing daily execution.",
    goals:
      "Focused on clarity, planning flow, and a clean decision-friendly dashboard.",
    imagePath: "/portfolio/projects/work-gantt-navigator.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Neon",
      "Supabase",
    ],
    githubUrl: "https://github.com/Richardo33/work-tracker",
    liveDemoUrl: "https://work-gantt-navigator.richardoo.life/",
  },
  {
    name: "NextStep RMS",
    shortDetail: "Recruitment workflow",
    description:
      "An AI-oriented recruitment platform that streamlines screening, scoring, interview flow, and HR communications.",
    goals:
      "Designed to reduce repetitive HR work and create a smoother hiring pipeline.",
    imagePath: "/portfolio/projects/nextstep-rms.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "n8n"],
    githubUrl: "https://github.com/Richardo33/NextStep-rms",
  },
  {
    name: "Circle App",
    shortDetail: "Social platform",
    description:
      "A thread-based social media app with profile management, comments, likes, dislikes, and room for real-time interaction features.",
    goals:
      "Explores richer social UX patterns with a scalable TypeScript-based frontend foundation.",
    imagePath: "/portfolio/projects/circle-app.png",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/Richardo33/Circle-FE",
  },
  {
    name: "WorkGroup Navigation",
    shortDetail: "Task management",
    description:
      "A personal to-do application with category grouping and drag-and-drop task movement for better organization.",
    goals:
      "Built to make personal planning feel structured without getting visually heavy.",
    imagePath: "/portfolio/projects/workgroup-navigation.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/Richardo33/to-do-list-portfolio",
    liveDemoUrl: "https://workgroup-navigation.richardoo.life/",
  },
  {
    name: "Slotify",
    shortDetail: "Booking system",
    description:
      "A booking platform that manages services, time slots, availability, and confirmation flows via webhooks.",
    goals:
      "Built around reducing scheduling friction and preventing double bookings.",
    imagePath: "/portfolio/projects/slotify.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Express", "Neon"],
    githubUrl: "https://github.com/toriqkun/Bookus-fe",
  },
  {
    name: "Window of World",
    shortDetail: "Reading experience",
    description:
      "A free online reading app that lets users explore books and curate personal reading lists without subscription barriers.",
    goals:
      "Combines a friendly content experience with approachable product behavior.",
    imagePath: "/portfolio/projects/window-of-world.png",
    techStack: ["React", "Material UI"],
    githubUrl: "https://github.com/Richardo33/window-world",
    liveDemoUrl: "https://window-world.netlify.app/",
  },
  {
    name: "WaysLink",
    shortDetail: "Reference landing page",
    description:
      "A social-media inspired landing page built as a clean marketing reference project.",
    goals:
      "Shows early product presentation instincts and front-end composition skills.",
    imagePath: "/portfolio/projects/wayslink.png",
    techStack: ["React", "Material UI", "Express", "MySQL"],
    githubUrl: "https://github.com/Richardo33/Dumb-link.git",
  },
];

const skills = [
  ["Frontend", "React", "/portfolio/stack/react.png"],
  ["Frontend", "Next.js", "/portfolio/stack/next.jpg"],
  ["Frontend", "TypeScript", "/portfolio/stack/typescript.png"],
  ["Frontend", "Tailwind CSS", "/portfolio/stack/tailwind.png"],
  ["Frontend", "Bootstrap", "/portfolio/stack/bootstrap.png"],
  ["Backend & Data", "Express", "/portfolio/stack/javascript.png"],
  ["Backend & Data", "PostgreSQL", "/portfolio/stack/postgresql.png"],
  ["Backend & Data", "MySQL", "/portfolio/stack/mysql.png"],
  ["Backend & Data", "Prisma", "/portfolio/stack/prisma.png"],
  ["Delivery & Analytics", "Databricks", "/portfolio/stack/databricks.png"],
  ["Delivery & Analytics", "Jenkins", "/portfolio/stack/jenkins.png"],
  ["Delivery & Analytics", "Git", "/portfolio/stack/git.png"],
];

const experiences = [
  {
    role: "Database Developer",
    company: "AIA Singapore",
    location: "Batam",
    period: "March 2023 - January 2025",
    responsibilities: [
      "Worked across data architecture and delivery pipelines to support business-critical analytics and application workflows.",
      "Designed and implemented scalable data architecture with PostgreSQL and Databricks.",
      "Managed ETL flows and supported cross-functional teams with reliable data solutions.",
      "Prepared UAT and production releases through Jenkins and Jira within Agile delivery cycles.",
    ],
    skills: ["PostgreSQL", "Databricks", "Jenkins", "Jira", "Git"],
    logoPath: "/portfolio/brand/aia.png",
  },
  {
    role: "Junior Data Architect",
    company: "AIA Singapore",
    location: "Batam",
    period: "June 2022 - March 2023",
    responsibilities: [
      "Built campaign data structures and helped internal teams ship dependable systems from planning through production support.",
      "Delivered end-to-end campaign architecture using PostgreSQL and Databricks.",
      "Developed new database systems aligned to stakeholder requirements.",
      "Contributed to internal front-end features and handled issue escalation for critical jobs.",
    ],
    skills: ["PostgreSQL", "Databricks", "Jenkins", "Jira", "Git"],
    logoPath: "/portfolio/brand/aia.png",
  },
];

const certificates = [
  {
    title: "SQL Intermediate",
    certificateType: "Training Program",
    shortDescription:
      "A strong signal of continued learning in database fundamentals and applied SQL.",
    imagePath: "/portfolio/certificates/waystalk10.jpg",
  },
  {
    title: "SQL Advanced",
    certificateType: "Training Program",
    shortDescription:
      "Highlights deeper work around advanced query thinking and data processing.",
    imagePath: "/portfolio/certificates/sql-advanced.jpg",
  },
  {
    title: "DumbWays Fullstack Certificate",
    certificateType: "DumbWays",
    shortDescription:
      "Represents formal project-based learning in full-stack development.",
    imagePath: "/portfolio/certificates/certificate-dumbways.jpg",
  },
  {
    title: "EF SET English Certificate",
    certificateType: "EF SET",
    shortDescription:
      "Supports international communication readiness for distributed teams.",
    imagePath: "/portfolio/certificates/efset.png",
  },
  {
    title: "Waystalk Certification",
    certificateType: "Waystalk",
    shortDescription:
      "Part of ongoing learning and technical upskilling efforts.",
    imagePath: "/portfolio/certificates/waystalk1.jpg",
  },
  {
    title: "DumbWays Training",
    certificateType: "DumbWays",
    shortDescription:
      "A milestone from an intensive practical training environment.",
    imagePath: "/portfolio/certificates/dumbways.jpg",
  },
];

const uploadedAssetFields = new Map();

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function publicFilePath(publicPath) {
  return path.join(rootDir, "public", publicPath.replace(/^\/+/, ""));
}

async function uploadAssetField(type, publicPath, title) {
  if (!publicPath) return undefined;

  const cacheKey = `${type}:${publicPath}`;
  if (uploadedAssetFields.has(cacheKey)) {
    return uploadedAssetFields.get(cacheKey);
  }

  const absolutePath = publicFilePath(publicPath);

  if (!existsSync(absolutePath)) {
    console.warn(`Skipped missing asset: ${publicPath}`);
    return undefined;
  }

  const asset = await client.assets.upload(
    type,
    createReadStream(absolutePath),
    {
      filename: path.basename(absolutePath),
      title,
    }
  );
  const field = {
    _type: type,
    asset: {
      _type: "reference",
      _ref: asset._id,
    },
  };

  uploadedAssetFields.set(cacheKey, field);
  return field;
}

function compact(value) {
  if (Array.isArray(value)) {
    return value.map(compact).filter((item) => item !== undefined);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .map(([key, item]) => [key, compact(item)])
        .filter(([, item]) => item !== undefined)
    );
  }

  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  return value;
}

async function writeDocument(doc) {
  await client.createOrReplace(compact(doc));
  console.log(`Seeded ${doc._type}: ${doc._id}`);
}

async function seed() {
  console.log(`Seeding Sanity dataset "${dataset}" in project "${projectId}"`);

  await writeDocument({
    _id: "profile",
    _type: "profile",
    ...profile,
    profileImage: await uploadAssetField(
      "image",
      profile.profileImagePath,
      profile.name
    ),
    profileImagePath: undefined,
  });

  for (const [index, project] of projects.entries()) {
    await writeDocument({
      _id: `project-${slugify(project.name)}`,
      _type: "project",
      ...project,
      order: index + 1,
      image: await uploadAssetField("image", project.imagePath, project.name),
      imagePath: undefined,
    });
  }

  for (const [index, [category, name, iconPath]] of skills.entries()) {
    await writeDocument({
      _id: `skill-${slugify(name)}`,
      _type: "skill",
      name,
      category,
      order: index + 1,
      icon: await uploadAssetField("image", iconPath, name),
    });
  }

  for (const [index, experience] of experiences.entries()) {
    await writeDocument({
      _id: `experience-${slugify(
        `${experience.company}-${experience.role}-${experience.period}`
      )}`,
      _type: "experience",
      ...experience,
      order: index + 1,
      logo: await uploadAssetField(
        "image",
        experience.logoPath,
        experience.company
      ),
      logoPath: undefined,
    });
  }

  for (const [index, certificate] of certificates.entries()) {
    await writeDocument({
      _id: `certificate-${slugify(certificate.title)}`,
      _type: "certificate",
      ...certificate,
      order: index + 1,
      image: await uploadAssetField(
        "image",
        certificate.imagePath,
        certificate.title
      ),
      imagePath: undefined,
    });
  }

  console.log("Sanity seed complete.");
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
