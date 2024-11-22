import styled from 'styled-components'
import { Flex } from '@/ui'
import css from '@styled-system/css'

export const SidebarWrapper = styled(Flex)(
  css({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
    bg: 'bg.paper',
    px: 3,
    py: 4,
    width: '4.5rem',
    height: '100vh',
    zIndex: 100,
    boxShadow: 'sidebar',
  }),
)

export const SidebarItemsContainer = styled(Flex)(({ index }) =>
  css({
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    position: 'relative',
    ...(index !== -1 && {
      ':after': {
        content: '""',
        position: 'absolute',
        top: `calc( ${index} * 4rem)`,
        left: 0,
        size: 12,
        borderRadius: '50%',
        zIndex: '-1',
        bg: 'bg.active',
        transition: 'top 0.3s',
      },
    }),
  }),
)

export const SidebarItemContainer = styled(Flex)(
  css({
    alignItems: 'center',
    justifyContent: 'center',
    width: 12,
    height: 12,
    svg: {
      transition: '0.3s',
    },
  }),
)
