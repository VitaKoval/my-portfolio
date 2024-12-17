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

export const TechnologiesList = styled(Flex)(
  css({
    position: 'absolute',
    bottom: 0,
    flexWrap: 'wrap',
    gap: 2,
    transform: 'scale(0)',
    transition: '0.3s',
  }),
)
export const LinkList = styled(Flex)(
  css({
    position: 'absolute',
    top: '50%',
    left: 0,
    gap: 2,
    transform: 'scale(0) translateY(-50%)',
    transition: '0.3s',
    flexDirection: 'column',
    [Flex]: {
      alignItems: 'center',
      justifyContent: 'center',

      bg: 'white',
      p: 2,
      borderRadius: '50%',
      width: '32px',
      height: '32px',
    },
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
        transform: 'scale(0.8) translate(0, -12%)',
        // filter: 'drop-shadow(rgba(8, 9, 13, 0.4) 5px 10px 15px)',
      },
      [TechnologiesList]: {
        transform: 'scale(1)',
      },
      [LinkList]: {
        transform: 'scale(1)',
      },
    },

    ...(type === 'empty' && {
      bg: 'rgb(239,243,252)',
      backgroundImage:
        'linear-gradient(to right, rgba(239,243,252,1) 5%, rgba(255,255,255,1) 28%)',
    }),
  }),
)
