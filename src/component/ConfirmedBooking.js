import { Center, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const ConfirmedBooking = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }
    return (
        <Center>
        <VStack>
        <h1 className="blacktitle">
        Success Booking
        </h1>
        <button className="back" onClick={handleClick}>
        Back
        </button>
        </VStack>
        </Center>
    )
}

export default ConfirmedBooking;