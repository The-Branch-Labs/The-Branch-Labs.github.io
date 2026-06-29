import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import { ArrowRight } from 'lucide-react';

import { Button, Eyebrow } from './branch-ui';

/**
 * Methodology — the "Branch & merge" pull-quote band. Light surface, two
 * columns: a tight heading on the left, the manifesto statement on the right.
 * Ported from New Design/concepts/propB.jsx.
 */
export function Methodology(): ReactNode {
  return (
    <section style={{ padding: '96px 0', background: 'var(--bg-subtle)', borderBottom: '1px solid var(--border)' }}>
      <div className="bl-wrap bl-method">
        <div>
          <Eyebrow kind="plain">How we work</Eyebrow>
          <h2 style={{ fontSize: 'clamp(30px,3.4vw,44px)', margin: '12px 0 0', letterSpacing: '-0.02em' }}>
            Branch &amp; merge.
          </h2>
        </div>
        <div>
          <p style={{ fontSize: 22, lineHeight: 1.5, margin: 0, letterSpacing: '-0.01em', color: 'var(--fg)' }}>
            Every idea is a branch. We explore in the open, commit early, review together, and merge what proves out
            into the world. The studio runs <em>in public and in markdown</em>: GitHub as ideabase, weekly workshops,
            transparent methodology.
          </p>
          <p className="mono" style={{ marginTop: 28, fontSize: 14, color: 'var(--fg-muted)' }}>
            // No traditional VC. Grants + EU consortia + partnerships + Kickstarter.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <Link to="/docs/intro" style={{ textDecoration: 'none' }}>
              <Button variant="outline">
                Our methodology <ArrowRight size={14} />
              </Button>
            </Link>
            <Link to="/blog" style={{ textDecoration: 'none' }}>
              <Button variant="ghost">Funding model</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
