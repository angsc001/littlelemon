import {Box, Center, HStack, VStack } from "@chakra-ui/react";
import littlelemon from "../image/little lemon logo-Photoroom.png-Photoroom.png"
import facebooklogo from "../image/facebook.png"
import instagramlogo from "../image/instagram.png"
import tiktoklogo from "../image/tiktok.png"

function Footer (){
    return(
<html>
                <img src={littlelemon}></img>
                    <header>LITTLE LEMON </header>
                    <main>Home</main>
                    <main>About</main>
                    <main>Menu</main>
                    <main>Order Online</main>
                    <main>Login</main>
                    <header>CONTACT</header>
                        <main>(+60)12-2345678</main>
                        <main>Jln Klang Lama</main>
                            <img width="36px" height="36px" src={facebooklogo}/>
                            <img width="36px" height="36px" src={instagramlogo}/>
                            <img width="36px" height="36px" src={tiktoklogo}/>
</html>
    );
}

export default Footer;