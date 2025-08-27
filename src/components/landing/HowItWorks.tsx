import type { ReactNode } from 'react';

const steps = [
  {
    step: '01',
    title: 'Join the Community',
    description: 'Sign up and become part of our global research community of innovators and thought leaders.',
    icon: '👥',
  },
  {
    step: '02',
    title: 'Share Your Ideas',
    description: 'Contribute your research, insights, and collaborate with like-minded researchers worldwide.',
    icon: '💡',
  },
  {
    step: '03',
    title: 'Collaborate & Innovate',
    description: 'Work together on breakthrough projects and bring big ideas to life through teamwork.',
    icon: '🤝',
  },
  {
    step: '04',
    title: 'Make an Impact',
    description: 'Create meaningful change and solve real-world challenges through collaborative research.',
    icon: '🌟',
  },
];

export function HowItWorks(): ReactNode {
  return (
    <section className="testimonials-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="section-subtitle">
            Get started with Branch Labs in four simple steps and begin your collaborative research journey today.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {steps.map((step, index) => (
            <div key={index} className="testimonial-card" style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '4rem', 
                height: '4rem', 
                background: 'var(--primary-color)', 
                color: 'white', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                margin: '0 auto 1.5rem auto' 
              }}>
                {step.step}
              </div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{step.icon}</div>
              <h3 className="feature-title" style={{ marginBottom: '1rem' }}>{step.title}</h3>
              <p className="feature-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
