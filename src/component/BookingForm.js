import '../App.css';
import { Center, HStack } from "@chakra-ui/react"
import logo from "../image/LittleLemon.png"
import { useNavigate } from 'react-router-dom';
import { useDate } from './DateContext';
import useSubmit from '../hooks/useSubmit';
import { useState } from 'react';
const BookingForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    date: "",
    time: "",
    guest: "",
    occasion:"",
  });
    const {isLoading, response, submit} = useSubmit();
    const naviConfirmedBooking = async (event) => {
        event.preventDefault();
        try {
            submit(true, formData);
            if(response.type==="success"){
                navigate('/confirmed');
            }
            console.log(response)

        }
        catch(error){
            console.error("Error submitting form:", error);
        }
    }
    const handleClick = () => {
        navigate('/');
    }
    const {availableTimes, updateTimes} = useDate();
    return (
        <Center>
        <form className="form" >
        <HStack>
        <img src={logo}></img>
        </HStack>
        <h2 className='blacktitle' hmtlfor="res-date">Choose date</h2>
        <input type="date" id="res-date" className='blacktitle'
        data-testid="date-input"
        onChange={updateTimes}
        />
        <h2 className='blacktitle' hmtlfor="res-time">Choose time</h2>
        <select id="res-time " className='blacktitle'
        data-testid="time-input"
        value={formData.time}>
            {availableTimes.map ((time,index) => (
                <option key={index} value={time}>
                    {time}
                </option>
            ))}
        </select>
        <h2 className='blacktitle' hmtlfor="guests">Number of guests</h2>
        <input className='blacktitle' type="number" placeholder="1" min="1" max="10" id="guests"
        value={formData.guest}/>
        <h2 className='blacktitle' hmtlfor="occasion">Occasion</h2>
        <select className='blacktitle' id="occasion"
        value={formData.occasion}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input className='blacktitle' type="submit" value="Make Your reservation"
        onClick={naviConfirmedBooking}/>
        <button
        onClick={handleClick}
        >Back</button>
        </form>
        </Center>
    );
}

export default BookingForm;
