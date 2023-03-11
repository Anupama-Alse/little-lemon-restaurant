
import HomePage from './Homepage';
import { useReducer, useState} from 'react';
import {fetchAPI, submitAPI} from './bookapi.js'
import BookingPage from './BookingPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ConfirmBooking from './ConfirmBooking';
import Menu from './Menu';
import Aboutpage from './Aboutpage';
import Login from './Login';
import Order from './Order';
import PageError from './PageError';

export const updateTimes = (state, action) => {
  if (action.type === 'date') {
    return {
      availableTimes: fetchAPI(new Date(action.date))
    };
  }
  return state;
}
const today = new Date();
export const initializeTimes = {availableTimes : fetchAPI(today)};

function App() {

  const navigate = useNavigate();
  const dateMin = today.toISOString().split('T')[0]
  const [state, dispatch] = useReducer(updateTimes, initializeTimes); 
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("Birthday");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  

  const handleChange = (e) => {
    if (e.target.id === "res-date") {
        setDate(e.target.value);
        dispatch({ type: 'date', date: e.target.value })
    } else if (e.target.id === "res-time") {
        setTime(e.target.value);
    } else if (e.target.id === "guests") {
        setGuests(e.target.value);
    } else {
        setOccasion(e.target.value);
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      "date" : date,
      "time" : time,
      "number of guests" : guests,
      "occasion" : occasion
    }
    if(submitAPI(formData)) {
      navigate('/bookingconfirmed');
    };
}

const validation = () => {
  return date.length && time.length && guests.length && occasion.length ;
};

const [input,setInput]=useState();
function handleInput(e){
  setInput(e.target.value);
}

  return (
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='/about'element={<Aboutpage/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
        <Route path="/booking" element={
          <BookingPage 
            availableTimes={state.availableTimes} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            today={dateMin}
            date={date} 
            guests={guests} 
            occasion={occasion}
            validation={validation}
            input={input}  
            />
          }></Route>
        
        <Route path="/bookingconfirmed" 
        element={<ConfirmBooking date={date} time={time} guests={guests} occasion={occasion} />}></Route>
        <Route path='/login' element={<Login input={input} handleInput={handleInput} / >}></Route>
        <Route path="*" element={<PageError />}></Route>
      </Routes>
  );
}

export default App;