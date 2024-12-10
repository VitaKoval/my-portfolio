import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './theme'
import { Layout, Intro, Technologies, Projects } from './components'
import { MainPage, SoliticsPage } from '@/pages'

export const SOLITICS_PATH = '/my-portfolio/solitics'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/my-portfolio" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={SOLITICS_PATH} element={<SoliticsPage />} />
          {/* <Route index element={<Home />} />
          
          <Route path="/my-portfolio/tech" element={<Technologies />} />
          <Route path="/my-portfolio/projects" element={<Projects />} /> */}
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
