import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ArrowRight } from 'lucide-react';

import { Button, Eyebrow, BranchField } from '@site/src/components/landing/branch-ui';

/**
 * About — ported from New Design/concepts/pageAbout.jsx. Manifesto hero
 * (procedural BranchField), studio long-form, the spectrum-gradient
 * cross-disciplinary section, the Genesis Team cards, and operating principles.
 * Dark navbar comes from `html.plugin-pages` (this is a pages route).
 */
const DISCIPLINES = ['Arts', 'Biology', 'Technology', 'Engineering', 'Neuroscience', 'Philosophy'];

const PRINCIPLES: [string, string][] = [
  ['01', 'Speculative + applied'],
  ['02', 'Off-grid & autonomy'],
  ['03', 'Privacy as default'],
  ['04', 'Open-source releases'],
];

export default function About(): ReactNode {
  const janImg = useBaseUrl('/img/team-jan.png');
  const patrykImg = useBaseUrl('/img/team-patryk.png');

  const team = [
    {
      name: 'Jan Skóra',
      role: 'Co-founder · Business, Knowledge synthesizer',
      img: janImg,
      bio: 'Maps the space between disciplines and turns scattered research into buildable direction.',
    },
    {
      name: 'Patryk Szczygło',
      role: 'Co-founder · R&D Lead, Innovation Engineer',
      img: patrykImg,
      bio: 'Drives prototypes from sketch to bench: hardware, firmware, and the awkward bits in between.',
    },
  ];

  return (
    <Layout title="About" description="Branch Labs is an independent deep-tech R&D studio in Warsaw building experimental physical-world products with applied AI.">
      <main className="bl-landing">
        {/* Manifesto hero */}
        <section
          className="on-dark bl-stage"
          style={{ background: 'var(--bg)', color: 'var(--fg)', position: 'relative', overflow: 'hidden' }}
        >
          <BranchField strands={17} nodes={12} spreadRatio={0.33} thickness={1} opacity={0.32} />
          <div className="bl-wrap" style={{ position: 'relative', padding: '106px 0 115px' }}>
            <Eyebrow>Our story</Eyebrow>
            <h1
              style={{
                margin: '24px 0 0',
                fontSize: 'clamp(40px, 5.6vw, 80px)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                fontWeight: 600,
                color: 'var(--fg)',
                maxWidth: 1000,
              }}
            >
              We are <span>curious scientists</span> with cross-disciplinary curiosity.
            </h1>
          </div>
        </section>

        {/* Studio long-form */}
        <section style={{ padding: '88px 0' }}>
          <div className="bl-wrap bl-about-studio">
            <Eyebrow kind="plain">The studio</Eyebrow>
            <div style={{ maxWidth: 720 }}>
              <p style={{ fontSize: 22, lineHeight: 1.5, margin: 0, letterSpacing: '-0.01em' }}>
                Branch Labs is an independent deep-tech R&amp;D studio in Warsaw, building experimental
                physical-world products with applied AI. We work at the intersection of scientific precision and
                speculative imagination: haptic VR, spatial computing, materials science, off-grid systems, and
                wearable health.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.7, margin: '24px 0 0', color: 'var(--fg-muted)' }}>
                The studio operates in public and in markdown: GitHub as ideabase, weekly workshops, and a
                transparent methodology borrowed from version control. There is no traditional VC behind us:
                grants, EU research consortia, partnerships, and open-source releases fund the work, and that
                keeps it patient and ours.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-disciplinary curiosity */}
        <section
          style={{
            background: 'var(--bg-subtle)',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            padding: '96px 0',
          }}
        >
          <div className="bl-wrap bl-about-cross">
            <div>
              <Eyebrow kind="plain">Cross-disciplinary curiosity</Eyebrow>
              <div
                style={{
                  marginTop: 20,
                  backgroundImage: 'var(--gradient-spectrum)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {DISCIPLINES.map((d) => (
                  <div
                    key={d}
                    style={{ fontSize: 'clamp(34px, 4.6vw, 60px)', fontWeight: 600, lineHeight: 1.04, letterSpacing: '-0.02em', color: 'transparent' }}
                  >
                    {d}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: 20, lineHeight: 1.55, margin: 0, color: 'var(--fg)' }}>
                We are curious scientists with cross-disciplinary curiosity. Innovators, artists, R&amp;D teams,
                researchers, making concepts tangible and real.
              </p>
              <p className="mono" style={{ marginTop: 24, fontSize: 14, color: 'var(--fg-muted)' }}>
                // Never accept the world as it appears to be. Dare to see it for what it could be.
              </p>
              <div style={{ marginTop: 28 }}>
                <a href="#genesis" style={{ textDecoration: 'none' }}>
                  <Button variant="outline">
                    Meet the Genesis Team <ArrowRight size={14} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Genesis Team */}
        <section id="genesis" style={{ padding: '96px 0', scrollMarginTop: 88 }}>
          <div className="bl-wrap">
            <Eyebrow kind="plain">Genesis Team</Eyebrow>
            <div className="bl-about-team" style={{ marginTop: 24 }}>
              {team.map((m) => (
                <div key={m.name} className="bl-about-card">
                  <div style={{ background: '#ffffff', display: 'grid', placeItems: 'center', padding: 20 }}>
                    <img
                      src={m.img}
                      alt={m.name}
                      style={{ width: '100%', maxWidth: 160, height: 'auto', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '50%' }}
                    />
                  </div>
                  <div style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="mono caption" style={{ color: 'var(--fg-muted)', marginBottom: 12 }}>/ CO-FOUNDER</div>
                    <h3 style={{ fontSize: 28, margin: '0 0 6px', letterSpacing: '-0.02em' }}>{m.name}</h3>
                    <p style={{ margin: '0 0 14px', fontSize: 14, color: 'var(--accent-strong)' }}>{m.role}</p>
                    <p style={{ margin: 0, fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.55 }}>{m.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operating principles */}
        <section style={{ padding: '0 0 96px' }}>
          <div className="bl-wrap">
            <Eyebrow kind="plain">Operating principles</Eyebrow>
            <div className="bl-about-principles" style={{ marginTop: 24 }}>
              {PRINCIPLES.map(([n, t], i) => {
                const accent = i === PRINCIPLES.length - 1;
                return (
                  <div
                    key={n}
                    className={accent ? 'on-dark' : undefined}
                    style={{
                      padding: 28,
                      borderRadius: 'var(--radius-lg)',
                      background: accent ? 'var(--bg)' : '#ffffff',
                      color: 'var(--fg)',
                      border: `1px solid ${accent ? 'var(--bg)' : 'var(--border)'}`,
                      minHeight: 150,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span className="mono caption" style={{ color: accent ? 'var(--accent)' : 'var(--fg-muted)' }}>{n}</span>
                    <h4 style={{ fontSize: 19, margin: 0, color: 'var(--fg)' }}>{t}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
