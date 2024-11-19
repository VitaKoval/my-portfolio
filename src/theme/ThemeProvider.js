import React, { useState } from 'react'

import { ThemeProvider as DefaultThemeProvider } from 'styled-components'
import {
  GlobalStyle,
  primaryTheme,
  secondaryTheme,
  DisplayProvider,
} from './index'
import PropTypes from 'prop-types'
import customStyle from './customStyle'

export default function ThemeProvider({ children, ...props }) {
  let localStorageTheme = 'light'
  if (!localStorageTheme) {
    localStorageTheme = 'light'
  }
  const [theme, setTheme] = useState(localStorageTheme)

  let themeValues = theme === 'light' ? primaryTheme : secondaryTheme
  const changeTheme = (selectedTheme) => {
    let toTheme = selectedTheme
    if (!toTheme) {
      if (theme === 'light') {
        toTheme = 'dark'
      } else {
        toTheme = 'light'
      }
    }
    setTheme(toTheme)
    localStorage.setItem('theme', toTheme)
  }
  themeValues.changeTheme = changeTheme

  window.changeTheme = changeTheme

  return (
    <DefaultThemeProvider theme={themeValues} {...props}>
      <style>{customStyle}</style>
      <GlobalStyle />
      <DisplayProvider>{children}</DisplayProvider>
    </DefaultThemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.any,
}
