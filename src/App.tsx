import { Box, ChakraProvider } from "@chakra-ui/react"
import './App.css';
import Home from './pages/Home';

const App = () => {
  return (
    <ChakraProvider>
      <Box backgroundColor="gray.50">
        <Home />
      </Box>
    </ChakraProvider>
  );
}

export default App;
