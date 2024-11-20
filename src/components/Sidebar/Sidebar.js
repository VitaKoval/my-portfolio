import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Img, Flex } from '@/ui'
import Logo from '@/assets/favicon.svg'
import { NavContainer, SidebarWrapper } from './Sidebar.styled'
import { GrHomeRounded, GrTechnology, GrProjects } from 'react-icons/gr'
import { PiLinkedinLogoBold, PiTelegramLogoBold } from 'react-icons/pi'
import { MdOutlineMailOutline } from 'react-icons/md'

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Link to="/my-portfolio">
        <Img src={Logo} alt="Logo" width="2.5rem" />
      </Link>
      <NavContainer>
        <NavLink exact="true" to="/my-portfolio">
          <GrHomeRounded size={24} />
        </NavLink>
        <NavLink exact="true" to="/my-portfolio/tech">
          <GrTechnology size={24} />
        </NavLink>
        <NavLink exact="true" to="/my-portfolio">
          <GrProjects size={24} />
        </NavLink>
      </NavContainer>
      <Flex column gap={4}>
        <a target="_blank" rel="noreferrer">
          <PiTelegramLogoBold size={24} />
        </a>
        <a>
          <PiLinkedinLogoBold size={24} />
        </a>
        <a>
          <MdOutlineMailOutline size={24} />
        </a>
      </Flex>
    </SidebarWrapper>
  )
}

Sidebar.displayName = 'Sidebar'

export default Sidebar
