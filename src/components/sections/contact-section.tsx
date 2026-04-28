import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import {
  profile as fallbackProfile,
  type ProfileData,
} from "@/lib/portfolio-data";

export function ContactSection({
  profile = fallbackProfile,
}: {
  profile?: ProfileData;
}) {
  return (
    <section id="contact" className="container-shell pb-16 sm:pb-20">
      <div className="glass-panel overflow-hidden p-7 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="space-y-5">
            <span className="eyebrow">Contact</span>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Let&apos;s build a product that feels modern, useful, and ready to
              ship.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-white/66">
              If you&apos;re looking for a developer who can contribute across
              interface quality, feature delivery, and implementation detail,
              I&apos;d be glad to talk.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-[24px] border border-white/10 bg-white/6 p-5 transition hover:bg-white/9"
            >
              <Mail className="size-5 text-primary" />
              <p className="mt-4 text-xs tracking-[0.24em] text-white/35 uppercase">
                Email
              </p>
              <p className="mt-2 text-base text-white">{profile.email}</p>
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-[24px] border border-white/10 bg-primary/10 p-5 transition hover:bg-primary/14"
            >
              <MessageCircle className="size-5 text-primary" />
              <p className="mt-4 text-xs tracking-[0.24em] text-primary uppercase">
                WhatsApp
              </p>
              <p className="mt-2 text-base text-white">{profile.phone}</p>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-6">
          <p className="max-w-xl text-sm leading-7 text-white/45">
            Open to collaborating on products that value clean execution,
            thoughtful interfaces, and dependable engineering from end to end.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: profile.github, label: "GitHub" },
              { href: profile.linkedin, label: "LinkedIn" },
              { href: profile.instagram, label: "Instagram" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/68 transition hover:bg-white/10 hover:text-white"
              >
                <ArrowUpRight className="size-4" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
