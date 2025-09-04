import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { Hero } from '@site/src/components/landing/Hero';
import { About } from '@site/src/components/landing/About';
import { Features } from '@site/src/components/landing/Features';
import { CTA } from '@site/src/components/landing/CTA';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Your central hub for Branch Labs projects, guides, tutorials, and references."
    >
      <Hero />
      <Features />
      <About />
      <CTA />
    </Layout>
  );
}
