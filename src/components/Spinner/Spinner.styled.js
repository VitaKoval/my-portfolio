import styled from 'styled-components'
import { Box } from '@/ui'
import css from '@styled-system/css'

export const SpinnerContainer = styled(Box)(
  css({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
    height: '90%',
    width: '90%',
    fontSize: '20px',

    margin: 'auto auto',
    borderRadius: '50%',
    borderRight: '9px solid rgba(0,0,0,0.8)',
    animation: 'spinning 20s linear infinite',
    '@keyframes spinning': {
      '0%': {
        transform: 'rotate(0deg)',
        borderRight: '9px solid rgba(0,0,0,0.6)',
      },
      '5%': { borderRightColor: 'rgba(0,0,0,0.4)' },
      '10%': { borderRightColor: 'rgba(0,0,0,0.6)' },
      '15%': { borderRightColor: 'rgba(0,0,0,0.4)' },
      '20%': { borderRightColor: 'rgba(0,0,0,0.6)' },
      '25%': { borderRightColor: 'rgba(0,0,0,0.4)' },
      '100%': {
        transform: 'rotate(360deg)',
        borderRight: '9px solid rgba(0,0,0,0.6)',
      },
    },
  }),
)
