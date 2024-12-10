import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Box, Img } from '@/ui'
import BgImg from '@/assets/images/bg-gradient.png'

export const SectionWrapper = styled.section(
  css({
    position: 'relative',
    width: '100%',
    p: '2rem 0 2rem',
    overflow: 'hidden',
  }),
)

export const BgImage = styled(Box)(
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

export const ContentContainer = styled(Flex)(
  css({
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.938rem',
    flex: 1,
  }),
)

export const TextContainer = styled(Flex)(
  css({
    flexDirection: 'column',
    gap: 16,
    maxWidth: '34rem',
    width: '50%',
    maxWidth: '34rem',
  }),
)

export const ImageContainer = styled(Flex)(
  css({
    position: 'relative',
    width: '50%',
    height: '47.5rem',
  }),
)

export const ImageStyle = styled(Img)(
  css({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    objectFit: 'contain',
    maxWidth: '750px',
  }),
)

export const ActionButton = styled.button(
  css({
    position: 'absolute',
    top: 0,
    left: 0,
    cursor: 'pointer',
    border: 'none',
    bg: 'transparent',
    display: 'flex',
    p: 4,
  }),
)
