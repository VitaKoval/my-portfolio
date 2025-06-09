import PropTypes from 'prop-types'
import { css } from '@styled-system/css'
import styled from 'styled-components'
import {
  space,
  color,
  typography,
  shadow,
  layout,
  variant,
  compose,
  system,
} from 'styled-system'

export const variants = ({ secondary } = false) => ({
  h1: {
    fontSize: 'max(48px, min(5vw, 76px))',
    lineHeight: '1.0',
    fontWeight: 'bold',
  },
  h2: {},
  h3: {
    fontSize: '40px',
    lineHeight: '0.94',
    fontWeight: 'semiBold',
  },
  h4: {
    fontSize: '1.25rem',
    lineHeight: '0.94',
    fontWeight: 'semiBold',
  },
})

const style = system({
  textTransform: true,
  whiteSpace: true,
  cursor: true,
})

const tagVariants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
}

const styledColor = {
  gradient: {
    background: 'linear-gradient(180deg, #ffffff, #adadad)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
}

const StyleHeading = compose(space, color, typography, shadow, layout, style)

export const Heading = styled.h3
  .withConfig({
    shouldForwardProp: (prop) => !['variant'].includes(prop),
  })
  .attrs(({ variant, as }) => ({
    as: as ?? tagVariants[variant] ?? 'h3',
  }))(
  ({ uppercase, preLine }) => ({
    textTransform: uppercase ? 'uppercase' : 'inherit',
    ...(preLine && { whiteSpace: 'pre-line' }),
  }),
  css(({ color }) => ({
    color: color ? color : 'foreground',
    padding: 0,
    margin: 0,
  })),
  ({ secondary }) =>
    variant({
      prop: 'variant',
      variants: variants({ secondary }),
    }),
  variant({
    prop: 'styledColor',
    variants: styledColor,
  }),
  StyleHeading,
  ({ sx }) => sx,
)

export const variantTypes = Object.keys(variants())

Heading.propTypes = {
  textAlign: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  textTransform: PropTypes.string,
  whiteSpace: PropTypes.string,
  as: PropTypes.node,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(variantTypes),
    PropTypes.arrayOf(PropTypes.oneOf(variantTypes)),
  ]),
  sx: PropTypes.object,
  children: PropTypes.node,
  uppercase: PropTypes.any,
}

Heading.defaultProps = {
  variant: 'h3',
}

export default Heading
