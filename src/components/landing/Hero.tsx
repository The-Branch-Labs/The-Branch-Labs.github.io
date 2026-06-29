import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

import { Button, Eyebrow, TrlFace, PROJECTS, BL } from './branch-ui';

/**
 * Dark stage — Direction B "Manifesto" hero. The jellyfish is a low-opacity,
 * screen-blended background driver flowing down from the type into the Active
 * Portfolio log, which overlays the lower tendrils before resolving to solid
 * raisin. Ported from New Design/concepts/propB.jsx (HomeB).
 */
export function Hero(): ReactNode {
  const jelly = useBaseUrl('/img/jelly.png');

  return (
    <div
      className="on-dark bl-stage"
      style={{
        position: 'relative',
        background: 'var(--bg)',
        color: 'var(--fg)',
        overflow: 'hidden',
      }}
    >
      {/* Jelly background driver — centered, rising through the type. */}
      <img
        src={jelly}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-2%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(640px, 62vw, 1120px)',
          height: 'auto',
          mixBlendMode: 'screen',
          opacity: 0.5,
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'saturate(1.1)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          zIndex: 0,
          background:
            'linear-gradient(to bottom, rgba(33,34,52,0.78) 0px, rgba(33,34,52,0.42) 180px, rgba(33,34,52,0.2) 46%, rgba(33,34,52,0.12) 82%, rgba(33,34,52,0) 100%)',
        }}
      />

      {/* Hero — type-forward */}
      <section
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: 'calc(100vh - var(--ifm-navbar-height, 60px))',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          className="bl-wrap"
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 40,
            paddingBottom: 72,
          }}
        >
          <Eyebrow>A deep-tech studio in Warsaw</Eyebrow>
          <h1
            style={{
              margin: '28px 0 0',
              fontSize: 'clamp(56px, 8.4vw, 132px)',
              lineHeight: 0.92,
              letterSpacing: '-0.04em',
              fontWeight: 600,
              color: 'var(--fg)',
            }}
          >
            Big ideas
            <br />
            <span>to reality.</span>
          </h1>
          <p className="lead" style={{ maxWidth: 560, margin: '28px 0 0' }}>
            Experimental physical-world products with applied AI: dreamed out, branched, and merged into being.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/docs/intro" style={{ textDecoration: 'none' }}>
              <Button size="lg">
                See the work <ArrowRight size={14} />
              </Button>
            </Link>
            <Link to="/blog" style={{ textDecoration: 'none' }}>
              <Button size="lg" variant="outline">
                Read the manifesto
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Active portfolio — overlays the lower tendrils, fades to solid raisin */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '40px 0 104px',
          background:
            'linear-gradient(to bottom, rgba(33,34,52,0) 0%, rgba(33,34,52,0.78) 90px, #212234 260px)',
        }}
      >
        <div className="bl-wrap">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 8,
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <Eyebrow>Active portfolio</Eyebrow>
              <h2
                style={{
                  fontSize: 'clamp(30px,3.6vw,48px)',
                  margin: '12px 0 0',
                  letterSpacing: '-0.02em',
                  color: 'var(--fg)',
                }}
              >
                Active Branches
              </h2>
            </div>
            <Link to="/docs/intro" style={{ textDecoration: 'none' }}>
              <Button variant="ghost">
                All projects <ArrowRight size={14} />
              </Button>
            </Link>
          </div>

          <div style={{ borderTop: `2px solid ${BL.green}` }}>
            {PROJECTS.map((p) => (
              <Link key={p.n} to="/docs/intro" className="bl-row">
                <span
                  style={{
                    fontSize: 28,
                    fontWeight: 600,
                    color: 'var(--fg-muted)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {p.n}
                </span>
                <div className="bl-col-main">
                  <h3 className="bl-row-title" style={{ fontSize: 26, margin: '0 0 4px', color: 'var(--fg)' }}>
                    {p.name}
                  </h3>
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--fg-muted)' }}>{p.blurb}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <TrlFace trl={p.trl} size={30} />
                  <span className="mono caption" style={{ color: 'var(--fg-muted)' }}>
                    TRL {String(p.trl).padStart(2, '0')}
                    <br />
                    {p.stage}
                  </span>
                </div>
                <span className="mono caption bl-col-fund" style={{ color: 'var(--fg-muted)' }}>
                  {p.fund}
                </span>
                <span
                  className="bl-row-arrow bl-col-arrow"
                  style={{ justifySelf: 'end', color: 'var(--fg-muted)', display: 'inline-flex' }}
                >
                  <ArrowUpRight size={22} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
