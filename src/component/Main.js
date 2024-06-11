import image from "../image/restauranfood.jpg"
import { useNavigate } from "react-router-dom";

function Main (){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/form');
    }
    return(
        <html class="bg-primbg lg:h-full md:h-5/6 h-full">
        <main class="w-max mr-auto ml-auto grid 
         md:grid-cols-2 
         lg:grid-cols-2
         lg:gap-x-32
        ">
            <h1 class="align-start font-prim font-medium text-7xl ml-5 mt-5 text-primf col-start-1">
                Little Lemon
            </h1>
            <h1 class="align-start font-prim font-medium text-5xl ml-5 mb-5 text-seconf col-start-1">
                Chicago
            </h1>
            <h2 class="w-80 h-24 text-seconf align-start font-normal font-secon text-xl tracking-descp m-5 lg:m-5 lg:ml-5 col-start-1">
                We are a family owned
                Mediterranean restaurant,
                focused on traditional
                recipes served with a modern
                twist.
            </h2>
            <button class="m-5 w-52 h-16 rounded-lg font-semibold text-xl bg-btnbg md:ml-5 font-secon col-start-1 md:mb-20 lg:mt-5 lg:mb-20"
            onClick={handleClick}>
                Reserve a Table
            </button>
            <img class=" object-cover w-96 h-96 rounded-3xl m-5 md:row-span-3 md:row-start-2 md:col-start-2 md:absolute md:top-64 md:left-2/4 lg:absolute lg:top-64 lg:left-2/4 lg:m-0" src= {image}/>
         </main>
        </html>

    );
}
export default Main;

