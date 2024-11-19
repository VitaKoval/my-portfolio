import { Flex } from '@/ui'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { ThemeProvider } from './theme'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/my-portfolio" element={<Layout />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
