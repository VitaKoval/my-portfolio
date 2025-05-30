import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex } from '@/ui'

export const ScrollbarContainer = styled(Flex)(
  css({
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }),
)

export const ScrollbarButton = styled.button(
  css({
    display: 'flex',
    cursor: 'pointer',
    border: '2px solid',
    borderRadius: '50%',
    borderColor: 'border.primary',
    bg: 'bg.paper',
    transition: '0.3s',
    ['path']: {
      transition: '0.3s',
      fill: 'border.primary',
    },
    '&:focus': {
      outline: 'none',
    },
    '&:active': {
      borderColor: 'border.alert',
      ['path']: { fill: 'border.alert' },
    },
    '&:disabled': {
      borderColor: 'border.inactive',
      textDecoration: 'none',
      ['path']: {
        fill: 'border.inactive',
      },
    },
  }),
)
