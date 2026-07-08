import React from 'react';
import clsx from 'clsx';
import {useNavbarSecondaryMenu} from '@docusaurus/theme-common/internal';

export default function NavbarMobileSidebarLayout({
  header,
  primaryMenu,
  secondaryMenu,
}) {
  const {shown: secondaryMenuShown} = useNavbarSecondaryMenu();
  return (
    <div className="navbar-sidebar">
      {header}
      <div
        className={clsx('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': secondaryMenuShown,
        })}>
        <div className="navbar-sidebar__item menu">{primaryMenu}</div>
        <div className="navbar-sidebar__item menu">{secondaryMenu}</div>
      </div>
      <div className="navbar-sidebar__footer">
        <a href="https://pods.fltt.fr" className="navbar-sidebar__cta-btn">
          <span>Get Started Free</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </a>
        <p className="navbar-sidebar__footer-note">
          Trusted by <strong>50,000+</strong> developers worldwide
        </p>
      </div>
    </div>
  );
}
