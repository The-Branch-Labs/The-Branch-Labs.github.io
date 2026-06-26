import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

/**
 * Navbar logo override (ported from New Design SiteNav). The marketing pages
 * (home / news / faq) render the dark translucent bar — keyed off the
 * server-rendered `html.plugin-pages` class — so they carry the lavender
 * wordmark (night-blue rule: lavender, never pure white). Docs and blog use the
 * black wordmark. Both are rendered and CSS toggles them (see custom.css),
 * which keeps the choice server-side and free of hydration mismatch.
 */
type Props = {
  className?: string;
  imageClassName?: string;
  titleClassName?: string;
};

export default function Logo(props: Props): ReactNode {
  const { className, imageClassName } = props;
  const homeUrl = useBaseUrl('/');
  const lavender = useBaseUrl('/img/logo_lavender.svg');
  const black = useBaseUrl('/img/logo_black.svg');
  const img = imageClassName ?? '';

  return (
    <Link to={homeUrl} className={className} aria-label="Branch Labs">
      <img src={lavender} alt="Branch Labs" className={`${img} bl-logo--onpages`} />
      <img src={black} alt="Branch Labs" className={`${img} bl-logo--offpages`} />
    </Link>
  );
}
