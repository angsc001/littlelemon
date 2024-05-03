import {Box, Center, HStack, VStack } from "@chakra-ui/react";
import Rating from "./Rating";


const Testimonials = () => {
    return (
        <Center
        height="602px"
        backgroundColor="#495E57">
        <VStack
        spacing="62px">
            <Box
            position="absolute"
            top="1363px"
            left="664px">
            <h1 className="whitetitle">
                Testimonials
            </h1>
            </Box>
            <HStack
            position="absolute"
            top="1473px"
            left="190px"
            spacing="20px">
                <Rating></Rating>
                <Rating></Rating>
                <Rating></Rating>
                <Rating></Rating>
            </HStack>
        </VStack>
        </Center>

    )
}

export default Testimonials;