import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex } from '@/ui'
import { style } from 'styled-system'

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
  }),
)

export const IntroBlockImg = styled(Flex)(
  css({
    position: 'relative',
    width: '50%',
    height: '41.5rem',
  }),
)
