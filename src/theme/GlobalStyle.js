import { createGlobalStyle } from 'styled-components'

export const primaryFontFamily = "'Metropolis', sans-serif"

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${primaryFontFamily};
    color: ${({ theme }) => theme.colors.text.title};
    background-color: ${({ theme }) => theme?.colors?.bg?.white};
    scrollbar-color: ${({ theme }) => theme?.colors?.border?.border} ${({
  theme,
}) => theme?.colors?.border};
    scrollbar-width: thin;
    height: 100vh;
    width: 100vw;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme?.colors?.border?.section};
    border-radius: 2px;
    border: 1px solid;
    border-color: ${({ theme }) => theme?.colors?.border?.invisible};
    cursor: pointer;
    &:hover {
      border-radius: 8px;
      border-color: ${({ theme }) => theme?.colors?.border?.section};
    }
     &:active {
       background-color: ${({ theme }) => theme?.colors?.border?.iconNormal};
       border-color: ${({ theme }) => theme?.colors?.border?.iconNormal};
     }
  }

  ::-webkit-scrollbar-track {
    border-radius: 8px;
    &:active {
      background-color: ${({ theme }) => theme?.colors?.border?.table};
    }
  }
`

export default GlobalStyle
