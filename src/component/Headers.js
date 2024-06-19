import { Box } from "@chakra-ui/react";
import logo from "../image/LittleLemon.png"

Headers = () => {
    return(
        <html >
            <main class="flex bg-white h-full md:h-40 lg:w-max mr-auto ml-auto items-center pl-6">
                <img src={logo} class=" w-60 h-20 object-contain"/>
                <ul class="flex flex-wrap font-prim font-semibold text-xl
                z-[-1] md:z-auto">
                        <li class="m-3"><a href="/home">Home</a></li>
                        <li class="m-3"><a href="/about">About</a></li>
                        <li class="m-3"><a href="/menu">Menu</a></li>
                        <li class="m-3"><a href="/reservation">Reservations</a></li>
                        <li class="m-3"><a href="/order">Order Online</a></li>
                        <li class="m-3"><a href="/login">Login</a></li>
                </ul>
            </main>

            </html>
    );
}

export default Headers;