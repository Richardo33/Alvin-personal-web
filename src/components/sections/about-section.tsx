import { Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import {
  profile as fallbackProfile,
  strengths as fallbackStrengths,
  type ProfileData,
} from "@/lib/portfolio-data";

export function AboutSection({
  profile = fallbackProfile,
  strengths = fallbackStrengths,
}: {
  profile?: ProfileData;
  strengths?: string[];
}) {
  return (
    <section id="about" className="container-shell pb-20 sm:pb-28">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-panel p-7 sm:p-8">
          <SectionHeading
            eyebrow="About"
            title="A developer who likes products that look considered and work hard behind the scenes."
            description={profile.about}
          />
        </div>

        <div className="glass-panel p-7 sm:p-8">
          <p className="text-lg leading-8 text-white/72">{profile.summary}</p>
          <div className="mt-8 space-y-4">
            {strengths.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/12 p-4"
              >
                <span className="mt-1 inline-flex size-8 items-center justify-center rounded-full bg-primary/16 text-primary">
                  <Sparkles className="size-4" />
                </span>
                <p className="text-sm leading-7 text-white/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
