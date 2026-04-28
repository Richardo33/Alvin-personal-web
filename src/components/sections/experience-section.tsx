import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import {
  experiences as fallbackExperiences,
  type ExperienceItem,
} from "@/lib/portfolio-data";

export function ExperienceSection({
  experiences = fallbackExperiences,
}: {
  experiences?: ExperienceItem[];
}) {
  return (
    <section id="experience" className="container-shell pb-20 sm:pb-28">
      <SectionHeading
        eyebrow="Experience"
        title="Professional work shaped by data systems, delivery discipline, and cross-team collaboration."
        description="My background blends engineering execution with the kind of reliability and communication needed in real team environments."
      />

      <div className="mt-10 space-y-6">
        {experiences.map((item) => (
          <article
            key={`${item.role}-${item.period}`}
            className="glass-panel p-7 sm:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr]">
              <div className="flex h-full flex-col">
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="rounded-[24px] border border-white/10 bg-white/8 p-3">
                      <Image
                        src={item.logo ?? "/portfolio/brand/aia.png"}
                        alt={item.company}
                        width={64}
                        height={40}
                        className="h-10 w-auto object-contain"
                      />
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.26em] text-primary uppercase">
                        {item.period}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold text-white">
                        {item.role}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-white/62">
                    {item.company} - {item.location}
                  </p>
                </div>

                <div className="mt-auto flex flex-nowrap gap-2 overflow-x-auto pt-8 pb-1">
                  {item.stack.map((stack) => (
                    <span
                      key={stack}
                      className="shrink-0 rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-medium tracking-[0.18em] text-white/65 uppercase"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[26px] border border-white/8 bg-black/12 p-6">
                <p className="text-xs tracking-[0.22em] text-primary uppercase">
                  Key responsibilities
                </p>
                <ul className="mt-4 space-y-3">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm leading-7 text-white/70"
                    >
                      <span className="mt-2 size-2 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
