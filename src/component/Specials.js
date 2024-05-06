import { HStack, Box } from "@chakra-ui/react";
import SCard from "./Card.js";
import jsondata from "../data/carddata.json"
import { useEffect, useState } from "react";
const Specials = () => {
    const [data,setdata] = useState([]);

    useEffect(() => {
        setdata(jsondata);
    }, []);


return (
        <Box
        className="gridcontainer"
        height="742px">
        <Box
        position="absolute"
        top="656px"
        left="269px">
        <h1 className="blacktitle">This weeks special</h1>
        </Box>

        <Box
        position="absolute"
        top="650px"
        left="1033px">
        <button
        className="onlinemenu">Online Menu</button>
        </Box>


        <HStack
        position="absolute"
        top="745px"
        left="271px"
        spacing="26px">
            {data.map(item => (
                <SCard 
                key={item.key}
                img={item.imgurl}
                title={item.title} 
                price={item.price} 
                description={item.description}></SCard>
            ))}
        </HStack>
        </Box>
    )
}

export default Specials;