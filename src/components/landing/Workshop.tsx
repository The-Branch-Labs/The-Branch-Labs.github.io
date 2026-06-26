import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import { ArrowRight } from 'lucide-react';

import { Button, Eyebrow, BranchField } from './branch-ui';

/**
 * Workshop band — dark callout card with the canonical branching backplate.
 * Ported from New Design/concepts/propB.jsx.
 */
export function Workshop(): ReactNode {
  return (
    <section style={{ padding: '88px 0' }}>
      <div className="bl-wrap">
        <div
          className="on-dark"
          style={{
            background: 'var(--bg)',
            color: 'var(--fg)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 32,
            flexWrap: 'wrap',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <BranchField
            strands={17}
            nodes={6}
            spreadRatio={0.42}
            thickness={1}
            opacity={0.5}
            orientation="horizontal"
            invert
          />
          <div style={{ position: 'relative' }}>
            <Eyebrow>Next workshop</Eyebrow>
            <h3
              style={{
                fontSize: 'clamp(26px,3vw,40px)',
                margin: '14px 0 0',
                color: 'var(--fg)',
                letterSpacing: '-0.02em',
              }}
            >
              Thursday · 19:00 · in public.
            </h3>
          </div>
          <Link to="/blog" style={{ position: 'relative', textDecoration: 'none' }}>
            <Button size="lg">
              RSVP <ArrowRight size={14} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
