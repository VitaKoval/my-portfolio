import { Flex } from '@/ui'
import { ThemeProvider } from './theme'

function App() {
  return (
    <ThemeProvider>
      <Flex height="150px" bg="pink">
        <h1>Hello World!</h1>
      </Flex>
    </ThemeProvider>
  )
}

export default App
