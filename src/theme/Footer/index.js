import React from 'react';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';

export default function Footer() {
  const { footer } = useThemeConfig();
  const { copyright } = footer || {};

  return (
    <footer className="footer">
      <div className="si-footer__bar">
        <Link to="/privacy-policy" className="si-footer__link">
          Privacy Policy
        </Link>
        <div className="footer__copyright si-footer__copyright">{copyright}</div>
      </div>
    </footer>
  );
}
