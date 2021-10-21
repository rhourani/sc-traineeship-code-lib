import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import {HeadNavBar} from "../src/components/charetto_f3/HeadNavBar";

function App() {
  return (
    <ChakraProvider>
    <HeadNavBar/>
  </ChakraProvider>
  );
}

export default App;
