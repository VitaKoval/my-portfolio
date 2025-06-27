import styled from 'styled-components'
import css from '@styled-system/css'

export const ContentToggleWrapper = styled.div(
  css({
    minHeight: '6.25rem',
    height: '100%',
  }),
)

export const VisibleContentContainer = styled.div(css({}))

export const HiddenContentContainer = styled.div(
  css({
    transition: '0.3s ease-in-out',
  }),
)
export const HiddenContent = styled.div(css({}))

export const ToggleButton = styled.button(
  css({
    position: 'sticky',

    top: '6.25rem',
    marginLeft: 'auto',
    marginTop: '1rem',
    marginBottom: '1rem',
    zIndex: 1,

    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    fontFamily: 'inherit',
    border: '0.0625rem solid',

    textDecoration: 'none',
    outline: 'none',
    transition: '.2s',

    borderRadius: '0.375rem',
    px: '0.75rem',
    pr: '0.75rem',
    height: '2rem',
    color: '#333333',
    bg: '#fafafa',
    borderColor: '#fafafa',
    '&:hover, &:active': {
      bg: 'hsl(0, 0%, 80%)',
      borderColor: 'hsl(0, 0%, 80%)',
    },
    '&:focus-visible': {
      outline: 'none',
      borderColor: 'hsl(0, 0%, 80%)',
      bg: 'hsl(0, 0%, 80%)',
    },
  }),
)
