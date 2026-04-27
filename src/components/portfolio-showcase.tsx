"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { CertificateItem, ProjectItem } from "@/lib/portfolio-data";

type ShowcaseTab = "projects" | "certificates";

export function PortfolioShowcase({
  projects,
  certificates,
}: {
  projects: ProjectItem[];
  certificates: CertificateItem[];
}) {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>("projects");

  const activeItems = useMemo(() => {
    return activeTab === "projects" ? projects : certificates;
  }, [activeTab, certificates, projects]);

  return (
    <div className="mt-10 space-y-6">
      <div className="inline-flex rounded-full border border-white/10 bg-white/6 p-1">
        <button
          type="button"
          onClick={() => setActiveTab("projects")}
          className={`rounded-full px-5 py-2 text-sm font-medium transition ${
            activeTab === "projects"
              ? "bg-primary text-primary-foreground"
              : "text-white/60 hover:text-white"
          }`}
        >
          Projects
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("certificates")}
          className={`rounded-full px-5 py-2 text-sm font-medium transition ${
            activeTab === "certificates"
              ? "bg-primary text-primary-foreground"
              : "text-white/60 hover:text-white"
          }`}
        >
          Certificates
        </button>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {activeItems.map((item) =>
          activeTab === "projects" ? (
            <article
              key={(item as ProjectItem).title}
              className="glass-panel group overflow-hidden p-4 sm:p-5"
            >
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
                <Image
                  src={(item as ProjectItem).image}
                  alt={(item as ProjectItem).title}
                  width={1200}
                  height={900}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-4 px-1 pt-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs tracking-[0.24em] text-primary uppercase">
                    {(item as ProjectItem).eyebrow}
                  </span>
                  <BriefcaseBusiness className="size-4 text-white/35" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {(item as ProjectItem).title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">
                    {(item as ProjectItem).description}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-accent/90">
                    {(item as ProjectItem).impact}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(item as ProjectItem).tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/8 bg-white/6 px-3 py-1.5 text-xs font-medium text-white/72"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {(item as ProjectItem).githubUrl ? (
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                    >
                      <a
                        href={(item as ProjectItem).githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                        <ArrowUpRight className="size-4" />
                      </a>
                    </Button>
                  ) : null}
                  {(item as ProjectItem).demoUrl ? (
                    <Button
                      asChild
                      className="rounded-full bg-primary text-primary-foreground"
                    >
                      <a
                        href={(item as ProjectItem).demoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                        <ArrowUpRight className="size-4" />
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
            </article>
          ) : (
            <article
              key={(item as CertificateItem).title}
              className="glass-panel overflow-hidden p-4"
            >
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black/20">
                <Image
                  src={(item as CertificateItem).image}
                  alt={(item as CertificateItem).title}
                  width={1200}
                  height={900}
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="space-y-3 px-1 pt-5">
                <p className="text-xs tracking-[0.26em] text-primary uppercase">
                  {(item as CertificateItem).issuer}
                </p>
                <h3 className="text-xl font-semibold text-white">
                  {(item as CertificateItem).title}
                </h3>
                <p className="text-sm leading-7 text-white/66">
                  {(item as CertificateItem).note}
                </p>
              </div>
            </article>
          )
        )}
      </div>
    </div>
  );
}
