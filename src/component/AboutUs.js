import { Center,HStack,VStack } from "@chakra-ui/react";


const AboutUs = () => {
    return (
        <Center 
        backgroundColor="#FFFFFF"
        height="360px"
        padding="50px"
       >
        <HStack
        spacing="243px">
        <VStack>
            <h1>
                Little Lemon
            </h1>
            <h1>
                Chicago
            </h1>
            <h2>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
            </h2>
        </VStack>
        <img
            width="393px"
            height="440px"
            />
        <img
            width="393px"
            height="440px"
            />
         </HStack>
         </Center>
    )
}

export default AboutUs;