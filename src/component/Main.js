import { Box } from "@chakra-ui/react";
import image from "../image/restauranfood.jpg"
import { useNavigate } from "react-router-dom";

function Main (){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/form');
    }
    return(
        <Box 
        backgroundColor="#495E57"
        height="410px"
        className="gridcontainer"
       >
            <Box
            position="absolute"
            top="171px"
            left="269px"
            >
                <h1 className="littlelemon">
                    Little Lemon
                </h1>
                <h1 className="whitetitle">
                    Chicago
                </h1>
                <Box width="317px"
                height="104px">
                <h2>We are a family owned
                    Mediterranean restaurant,
                    focused on traditional
                    recipes served with a modern
                    twist.</h2>
                </Box>
                <button 
                className="reserve"
                onClick={handleClick}>
                    Reserve a Table
                </button>
            </Box>
            <Box
            position="absolute"
            top="181px"
            left="829px">
            <img
                className="mainphoto"
                src= {image}
                />
            </Box>

         </Box>
    );
}
export default Main;

