import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Text } from '@/ui'

export const TachStackSection = styled.section(
  css({
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    marginBottom: ['140px', '205px'],
  }),
)

export const TechListWrap = styled(Flex)(
  css({
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '48px',
  }),
)

export const TechItemContainer = styled(Flex)(
  css({
    gap: '1rem',
    border: '1px solid',
    borderColor: 'accents2',
    padding: ['12px', '24px'],
    borderRadius: '12px',
    width: '100%',
    maxWidth: ['100%', '320px'],
    overflow: 'hidden',
    transitionProperty: 'border-color, background',
    transitionDuration: '.15s',
    cursor: 'pointer',
    '&:hover': {
      borderColor: 'accents3',
      background: 'rgba(255, 255, 255, 0.02)',
    },
    svg: {
      filter: 'invert(1)',
      opacity: '0.4',
      color: 'accents2',
      width: ['42px', '56px'],
      height: 'auto',
    },
  }),
)
