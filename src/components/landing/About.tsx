import {
  ChartArea,
  ChartNoAxesCombined,
  Layout,
  Medal,
  Monitor,
  Target,
  TrendingUp,
} from "lucide-react";

import { Badge } from "../ui/badge";

const About = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          <Badge
            variant="outline"
            className="flex items-center gap-1 px-2.5 py-1.5 text-sm"
          >
            <Medal className="h-auto w-4" />
            Overview
          </Badge>
          <h2 className="text-center text-3xl font-semibold lg:text-4xl">
            Explore the Branch Labs documentation
          </h2>
          <p className="text-center text-muted-foreground lg:text-lg">
            This is your hub for guides, tutorials, and references that help you explore, learn, and contribute effectively.
          </p>
        </div>
        <div className="gap mt-14 grid gap-2.5 lg:grid-cols-3">
          <div className="flex flex-col gap-2.5">
            <div className="gap flex flex-col gap-3 rounded-lg border p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex size-12 items-center justify-center rounded-md bg-muted">
                  <Monitor className="h-auto w-6" />
                </span>
                <h3 className="font-medium">Quick Navigation</h3>
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                Use the sidebar to quickly access every section of the documentation.
              </p>
            </div>
            <div className="gap flex flex-col gap-3 rounded-lg border p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex size-12 items-center justify-center rounded-md bg-muted">
                  <Target className="h-auto w-6" />
                </span>
                <h3 className="font-medium">Focused Sections</h3>
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                Each section targets a specific area of our work to keep things clear and organized.
              </p>
            </div>
            <div className="gap flex flex-col gap-3 rounded-lg border p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex size-12 items-center justify-center rounded-md bg-muted">
                  <Medal className="h-auto w-6" />
                </span>
                <h3 className="font-medium">Learn & Contribute</h3>
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                Guides, tutorials, and references provide the knowledge you need to contribute effectively.
              </p>
            </div>
          </div>

          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="hidden h-full rounded-lg object-cover lg:block"
          />
          <div className="flex flex-col gap-2.5">
            <div className="gap flex flex-col gap-3 rounded-lg border p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex size-12 items-center justify-center rounded-md bg-muted">
                  <Layout className="h-auto w-6" />
                </span>
                <h3 className="font-medium">Git & GitHub</h3>
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                We use Git for version control. Ensure you have a GitHub account and know the basics.
              </p>
            </div>
            <div className="gap flex flex-col gap-3 rounded-lg border p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex size-12 items-center justify-center rounded-md bg-muted">
                  <TrendingUp className="h-auto w-6" />
                </span>
                <h3 className="font-medium">Branching Workflow</h3>
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                Experiment safely by creating branches, then merge your work back when it’s ready.
              </p>
            </div>
            <div className="gap flex flex-col gap-3 rounded-lg border p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex size-12 items-center justify-center rounded-md bg-muted">
                  <ChartNoAxesCombined className="h-auto w-6" />
                </span>
                <h3 className="font-medium">Events & Blog</h3>
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                We host workshops, webinars, and hackathons. Check the blog for announcements and details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
