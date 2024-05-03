import { Box, HStack, VStack } from "@chakra-ui/react"
import food1 from "../image/bruchetta.svg"
import food2 from "../image/greek salad.jpg"

const Card = () => {
    return (
        <Box
        backgroundColor="#EDEFEE"
        width="300px"
        height="480px">
        <VStack
        spacing="20px"
        >
            <img src={food2} className="cardphoto"></img>
            <Box margin="10px">
            <HStack
            padding="5px"
            justifyContent="space-between"
            width="100%"
            >
                <h2 className="blacktitle">Greek Salad</h2>
                <h3 className="price">$10.99</h3>
            </HStack>
            <h3>
            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
            </h3>
            </Box>
        </VStack>
        <Box margin="10px">
        <button className="invisiblebutton"
        >
            Order a delivery
        </button>
        </Box>
        </Box>
    )
}
export default Card;