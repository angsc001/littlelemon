import { Box, HStack, VStack } from "@chakra-ui/react"

const Card = () => {
    return (
        <Box
        backgroundColor="#EDEFEE"
        width="300px"
        height="480px">
        <VStack
        spacing="20px">
            <img></img>
            <HStack
            padding="5px"
            justifyContent="space-between"
            width="100%">
                <h3>Greek Salad</h3>
                <h3>$10.99</h3>
            </HStack>
            <h3>
            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
            </h3>
        </VStack>
        <button>
            Order a delivery
        </button>
        </Box>
    )
}
export default Card;