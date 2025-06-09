import React from 'react'
import { NavListItem } from './Header.styled'

function NavigationList({ navList, handleClick }) {
  return (
    <>
      {navList?.map(({ name, link }) => (
        <NavListItem key={name} as="a" href={link} onClick={handleClick}>
          {name}
        </NavListItem>
      ))}
    </>
  )
}

NavigationList.propTypes = {}

export default NavigationList
