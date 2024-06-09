import { Box, Center,HStack,VStack } from "@chakra-ui/react";
import aboutuspic1 from "../image/Mario and Adrian A.jpg"
import aboutuspic2 from "../image/restaurant chef B.jpg"

const AboutUs = () => {
    return (
        <Center 
        backgroundColor="#FFFFFF"
        height= "600px"
       >
        <HStack
        spacing="243px">
        <VStack
        position="absolute"
        top="1980px"
        left="261px"
        width="428px"
        height="438px"
        spacing="0px">
            <h1 className="littlelemon">
                Little Lemon
            </h1>
            <h1 className="blacktitle">
                Chicago
            </h1>
            <h2 className="blacktitle">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit.
            </h2>
        </VStack>
        <Box
        position="absolute"
        top="1927px"
        left="923px">
        <img
            width="400px"
            height="261px"
            src={aboutuspic1}
            />
        </Box>
        <Box
        position="absolute"
        top="2116px"
        left="757px">
        <img
            width="461px"
            height="283px"
            src={aboutuspic2}
            />
        </Box>

         </HStack>
         </Center>
    )
}

export default AboutUs;