"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "../ui/reveal";

const pillars = [
  {
    title: "Experiment fearlessly",
    description:
      "We don't wait for perfect conditions. Every branch is a sandbox — a place to test bold ideas without fear of breaking the trunk. The best discoveries come from trying what hasn't been tried.",
  },
  {
    title: "Learn in the open",
    description:
      "Knowledge compounds when shared. Our docs, guides, and blog posts aren't just artifacts — they're invitations. We build transparently so others can learn, contribute, and push the work further.",
  },
  {
    title: "Ship and iterate",
    description:
      "A shipped experiment teaches more than a perfect plan. We move fast, gather signal, and refine. Progress over perfection — always.",
  },
];

function ManifestoDesktop(): ReactNode {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={sectionRef} className="relative hidden md:block" style={{ height: `${(pillars.length + 1) * 100}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-4">
        {/* Section label */}
        <motion.p
          className="mb-6 text-xs font-medium uppercase tracking-widest text-primary"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.08], [0, 1]) }}
        >
          Our philosophy
        </motion.p>

        {pillars.map((pillar, i) => {
          const segmentSize = 1 / (pillars.length + 1);
          const start = i * segmentSize;
          const fadeIn = start + segmentSize * 0.1;
          const peak = start + segmentSize * 0.5;
          const fadeOut = start + segmentSize * 0.9;
          const end = (i + 1) * segmentSize;

          return <ManifestoPillar key={i} pillar={pillar} scrollYProgress={scrollYProgress} fadeIn={fadeIn} peak={peak} fadeOut={fadeOut} end={end} />;
        })}
      </div>
    </div>
  );
}

function ManifestoPillar({
  pillar,
  scrollYProgress,
  fadeIn,
  peak,
  fadeOut,
  end,
}: {
  pillar: { title: string; description: string };
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  fadeIn: number;
  peak: number;
  fadeOut: number;
  end: number;
}) {
  const opacity = useTransform(scrollYProgress, [fadeIn, peak, fadeOut, end], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [fadeIn, peak], [30, 0]);

  return (
    <motion.div className="absolute max-w-2xl text-center" style={{ opacity, y }}>
      <h2 className="font-display text-4xl font-bold tracking-tight text-[hsl(var(--cinema-white,0_0%_96%))] lg:text-5xl">
        {pillar.title}
      </h2>
      <p className="mt-4 text-lg text-muted-foreground md:text-xl">
        {pillar.description}
      </p>
    </motion.div>
  );
}

function ManifestoMobile(): ReactNode {
  return (
    <div className="flex flex-col gap-24 px-4 py-24 md:hidden">
      <p className="text-center text-xs font-medium uppercase tracking-widest text-primary">
        Our philosophy
      </p>
      {pillars.map((pillar, i) => (
        <Reveal key={i} delay={i * 0.1}>
          <div className="mx-auto max-w-lg text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[hsl(var(--cinema-white,0_0%_96%))]">
              {pillar.title}
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              {pillar.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Manifesto(): ReactNode {
  return (
    <BrowserOnly fallback={
      <section className="py-32 px-4">
        {pillars.map((p, i) => (
          <div key={i} className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-display text-4xl font-bold">{p.title}</h2>
            <p className="mt-4 text-muted-foreground">{p.description}</p>
          </div>
        ))}
      </section>
    }>
      {() => (
        <section>
          <ManifestoDesktop />
          <ManifestoMobile />
        </section>
      )}
    </BrowserOnly>
  );
}
