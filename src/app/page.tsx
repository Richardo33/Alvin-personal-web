import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ShowcaseSection } from "@/components/sections/showcase-section";
import { SiteHeader } from "@/components/sections/site-header";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { getPortfolioContent } from "@/lib/portfolio-cms";

export const dynamic = "force-dynamic";

export default async function Home() {
  const portfolio = await getPortfolioContent();

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(255,181,72,0.14),transparent_24%),radial-gradient(circle_at_80%_12%,rgba(60,198,255,0.16),transparent_22%),linear-gradient(180deg,#0a0e1a_0%,#090b14_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(255,205,107,0.12),transparent_55%)] blur-3xl" />

      <SiteHeader profile={portfolio.profile} />
      <HeroSection metrics={portfolio.metrics} profile={portfolio.profile} />
      <AboutSection profile={portfolio.profile} strengths={portfolio.strengths} />
      <TechStackSection items={portfolio.stackItems} />
      <ExperienceSection experiences={portfolio.experiences} />
      <ShowcaseSection
        certificates={portfolio.certificates}
        projects={portfolio.projects}
      />
      <ContactSection profile={portfolio.profile} />
    </main>
  );
}
