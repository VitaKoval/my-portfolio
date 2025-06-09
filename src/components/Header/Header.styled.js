import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Text } from '@/ui'

export const HeaderWrap = styled(Flex)(
  css({
    position: 'fixed',
    top: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    zIndex: 1000,
    height: '64px',
    boxShadow: 'inset 0 -1px 0 0 #333333',
    transform: 'translateZ(0)',
    '-webkit-backdrop-filter': 'saturate(180%) blur(5px)',
    backdropFilter: 'saturate(180%) blur(5px)',
    bg: 'bg.dark',
    color: 'foreground',
    borderWidth: '0',
    borderColor: 'border',
  }),
)

//Nav Bar
export const NavBarNav = styled.nav(
  css({
    display: 'flex',
    flex: '1 1',
    gap: '1rem',
    alignItems: 'center',
    maxWidth: '1400px',
  }),
)

export const NavBarLinks = styled.div(
  css({
    display: ['none', 'none', 'flex'],
    alignItems: 'center',
    width: '100%',
    gap: '1.5rem',
  }),
)

export const NavListItem = styled(Text)(
  css({
    p: '10px 8px',
    transition: 'color 0.2s ease',
    fontSize: '14px',
    borderRadius: '2px',
    color: 'accents5',
    cursor: 'pointer',
    '&:hover': {
      color: 'foreground',
    },
  }),
)

// NavBarHeaderButtons
export const NavButtonsWrap = styled(Flex)(
  css({
    alignItems: 'center',
    gap: '12px',
    a: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    svg: {
      fill: 'accents5',
      transition: '0.2s',
    },
    ['a:hover']: {
      svg: {
        fill: 'accents8',
      },
    },
    ['hr']: {
      width: '1px',
      height: '19px',
      bg: 'accents5',
      border: 'none',
    },
  }),
)

// MobileTopHeader
export const MobBarLinks = styled.div(
  css({
    display: ['flex', 'flex', 'none'],
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: '1.5rem',
    height: '64px',
  }),
)
