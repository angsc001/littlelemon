import { HStack,VStack, Container, Box, Center } from "@chakra-ui/react";
import image from "../image/restauranfood.jpg"

function Main (){
    return(
        <Center 
        backgroundColor="#495E57"
        height="360px"
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
            We are a family owned
            Mediterranean restaurant,
            focused on traditional
            recipes served with a modern
            twist.
            </h2>
            <button backgroundColor="yellow">
                Reserve a Table
            </button>
        </VStack>
        <img
            width="393px"
            height="440px"
            src= {image}/>
         </HStack>
         </Center>
    );
}
export default Main;

