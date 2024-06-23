import { Box, HStack, VStack } from "@chakra-ui/react"

const Card = ({img, title, price, description}) => {
    return (
        <hmtl
        class="bg-menubg mb-5 w-80 rounded-se-3xl rounded-ss-3xl">
            <img src={img} class="rounded-se-3xl rounded-ss-3xl object-cover w-full h-52"></img>

            <card >
                <h2 class="align-start font-semibold font-secon text-2xl tracking-descp mt-5 ml-5 mr-5">{title}</h2>
                <h3 class="font-secon text-pricef font-semibold text-2xl ml-5 mr-5">${price}</h3>
                <h3 class="font-secon font-normal text-sm ml-5 mr-5 mt-2">{description}</h3>
            </card>
        <button class="font-secon font-semibold mt-12 text-base ml-5 mr-5 pb-5 hover:underline hover:text-btnbg">
            Order a delivery
        </button>
        </hmtl>
    )
}
export default Card;