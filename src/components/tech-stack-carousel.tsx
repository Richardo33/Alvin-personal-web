"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type StackItem = {
  name: string;
  image: string;
};

export function TechStackCarousel({ items }: { items: StackItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, [items.length]);

  const visibleItems = useMemo(() => {
    if (!items.length) return [];

    return Array.from({ length: Math.min(5, items.length) }, (_, offset) => {
      const index = (activeIndex + offset) % items.length;
      return items[index];
    });
  }, [activeIndex, items]);

  if (!items.length) {
    return null;
  }

  return (
    <div className="glass-panel mt-10 overflow-hidden p-4 sm:p-5">
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
        {visibleItems.map((item, index) => (
          <div
            key={`${item.name}-${activeIndex}-${index}`}
            className={`flex min-h-[150px] items-center justify-center rounded-[24px] border p-6 transition-all duration-500 sm:min-h-[170px] md:min-h-[185px] ${
              index === 0
                ? "border-primary/40 bg-primary/12 shadow-[0_12px_35px_rgba(255,187,81,0.14)]"
                : "border-white/8 bg-white/6"
            }`}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={150}
              height={150}
              className="h-20 w-auto max-w-[130px] object-contain transition duration-300 sm:h-24 sm:max-w-[150px] md:h-28 md:max-w-[170px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
