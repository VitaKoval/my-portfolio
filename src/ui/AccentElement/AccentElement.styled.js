import styled from 'styled-components'
import css from '@styled-system/css'

const AccentElement = styled.span(
  css({
    position: 'relative',
    '&:before, &:after': {
      content: '""',
      zIndex: -1,
      border: '3px solid',
      borderColor: 'border.alert',
      position: 'absolute',
      left: '50%',
      top: '52%',
      opacity: '1',
      borderRadius: '80%',
    },
    '&:before': {
      transform: 'translate(-50%, -50%) rotate(-1deg)',
      borderTopWidth: 0,
      width: '111%',
      height: '110%',
    },
    '&:after': {
      transform: 'translate(-50%, -50%) rotate(-2deg)',
      borderLeftWidth: 0,
      borderBottomWidth: 0,
      width: '107%',
      height: '111%',
    },
  }),
)

export default AccentElement
