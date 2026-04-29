import { createClient } from "next-sanity";

import { apiVersion, dataset, studioProjectId } from "@/sanity/env";

export const client = createClient({
  projectId: studioProjectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
  stega: {
    studioUrl: "/studio",
  },
});
