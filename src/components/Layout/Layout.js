import React from 'react'
import { Outlet } from 'react-router-dom'
import { Flex } from '@/ui'
// import Sidebar from '../Sidebar'

const Layout = () => {
  return (
    <Flex position="relative">
      {/* <Sidebar /> */}
      <Flex column flex={1}>
        <Outlet />
      </Flex>
    </Flex>
  )
}

export default Layout
