import './App.css';
import Headers from './component/Headers.js';
import Footer from './component/Footer.js';
import Main from './component/Main.js';
import Specials from './component/Specials.js'
import Testimonials from './component/Testimonials.js'
import AboutUs from './component/AboutUs.js'
import { ChakraProvider } from '@chakra-ui/react';
import ogimage from "./image/restauranfood.jpg";

const Home = () => {
    return (
        <ChakraProvider>
<head>
<meta name='description' content='Restaurant'></meta>
<meta name="og:title" content="LittleLemon"/>
<meta name="og:description" content="Healthy Life Style"/>
<meta name="og:image" content={ogimage}/>
</head>
<main>
    <Headers/>
    <Main/>
    <Specials/>
    {/* <Testimonials/>
    <AboutUs/>
    <Footer/> */}
</main>
</ChakraProvider>
    )
}

export default Home;
