import type { ReactNode } from 'react';

const steps = [
  {
    step: '01',
    title: 'Open & Review Projects',
    description: 'Browse through our open research projects and explore what interests you most.',
    icon: '📂',
  },
  {
    step: '02',
    title: 'Read & Understand',
    description: 'Dive deep into projects that catch your attention and understand the research scope.',
    icon: '📖',
  },
  {
    step: '03',
    title: 'Edit & Contribute',
    description: 'Click the edit button and contribute on GitHub by adding ideas, research papers, or improvements.',
    icon: '✏️',
  },
  {
    step: '04',
    title: 'Collaborate & Build',
    description: 'Work with other contributors to turn those ideas into reality by building them together.',
    icon: '🚀',
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
