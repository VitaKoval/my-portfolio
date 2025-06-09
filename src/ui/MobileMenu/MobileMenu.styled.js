import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex } from '@/ui'

export const MobileMenuWrapper = styled.div(({ isOpen }) =>
  css({
    position: 'absolute',
    top: '76px',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '1000',
    transition: 'transform .3s ease',
    transform: isOpen ? 'translate(0, 0)' : 'translate(100vw, 0)',
  }),
)

export const MobileMenuContainer = styled(Flex)(
  css({
    flexDirection: 'column',
    px: '32px',
    width: '100vw',
    maxWidth: '100vw',
    height: '100vh',
    bg: 'background',
    overflowY: 'scroll',
    '-webkit-overflow-scrolling': 'touch',
  }),
)
