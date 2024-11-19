import styled from 'styled-components'
import { minHeight } from 'styled-system'
import { system, variant } from 'styled-system'
import Box from '../Box'

const variants = {
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnBetween: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rowBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

const Flex = styled(Box).withConfig({
  shouldForwardProp: (prop) => !['wrap', 'column', 'minHeight'].includes(prop),
})(
  ({ wrap, column }) => ({
    display: 'flex',
    ...(minHeight && { minHeight: minHeight }),
    ...(wrap && { flexWrap: 'wrap' }),
    ...(column && { flexDirection: 'column' }),
  }),
  system({
    gap: {
      property: 'gap',
      scale: 'space',
    },
  }),
  variant({
    variants,
  }),
)

Flex.displayName = 'Flex'

export default Flex
