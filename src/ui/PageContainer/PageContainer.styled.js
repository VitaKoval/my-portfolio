import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex } from '@/ui'

const PageContainer = styled(Flex)(
  css({
    px: '1.875rem',
    width: '100%',
    mx: 'auto',
    maxWidth: '100%',
    '@media screen and (min-width: 1240px)': {
      maxWidth: '1180px',
      px: '16px',
    },
    '@media screen and (max-width: 1024px)': {
      maxWidth: '960px',
    },
  }),
)

export default PageContainer
