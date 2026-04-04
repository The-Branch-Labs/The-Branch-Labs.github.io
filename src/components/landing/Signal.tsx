"use client";

import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { motion } from "motion/react";
import { Reveal } from "../ui/reveal";
import { ArrowRight } from "lucide-react";

const signals = [
  {
    label: "Latest",
    title: "Welcome to Branch Labs",
    date: "Sep 2025",
    link: "/blog/2025-09-02",
  },
  {
    label: "Docs",
    title: "Getting started with the documentation",
    link: "/docs/intro",
  },
];

function SignalContent(): ReactNode {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-xs font-medium uppercase tracking-widest text-primary">
              Recent activity
            </p>

            <div className="flex flex-col divide-y divide-border/50">
              {signals.map((signal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={signal.link}
                    className="group flex items-center justify-between gap-4 py-5 no-underline transition-colors hover:text-primary"
                  >
                    <div className="flex items-center gap-4">
                      <span className="shrink-0 rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        {signal.label}
                      </span>
                      <span className="font-medium text-foreground transition-colors group-hover:text-primary">
                        {signal.title}
                      </span>
                    </div>
                    <div className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground">
                      {signal.date && <span>{signal.date}</span>}
                      <ArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Signal(): ReactNode {
  return (
    <BrowserOnly fallback={
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <p className="mb-8 text-xs font-medium uppercase tracking-widest text-primary">Recent activity</p>
        </div>
      </section>
    }>
      {() => <SignalContent />}
    </BrowserOnly>
  );
}
