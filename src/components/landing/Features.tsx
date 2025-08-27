import type { ReactNode } from 'react';

const features = [
  {
    title: 'Collaborative Research',
    description: 'Work together on breakthrough ideas and share knowledge across disciplines worldwide.',
    icon: '🔬',
  },
  {
    title: 'Innovation Culture',
    description: 'Foster an environment where creative thinking and experimentation thrive.',
    icon: '💡',
  },
  {
    title: 'Knowledge Sharing',
    description: 'Connect researchers and share insights to accelerate discovery and learning.',
    icon: '🤝',
  },
  {
    title: 'Open Research',
    description: 'Promote transparency and accessibility in scientific research and publications.',
    icon: '📖',
  },
  {
    title: 'Global Network',
    description: 'Connect with researchers and innovators from around the world.',
    icon: '🌍',
  },
  {
    title: 'Data-Driven',
    description: 'Use data and analytics to guide research decisions and optimize outcomes.',
    icon: '📊',
  },
];

export function Features(): ReactNode {
  return (
    <section className="features-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Why Choose <span className="gradient-text">Branch Labs</span>?
          </h2>
          <p className="section-subtitle">
            Discover the features that make collaborative research more effective and impactful.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
