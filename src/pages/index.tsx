import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

// Import landing page components
import { Hero } from '@site/src/components/landing/Hero';
import { About } from '@site/src/components/landing/About';
import { Features } from '@site/src/components/landing/Features';
import { HowItWorks } from '@site/src/components/landing/HowItWorks';
import { Testimonials } from '@site/src/components/landing/Testimonials';
import { CTA } from '@site/src/components/landing/CTA';

// Import landing page styles
import '@site/src/components/landing/landing.css';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Empowering collaborative research and innovation through shared knowledge and big ideas."
    >
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </Layout>
  );
}
