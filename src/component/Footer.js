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
                <Box
                position="absolute"
                top="2510px"
                left="228px">
                <img src={littlelemon}></img>
                </Box>
                <VStack
                spacing="0px"
                position="absolute"
                top="2527px"
                left="596px">
                    <header>LITTLE LEMON </header>
                    <main>Home</main>
                    <main>About</main>
                    <main>Menu</main>
                    <main>Order Online</main>
                    <main>Login</main>
                </VStack>
                <VStack
                position="absolute"
                top="2527px"
                left="983px">
                    <header>CONTACT</header>
                    <VStack>
                        <main>(+60)12-2345678</main>
                        <main>Jln Klang Lama</main>
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