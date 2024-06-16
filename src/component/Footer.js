import {Box, Center, HStack, VStack } from "@chakra-ui/react";
import littlelemon from "../image/little lemon logo-Photoroom.png-Photoroom.png"
import facebooklogo from "../image/facebook.png"
import instagramlogo from "../image/instagram.png"
import tiktoklogo from "../image/tiktok.png"

function Footer (){
    return(
    <html class="flex bg-menubg lg:h-full md:h-5/6 h-full">
        <img src={littlelemon} class="object-contain"></img>
        <main class="w-max mr-auto ml-auto grid
         md:grid-cols-2
         lg:grid-cols-2
         lg:gap-x-32
        ">
        <h1 class="align-start font-bold font-secon mt-3
        text-xl tracking-descp lg:m-5 lg:ml-5 col-start-1">LITTLE LEMON </h1>
        <h2 class="align-start font-bold font-secon mt-3
        text-md tracking-descp lg:m-5 lg:ml-5 col-start-1">Home</h2>
        <h2 class="align-start font-bold font-secon mt-3
        text-md tracking-descp lg:m-5 lg:ml-5 col-start-1">About</h2>
        <h2 class="align-start font-bold font-secon mt-3
        text-md tracking-descp lg:m-5 lg:ml-5 col-start-1">Menu</h2>
        <h2 class="align-start font-bold font-secon mt-3
        text-md tracking-descp lg:m-5 lg:ml-5 col-start-1">Order Online</h2>
        <h2 class="align-start font-bold font-secon mt-3
        text-md tracking-descp lg:m-5 lg:ml-5 col-start-1">Login</h2>
        <h2 class="align-start font-bold font-secon mt-3
        text-xl tracking-descp lg:m-5 lg:ml-5 col-start-1">CONTACT</h2>
        <h2 class="align-start font-bold font-secon mt-3
        text-md tracking-descp lg:m-5 lg:ml-5 col-start-1">(+60)12-2345678</h2>
        <h2 class="align-start font-bold font-secon mt-3
        text-md tracking-descp lg:m-5 lg:ml-5 col-start-1">Jln Klang Lama</h2>
        <logo class="flex">
        <img width="36px" height="36px" src={facebooklogo} class="m-2"/>
        <img width="36px" height="36px" src={instagramlogo} class="m-2"/>
        <img width="36px" height="36px" src={tiktoklogo} class="m-2"/>
        </logo>
        </main>
    </html>
    );
}

export default Footer;