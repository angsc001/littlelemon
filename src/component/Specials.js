import { Center, HStack, VStack, Box } from "@chakra-ui/react";
import SCard from "./Card.js";

const Specials = () => {
    return (
        <Box
        className="threeColumn"
        height="740px">
        <Box
        gridRow="1"
        gridColumn="5">
        <h1 className="blacktitle" style={{position:'absolute', top:'530px'}}>This weeks special</h1>
        </Box>

        <Box 
        gridRow="1"
        gridColumn="7"
        >
        <button className="onlinemenu">Online Menu</button>
        </Box>

            <Box 
            gridColumn="5"
            gridRow="2">
            <SCard></SCard>
            </Box>
            <Box 
            gridColumn="6"
            gridRow="2">
            <SCard></SCard>
            </Box>
            <Box 
            gridColumn="7"
            gridRow="2">
            <SCard></SCard>
            </Box>
        </Box>
    )
}

export default Specials;