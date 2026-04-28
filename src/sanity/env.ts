export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-04-28";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const studioProjectId = projectId || "placeholder";

export const isSanityConfigured = Boolean(projectId && dataset);
