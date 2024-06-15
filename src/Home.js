import './App.css';
import Headers from './component/Headers.js';
import Footer from './component/Footer.js';
import Main from './component/Main.js';
import Specials from './component/Specials.js'
import Testimonials from './component/Testimonials.js'
import AboutUs from './component/AboutUs.js'
import { ChakraProvider } from '@chakra-ui/react';
import ogimage from "./image/restauranfood.jpg";
import Alert from './component/Alert.js';

const Home = () => {
    return (
        <html>
<head>
<meta name='description' content='Restaurant'></meta>
<meta name="og:title" content="LittleLemon"/>
<meta name="og:description" content="Healthy Life Style"/>
<meta name="og:image" content={ogimage}/>
</head>
<main>
<ChakraProvider>
<Headers/>
    <Main/>
    <Specials/>
    <Alert></Alert>

    {/* <Testimonials/> */}
    <AboutUs/>
    {/* <Footer/> */}
</ChakraProvider>

</main>     
</html>
    )
}

export default Home;
