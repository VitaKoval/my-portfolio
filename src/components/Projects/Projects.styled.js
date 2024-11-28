import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex } from '@/ui'

export const ProjectSection = styled.section(
  css({
    pt: '167px',
    pb: '238px',
    borderTop: '2px solid',
    borderColor: 'border.section',
  }),
)

// Project Item
export const ProjectItemContainer = styled(Flex)(
  css({
    flexDirection: 'column',
    gap: 6,
    width: '21.25rem',
  }),
)

export const ProjectImageContainer = styled(Flex)(
  css({
    display: 'flex',
    width: '21.25rem',
    height: '21.25rem',
    border: '1px solid',
    borderColor: 'border.paperSecondary',
    borderRadius: 'sm',
    bg: 'bg.paperSecondary',
    transition: '.3s',
    '&:hover': {
      cursor: 'pointer',
      filter: 'drop-shadow(5px 10px 15px rgba(8,9,13,.4))',
    },
  }),
)
