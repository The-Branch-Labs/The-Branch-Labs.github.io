"use client";

import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { Globe } from "../ui/globe";
import { Reveal } from "../ui/reveal";
import { SplitTextInView } from "../ui/split-text";
import { ArrowRight, BookOpen, GitBranch, Newspaper } from "lucide-react";

const projects = [
  {
    title: "Documentation Hub",
    description:
      "Guides, tutorials, and references — everything you need to explore our projects and start contributing.",
    icon: BookOpen,
    link: "/docs/intro",
  },
  {
    title: "Branching Workflow",
    description:
      "Our Git workflow explained — create branches, experiment safely, and merge when ready.",
    icon: GitBranch,
    link: "/docs/intro",
  },
  {
    title: "Blog & Updates",
    description:
      "Workshops, experiments, and announcements. Stay in the loop with what the lab is working on.",
    icon: Newspaper,
    link: "/blog",
  },
];

function ShowcaseContent(): ReactNode {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Globe background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[600px] w-[600px] opacity-20 md:h-[800px] md:w-[800px] md:opacity-30">
          <Globe className="relative h-full w-full !max-w-none !static" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
            What we build
          </p>
          <SplitTextInView
            text="Tools for the curious"
            as="h2"
            className="justify-center font-display text-4xl font-bold tracking-tight text-[hsl(var(--cinema-white,0_0%_96%))] lg:text-5xl"
          />
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <Link to={project.link} className="group block h-full no-underline">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="flex-1 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Showcase(): ReactNode {
  return (
    <BrowserOnly fallback={
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center font-display text-4xl font-bold">Tools for the curious</h2>
        </div>
      </section>
    }>
      {() => <ShowcaseContent />}
    </BrowserOnly>
  );
}
