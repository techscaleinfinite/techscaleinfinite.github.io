import React from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarLogo from '@theme/Navbar/Logo';

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      type="button"
      aria-label={translate({
        id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
        message: 'Close navigation bar',
      })}
      className="navbar-sidebar__close-btn"
      onClick={() => mobileSidebar.toggle()}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
      </svg>
    </button>
  );
}

export default function NavbarMobileSidebarHeader() {
  return (
    <div className="navbar-sidebar__brand">
      <NavbarLogo />
      <div className="navbar-sidebar__header-actions">
        <NavbarColorModeToggle />
        <CloseButton />
      </div>
    </div>
  );
}
