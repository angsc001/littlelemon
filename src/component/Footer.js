import {Box, Center, HStack, VStack } from "@chakra-ui/react";
import littlelemon from "../image/little lemon logo-Photoroom.png-Photoroom.png"
import facebooklogo from "../image/facebook.png"
import instagramlogo from "../image/instagram.png"
import tiktoklogo from "../image/tiktok.png"

function Footer (){
    return(
        <Center
        height="460px"
        padding="200px"
        backgroundColor="#EDEFEE">
            <HStack
            spacing="100px">
                <img src={littlelemon}></img>
                <VStack
                spacing="3px">
                    <h1>LITTLE LEMON </h1>
                    <a>Home</a>
                    <a>About</a>
                    <a>Menu</a>
                    <a>Order Online</a>
                    <a>Login</a>
                </VStack>
                <VStack>
                    <h1>Contact</h1>
                    <VStack>
                        <h1>(+60)12-2345678</h1>
                        <h1>Jln Klang Lama</h1>
                        <HStack>
                            <img width="36px" height="36px" src={facebooklogo}/>
                            <img width="36px" height="36px" src={instagramlogo}/>
                            <img width="36px" height="36px" src={tiktoklogo}/>
                        </HStack>
                    </VStack>
                </VStack>
            </HStack>
        </Center>
    );
}

export default Footer;