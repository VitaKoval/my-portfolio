import React from 'react'
import { Outlet } from 'react-router-dom'
import { Flex } from '@/ui'
// import Sidebar from '../Sidebar'

const Layout = () => {
  return (
    <Flex width="100vw" height="100vh" position="relative">
      {/* <Sidebar /> */}
      <Flex flex={1}>
        <Outlet />
      </Flex>
    </Flex>
  )
}

export default Layout
