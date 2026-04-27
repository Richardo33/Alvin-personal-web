import Link from "next/link";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/8 bg-[#090b14]/72 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl border border-primary/30 bg-primary/18 text-sm font-bold text-primary">
            AR
          </div>
          <div>
            <p className="font-heading text-sm font-semibold tracking-[0.22em] text-white uppercase">
              Alvin Rikardo
            </p>
            <p className="text-xs text-white/50">Full-Stack Developer</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/60 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>

        <Button
          asChild
          className="hidden rounded-full bg-primary px-5 text-primary-foreground shadow-[0_0_24px_rgba(255,191,92,0.26)] md:inline-flex"
        >
          <a href={profile.cv} target="_blank" rel="noreferrer">
            Download CV
            <Download className="size-4" />
          </a>
        </Button>
      </div>
    </header>
  );
}
