import { Box } from "@chakra-ui/react";
import image from "../image/restauranfood.jpg"
import { useNavigate } from "react-router-dom";

function Main (){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/form');
    }
    return(
        <main 
        // backgroundColor="#495E57"
        // height="410px"
        // className="gridcontainer"
        class="bg-primbg lg:h-96 h-full grid grid-flow-row"
       >

            <h1 
            class="align-start font-prim font-semibold text-7xl ml-5 mt-5 text-primf"
            >
                Little Lemon
            </h1>
            <h1 class="align-start font-prim font-semibold text-7xl ml-5 mb-5 text-seconf">
                Chicago
            </h1>
            <h2
            class="w-80 h-24 text-seconf align-start font-secon text-xl tracking-descp m-5"
            // color: white;
            // align-self: start;
            // max-height: 18px;
            // font-family: 'karla';
            // letter-spacing: 1px;
            // font-size: 18px;
            >
                We are a family owned
                Mediterranean restaurant,
                focused on traditional
                recipes served with a modern
                twist.
            </h2>
            <button class="m-5 w-52 h-16 rounded-lg font-medium bg-btnbg font-secon"
            onClick={handleClick}>
                Reserve a Table
            </button>
            <img class=" w-96 h-96 rounded-3xl m-5" src= {image}/>
         </main>
    );
}
export default Main;

