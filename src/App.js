import { Flex } from '@/ui'
import { Route, Routes } from 'react-router-dom'
import { Layout, Home, Technologies, Projects } from './components'
import { ThemeProvider } from './theme'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/my-portfolio" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/my-portfolio/tech" element={<Technologies />} />
          <Route path="/my-portfolio/projects" element={<Projects />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
