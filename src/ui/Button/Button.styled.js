import styled from 'styled-components'
import css from '@styled-system/css'
import { variant } from 'styled-system'

export const variants = {
  primary: {
    color: 'accents2',
    bg: 'accents8',
    borderColor: 'accents8',
    '&:hover, &:active': {
      bg: 'hoverBg',
      borderColor: 'hoverBg',
    },
    '&:focus-visible': {
      outline: 'none',
      borderColor: 'hoverBg',
      bg: 'hoverBg',
    },
    '&:disabled': {
      bg: 'accents2',
      color: 'accents5',
      cursor: 'default',
    },
  },
  secondary: {
    color: 'accents8',
    bg: 'gray',
    borderColor: 'gray',
    '&:hover, &:active': {
      outline: 'none',
      bg: 'bgGray200',
      borderColor: 'bgGray200',
    },
    '&:focus-visible': {
      outline: 'none',
      borderColor: 'bgGray200',
      bg: 'bgGray200',
    },
    '&:disabled': {
      color: 'accents5',
      bg: 'bgGray200',
      cursor: 'default',
    },
  },
  alternative: {
    color: 'accents8',
    bg: 'transparent',
    borderColor: 'transparent',
  },
}

export const size = {
  small: {
    borderRadius: '6px',
    px: '12px',
    pr: '12px',
    height: '32px',
  },
  big: {
    borderRadius: '8px',
    px: '14px',
    py: '12px',
    height: '48px',
    fontSize: '16px',
  },
}

export const ButtonBase = styled.button(
  css({
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    fontFamily: 'Metropolis',
    border: '1px solid',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    transition: '.2s',
    ['svg']: {
      transition: '.2s',
    },
  }),
  variant({ variants }),
  variant({ prop: 'size', variants: size }),
)
