import { useState, type ReactNode, type CSSProperties } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ArrowRight } from 'lucide-react';

import { Button, Eyebrow, BranchField } from '@site/src/components/landing/branch-ui';

/**
 * FAQ — ported from New Design/concepts/pageFaq.jsx. Mega mono "/faq/" dark
 * hero (procedural BranchField backplate) over an interactive numbered
 * accordion. The dark navbar treatment comes for free: this is a pages route,
 * so it carries `html.plugin-pages` (see custom.css).
 */
const QS: { q: string; a: string }[] = [
  {
    q: 'How does Branch Labs choose what to work on?',
    a: 'We follow cross-disciplinary curiosity toward physical-world problems where applied AI changes what is buildable. A project earns a branch when it is speculative enough to be interesting and concrete enough to prototype, usually at the intersection of off-grid autonomy, privacy, and human wellbeing.',
  },
  {
    q: 'Why no traditional venture capital?',
    a: 'Venture timelines pull research toward whatever exits fastest. We fund the studio through grants, EU research consortia, partnerships, and Kickstarter-backed products instead, closer to a lab than a startup. It keeps the work patient, open, and ours.',
  },
  {
    q: 'What does "working in markdown" actually mean?',
    a: 'GitHub is our ideabase. Specs, decisions, and notes live as plain text in the open, reviewed like code through branches and merges. Working in markdown means the methodology is the medium: legible, versioned, and public by default.',
  },
  {
    q: 'Can we collaborate with you?',
    a: 'Yes. We partner with research groups, domain experts, and manufacturers across our active portfolio, and we co-author grant and consortium work. The fastest way in is to open an issue on the relevant repo or come to a workshop.',
  },
  {
    q: 'Are you hiring?',
    a: 'The Genesis Team is intentionally small, but we collaborate widely. Weekly workshops are open, and most contributions start there or on GitHub. When we do open roles, they are posted in the journal first.',
  },
  {
    q: 'What is the Genesis Team?',
    a: 'The two co-founders who anchor the studio: Jan Skóra (knowledge synthesis) and Patryk Szczygło (R&D lead, innovation engineer). Everything else branches outward from there.',
  },
];

export default function Faq(): ReactNode {
  const [open, setOpen] = useState(0);

  const rowGrid: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '64px 1fr 40px',
    gap: 28,
    alignItems: 'center',
  };

  return (
    <Layout title="FAQ" description="Frequently asked, rarely answered: how Branch Labs works, who funds us, and what we won't do.">
      <main className="bl-landing">
        {/* Mega /faq/ dark hero */}
        <section
          className="on-dark bl-stage"
          style={{ background: 'var(--bg)', color: 'var(--fg)', position: 'relative', overflow: 'hidden' }}
        >
          <BranchField strands={11} nodes={3} spreadRatio={0.33} thickness={1} opacity={0.3} invert />
          <div
            className="bl-wrap"
            style={{ position: 'relative', padding: '72px 0 64px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Eyebrow>Frequently asked</Eyebrow>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 500,
                fontSize: 'clamp(96px, 18vw, 240px)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                color: 'var(--fg)',
                margin: '12px 0 0',
              }}
            >
              /faq/
            </div>
            <p className="lead" style={{ maxWidth: 520, margin: '20px 0 0' }}>
              Frequently asked, rarely answered. How we work, who funds us, and what we won't do.
            </p>
          </div>
        </section>

        {/* Accordion */}
        <section style={{ padding: '80px 0 96px' }}>
          <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ borderTop: '2px solid var(--fg)' }}>
              {QS.map((item, i) => {
                const isOpen = open === i;
                const last = i === QS.length - 1;
                return (
                  <div key={i} style={{ borderBottom: `${last ? 2 : 1}px solid ${last ? 'var(--fg)' : 'var(--border)'}` }}>
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="bl-faq-q"
                      aria-expanded={isOpen}
                      style={{
                        ...rowGrid,
                        appearance: 'none',
                        background: 'transparent',
                        border: 0,
                        cursor: 'pointer',
                        width: '100%',
                        padding: '28px 4px',
                        textAlign: 'left',
                        color: 'inherit',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      <span className="mono" style={{ fontSize: 14, color: isOpen ? 'var(--accent-strong)' : 'var(--fg-muted)' }}>
                        / {String(i + 1).padStart(2, '0')}
                      </span>
                      <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em', color: isOpen ? 'var(--accent-strong)' : 'var(--fg)' }}>
                        {item.q}
                      </span>
                      <span
                        style={{
                          justifySelf: 'end',
                          color: isOpen ? 'var(--accent-strong)' : 'var(--fg)',
                          transition: 'transform 220ms var(--ease-out)',
                          transform: isOpen ? 'rotate(45deg)' : 'none',
                          fontSize: 26,
                          lineHeight: 1,
                        }}
                      >
                        +
                      </span>
                    </button>
                    <div style={{ ...rowGrid, maxHeight: isOpen ? 320 : 0, overflow: 'hidden', transition: 'max-height 320ms var(--ease-out)' }}>
                      <span />
                      <p style={{ margin: 0, padding: '0 0 30px', fontSize: 16, lineHeight: 1.6, color: 'var(--fg-muted)', maxWidth: 620 }}>
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact prompt */}
            <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
              <p style={{ margin: 0, fontSize: 18, color: 'var(--fg)' }}>Still curious? The studio runs in public.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/blog" style={{ textDecoration: 'none' }}>
                  <Button variant="outline">Read the journal</Button>
                </Link>
                <a href="https://github.com/The-Branch-Labs" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                  <Button>
                    Contact us <ArrowRight size={14} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
