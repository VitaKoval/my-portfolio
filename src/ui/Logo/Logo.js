import React from 'react'
import { Img } from '@/ui'
import LogoImage from '@/assets/logo_vita_k.png'

/**
 * Logo component
 *
 * This component renders the logo image of "Vita K. web developer"
 * using the custom `Img` component. It supports optional props
 * to control color styling and height.
 *
 * @component
 * @example
 * // Default usage
 * <Logo />
 *
 * // With custom height and color
 * <Logo height="72" color="primary" />
 *
 * @param {Object} props - Component props
 * @param {string} [props.color] - Optional color value (passed to the `Img` component)
 * @param {string|number} [props.height=56] - Height of the logo in pixels
 *
 * @returns {JSX.Element} The rendered logo image
 */

function Logo({ color, height = '56' }) {
  return (
    <Img
      height={`${height}px`}
      variant="contain"
      src={LogoImage}
      alt="Logo Vita K. web developer"
      color={color}
    />
  )
}

export default Logo
