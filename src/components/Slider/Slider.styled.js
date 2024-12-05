import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Box } from '@/ui'

export const SliderWrapper = styled(Box)(
  css({
    height: '500px',
    overflow: 'hidden',
  }),
)

export const SliderContainer = styled(Flex).withConfig({
  shouldForwardProp: (prop) => !['sliderGap'].includes(prop),
})(({ sliderGap }) =>
  css({
    pb: '10px',
    height: '540px',
    overflowX: 'auto',
    gap: sliderGap ? `${sliderGap}px` : 5,
    scrollSnapType: 'x mandatory',
  }),
)

export const SliderItem = styled(Flex).withConfig({
  shouldForwardProp: (prop) => !['sliderWidth'].includes(prop),
})(({ sliderWidth }) =>
  css({
    flexDirection: 'column',
    width: sliderWidth ? sliderWidth : '500px',
    height: '500px',
    borderRadius: 'xl',
    bg: 'bg.tableDark',
    flexShrink: 0,
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',

    position: 'relative',
  }),
)
