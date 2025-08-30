import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function Hero(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            🚀 Empowering Research Innovation
          </div>
          
          <h1 className="hero-title">
            Welcome to{' '}
            <span className="hero-gradient-text">
              {siteConfig.title}
            </span>
          </h1>
          
          <p className="hero-subtitle">
            {siteConfig.tagline}
          </p>
          
          <p className="hero-description">
            Join researchers, innovators, and thought leaders collaborating 
            to solve the world's most challenging problems through shared knowledge and big ideas.
          </p>
          
          <div className="hero-actions">
            <Link className="btn-primary" to="/docs/intro">
              Get Started
            </Link>
            <Link className="btn-secondary" to="/blog">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
    </section>
  );
}
