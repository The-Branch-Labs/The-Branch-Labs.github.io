import type { ReactNode } from 'react';

const testimonials = [
  {
    name: 'Dr. X',
    role: 'Research Scientist',
    company: 'X',
    content: 'Branch Labs has transformed how we collaborate on research projects. The platform makes it incredibly easy to connect with experts worldwide and share breakthrough discoveries.',
    avatar: '👩‍🔬',
  },
  {
    name: 'Prof. Y',
    role: 'University Professor',
    company: 'Y',
    content: 'The collaborative tools and knowledge sharing capabilities have accelerated our research timeline significantly. We\'ve made more progress in 6 months than we did in the previous 2 years.',
    avatar: '👨‍🎓',
  },
  {
    name: 'Dr. Z',
    role: 'Innovation Director',
    company: 'Z',
    content: 'We\'ve been able to bring together diverse perspectives from around the globe and create breakthrough innovations that wouldn\'t have been possible otherwise.',
    avatar: '👩‍💼',
  },
];

export function Testimonials(): ReactNode {
  return (
    <section className="testimonials-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            What <span className="gradient-text">Researchers</span> Say
          </h2>
          <p className="section-subtitle">
            Hear from the global research community about their transformative experiences.
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{testimonial.content}</p>
              </div>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.avatar}
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                  <div className="author-company">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
