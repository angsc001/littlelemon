import './App.css';
import Headers from './component/Headers.js';
import Footer from './component/Footer.js';
import Main from './component/Main.js';
import Specials from './component/Specials.js'
import Testimonials from './component/Testimonials.js'
import AboutUs from './component/AboutUs.js'
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
    <main>
        <Headers/>
        <Main/>
        <Specials/>
        <Testimonials/>
        <AboutUs/>
        <Footer/>
    </main>
    </ChakraProvider>

  );
}

export default App;
