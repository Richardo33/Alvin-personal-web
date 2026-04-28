import Image from "next/image";
import { MapPin, MessageCircle, MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  metrics as fallbackMetrics,
  profile as fallbackProfile,
  type MetricItem,
  type ProfileData,
} from "@/lib/portfolio-data";

export function HeroSection({
  metrics = fallbackMetrics,
  profile = fallbackProfile,
}: {
  metrics?: MetricItem[];
  profile?: ProfileData;
}) {
  return (
    <section className="container-shell grain-overlay pt-6 pb-20 sm:pt-4 sm:pb-28">
      <div className="grid min-h-[calc(100svh-5rem)] items-center gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="max-w-4xl text-5xl leading-none font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
              {profile.role} building modern products with sharp UI and
              dependable systems.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/68 sm:text-[1.08rem]">
              {profile.bio}
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 text-sm text-white/60">
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 ${
                profile.available
                  ? "border-emerald-400/22 bg-emerald-400/10 text-emerald-200"
                  : "border-white/12 bg-white/6 text-white/58"
              }`}
            >
              <span
                className={`size-2 rounded-full ${
                  profile.available
                    ? "bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]"
                    : "bg-white/40"
                }`}
              />
              {profile.availability}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <MapPin className="size-4 text-accent" />
              {profile.location}
            </span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-6 text-primary-foreground shadow-[0_20px_50px_rgba(255,187,81,0.18)]"
            >
              <a href={profile.whatsapp} target="_blank" rel="noreferrer">
                Let&apos;s Talk
                <MessageCircle className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/12 bg-white/6 px-6 text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#projects">
                View Projects
                <MoveRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map((item) => (
              <div key={item.label} className="glass-panel p-4">
                <p className="text-2xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-sm leading-6 text-white/58">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-8 right-6 h-28 w-28 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-4 left-0 h-28 w-28 rounded-full bg-accent/20 blur-3xl" />
          <div className="glass-panel relative overflow-hidden p-5 sm:p-6">
            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-black/30">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  width={960}
                  height={1200}
                  priority
                  className="h-108 w-full object-fill object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#081019] via-[#081019]/70 to-transparent p-6">
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    {profile.name}
                  </h2>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                  <p className="text-xs tracking-[0.24em] text-white/40 uppercase">
                    Contact
                  </p>
                  <p className="mt-3 text-base font-medium text-white">
                    {profile.email}
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-primary/12 p-5">
                  <p className="text-xs tracking-[0.24em] text-primary uppercase">
                    Based In
                  </p>
                  <p className="mt-3 text-base font-medium text-white">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
