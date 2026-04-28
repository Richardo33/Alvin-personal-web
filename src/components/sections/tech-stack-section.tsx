import { SectionHeading } from "@/components/section-heading";
import { TechStackCarousel } from "@/components/tech-stack-carousel";
import {
  stackItems as fallbackStackItems,
  type SkillItem,
} from "@/lib/portfolio-data";

export function TechStackSection({
  items = fallbackStackItems,
}: {
  items?: SkillItem[];
}) {
  return (
    <section className="container-shell pb-20 sm:pb-28">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools I use most often across interface work, backend delivery, and product execution."
        description="A compact view of the stack I reach for most while building and shipping applications."
      />
      <TechStackCarousel items={items} />
    </section>
  );
}
