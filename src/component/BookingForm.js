import '../App.css';
import { Box, Center, HStack } from "@chakra-ui/react"
import logo from "../image/LittleLemon.png"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BookingForm = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
    const [availableTimes, setAvailableTimes] = useState([
        '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'
        // Add more available times as needed
      ]);
    return (
        <Center>
        <form className="form" >
        <HStack>
        <img src={logo}></img>
        </HStack>
        <h2 className='blacktitle' for="res-date">Choose date</h2>
        <input type="date" id="res-date" className='blacktitle'/>
        <h2 className='blacktitle' for="res-time">Choose time</h2>
        <select id="res-time " className='blacktitle'>
            {availableTimes.map ((time,index) => (
                <option key={index} value={time}>
                    {time}
                </option>
            ))}
            {/* <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option> */}
        </select>
        <h2 className='blacktitle' for="guests">Number of guests</h2>
        <input className='blacktitle' type="number" placeholder="1" min="1" max="10" id="guests"/>
        <h2 className='blacktitle' for="occasion">Occasion</h2>
        <select className='blacktitle' id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input className='blacktitle' type="submit" value="Make Your reservation"/>
        <button onClick={handleClick}>Back</button>
        </form>
        </Center>
    );
}

export default BookingForm;
