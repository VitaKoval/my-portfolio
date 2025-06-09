import React from 'react'
import { PageContainer } from '@/ui'
import { HeaderWrap, NavBarNav } from './Header.styled'
import DesktopTopHeader from './DesktopTopHeader'
import NavBarHeaderButtons from './NavBarHeaderButtons'
import MobileTopHeader from './MobileTopHeader'

function Header() {
  return (
    <HeaderWrap>
      <PageContainer>
        <NavBarNav>
          <MobileTopHeader />
          <DesktopTopHeader />
          <NavBarHeaderButtons />
        </NavBarNav>
      </PageContainer>
    </HeaderWrap>
  )
}

export default Header
