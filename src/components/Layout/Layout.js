import React from 'react'
import { Flex } from '@/ui'
import Sidebar from '../Sidebar'

const Layout = () => {
  return (
    <Flex width="100vw" height="100vh" position="relative">
      <Sidebar />
    </Flex>
  )
}

export default Layout
