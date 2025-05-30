import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex } from '@/ui'

const PageContainer = styled(Flex)(
  css({
    flexDirection: 'column',
    px: '1.875rem',
    width: '100%',
    mx: 'auto',
    maxWidth: '100%',
    '@media screen and (min-width: 1240px)': {
      maxWidth: '73.75rem',
      px: '1rem',
    },
    '@media screen and (max-width: 1024px)': {
      maxWidth: '60rem',
    },
  }),
)

export default PageContainer
