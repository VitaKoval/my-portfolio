import React from 'react'
import { GrLinkedinOption, GrGithub } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { NavButtonsWrap } from './Header.styled'

function NavBarHeaderButtons() {
  return (
    <NavButtonsWrap>
      <Link to="https://github.com/VitaKoval" target="_blank">
        <GrGithub size="16" />
      </Link>
      <hr />
      <Link to="https://linkedin.com/in/vita-koval-dev" target="_blank">
        <GrLinkedinOption size="16" />
      </Link>
    </NavButtonsWrap>
  )
}

export default NavBarHeaderButtons
