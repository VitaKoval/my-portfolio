import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex } from '@/ui'

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
