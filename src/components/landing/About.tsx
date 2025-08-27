import type { ReactNode } from 'react';

export function About(): ReactNode {
  return (
    <section className="features-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Empowering Innovation Through <span className="gradient-text">Collaboration</span>
          </h2>
          <p className="section-subtitle">
            Branch Labs is more than just a platform—it's a movement. We believe that the biggest breakthroughs 
            happen when brilliant minds come together to share ideas, challenge assumptions, and push the 
            boundaries of what's possible.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3 className="feature-title">Open Innovation</h3>
            <p className="feature-description">
              Foster a culture where innovative ideas can thrive and be transformed into reality through open collaboration.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3 className="feature-title">Global Network</h3>
            <p className="feature-description">
              Connect with researchers and thought leaders from around the world, regardless of geographical boundaries.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Real-time Sharing</h3>
            <p className="feature-description">
              Share research findings and insights in real-time to accelerate the pace of scientific discovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
