import styled from 'styled-components'
import css from '@styled-system/css'

export const ContentToggleWrapper = styled.div(
  css({
    position: 'relative',
    paddingBottom: '50px',
  }),
)

export const VisibleContentContainer = styled.div(css({}))

export const HiddenContentContainer = styled.div(
  css({
    borderBottom: '1px solid red',
  }),
)
export const HiddenContent = styled.div(css({}))

export const ToggleButton = styled.button(
  css({
    position: 'absolute',
    right: '50%',
    bottom: '0',
    transform: 'translate(50%, 0%)',
    cursor: 'pointer',
  }),
)
