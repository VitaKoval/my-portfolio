import React, { useState } from 'react'
import Button from '../Button'
import { MenuToggleWrap } from './MenuToggle.styled'

/**
 * MenuToggle component
 *
 * A button component that toggles the visibility of a mobile menu (e.g. hamburger menu).
 * It uses a stylized wrapper (`MenuToggleWrap`) to reflect the open/closed state visually.
 *
 * @component
 * @example
 * // Basic usage
 * <MenuToggle isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
 *
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Indicates whether the menu is open (used for styling/animation).
 * @param {Function} props.onToggle - Function called when the button is clicked. Toggles menu state.
 *
 * @returns {JSX.Element} A styled toggle button for mobile navigation.
 */

function MenuToggle({ isOpen, onToggle }) {
  const handleClick = () => {
    if (!onToggle) return
    onToggle()
  }

  return (
    <Button
      onClick={handleClick}
      aria-label="open menu"
      type="button"
      variant="alternative"
    >
      <MenuToggleWrap isOpen={isOpen} />
    </Button>
  )
}

export default MenuToggle
