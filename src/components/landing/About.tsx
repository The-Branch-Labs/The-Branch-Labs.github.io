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
            Highlights
          </Badge>
          <h2 className="text-center text-3xl font-semibold lg:text-4xl">
            Unlock Your Workflow Potential
          </h2>
          <p className="text-center text-muted-foreground lg:text-lg">
            Experience the benefits of streamlined processes, designed to
            enhance productivity and success.
          </p>
        </div>
        <div className="gap mt-14 grid gap-2.5 lg:grid-cols-3">
          <div className="flex flex-col gap-2.5">
            <div className="gap flex flex-col gap-3 rounded-lg border p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex size-12 items-center justify-center rounded-md bg-muted">
                  <Target className="h-auto w-6" />
                </span>
                <h3 className="font-medium">Targeted Solutions</h3>
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                Tailored features designed to tackle specific project challenges
                with precision.
              </p>
            </div>
            <div className="gap flex flex-col gap-3 rounded-lg border p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex size-12 items-center justify-center rounded-md bg-muted">
                  <Layout className="h-auto w-6" />
                </span>
                <h3 className="font-medium">Seamless Integration</h3>
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                Effortlessly merge new technologies into existing systems to
                maintain continuity and performance.
              </p>
            </div>
            <div className="gap flex flex-col gap-3 rounded-lg border p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex size-12 items-center justify-center rounded-md bg-muted">
                  <ChartArea className="h-auto w-6" />
                </span>
                <h3 className="font-medium">Real-Time Data Insights</h3>
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                Monitor data in real-time for better decision-making and faster
                adjustments.
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
                  <TrendingUp className="h-auto w-6" />
                </span>
                <h3 className="font-medium">Strategic Growth</h3>
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                Leverage strategic tools to scale your business and meet
                evolving market demands.
              </p>
            </div>
            <div className="gap flex flex-col gap-3 rounded-lg border p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex size-12 items-center justify-center rounded-md bg-muted">
                  <ChartNoAxesCombined className="h-auto w-6" />
                </span>
                <h3 className="font-medium">Advanced Analytics</h3>
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                Gain deeper insights through advanced analytics to stay ahead in
                decision-making.
              </p>
            </div>
            <div className="gap flex flex-col gap-3 rounded-lg border p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex size-12 items-center justify-center rounded-md bg-muted">
                  <Monitor className="h-auto w-6" />
                </span>
                <h3 className="font-medium">Unified Control</h3>
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                Centralize management and control all aspects of your workflow
                from one platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };