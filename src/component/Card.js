import { Box, HStack, VStack } from "@chakra-ui/react"

const Card = ({img, title, price, description}) => {
    return (
        <Box
        backgroundColor="#EDEFEE"
        width="300px"
        height="480px">
        <VStack
        spacing="20px"
        >
            <img src={img} className="cardphoto" alt="Local Image"></img>
            <Box margin="10px">
            <HStack
            padding="5px"
            justifyContent="space-between"
            width="100%"
            >
                <h2 className="blacktitle">{title}</h2>
                <h3 className="price">${price}</h3>
            </HStack>
            <h3>{description}</h3>
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