import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Box, Img } from '@/ui'
import BgImg from '@/assets/images/bg-gradient.png'
import Text from '../../ui/Text/Text'
import { Link } from 'react-router-dom'

export const ContentSectionWrapper = styled.section(
  css({
    position: 'relative',
    width: '100%',
    p: '3rem 0 2rem',
    overflow: 'hidden',
  }),
)

export const ContentSectionBgImage = styled(Box)(
  css({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: '-1',
    overflow: 'hidden',
    backgroundImage: `url(${BgImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }),
)

export const ContentContainer = styled(Flex)(({ isReverse }) =>
  css({
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.938rem',
    flex: 1,
    flexDirection: isReverse ? 'row-reverse' : 'row',
  }),
)

export const TextContainer = styled(Flex)(({ variant }) =>
  css({
    flexDirection: 'column',
    gap: 16,

    // width: variant === 'intro' ? '50%' : '60%',
    ...(variant === 'intro' && {
      width: '50%',
    }),
  }),
)

export const ImageContainer = styled(Flex)(({ variant }) =>
  css({
    position: 'relative',
    width: variant === 'intro' ? '50%' : '40%',
  }),
)

export const ImageStyle = styled(Img)(
  css({
    objectFit: 'contain',
    maxWidth: '750px',
    width: '100%',
  }),
)

export const ActionButton = styled.button(
  css({
    position: 'absolute',
    top: '-2rem',
    left: 0,
    cursor: 'pointer',
    border: 'none',
    bg: 'transparent',
    display: 'flex',
    gap: 1,
    alignItems: 'center',
    p: 4,
    zIndex: 4,
    [Text]: {
      transition: '0.3s',
    },
    ['svg']: {
      transition: '0.3s',
    },
    '&:hover': {
      [Text]: {
        color: 'text.alert',
      },
      ['svg']: {
        transform: 'translateX(-4px)',
        fill: 'text.alert',
      },
    },
  }),
)

export const LinkButton = styled(Link)(
  css({
    textDecoration: 'none',
  }),
)