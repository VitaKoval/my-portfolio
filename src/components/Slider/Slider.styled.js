import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Box } from '@/ui'

export const SliderWrapper = styled(Box)(
  css({
    height: '500px',
    overflow: 'hidden',
  }),
)

export const SliderContainer = styled(Flex)(
  css({
    pb: '10px',
    height: '540px',
    overflowX: 'auto',
    gap: 5,
    scrollSnapType: 'x mandatory',
  }),
)

export const SliderItem = styled(Flex)(
  css({
    flexDirection: 'column',
    width: '500px',
    height: '500px',
    borderRadius: 'xl',
    bg: 'yellow',
    flexShrink: 0,
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',

    position: 'relative',
  }),
)
