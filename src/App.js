import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './theme'
import Router from './Router'

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}

export default App
