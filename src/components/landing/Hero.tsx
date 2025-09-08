import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ArrowRight } from "lucide-react";
import React from "react";

import { ThreeDMarquee } from "../ui/3d-marquee";
import { Button } from "../ui/button";

export function Hero(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  const baseImagePaths = [
    '/img/eng.jpg',
    '/img/flask.jpg',
    '/img/net.jpg',
    '/img/neuron.jpg',
    '/img/future.jpg',
    '/img/jelly.jpg',
    '/img/water.jpg',
  ];
  const baseImages = baseImagePaths.map((p) => useBaseUrl(p));
  // Repeat to ensure enough items for the 3D marquee layout
  const images = Array.from({ length: 128 }, (_, i) => baseImages[i % baseImages.length]);

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center gap-5 text-center">
        <p className="bg-muted w-fit rounded-full px-4 py-1 text-sm uppercase">
          Branch Labs
        </p>
        <h1 className="mt-3 max-w-xl text-5xl font-medium font-semibold tracking-tighter lg:max-w-3xl lg:text-6xl">
          Welcome to the Branch Labs documentation
        </h1>
        <p className="text-muted-foreground max-w-xl">
          Your central hub for our projects and initiatives. Find guides, tutorials, and references to help you explore, learn, and contribute.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/docs/intro">
            <Button>Explore Docs</Button>
          </Link>
          <Link to="/blog">
            <Button variant="ghost">
              Visit Blog <ArrowRight />
            </Button>
          </Link>
        </div>

        <div className="mt-15 flex h-full w-full items-center justify-center">
          <ThreeDMarquee className="rounded-none" images={images} />
        </div>
      </div>
    </section>
  );
}
