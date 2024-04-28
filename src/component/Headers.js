import { Box, Collapse, HStack, SlideFade, Tag } from "@chakra-ui/react";
const logo = [
    {
        url: "https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png",
    }
];

Headers = () => {
    return(
        <Box
        //  position="fixed"
         top={0}
         left={0}
         right={0}
         translateY={0}
         transitionProperty="transform"
         transitionDuration=".3s"
         transitionTimingFunction="ease-in-out"
         background="FFFFFF">
            <Box
            maxWidth="1280px"
            margin = "0px 270px">
                <HStack
                    px={35}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center">
                        <img 
                            width='230' 
                            height='70' 
                            id='logo' 
                            src={logo[0].url}>
                        </img>
                        <a>Home</a>
                        <a>About</a>
                        <a>Menu</a>
                        <a>Reservations</a>
                        <a>Order Online</a>
                        <a>Login</a>
                    </HStack>
            </Box>
        </Box>
    );
}

export default Headers;