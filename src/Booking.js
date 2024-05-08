import { ThemeProvider } from '@chakra-ui/react';
import BookingForm from './component/BookingForm.js';
import { useEffect, useState } from 'react';

const Booking  = () => {
    const [availableTimes, setAvailableTimes] = useState([
        '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'
        // Add more available times as needed
      ]);
    return (
            <BookingForm availableTimes={availableTimes}></BookingForm>
    );
}

export default Booking;