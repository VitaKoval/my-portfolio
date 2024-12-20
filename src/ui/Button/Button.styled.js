import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex } from '@/ui'

export const ButtonWrap = styled(Flex)(
  css({
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    fontFamily: 'Metropolis',
    color: 'text.title',
    fontSize: 'xs',
    lineHeight: '1.25',
    fontWeight: 'semiBold',
    borderRadius: '3.125rem',
    border: '2px solid',
    borderColor: 'border.primary',
    cursor: 'pointer',
    textDecoration: 'none',
    bg: 'bg.paper',

    px: 3,
    pr: 4,
    height: '3rem',
    transition: '.3s',
    ['svg']: {
      transition: '.3s',
    },
    '&:hover': {
      bg: 'bg.hover',
      ['svg']: {
        transform: 'translateX(4px)',
      },
    },
  }),
)
