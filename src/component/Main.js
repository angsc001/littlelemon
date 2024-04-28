import { HStack,VStack, Container, Box } from "@chakra-ui/react";

function Main (){
    return(
        <Box 
        background="495E57"
        align="center"
        maxWidth="1280px">
        <HStack
         alignitems = "center">
        <VStack
        height="1440px">
            <Container maxW='md' bg='blue.600' color='#262626'>
                "md" Container
            </Container>
            <Container maxW='550px' bg='purple.600' color='#262626'>
                "550px" Container
            </Container>
            <Container maxW='container.sm' bg='green.400' color='#262626'>
                "container.sm" Container
            </Container>
        </VStack>
        <img
            width={360}
            height={1440}
            src="image\restauranfood.jpg"/>
        </HStack>
        </Box>


    );
}
export default Main;

