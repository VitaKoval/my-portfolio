import React from 'react'
import { Link } from 'react-router-dom'
import { Img } from '@/ui'
import Logo from '@/assets/favicon.svg'
import { SidebarWrapper } from './Sidebar.styled'

const Sidebar = () => {
  return (
    <>
      <SidebarWrapper>
        <Link to="/my-portfolio/">
          <Img src={Logo} alt="Logo" width="2.5rem" />
        </Link>
      </SidebarWrapper>
    </>
  )
}

Sidebar.displayName = 'Sidebar'

export default Sidebar
