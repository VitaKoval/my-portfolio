import { Flex } from '@/ui'
import { Route, Routes } from 'react-router-dom'
import { Layout, Home } from './components'
import { ThemeProvider } from './theme'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/my-portfolio" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
