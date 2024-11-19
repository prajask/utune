import Link from 'next/link';

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from '@carbon/react';

import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';

const TopNav = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header
        aria-label="U-Tune"
      >
        <SkipToContent />

        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />

        <Link
          href="/" passHref legacyBehavior
        >
          <HeaderName
            prefix=''
          >
            U-Tune
          </HeaderName>
        </Link>

        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="User Avatar"
            tooltipAlignment="center"
            className="action-icons"
          >
            <UserAvatar
              size={20}
            />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TopNav;
