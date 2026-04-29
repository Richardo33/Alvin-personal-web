import "server-only";

import { client } from "@/sanity/lib/client";
import { portfolioQuery } from "@/sanity/lib/queries";
import { isSanityConfigured } from "@/sanity/env";
import {
  portfolioData,
  type CertificateItem,
  type ExperienceItem,
  type MetricItem,
  type PortfolioContent,
  type ProfileData,
  type ProjectItem,
  type SkillGroup,
  type SkillItem,
} from "@/lib/portfolio-data";

type RawProfile = Partial<
  Omit<ProfileData, "availability" | "cv" | "profileImage">
> & {
  availabilityText?: string | null;
  aboutList?: string[] | null;
  cv?: string | null;
  profileImage?: string | null;
};

type RawPortfolioContent = {
  profile?: RawProfile | null;
  projects?: Partial<ProjectItem>[] | null;
  skills?: SkillItem[] | null;
  experiences?: Partial<ExperienceItem>[] | null;
  certificates?: Partial<CertificateItem>[] | null;
};

const fallbackSkillImages = new Map(
  portfolioData.stackItems.map((item) => [item.name.toLowerCase(), item.image])
);

const monthIndex = new Map<string, number>(
  [
    ["jan", 0],
    ["january", 0],
    ["januari", 0],
    ["feb", 1],
    ["february", 1],
    ["februari", 1],
    ["mar", 2],
    ["march", 2],
    ["maret", 2],
    ["apr", 3],
    ["april", 3],
    ["may", 4],
    ["mei", 4],
    ["jun", 5],
    ["june", 5],
    ["juni", 5],
    ["jul", 6],
    ["july", 6],
    ["juli", 6],
    ["aug", 7],
    ["august", 7],
    ["agustus", 7],
    ["sep", 8],
    ["sept", 8],
    ["september", 8],
    ["oct", 9],
    ["october", 9],
    ["oktober", 9],
    ["nov", 10],
    ["november", 10],
    ["dec", 11],
    ["december", 11],
    ["desember", 11],
  ]
);

function textValue(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function stringList(value: unknown, fallback: string[]) {
  return Array.isArray(value) && value.length
    ? value.filter((item): item is string => typeof item === "string")
    : fallback;
}

function normalizeProfile(raw?: RawProfile | null): {
  profile: ProfileData;
  strengths: string[];
} {
  if (!raw) {
    return {
      profile: portfolioData.profile,
      strengths: portfolioData.strengths,
    };
  }

  const available =
    typeof raw.available === "boolean"
      ? raw.available
      : portfolioData.profile.available;

  return {
    profile: {
      name: textValue(raw.name, portfolioData.profile.name),
      firstName: textValue(raw.firstName, portfolioData.profile.firstName),
      role: textValue(raw.role, portfolioData.profile.role),
      location: textValue(raw.location, portfolioData.profile.location),
      available,
      availability: textValue(
        raw.availabilityText,
        available
          ? portfolioData.profile.availability
          : "Not available for new work right now"
      ),
      bio: textValue(raw.bio, portfolioData.profile.bio),
      summary: textValue(raw.summary, portfolioData.profile.summary),
      about: textValue(raw.about, portfolioData.profile.about),
      email: textValue(raw.email, portfolioData.profile.email),
      phone: textValue(raw.phone, portfolioData.profile.phone),
      whatsapp: textValue(raw.whatsapp, portfolioData.profile.whatsapp),
      github: textValue(raw.github, portfolioData.profile.github),
      linkedin: textValue(raw.linkedin, portfolioData.profile.linkedin),
      instagram: textValue(raw.instagram, portfolioData.profile.instagram),
      cv: textValue(raw.cv, portfolioData.profile.cv),
      profileImage: textValue(
        raw.profileImage,
        portfolioData.profile.profileImage
      ),
    },
    strengths: stringList(raw.aboutList, portfolioData.strengths),
  };
}

function normalizeProjects(raw?: Partial<ProjectItem>[] | null) {
  if (!raw?.length) return portfolioData.projects;

  return raw.map((item, index): ProjectItem => {
    const fallback = portfolioData.projects[index % portfolioData.projects.length];

    return {
      title: textValue(item.title, fallback.title),
      eyebrow: textValue(item.eyebrow, fallback.eyebrow),
      description: textValue(item.description, fallback.description),
      impact: textValue(item.impact, fallback.impact),
      image: textValue(item.image, fallback.image),
      tech: stringList(item.tech, fallback.tech),
      githubUrl: textValue(item.githubUrl, fallback.githubUrl ?? ""),
      demoUrl: textValue(item.demoUrl, fallback.demoUrl ?? ""),
    };
  });
}

function normalizeSkills(raw?: SkillItem[] | null): SkillGroup[] {
  if (!raw?.length) return portfolioData.stackGroups;

  const groups = new Map<string, SkillItem[]>();

  raw.forEach((item) => {
    const name = textValue(item.name, "");
    if (!name) return;

    const category = textValue(item.category, "Other");
    const image = textValue(
      item.image,
      fallbackSkillImages.get(name.toLowerCase()) ?? "/portfolio/stack/git.png"
    );
    const groupItems = groups.get(category) ?? [];

    groupItems.push({ name, image, category });
    groups.set(category, groupItems);
  });

  const stackGroups = Array.from(groups.entries()).map(([title, items]) => ({
    title,
    items,
  }));

  return stackGroups.length ? stackGroups : portfolioData.stackGroups;
}

function normalizeExperiences(raw?: Partial<ExperienceItem>[] | null) {
  if (!raw?.length) return portfolioData.experiences;

  return raw.map((item, index): ExperienceItem => {
    const fallback =
      portfolioData.experiences[index % portfolioData.experiences.length];

    return {
      role: textValue(item.role, fallback.role),
      company: textValue(item.company, fallback.company),
      location: textValue(item.location, fallback.location),
      period: textValue(item.period, fallback.period),
      highlights: stringList(item.highlights, fallback.highlights),
      stack: stringList(item.stack, fallback.stack),
      logo: textValue(item.logo, fallback.logo ?? "/portfolio/brand/aia.png"),
    };
  });
}

function normalizeCertificates(raw?: Partial<CertificateItem>[] | null) {
  if (!raw?.length) return portfolioData.certificates;

  return raw.map((item, index): CertificateItem => {
    const fallback =
      portfolioData.certificates[index % portfolioData.certificates.length];

    return {
      title: textValue(item.title, fallback.title),
      issuer: textValue(item.issuer, fallback.issuer),
      certificateType: textValue(
        item.certificateType,
        fallback.certificateType ?? fallback.issuer
      ),
      image: textValue(item.image, fallback.image),
      note: textValue(item.note, fallback.note),
      fileUrl: textValue(item.fileUrl, fallback.fileUrl ?? ""),
    };
  });
}

function parsePeriodPoint(
  value: string,
  boundary: "start" | "end",
  today = new Date()
) {
  const normalized = value.trim().toLowerCase();

  if (!normalized || /^(present|current|now|sekarang)$/i.test(normalized)) {
    return today.getFullYear() * 12 + today.getMonth();
  }

  const match = normalized.match(
    /^(?:(jan(?:uary|uari)?|feb(?:ruary|ruari)?|mar(?:ch|et)?|apr(?:il)?|may|mei|jun(?:e|i)?|jul(?:y|i)?|aug(?:ust|ustus)?|sep(?:t|tember)?|oct(?:ober)?|oktober|nov(?:ember)?|dec(?:ember)?|desember)\s+)?(\d{4})$/
  );

  if (!match) return null;

  const year = Number(match[2]);
  const month = match[1]
    ? monthIndex.get(match[1])
    : boundary === "start"
      ? 0
      : 11;

  if (!Number.isFinite(year) || month === undefined) return null;

  return year * 12 + month;
}

function countExperienceMonths(experiences: ExperienceItem[]) {
  const workedMonths = new Set<number>();

  experiences.forEach((experience) => {
    const [rawStart, rawEnd] = experience.period
      .split(/\s+[-–—]\s+/)
      .map((part) => part.trim());

    if (!rawStart) return;

    const start = parsePeriodPoint(rawStart, "start");
    const end = parsePeriodPoint(rawEnd || rawStart, "end");

    if (start === null || end === null) return;

    const firstMonth = Math.min(start, end);
    const lastMonth = Math.max(start, end);

    for (let month = firstMonth; month <= lastMonth; month += 1) {
      workedMonths.add(month);
    }
  });

  return workedMonths.size;
}

function formatExperienceYears(months: number) {
  if (months <= 0) return "0";

  const years = months / 12;

  if (months % 12 === 0) {
    return `${years}+`;
  }

  return `${Math.floor(years * 10) / 10}+`;
}

function buildMetrics({
  experiences,
  projects,
  certificates,
}: {
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  certificates: CertificateItem[];
}): MetricItem[] {
  return [
    {
      label: "Years building in teams",
      value: formatExperienceYears(countExperienceMonths(experiences)),
    },
    {
      label: "Flagship portfolio projects",
      value: String(projects.length),
    },
    {
      label: "Certificates highlighted",
      value: String(certificates.length),
    },
  ];
}

function withDynamicMetrics(content: Omit<PortfolioContent, "metrics">) {
  return {
    ...content,
    metrics: buildMetrics(content),
  };
}

export async function getPortfolioContent(): Promise<PortfolioContent> {
  if (!isSanityConfigured) {
    return withDynamicMetrics({
      profile: portfolioData.profile,
      strengths: portfolioData.strengths,
      stackGroups: portfolioData.stackGroups,
      stackItems: portfolioData.stackItems,
      experiences: portfolioData.experiences,
      projects: portfolioData.projects,
      certificates: portfolioData.certificates,
    });
  }

  try {
    const data = await client.fetch<RawPortfolioContent>(
      portfolioQuery,
      {},
      { cache: "no-store", perspective: "published" }
    );

    const { profile, strengths } = normalizeProfile(data.profile);
    const stackGroups = normalizeSkills(data.skills);
    const stackItems = stackGroups.flatMap((group) => group.items);
    const projects = normalizeProjects(data.projects);
    const experiences = normalizeExperiences(data.experiences);
    const certificates = normalizeCertificates(data.certificates);

    return withDynamicMetrics({
      profile,
      strengths,
      stackGroups,
      stackItems,
      projects,
      experiences,
      certificates,
    });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Sanity content fetch failed. Falling back to local data.", error);
    }

    return withDynamicMetrics({
      profile: portfolioData.profile,
      strengths: portfolioData.strengths,
      stackGroups: portfolioData.stackGroups,
      stackItems: portfolioData.stackItems,
      experiences: portfolioData.experiences,
      projects: portfolioData.projects,
      certificates: portfolioData.certificates,
    });
  }
}
