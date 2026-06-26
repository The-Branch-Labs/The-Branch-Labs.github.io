import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ArrowRight } from 'lucide-react';

import { Button, Eyebrow, BranchField } from '@site/src/components/landing/branch-ui';

/**
 * News / Journal — ported from New Design/concepts/pageNews.jsx. Dark hero band
 * (procedural BranchField), a featured editorial card, tag chips, and a
 * vertical timeline stream. Dark navbar comes from `html.plugin-pages`.
 */
type Tag = { label: string; n: number; active?: boolean };
const TAGS: Tag[] = [
  { label: 'all', n: 47, active: true },
  { label: 'neurosuit', n: 12 },
  { label: 'ghostflat', n: 9 },
  { label: 'airsentry', n: 7 },
  { label: 'workshops', n: 14 },
  { label: 'reading', n: 18 },
];

type Entry = { date: string; kind: string; proj?: string; title: string; excerpt?: string; live?: boolean; dim?: boolean };
const STREAM: Entry[] = [
  { date: 'Apr 28', kind: 'Post', proj: 'NeuroSuit', title: 'Rebuilding the haptic mesh.', excerpt: 'Why we threw out eighteen months of actuator work, and what the next mesh gets right.', live: true },
  { date: 'Apr 14', kind: 'Workshop', title: 'Contemplative AR, a working session.', excerpt: 'Notes and recording from the open workshop on unobtrusive, periodic interfaces.' },
  { date: 'Apr 05', kind: 'Release', proj: 'GhostFlat', title: 'Open-sourcing the capture pipeline.', excerpt: 'The room-scan to navigable-VR toolchain is now on GitHub under a permissive license.' },
  { date: 'Mar 22', kind: 'Reading', title: 'No traditional VC: an explanation.', excerpt: 'How grants, EU consortia, partnerships, and Kickstarter fund the studio instead.' },
  { date: 'Mar 09', kind: 'Changelog', proj: 'AirSentry', title: 'PCB rev 2: what changed.', dim: true },
];

export default function News(): ReactNode {
  const neuron = useBaseUrl('/img/neuron.png');

  return (
    <Layout title="News" description="Lab notes in public: field notes, build logs, releases, and reading from the Branch Labs studio.">
      <main className="bl-landing">
        {/* Dark hero band */}
        <section
          className="on-dark bl-stage"
          style={{ background: 'var(--bg)', color: 'var(--fg)', position: 'relative', overflow: 'hidden' }}
        >
          <BranchField strands={9} nodes={1} spreadRatio={0.33} thickness={1} opacity={0.32} invert />
          <div className="bl-wrap bl-news-hero" style={{ position: 'relative', padding: '96px 40px 86px' }}>
            <div>
              <Eyebrow>Journal</Eyebrow>
              <h1 style={{ margin: '24px 0 0', fontSize: 'clamp(44px, 5.6vw, 76px)', lineHeight: 0.98, letterSpacing: '-0.03em', fontWeight: 600, color: 'var(--fg)' }}>
                Lab notes, <span>in public.</span>
              </h1>
            </div>
            <p className="lead" style={{ margin: 0, maxWidth: 440 }}>
              Field notes, build logs, releases, and reading. Everything we learn, written down as we go. Filter by project or tag.
            </p>
          </div>
        </section>

        {/* Featured editorial */}
        <section style={{ padding: '72px 0 40px' }}>
          <div className="bl-wrap">
            <div className="bl-news-featured" style={{ overflow: 'hidden', border: '1px solid var(--border)', borderRadius: 'var(--radius-2xl)' }}>
              <div style={{ padding: 44, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24 }}>
                <div>
                  <div className="mono caption" style={{ color: 'var(--accent-strong)', marginBottom: 16 }}>FEATURED · APR 28, 2026</div>
                  <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', margin: '0 0 16px', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
                    How we're rebuilding the haptic mesh from scratch.
                  </h2>
                  <p style={{ margin: 0, fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.55, maxWidth: 440 }}>
                    Eighteen months of NeuroSuit prototypes, what worked, and the unexpected reason we threw most of it away.
                  </p>
                </div>
                <Link to="/blog" style={{ textDecoration: 'none' }}>
                  <Button>
                    Read article <ArrowRight size={14} />
                  </Button>
                </Link>
              </div>
              <div style={{ background: '#212234', position: 'relative', display: 'grid', placeItems: 'center', overflow: 'hidden', minHeight: 280 }}>
                <img src={neuron} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.92 }} />
              </div>
            </div>
          </div>
        </section>

        {/* Tag chips + timeline stream */}
        <section style={{ padding: '0 0 96px' }}>
          <div className="bl-wrap">
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 48 }}>
              {TAGS.map((t) => (
                <span
                  key={t.label}
                  className="bl-news-chip"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-pill)',
                    border: `1px solid ${t.active ? 'var(--accent)' : 'var(--border)'}`,
                    background: t.active ? 'var(--accent)' : 'transparent',
                    color: 'var(--fg)',
                    fontWeight: 500,
                  }}
                >
                  {t.label} · {t.n}
                </span>
              ))}
            </div>

            <div style={{ position: 'relative', paddingLeft: 44, maxWidth: 880 }}>
              <div style={{ position: 'absolute', left: 6, top: 10, bottom: 10, width: 2, background: 'var(--border)' }} />
              {STREAM.map((s, i) => (
                <div key={i} className="bl-stream-row" style={{ position: 'relative', padding: '4px 0 36px' }}>
                  <span
                    style={{
                      position: 'absolute',
                      left: -44,
                      top: 4,
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      background: s.live ? 'var(--accent)' : 'var(--bg)',
                      border: `2px solid ${s.dim ? 'var(--border)' : 'var(--accent)'}`,
                      boxShadow: s.live ? '0 0 0 4px rgba(116,246,129,0.22)' : 'none',
                    }}
                  />
                  <div className="mono caption" style={{ color: 'var(--fg-muted)', marginBottom: 8 }}>
                    {s.date.toUpperCase()} · {s.kind.toUpperCase()}
                    {s.proj ? ' · ' + s.proj.toUpperCase() : ''}
                  </div>
                  <h3 style={{ fontSize: s.dim ? 22 : 27, margin: '0 0 8px', letterSpacing: '-0.02em', color: s.dim ? 'var(--fg-muted)' : 'var(--fg)' }}>
                    {s.title}
                  </h3>
                  {s.excerpt && (
                    <p style={{ margin: 0, fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.55, maxWidth: 600 }}>{s.excerpt}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
