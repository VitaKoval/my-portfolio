import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Box, Img } from '@/ui'
import BgImage from '@/assets/images/bg-gradient.png'

export const IntroSection = styled(Box)(
  css({
    position: 'relative',
    width: '100%',
    p: '6rem 0 2rem',
    overflow: 'hidden',
  }),
)

export const IntroBgImage = styled(Box)(
  css({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: '-1',
    overflow: 'hidden',
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }),
)

export const IntroWrapper = styled(Flex)(
  css({
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.938rem',
    flex: 1,
  }),
)

export const IntroBlockText = styled(Flex)(
  css({
    flexDirection: 'column',
    gap: 16,
    maxWidth: '34rem',
    width: '50%',
    maxWidth: '34rem',
  }),
)

export const IntroBlockImg = styled(Flex)(
  css({
    position: 'relative',
    width: '50%',
    height: '47.5rem',
  }),
)

export const IntroImage = styled(Img)(
  css({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    objectFit: 'contain',
  }),
)
