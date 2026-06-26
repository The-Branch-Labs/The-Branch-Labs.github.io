import type { ReactNode } from 'react';
import Layout from '@theme/Layout';

import { Hero } from '@site/src/components/landing/Hero';
import { Methodology } from '@site/src/components/landing/Methodology';
import { Workshop } from '@site/src/components/landing/Workshop';

export default function Home(): ReactNode {
  // The navbar's dark "SiteNav" treatment is keyed off the server-rendered
  // `html.plugin-pages` class (home is the only pages route) — see custom.css.
  return (
    <Layout
      title="Big ideas to reality"
      description="A deep-tech R&D studio in Warsaw building experimental physical-world products with applied AI, branched in public and merged into being."
    >
      <main className="bl-landing">
        <Hero />
        <Methodology />
        <Workshop />
      </main>
    </Layout>
  );
}
