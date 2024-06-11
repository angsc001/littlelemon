import { Box } from "@chakra-ui/react";
import logo from "../image/LittleLemon.png"

Headers = () => {
    return(
        <html >
            <main class="flex bg-white h-full md:h-40 lg:w-max mr-auto ml-auto items-center pl-6">
                <img src={logo} class=" w-60 h-20 object-contain"/>
                <ul class="flex flex-wrap">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservation">Reservations</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                </ul>
            </main>

            </html>
    );
}

export default Headers;