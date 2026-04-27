type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <span className="eyebrow">{eyebrow}</span>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-7 text-white/64 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
