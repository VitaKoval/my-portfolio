import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { routes } from '@/utils'
import { RouteComponent } from '@/components'
import { HOME_PAGE_PATH } from './services'
import { Layout } from './components'

const RootRoute = () => {
  return <Navigate to={HOME_PAGE_PATH} replace />
}

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        ...routes.map(({ path, ...props }) => ({
          path,
          element: <RouteComponent {...props} />,
        })),
        { path: '*', element: <RootRoute /> },
        { path: '/', element: <RootRoute /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
)

export const nativeNavigate = router.navigate

window.reactRouter = router

const Router = () => {
  console.log('Router')
  return <RouterProvider router={router} />
}

export default Router
