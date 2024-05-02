import { HStack, VStack, Box } from "@chakra-ui/react";
import image from "../image/restauranfood.jpg"

function Main (){
    return(
        <Box 
        backgroundColor="#495E57"
        height="360px"
        className="TwoColumn"
       >
            <Box
            gridColumn="5"
            >
                <h1 className="littlelemon">
                    Little Lemon
                </h1>
                <h1 className="whitetitle">
                    Chicago
                </h1>
                <h2>We are a family owned</h2>
                <h2>Mediterranean restaurant,</h2>
                <h2>focused on traditional</h2>
                <h2>recipes served with a modern</h2>
                <h2>twist.</h2>
                <button 
                className="reserve">
                    Reserve a Table
                </button>
            </Box>
            <Box
            gridColumn="8">
            <img
                className="mainphoto"
                src= {image}
                />
            </Box>

         </Box>
    );
}
export default Main;

