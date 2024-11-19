import React, { useContext, createContext, useState, useEffect } from 'react'

const breakpoints = {
  mobile: [0, 576],
  tablet: [577, 992],
  bigTablet: [993, 1400],
  desktop: [1401],
}

const getDisplayType = (currentWidth) => {
  if (currentWidth <= breakpoints.mobile[1]) {
    return 'mobile'
  }
  if (currentWidth <= breakpoints.tablet[1]) {
    return 'tablet'
  }
  if (currentWidth <= breakpoints.bigTablet[1]) {
    return 'bigTablet'
  }
  if (currentWidth <= breakpoints.desktop[1]) {
    return 'desktop'
  }
  return 'desktop'
}

const getDisplayMoreThan = (width) => (display) => {
  return breakpoints?.[display]?.[0] ? width >= breakpoints?.[display][0] : true
}
const getDisplayLessThan = (width) => (display) => {
  return breakpoints?.[display]?.[1] ? width <= breakpoints?.[display][1] : true
}

const setVh = () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

export const DisplayContext = createContext()

export const useDisplay = () => useContext(DisplayContext)

export const DisplayProvider = (props) => {
  const currentDisplayType = getDisplayType(window.innerWidth)
  const [display, setDisplay] = useState(currentDisplayType)

  setVh()

  const handleResize = () => {
    setVh()
    const currentDisplayType = getDisplayType(window.innerWidth)
    setDisplay(currentDisplayType)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const displayMoreThan = getDisplayMoreThan(window.innerWidth)
  const displayLessThan = getDisplayLessThan(window.innerWidth)

  const displayValues = {
    display,
    displayMoreThan,
    displayLessThan,
    isMobileView: displayLessThan('mobile'),
    isTabletView: displayLessThan('tablet'),
    isBigTabletView: displayLessThan('bigTablet'),
    isDesktopView: displayLessThan('desktop'),
  }

  return <DisplayContext.Provider value={displayValues} {...props} />
}
