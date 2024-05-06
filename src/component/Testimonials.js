import {Box, Center, HStack, VStack } from "@chakra-ui/react";
import Rating from "./Rating";
import jsondata from "../data/ratingdata.json"
import { useEffect, useState } from "react";

const Testimonials = () => {

    const [data,setdata] = useState([]);

    useEffect(() => {
        setdata(jsondata);
    }, []);

    return (
        <Center
        height="602px"
        backgroundColor="#495E57">
        <VStack
        spacing="62px">
            <Box
            position="absolute"
            top="1363px"
            left="664px">
            <h1 className="whitetitle">
                Testimonials
            </h1>
            </Box>
            <HStack
            position="absolute"
            top="1473px"
            left="190px"
            spacing="20px">
                {data.map(item => (
                <Rating 
                key={item.key}
                name={item.name}
                rating={item.rating} 
                picture={item.picture} 
                comment={item.comment}
                ></Rating>
            ))}
            </HStack>
        </VStack>
        </Center>

    )
}

export default Testimonials;