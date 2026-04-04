"use client";

import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { motion } from "motion/react";
import { Reveal } from "../ui/reveal";
import { Button } from "../ui/button";

function CTAContent(): ReactNode {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border/50 bg-card/30 px-6 py-20 text-center backdrop-blur-sm md:px-16">
            {/* Gradient accent line at top */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <motion.h2
              className="font-display text-4xl font-bold tracking-tight text-[hsl(var(--cinema-white,0_0%_96%))] md:text-5xl"
              whileHover={{ skewX: -1 }}
              transition={{ duration: 0.3 }}
            >
              Ready to explore?
            </motion.h2>

            <p className="mx-auto mt-4 max-w-md text-muted-foreground md:text-lg">
              Dive into the docs, check out the blog, or jump straight into
              the code. Every branch starts with a first commit.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/docs/intro">
                <Button size="lg">
                  Read the docs
                </Button>
              </Link>
              <Link to="/blog">
                <Button size="lg" variant="cinematic">
                  Visit the blog
                </Button>
              </Link>
            </div>

            {/* Gradient accent line at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CTA(): ReactNode {
  return (
    <BrowserOnly fallback={
      <section className="py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold">Ready to explore?</h2>
        </div>
      </section>
    }>
      {() => <CTAContent />}
    </BrowserOnly>
  );
}
