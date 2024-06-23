import { Box } from "@chakra-ui/react";
import logo from "../image/LittleLemon.png"
import menu from "../image/more.png"
import { useState } from "react";

Headers = () => {
    return(
        <html >
            <main class="flex justify-between bg-white h-full mt-5 mb-5 mr-auto ml-auto items-center pl-6
            lg:flex lg:w-max ">
                <body class="lg:flex">
                <img src={logo} class="w-60 h-20 object-contain"/>
                <ul class="font-prim font-semibold text-xl z-[-1] w-full left-0 hidden
                     md:items-center md:z-auto md:w-auto md:static
                     top-[-400px] transition-all ease-in duration-500 lg:flex lg:opacity-100">
                        <li class="m-3 hover:text-seconf hover:bg-primbg"><a href="/home">Home</a></li>
                        <li class="m-3 hover:text-seconf hover:bg-primbg"><a href="/about">About</a></li>
                        <li class="m-3 hover:text-seconf hover:bg-primbg"><a href="/menu">Menu</a></li>
                        <li class="m-3 hover:text-seconf hover:bg-primbg"><a href="/reservation">Reservations</a></li>
                        <li class="m-3 hover:text-seconf hover:bg-primbg"><a href="/order">Order Online</a></li>
                        <li class="m-3 hover:text-seconf hover:bg-primbg"><a href="/login">Login</a></li>
                </ul>
                </body>
                <span class="text-xl cursor-pointer m-5 lg:hidden block ">
                    <img width="30px" name="menu" class="absolute right-10 top-10" onClick={(e)=> e.target.name === 'menu' ?
                    (e.target.name = "close", document.querySelector('ul').classList.remove('hidden'))
                    : (e.target.name = "menu",document.querySelector('ul').classList.add('hidden'))}
                     src={menu} />
                </span>

            </main>
        </html>
    );
}

export default Headers;