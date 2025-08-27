import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';

export function CTA(): ReactNode {
  return (
    <section className="cta-section">
      <div className="section-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Start Your <span className="gradient-text">Research Journey</span>?
          </h2>
          <p className="cta-subtitle">
            Join thousands of researchers and innovators who are already collaborating 
            to solve the world's biggest challenges through shared knowledge and breakthrough discoveries.
          </p>
          <div className="cta-actions">
            <Link className="btn-primary" to="/docs/intro">
              Get Started Now
            </Link>
            <Link className="btn-secondary btn-secondary-inverse" to="/blog">
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
