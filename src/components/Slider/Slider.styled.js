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
  shouldForwardProp: (prop) => !['slideWidth'].includes(prop),
})(({ slideWidth, type }) =>
  css({
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: slideWidth ? slideWidth : '500px',
    height: '500px',
    borderRadius: 'xl',
    bg: 'bg.tableDark',
    flexShrink: 0,
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',
    p: 5,
    cursor: 'pointer',
    ['img']: {
      transition: '0.3s',
    },
    '&:hover': {
      ['img']: {
        transform: 'scale(1.01)',
        filter: 'drop-shadow(rgba(8, 9, 13, 0.4) 5px 10px 15px)',
      },
    },

    ...(type === 'empty' && {
      bg: 'rgb(239,243,252)',
      backgroundImage:
        'linear-gradient(to right, rgba(239,243,252,1) 5%, rgba(255,255,255,1) 28%)',
    }),
  }),
)
