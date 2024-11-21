import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { SidebarItemsContainer, SidebarItemContainer } from '../Sidebar.styled'

const SidebarItems = ({ sidebarItems }) => {
  const location = useLocation()
  const { pathname } = location

  const index = sidebarItems.findIndex(({ path }) =>
    path === ''
      ? pathname === '/my-portfolio'
      : pathname.startsWith(`/my-portfolio${path}`),
  )

  return (
    <SidebarItemsContainer index={index}>
      {sidebarItems.map(({ name, Icon, path }) => (
        <SidebarItemContainer
          key={name}
          as={NavLink}
          to={`/my-portfolio${path}`}
          exact="true"
        >
          <Icon
            size={24}
            color={
              index === sidebarItems.findIndex((item) => item.path === path)
                ? '#50557D'
                : '#DADDFA'
            }
          />
        </SidebarItemContainer>
      ))}
    </SidebarItemsContainer>
  )
}

export default SidebarItems
