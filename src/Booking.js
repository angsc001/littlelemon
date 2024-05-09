import { ThemeProvider } from '@chakra-ui/react';
import BookingForm from './component/BookingForm.js';
import { DateProvider, useDate } from './component/DateContext.js';
import { useEffect, useState } from 'react';

const Booking  = () => {


    return (
      <DateProvider>
            <BookingForm></BookingForm>
      </DateProvider>
    );
}

export default Booking;