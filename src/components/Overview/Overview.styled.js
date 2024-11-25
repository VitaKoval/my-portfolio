import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Heading, Text } from '@/ui'

export const OverviewSection = styled.section(
  css({
    [Text]: {
      color: 'text.button',
    },
    [Heading]: {
      color: 'text.button',
    },
  }),
)
