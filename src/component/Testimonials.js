import { Center, HStack, VStack } from "@chakra-ui/react";
import Rating from "./Rating";


const Testimonials = () => {
    return (
        <Center
        height="602px"
        backgroundColor="#495E57">
        <VStack
        spacing="62px">
            <h1>
                Testimonials
            </h1>
            <HStack>
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