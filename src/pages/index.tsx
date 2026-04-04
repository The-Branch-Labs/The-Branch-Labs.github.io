import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { Hero } from '@site/src/components/landing/Hero';
import { Manifesto } from '@site/src/components/landing/Manifesto';
import { Showcase } from '@site/src/components/landing/Showcase';
import { Signal } from '@site/src/components/landing/Signal';
import { CTA } from '@site/src/components/landing/CTA';
import { NoiseTexture } from '@site/src/components/ui/noise-texture';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Experimental ideas, new perspectives. Branch Labs is where curiosity meets code."
    >
      <NoiseTexture />
      <Hero />
      <Manifesto />
      <Showcase />
      <Signal />
      <CTA />
    </Layout>
  );
}
