import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Text, Heading } from '@/ui'
import BgSection from '../../assets/images/bg-section.png'

export const SummarySection = styled.section(css({}))

export const SummaryWrap = styled(Flex)(
  css({
    position: 'relative',
    flex: 1,
    mt: '-34px',
    mb: '34px',
    px: '50px',
    py: '64px',
    backgroundImage: `url(${BgSection})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: 'sm',
    [Text]: {
      color: 'text.button',
    },
    [Heading]: {
      color: 'text.button',
    },
  }),
)
