import BookingForm from './component/BookingForm.js';
import { DateProvider } from './component/DateContext.js';

const Booking  = () => {


    return (
      <DateProvider>
            <BookingForm></BookingForm>
      </DateProvider>
    );
}

export default Booking;