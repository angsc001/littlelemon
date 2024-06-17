import { Box, Center,HStack,VStack } from "@chakra-ui/react";
import aboutuspic1 from "../image/Mario and Adrian A.jpg"
import aboutuspic2 from "../image/restaurant chef B.jpg"

const AboutUs = () => {
    return (
    <html class="lg:h-full md:h-5/6 h-full">
    <main class="w-max mr-auto ml-auto
     md:gap-20 md:items-center md:mt-20 md:mb-10
    lg:flex lg:gap-10 lg:items-center mt-10 content-center">
    <body>
    <h1 class="align-start font-prim font-medium text-7xl ml-5 mt-5 text-primf col-start-1">
    Little Lemon
    </h1>
    <h1 class="align-start font-prim font-medium text-5xl ml-5 mb-5 col-start-1">
        Chicago
    </h1>
    <h2 class=" w-96 h-auto font-secon ml-5 font-semibold">
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit.
    </h2>
    </body>
    <container  class="grid grid-cols-1 grid-rows-1">
    <img width="461px" height="283px" class=" object-contain m-2 rounded-md lg:ml-10 lg:mb-20 " src={aboutuspic2}/>
    {/* <img width="400px" height="261px" class=" object-contain m-2 rounded-md lg:relative lg:origin-bottom-right lg:right-64 lg:bottom-0" src={aboutuspic1}/> */}
    </container>
    </main>
    </html>
    )
}

export default AboutUs;