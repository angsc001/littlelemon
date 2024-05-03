import { Box, HStack, VStack } from "@chakra-ui/react"
import person from "../image/person1.webp"

const Rating = () => {
    return (
        <Box
        width="250px"
        height="205"
        backgroundColor="#EDEFEE"
        padding="20px">
            <VStack spacing="10px">
                <h2 className="blacktitle">★★★★★</h2>
                <HStack
                alignSelf="start">
                    <img src={person} width="85px" height="85px"></img>
                    <h2 className="blacktitle">Ben</h2>
                </HStack>
                <h2 className="blacktitle">Excellent food with wines</h2>
            </VStack>
        </Box>
    )
}

export default Rating ;