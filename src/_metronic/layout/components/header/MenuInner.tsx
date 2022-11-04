import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {useIntl} from 'react-intl'
import { useAuth } from '../../../../app/modules/auth'

export function MenuInner() {
  const {currentUser} = useAuth()
  const intl = useIntl()
  const IconPlatform = '/media/icons/icon/platform.svg'
  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'MENU.ASEETS'})} to='/assets' />
      <MenuItem
        title={intl.formatMessage({id: 'MENU.DESIGNER'})}
        to='/designer'
      />
      {/* <MenuItem title={intl.formatMessage({id: 'MENU.PORTFOLIOS'})} to='/portfolios' />
      <MenuItem title={intl.formatMessage({id: 'MENU.ANALYTICS'})} to='/analytics' />
      <MenuItem title={intl.formatMessage({id: 'MENU.PARTIES'})} to='/parties' />
      <MenuItem title={intl.formatMessage({id: 'MENU.TRANSACTIONS'})} to='/transactions' />
      <MenuItem title={intl.formatMessage({id: 'MENU.CONTRACTS'})} to='/contracts' />
      <MenuItem title={intl.formatMessage({id: 'MENU.MONITORING'})} to='/monitoring' />
      <MenuItem title={intl.formatMessage({id: 'MENU.DEFI'})} to='/defi' />
      {currentUser?.role?.length && currentUser?.role?.includes('ADMIN') ? (
        <MenuInnerWithSub
          title='Admin'
          to='/admin'
          menuPlacement='bottom-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/admin/clients' title='Clients' fontIcon='bi-person' />
          <MenuItem
            icon='/media/icons/duotune/general/gen051.svg'
            to='/admin/logins'
            title='Logins'
          />
          <MenuItem to='/admin/admin-transactions' title='Transactions' fontIcon='bi-layers' />
        </MenuInnerWithSub>
      ) : (
        ''
      )}
      {currentUser?.platformAdmin ? (
        <MenuInnerWithSub
          title='Platform'
          to='/platform'
          menuPlacement='bottom-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/platform/platform-assets' title='Assets' icon={IconPlatform} />
          <MenuItem to='/platform/clients' title='Clients' icon={IconPlatform} />
          <MenuItem to='/platform/delegated-users' title='Delegated Users' icon={IconPlatform} />
          <MenuItem to='/platform/platform-parties' title='Parties' icon={IconPlatform} />
          <MenuItem to='/platform/login-activity' title='Login Activity' icon={IconPlatform} />
          <MenuItem to='/platform/platform-transactions' title='Transactions' icon={IconPlatform} />
          <MenuItem to='/platform/trades' title='Trades' icon={IconPlatform} />
        </MenuInnerWithSub>
      ) : (
        ''
      )} */}

      {/* <MenuItem title='Layout Builder' to='/builder' /> */}
      {/* <MenuInnerWithSub
        title='Crafted'
        to='/crafted'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        <MenuInnerWithSub
          title='Pages'
          to='/crafted/pages'
          fontIcon='bi-archive'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuInnerWithSub
            title='Profile'
            to='/crafted/pages/profile'
            hasArrow={true}
            hasBullet={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
          >
            <MenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
            <MenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
            <MenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
            <MenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
            <MenuItem
              to='/crafted/pages/profile/connections'
              title='Connections'
              hasBullet={true}
            />
          </MenuInnerWithSub>
          <MenuInnerWithSub
            title='Wizards'
            to='/crafted/pages/wizards'
            hasArrow={true}
            hasBullet={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
          >
            <MenuItem to='/crafted/pages/wizards/horizontal' title='Horizontal' hasBullet={true} />
            <MenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
          </MenuInnerWithSub>
        </MenuInnerWithSub>

        <MenuInnerWithSub
          title='Accounts'
          to='/crafted/accounts'
          fontIcon='bi-person'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
          <MenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
        </MenuInnerWithSub>

        <MenuInnerWithSub
          title='Errors'
          to='/error'
          fontIcon='bi-sticky'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/error/404' title='Error 404' hasBullet={true} />
          <MenuItem to='/error/500' title='Error 500' hasBullet={true} />
        </MenuInnerWithSub>

        <MenuInnerWithSub
          title='Widgets'
          to='/crafted/widgets'
          fontIcon='bi-layers'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
          <MenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
          <MenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
          <MenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
          <MenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
          <MenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
        </MenuInnerWithSub>
      </MenuInnerWithSub>

      <MenuInnerWithSub title='Apps' to='/apps' menuPlacement='bottom-start' menuTrigger='click'>
        <MenuInnerWithSub
          title='Chat'
          to='/apps/chat'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
          <MenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
          <MenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
        </MenuInnerWithSub>
        <MenuItem
          icon='/media/icons/duotune/general/gen051.svg'
          to='/apps/user-management/users'
          title='User management'
        />
      </MenuInnerWithSub>

      <MenuInnerWithSub
        isMega={true}
        title='Mega menu'
        to='/mega-menu'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        <MegaMenu />
      </MenuInnerWithSub> */}
    </>
  )
}
