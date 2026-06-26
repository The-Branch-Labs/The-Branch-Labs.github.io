import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

/**
 * Custom site footer — ported from New Design/concepts/shared.jsx (SiteFooter).
 * Wordmark + tagline on the left, Studio / Connect link columns on the right,
 * and a bottom bar carrying the brand line. Overrides the default
 * @theme/Footer, so it renders on every page (home, docs, blog).
 */
export default function Footer(): ReactNode {
  const logoLight = useBaseUrl('/img/logo_black.svg');
  const logoDark = useBaseUrl('/img/logo_white.svg');
  const year = new Date().getFullYear();

  const studio = [
    { label: 'Projects', to: '/docs/intro' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Blog', to: '/blog' },
    { label: 'About', to: '/about' },
  ];
  const connect = [
    { label: 'GitHub', href: 'https://github.com/The-Branch-Labs' },
  ];

  return (
    <footer className="footer bl-footer">
      <div className="bl-footer-inner">
        <div className="bl-footer-top">
          <div className="bl-footer-brand">
            <img className="bl-footer-logo bl-footer-logo--light" src={logoLight} alt="Branch Labs" />
            <img className="bl-footer-logo bl-footer-logo--dark" src={logoDark} alt="Branch Labs" />
            <p className="bl-footer-tag">
              A deep-tech R&amp;D studio in Warsaw. We work in public and in markdown, branching ideas into reality.
            </p>
          </div>
          <div className="bl-footer-cols">
            <div className="bl-footer-col">
              <div className="bl-footer-h">Studio</div>
              {studio.map((l) => (
                <Link key={l.label} className="bl-footer-link" to={l.to}>
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="bl-footer-col">
              <div className="bl-footer-h">Connect</div>
              {connect.map((l) => (
                <a key={l.label} className="bl-footer-link" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="bl-footer-bottom">
          <span>© Branch Labs {year}</span>
          <span className="bl-footer-mono">Big ideas to reality.</span>
        </div>
      </div>
    </footer>
  );
}
