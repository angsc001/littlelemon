import { Box, HStack, VStack } from "@chakra-ui/react"
const Rating = ({name,rating,picture,comment}) => {
    function Countingstars({count}) {
        const stars = Array.from({length: count},(_,index) => (
            <span key={index}>★</span>
        ));
        return <h2 className="blacktitle">{stars}</h2>
    }
    return (
        <Box
        width="250px"
        height="205"
        backgroundColor="#EDEFEE"
        padding="20px">
            <VStack spacing="10px">
                <Countingstars count={rating}/>
                <HStack
                alignSelf="start">
                    <img 
                     src={picture}
                     width="85px" height="85px"></img>
                    <h2 className="blacktitle">{name}</h2>
                </HStack>
                <h2 className="blacktitle">{comment}</h2>
            </VStack>
        </Box>
    )
}

export default Rating ;