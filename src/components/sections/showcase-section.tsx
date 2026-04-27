import { PortfolioShowcase } from "@/components/portfolio-showcase";
import { SectionHeading } from "@/components/section-heading";
import { certificates, projects } from "@/lib/portfolio-data";

export function ShowcaseSection() {
  return (
    <section id="projects" className="container-shell pb-20 sm:pb-28">
      <SectionHeading
        eyebrow="Showcase"
        title="Projects and certificates are grouped in one place so the portfolio feels shorter and easier to scan."
        description="Switch between selected builds and learning milestones without having to scroll through two long sections."
      />
      <PortfolioShowcase projects={projects} certificates={certificates} />
    </section>
  );
}
