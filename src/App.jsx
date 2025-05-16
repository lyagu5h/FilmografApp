import './App.css'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { RouterProvider } from 'react-router'
import { router } from './router/routes'

function App() {

  return (
    <>
      <ChakraProvider value={defaultSystem}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  )
}

export default App
