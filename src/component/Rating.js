import { Box, HStack, VStack } from "@chakra-ui/react"

const Rating = () => {
    return (
        <Box
        width="250px"
        height="205">
            <VStack>
                <h2>★★★★★</h2>
                <HStack>
                    <img></img>
                    <h2>Ben</h2>
                </HStack>
                <h2>Excellent food with wines</h2>
            </VStack>
        </Box>
    )
}

export default Rating ;