import React from 'react'
import { Link } from 'react-router-dom'
import { Logo, MobileMenu } from '../../ui'
import { navList } from './definitions'
import { MobBarLinks } from './Header.styled'
import NavigationList from './NavigationList'

export default function MobileTopHeader() {
  return (
    <MobBarLinks>
      <Link aria-label="Go to the homepage" title="Go to the homepage" href="/">
        <Logo />
      </Link>
      <MobileMenu InnerComponent={NavigationList} navList={navList} />
    </MobBarLinks>
  )
}
