import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex } from '@/ui'

export const TechItemImg = styled(Flex)(
  css({
    width: '4.125rem',
    height: '4.125rem',
    borderRadius: 'xs',
    overflow: 'hidden',
    transition: '.5s',
  }),
)

export const TechItemWrap = styled(Flex)(
  css({
    alignItems: 'center',
    gap: '0.625rem',
    bg: 'bg.section',
    p: '0.625rem',
    border: '1px solid',
    borderColor: 'border.section',
    borderRadius: 'sm',
    width: '17rem',
    height: '5.375rem',
    transition: '.3s',
    '&:hover': {
      cursor: 'pointer',
      filter: 'drop-shadow(5px 10px 15px rgba(8,9,13,.4))',
    },
  }),
)
