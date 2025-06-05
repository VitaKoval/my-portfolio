import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Text } from '@/ui'

export const MenuToggleWrap = styled(Flex)(({ isOpen }) =>
  css({
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',

    '&:before, &:after': {
      content: '""',
      display: 'block',
      height: '1.5px',
      width: '22px',
      bg: 'foreground',
      transition: 'transform .15s ease',
    },
    '&:before': {
      // transform: 'translateY(-4px) rotate(0deg)',
      transform: isOpen
        ? 'translateY(1px) rotate(45deg)'
        : 'translateY(-4px) rotate(0deg)',
    },
    '&:after': {
      //   transform: 'translateY(4px) rotate(0deg)',
      transform: isOpen
        ? 'translateY(0) rotate(-45deg)'
        : 'translateY(4px) rotate(0deg)',
    },
  }),
)
