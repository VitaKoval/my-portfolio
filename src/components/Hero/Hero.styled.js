import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Box, Img } from '@/ui'
import { Text } from '../../ui'

export const HeroSection = styled(Flex)(
  css({
    position: 'relative',
    width: '100%',
    // p: '6rem 0 2rem',
    overflow: 'hidden',
    color: 'accents5',

    minHeight: '640px',
    marginTop: ['140px', '205px'],
  }),
)

export const ContentWrapper = styled(Flex)(
  css({
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
    textAlign: 'center',
    [Text]: {
      maxWidth: '782px',
    },
  }),
)
