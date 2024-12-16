import { lazy } from 'react'

// Pages
const HomePage = lazy(() => import('../pages/MainPage'))
const SoliticsPage = lazy(() => import('../pages/SoliticsPage'))
const PuzzlePage = lazy(() => import('../pages/PuzzlePage'))

//PATH
export const HOME_PAGE_PATH = '/my-portfolio'
export const SOLITICS_PAGE_PATH = '/my-portfolio/solitics'
export const PUZZLE_PAGE_PATH = '/my-portfolio/puzzle'

const routes = [
  {
    path: HOME_PAGE_PATH,
    Component: HomePage,
  },
  {
    path: SOLITICS_PAGE_PATH,
    Component: SoliticsPage,
  },
  {
    path: PUZZLE_PAGE_PATH,
    Component: PuzzlePage,
  },
]

export default routes
