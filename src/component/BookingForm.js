import '../App.css';
import { Center, HStack, ThemeProvider } from "@chakra-ui/react"
import logo from "../image/LittleLemon.png"
import { useNavigate } from 'react-router-dom';
import { DateProvider, useDate } from './DateContext';
const BookingForm = ({availableTimes}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
    const [date, setDate] = useDate();
    return (
        <DateProvider>
        <Center>
        <form className="form" >
        <HStack>
        <img src={logo}></img>
        </HStack>
        <h2 className='blacktitle' for="res-date">Choose date</h2>
        <input type="date" id="res-date" className='blacktitle'
        checked={date === "light"} onChange={setDate}/>
        <h2 className='blacktitle' for="res-time">Choose time</h2>
        <select id="res-time " className='blacktitle'>
            {availableTimes.map ((time,index) => (
                <option key={index} value={time}>
                    {time}
                </option>
            ))}
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
        </DateProvider>
    );
}

export default BookingForm;
