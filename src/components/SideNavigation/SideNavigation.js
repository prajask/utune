'use client';

import {
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink,
} from '@carbon/react';

import {
  IbmGranite,
  Autoscaling,
  Events
} from '@carbon/icons-react';

const SideNavigation = () => {
  return (
    <SideNav
      isFixedNav
      expanded={true}
      isChildOfHeader={true}
      aria-label="Side navigation"
      className='side-navigation'
    >
      <SideNavItems>
        <SideNavMenu
          title="Playground" 
          renderIcon={IbmGranite}
          large
        >
          <SideNavMenuItem
            href="/projects"
          >
            Projects
          </SideNavMenuItem>

          <SideNavMenuItem
            href="/models"
          >
            Models
          </SideNavMenuItem>

          <SideNavMenuItem
            href="/datasets"
          >
            Datasets
          </SideNavMenuItem>

          <SideNavMenuItem
            href="/tutorials"
          >
            Tutorials
          </SideNavMenuItem>
        </SideNavMenu>

        <SideNavLink
          href="/resources"
          renderIcon={Autoscaling}
          large
        >
          Resources
        </SideNavLink>
        
        <SideNavLink
          href="/community"
          renderIcon={Events}
          large
        >
          Community
        </SideNavLink>
      </SideNavItems>
    </SideNav>
  );
};

export default SideNavigation;
