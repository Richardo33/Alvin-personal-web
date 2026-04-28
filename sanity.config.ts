import {
  dashboardTool,
  projectInfoWidget,
  projectUsersWidget,
} from "@sanity/dashboard";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { dataset, studioProjectId } from "./src/sanity/env";
import { portfolioGuideWidget } from "./src/sanity/dashboard/portfolio-guide-widget";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  name: "default",
  title: "Fullstack Portfolio CMS",
  basePath: "/studio",
  projectId: studioProjectId,
  dataset,
  plugins: [
    dashboardTool({
      title: "Dashboard",
      widgets: [
        portfolioGuideWidget(),
        projectInfoWidget({ layout: { width: "small" } }),
        projectUsersWidget({ layout: { width: "small" } }),
      ],
    }),
    structureTool({ structure }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
