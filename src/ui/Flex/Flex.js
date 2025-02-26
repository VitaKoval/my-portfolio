import styled from 'styled-components'
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
  shouldForwardProp: (prop) =>
    ![
      'variant',
      'wrap',
      'column',
      'alignItems',
      'justifyContent',
      'borderRadius',
      'minHeight',
    ].includes(prop),
})(
  ({ wrap, column }) => ({
    display: 'flex',
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
