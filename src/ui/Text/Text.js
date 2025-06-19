import styled from 'styled-components'
import {
  color,
  space,
  typography,
  shadow,
  layout,
  compose,
  variant,
  system,
} from 'styled-system'
import PropTypes from 'prop-types'
import { css } from '@styled-system/css'

const style = system({
  textTransform: true,
  cursor: true,
})

const styleText = compose(color, space, typography, layout, shadow, style)

export const variants = {
  bodyReg: {
    fontSize: 'max(15px, min(2vw, 20px))',
    lineHeight: '1.8',
    fontWeight: 'light',
  },
  monoReg: {
    fontFamily: 'Geist Mono !important',
    fontSize: '13px',
    lineHeight: '1.8',
  },
  smallReg: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: 'accents-5',
  },
  // body24b: {
  //   fontSize: '1.5rem',
  //   lineHeight: '1.025',
  //   fontWeight: 'semiBold',
  // },
  // body20r: {
  //   fontSize: 'xl',
  //   lineHeight: '1.25',
  //   fontWeight: 'regular',
  // },
  // body18b: {
  //   fontSize: 'lg',
  //   lineHeight: '1.25',
  //   fontWeight: 'semiBold',
  // },
  // body14r: {
  //   fontSize: 'xs',
  //   lineHeight: '1.25',
  //   fontWeight: 'regular',
  // },
  // body11r: {
  //   fontSize: '0.688rem',
  //   lineHeight: '1.025',
  //   fontWeight: 'regular',
  // },

  // caption: {
  //   fontSize: 'xs',
  //   lineHeight: '0.75rem',
  //   fontWeight: 'medium',
  // },
}

const Text = styled.p.withConfig({
  shouldForwardProp: (prop) =>
    !['uppercase', 'noWrap', 'preLine', 'variant'].includes(prop),
})(
  ({ preLine, uppercase, noWrap }) => ({
    textDecoration: 'none',
    ...(preLine && { whiteSpace: 'pre-line' }),
    ...(uppercase && { textTransform: 'uppercase' }),
    ...(noWrap && { whiteSpace: 'nowrap' }),
  }),
  variant({
    variants,
  }),
  css({
    fontFamily: 'Metropolis',
    color: 'accents5',
    padding: 0,
    margin: 0,
    ['strong']: {
      color: 'accents8',
      fontWeight: 'regular',
    },
  }),
  styleText,
  ({ sx }) => sx,
)

Text.displayName = 'Text'

export const variantsKeys = Object.keys(variants)

const variantPropTypes = PropTypes.oneOf(variantsKeys)

Text.propTypes = {
  as: PropTypes.node,
  sx: PropTypes.object,
  variant: PropTypes.oneOfType([
    PropTypes.arrayOf(variantPropTypes),
    variantPropTypes,
  ]),
}

Text.defaultProps = {
  variant: 'bodyReg',
}

export default Text
