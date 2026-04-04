"use client";

import type { ReactNode } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { motion } from "motion/react";
import { SplitText } from "../ui/split-text";
import { ChevronDown } from "lucide-react";

function HeroContent(): ReactNode {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Radial spotlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(116,246,129,0.06),transparent)]" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-6 text-center">
        {/* Tagline badge */}
        <motion.p
          className="rounded-full border border-primary/20 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Experimental ideas, new perspectives
        </motion.p>

        {/* Headline with kinetic typography */}
        <SplitText
          text="Branching into the unknown"
          as="h1"
          className="justify-center font-display text-5xl font-bold tracking-tighter text-[hsl(var(--cinema-white,0_0%_96%))] sm:text-6xl md:text-7xl lg:text-8xl"
          delay={0.3}
          stagger={0.1}
        />

        {/* Subtext */}
        <motion.p
          className="max-w-xl text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Branch Labs is where curiosity meets code. We build, experiment, and
          share what we learn along the way.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export function Hero(): ReactNode {
  return (
    <BrowserOnly fallback={
      <section className="flex min-h-screen flex-col items-center justify-center px-4">
        <h1 className="font-display text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          Branching into the unknown
        </h1>
      </section>
    }>
      {() => <HeroContent />}
    </BrowserOnly>
  );
}
