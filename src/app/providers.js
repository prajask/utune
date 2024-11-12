'use client';

import SideNavigation from '@/components/SideNavigation/SideNavigation';
import TopNav from '@/components/TopNav/TopNav';
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <Theme
        theme="g100"
      >
        <TopNav />
      </Theme>

      <SideNavigation />
      
      <Content>{children}</Content>
    </div>
  );
}
