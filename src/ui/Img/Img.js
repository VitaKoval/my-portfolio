import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  border,
  compose,
  layout,
  position,
  space,
  variant,
} from 'styled-system'

const variants = {
  default: {},
  cover: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  contain: {
    width: '100%',
    objectFit: 'contain',
  },
}

const styleProps = compose(space, border, layout, position)

const Img = styled.img(
  styleProps,
  variant({
    variants,
  }),
  ({ sx }) => sx,
)

Img.propTypes = {
  variant: PropTypes.oneOf(['default', 'cover', 'contain']).isRequired,
}

Img.defaultProps = {
  variant: 'default',
}

export default Img
