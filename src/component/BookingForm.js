import '../App.css';
import { Center, HStack, ThemeProvider } from "@chakra-ui/react"
import logo from "../image/LittleLemon.png"
import { useNavigate } from 'react-router-dom';
import { DateProvider, useDate } from './DateContext';
import { useEffect, useState } from 'react';
const BookingForm = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
    const {availableTimes, handledate} = useDate();
    return (
        <Center>
        <form className="form" >
        <HStack>
        <img src={logo}></img>
        </HStack>
        <h2 className='blacktitle' hmtlfor="res-date">Choose date</h2>
        <input type="date" id="res-date" className='blacktitle'
        onChange={handledate}
        />
        <h2 className='blacktitle' hmtlfor="res-time">Choose time</h2>
        <select id="res-time " className='blacktitle'>
            {availableTimes.map ((time,index) => (
                <option key={index} value={time}>
                    {time}
                </option>
            ))}
        </select>
        <h2 className='blacktitle' hmtlfor="guests">Number of guests</h2>
        <input className='blacktitle' type="number" placeholder="1" min="1" max="10" id="guests"/>
        <h2 className='blacktitle' hmtlfor="occasion">Occasion</h2>
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
