import { Box, Collapse, HStack, SlideFade, Tag } from "@chakra-ui/react";
import logo from "../image/LittleLemon.png"

Headers = () => {
    return(
        <Box
         transitionProperty="transform"
         transitionDuration=".3s"
         transitionTimingFunction="ease-in-out"
         background="FFFFFF"
         className="Header">
                <Box
                    gridColumn="5"
                    maxHeight="auto"
                    margin="0"
                    paddingTop="10px"
                    paddingBottom="10px">
                <img 
                    width='230px' 
                    height='70px'
                    src={logo}
                    />
                </Box>
                <Box
                    // px={35}
                    // py={4}
                    // justifyContent="space-between"
                    gridColumn="8"
                    paddingLeft="60px"
                    paddingTop="15px"
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