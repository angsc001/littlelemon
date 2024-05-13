import './App.css';
import Booking from './Booking.js';
import Home from './Home.js';
import ConfirmedBooking from './component/ConfirmedBooking.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' Component={Home}></Route>
      <Route exact path='/form' Component={Booking}></Route>
      <Route exact path='/confirmed' Component={ConfirmedBooking}></Route>
      </Routes>
    </Router>
  );
}

export default App;
