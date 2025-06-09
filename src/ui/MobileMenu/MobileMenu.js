import React, { useState } from 'react'
import { MenuToggle } from '@/ui'
import { MobileMenuContainer, MobileMenuWrapper } from './MobileMenu.styled'

function MobileMenu({ InnerComponent, ...props }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <MenuToggle
        onToggle={() => setIsMenuOpen(!isMenuOpen)}
        isOpen={isMenuOpen}
      />

      <MobileMenuWrapper isOpen={isMenuOpen}>
        <MobileMenuContainer>
          {InnerComponent && (
            <InnerComponent
              handleClick={() => setIsMenuOpen(!isMenuOpen)}
              {...props}
            />
          )}
        </MobileMenuContainer>
      </MobileMenuWrapper>
    </>
  )
}

MobileMenu.propTypes = {}

export default MobileMenu
