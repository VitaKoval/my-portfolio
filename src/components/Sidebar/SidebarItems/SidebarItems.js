import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { SidebarItemsContainer, SidebarItemContainer } from '../Sidebar.styled'

const SidebarItems = ({ sidebarItems }) => {
  const location = useLocation()
  const { pathname } = location
  console.log(pathname)
  const index = sidebarItems.findIndex(({ path }) =>
    path === '/'
      ? pathname === '/my-portfolio/'
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
                ? '#F8FAFE'
                : '#9670b8'
            }
          />
        </SidebarItemContainer>
      ))}
    </SidebarItemsContainer>
  )
}

export default SidebarItems
