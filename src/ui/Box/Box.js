import styled from 'styled-components'
import {
  color,
  space,
  border,
  layout,
  position,
  flexbox,
  grid,
  compose,
  system,
} from 'styled-system'

const cursor = system({
  cursor: true,
})

const styleProps = compose(
  color,
  space,
  border,
  layout,
  position,
  flexbox,
  grid,
  cursor,
)

const Box = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['notSelectable', 'maxWidth', 'borderRadius'].includes(prop),
})(
  ({ notSelectable }) => ({
    ...(notSelectable && { userSelect: 'none' }),
  }),
  {
    boxSizing: 'border-box',
  },
  system({
    transition: {
      property: 'transition',
    },
  }),
  styleProps,
  ({ sx }) => sx,
)

Box.displayName = 'Box'

export default Box
