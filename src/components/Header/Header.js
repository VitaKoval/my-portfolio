import React from 'react'
import { PageContainer } from '@/ui'
import { HeaderWrap, NavBarNav } from './Header.styled'
import DesktopTopHeader from './DesktopTopHeader'
import NavBarHeaderButtons from './NavBarHeaderButtons'
import MobileTopHeader from './MobileTopHeader'

function Header() {
  return (
    <HeaderWrap>
      <NavBarNav>
        <MobileTopHeader />
        <DesktopTopHeader />
        <NavBarHeaderButtons />
      </NavBarNav>
    </HeaderWrap>
  )
}

export default Header
