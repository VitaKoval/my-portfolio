import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Img } from '@/ui'
import BgImage from '@/assets/images/bg-gradient.png'

export const IntroWrapper = styled(Flex)(
  css({
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.938rem',
    flex: 1,
    p: 6,
    pl: 16,
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
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
    // minHeight: '664px',
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
