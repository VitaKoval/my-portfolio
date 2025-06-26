import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Text } from '@/ui'
import { Link } from 'react-router-dom'

export const WorkSectionWrap = styled(Flex)(
  css({
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '80px',
    my: '48px',
    overflow: 'hidden',
  }),
)

export const PreviewListContainer = styled(Flex)(
  css({
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    gap: '32px',
    '&::after': {
      content: "''",
      position: 'absolute',
      background: 'linear-gradient(to bottom, transparent, #000 40%)',
      zIndex: '1',
      width: '100%',
      left: '0',
      height: '400px',
      bottom: '-32px',
      pointerEvents: 'none',
    },
  }),
)

export const PreviewItem = styled(Link)(
  css({
    position: 'relative',
    borderRadius: '4px',
    overflow: 'hidden',
    width: '388px',
    height: '316px',
    boxShadow:
      '0 0 0 1px rgba(0, 0, 0, .03), 0 2px 4px rgba(0, 0, 0, .05), 0 12px 24px rgba(0, 0, 0, .05)',
    cursor: 'pointer',
    transition: 'box-shadow .15s ease',
    '&:hover': {
      boxShadow:
        '0 0 0 1px rgba(0, 0, 0, .1), 0 6px 16px rgba(0, 0, 0, .08), 0 8px 24px rgba(0, 0, 0, .05)',
    },
  }),
)

export const WorkActionsContainer = styled(Flex)(
  css({
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    zIndex: '2',
    gap: '32px',
    marginTop: '-80px',
  }),
)
