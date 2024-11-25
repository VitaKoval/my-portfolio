import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { variant } from 'styled-system'
import { Box } from '@/ui'
import BgSection from '../../assets/images/bg-section.png'

const variants = {
  primary: {
    borderRadius: 'xs',
    bg: 'bg.paper',
  },
  secondary: {},
  block: {
    borderRadius: 'sm',
    backgroundImage: `url(${BgSection})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    mx: 'auto',
  },
  section: {
    borderRadius: 'sm',
    border: '1px solid',
    borderColor: 'border.section',
    bg: 'bg.section',
    maxWidth: '1840px',
    width: '100%',
    mx: 'auto',
  },
  modal: {
    borderRadius: '0.75rem',
    bg: 'bg.paper',
  },
}

export const paperVariantKeys = Object.keys(variants)

const Paper = styled(Box)(
  css({}),
  variant({
    variants,
  }),
  ({ sx }) => sx,
)

Paper.propTypes = {
  variant: PropTypes.oneOf(paperVariantKeys),
  children: PropTypes.any,
}

Paper.defaultProps = {
  variant: 'primary',
}

export default Paper
