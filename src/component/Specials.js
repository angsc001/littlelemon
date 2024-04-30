import { Center, HStack, VStack } from "@chakra-ui/react";
import SCard from "./Card.js";

const Specials = () => {
    return (
        <Center
     padding="150px  270px">
            <VStack>
                <HStack spacing="457px">
                    <h1>This weeks special</h1>
                    <button>Online Menu</button>
                </HStack>
                <HStack>
                    <SCard></SCard>
                    <SCard></SCard>
                    <SCard></SCard>
                </HStack>
            </VStack>
        </Center>
    )
}

export default Specials;