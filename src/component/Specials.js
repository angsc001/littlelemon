import { HStack, Box } from "@chakra-ui/react";
import SCard from "./Card.js";

const Specials = () => {
    return (
        <Box
        className="gridcontainer"
        height="742px">
        <Box
        position="absolute"
        top="656px"
        left="269px">
        <h1 className="blacktitle">This weeks special</h1>
        </Box>

        <Box
        position="absolute"
        top="650px"
        left="1033px">
        <button
        className="onlinemenu">Online Menu</button>
        </Box>


        <HStack
        position="absolute"
        top="745px"
        left="271px"
        spacing="26px">
        <SCard></SCard>
        <SCard></SCard>
        <SCard></SCard>
        </HStack>
        </Box>
    )
}

export default Specials;