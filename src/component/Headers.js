import { Box } from "@chakra-ui/react";
import logo from "../image/LittleLemon.png"

Headers = () => {
    return(
        <Box
         transitionProperty="transform"
         transitionDuration=".3s"
         transitionTimingFunction="ease-in-out"
         background="FFFFFF"
         className="gridcontainer"
         minHeight="150px"
         maxWidth="auto"
         >
                <Box
                    position="absolute"
                    top="45px"
                    left="269px">
                <img
                    width='230px'
                    height='70px'
                    src={logo}
                    />
                </Box>
                <Box
                    position="absolute"
                    top="61px"
                    left="525px"
                    minWidth="740px"
                >
                        <a href="/home">Home</a>
                        <a href="/about">About</a>
                        <a href="/menu">Menu</a>
                        <a href="/reservation">Reservations</a>
                        <a href="/order">Order Online</a>
                        <a href="/login">Login</a>
                </Box>
            </Box>
    );
}

export default Headers;