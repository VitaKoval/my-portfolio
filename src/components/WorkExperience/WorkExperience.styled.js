import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Text } from '@/ui'

export const WorkExperienceSection = styled.section(
  css({
    pb: '8.25rem',
  }),
)

export const ExperienceListWrap = styled(Flex)(
  css({
    flexDirection: 'column',
    gap: 8,
  }),
)

export const TextEditorStyled = styled(Flex)(
  css({
    gap: 3,
    flexDirection: 'column',
    ['p']: {
      fontSize: '1.25rem',
      lineHeight: '1.25',

      ['span']: {
        fontStyle: 'italic',
      },
    },
    ['ul']: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      fontSize: '1.25rem',
      lineHeight: '1.25',
    },
  }),
)
