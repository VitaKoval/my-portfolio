import React from 'react'
import { Link } from 'react-router-dom'
import { Img, ContactIcons } from '@/ui'
// import Logo from '@/assets/favicon.svg'
import { SidebarWrapper } from './Sidebar.styled'
import SidebarItems from './SidebarItems'
import { sidebarItems, sidebarContactIcons } from './definitions'

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Link to="/my-portfolio">
        {/* <Img src={Logo} alt="Logo" width="2.5rem" /> */}
      </Link>
      {sidebarItems.length && <SidebarItems sidebarItems={sidebarItems} />}
      {sidebarContactIcons.length && (
        <ContactIcons contactItems={sidebarContactIcons} />
      )}
    </SidebarWrapper>
  )
}

Sidebar.displayName = 'Sidebar'

export default Sidebar
