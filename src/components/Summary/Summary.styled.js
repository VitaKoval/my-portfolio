import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex, Text, Heading } from '@/ui'
import BgSection from '../../assets/images/bg-section.png'

export const SummarySection = styled.section(css({}))

export const SummaryWrap = styled(Flex)(
  css({
    position: 'relative',
    justifyContent: 'space-between',
    gap: 6,
    flex: 1,
    mt: '-34px',
    mb: '34px',
    px: '50px',
    py: '64px',
    backgroundImage: `url(${BgSection})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: 'sm',

    [Text]: {
      color: 'text.button',
    },
    [Heading]: {
      color: 'text.button',
    },
  }),
)

export const SkillsList = styled(Flex)(
  css({
    flexDirection: 'column',
    gap: 5,
  }),
)

export const SummaryItemStyled = styled(Flex)(
  css({
    border: '1px solid',
    borderColor: 'border.section',
    px: 4,
    py: 2,
    borderRadius: 'xs',
    boxShadow:
      '0px 4px 16px rgba(0, 0, 0, 0.24), 0px 10px 30px rgba(0, 0, 0, 0.3), 0px 20px 50px rgba(0, 0, 0, 0.4), inset 0px 4px 20px rgba(255, 255, 255, 0.12), inset 0px 1px 4px rgba(255, 255, 255, 0.2), inset 0px 4px 32px rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(10px)',
  }),
)

export const SkillItem = styled(Flex)(
  css({
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '12px',
      left: '12px',
      width: '50px',
      height: '50px',
      bg: 'bg.alert',
      borderRadius: '32px',
      // backdropFilter: 'blur(80px)',
      // zIndex: '-1', // відправляємо в фон
    },
  }),
)

export const SkillItemContent = styled(Flex)(
  css({
    flexDirection: 'column',
    alignItems: 'center',
    width: '222px',

    gap: 4,
    p: 8,
    bg: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '24px',
    boxShadow: '5px -3px 0 #2E2E2E',
    zIndex: 1,
    backdropFilter: 'blur(6px)',
    [Text]: {
      textAlign: 'center',
    },
  }),
)
