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
        <html class= "bg-primbg lg:h-full md:h-5/6 ">
        <main
        class="w-max mr-auto m-auto content-center
            md:flex md:items-center md:mt-20  md:m-auto
            lg:flex lg:items-center lg:m-auto ">
            <h1 class="ml-0 mt-5 mb-5 align-start font-prim font-medium text-5xl
            md:m-5 text-seconf">Testimonials</h1>
        </main>
        <item
        class=" flex flex-wrap gap-5 ml-auto mr-auto justify-center pb-10
        md:gap-3
        lg:gap-5"
        >
        {data.map(item => (
        <Rating
        key={item.key}
        name={item.name}
        rating={item.rating}
        picture={item.picture}
        comment={item.comment}
        ></Rating>
        ))}
        </item>
        </html>

    )
}

export default Testimonials;