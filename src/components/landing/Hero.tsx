import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ArrowRight } from "lucide-react";
import React from "react";

import { ThreeDMarquee } from "../ui/3d-marquee";
import { Button } from "../ui/button";

export function Hero(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  const images = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img10.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img12.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img13.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img14.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img15.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img16.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img17.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img18.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img19.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img20.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img21.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img22.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img23.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img24.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img25.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img26.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img27.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img9.jpeg",
  ];

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
