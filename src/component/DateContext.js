import { createContext, useContext, useState } from "react";
import {InitializeTimes} from "../component/FetchTimesAPI"

const DateContext = createContext (undefined);
const currentDate = new Date().getDay();
console.log(currentDate)
const Inittime = InitializeTimes(currentDate)

export const DateProvider = ({ children }) => {
    const [availableTimes, setAvailableTimes] = useState (
        Inittime
        //['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM']
    );
    const updateTimes  = (event) => {
        const date = event.target.value;
        // setAvailableTimes(date);
        var loIsDate = new Date(date)
        const dayIndex = loIsDate.getDay();
        const FindTime = InitializeTimes(dayIndex);
        setAvailableTimes(FindTime);
        // console.log(dayIndex);
        // if (dayIndex===6 || dayIndex===7){
        //     setAvailableTimes([ '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'])
        // }
        // else {
        //     setAvailableTimes(['10:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM'])
        // }
    }
    return (
        <DateContext.Provider value ={{availableTimes, updateTimes}}>
            {children}
        </DateContext.Provider>
    )
}
export const useDate = () => useContext(DateContext);