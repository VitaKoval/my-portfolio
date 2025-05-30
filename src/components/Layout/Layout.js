import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Flex, Preloader } from '@/ui'
import Header from '../Header'
// import Sidebar from '../Sidebar'

const Layout = () => {
  return (
    <Flex position="relative">
      {/* <Sidebar /> */}
      <Flex column flex={1}>
        <Header />
        <Suspense fallback={<Preloader />}>
          <Outlet />
        </Suspense>
      </Flex>
    </Flex>
  )
}

export default Layout
