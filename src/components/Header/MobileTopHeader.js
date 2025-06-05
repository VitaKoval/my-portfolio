import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo, MenuToggle } from '../../ui'
import { navList } from './definitions'
import {
  MobBarLinks,
  MobileMenuContainer,
  MobileMenuWrapper,
  NavListItem,
} from './Header.styled'

export default function MobileTopHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <MobBarLinks>
      <Link aria-label="Go to the homepage" title="Go to the homepage" href="/">
        <Logo />
      </Link>
      <MenuToggle
        onToggle={() => setIsMenuOpen(!isMenuOpen)}
        isOpen={isMenuOpen}
      />

      <MobileMenuWrapper isOpen={isMenuOpen}>
        <MobileMenuContainer>
          {navList.map(({ name, link }) => (
            <NavListItem
              key={name}
              as="a"
              href={link}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {name}
            </NavListItem>
          ))}
        </MobileMenuContainer>
      </MobileMenuWrapper>
    </MobBarLinks>
  )
}
