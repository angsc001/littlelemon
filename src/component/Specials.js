import SCard from "./Card.js";
import jsondata from "../data/carddata.json"
import { useEffect, useState } from "react";
const Specials = () => {
    const [data,setdata] = useState([]);

    useEffect(() => {
        setdata(jsondata);
    }, []);


return (
        <html class="lg:h-full md:h-5/6 h-full">
            <main
            class="w-max mr-auto ml-auto
            md:flex md:gap-20 md:items-center md:mt-20 md:mb-10
            lg:flex lg:gap-96 lg:items-center mt-10 content-center"
            >
            <h1 class="ml-0 mt-5 align-start font-prim font-medium text-5xl
            md:m-5">This weeks special</h1>
            <button class="w-52 h-16 ml-0 mt-10 mb-10 rounded-lg font-semibold text-xl bg-btnbg font-secon
            md:m-5 hover:text-seconf hover:bg-primbg">Online Menu</button>
            </main>
            <item class="flex flex-wrap gap-5 justify-center
             md:gap-5
             lg:gap-5 ">
                {data.map(item => (
                    <SCard 
                    key={item.key}
                    img={item.imgurl}
                    title={item.title} 
                    price={item.price} 
                    description={item.description}></SCard>
                ))}
            </item>
        </html>
    )
}

export default Specials;