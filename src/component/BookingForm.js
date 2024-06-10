import '../App.css';
import logo from "../image/LittleLemon.png"
import { useNavigate } from 'react-router-dom';
import { useDate } from './DateContext';
import useSubmit from '../hooks/useSubmit';
import React, { useRef, useState,useEffect } from 'react';
import {useFormik} from 'formik';
import {useAlertContext} from "../context/alertContext.js";
import * as Yup from 'yup';
import { Alert } from '@chakra-ui/react';
const BookingForm = () => {
    const navigate = useNavigate();
    const {availableTimes, updateTimes} = useDate();
    const [formData, setFormData] = useState({
    date: "",
    time: "",
    guest: "",
    occasion:"",
  });
    const {isLoading, response, submit} = useSubmit();
    const {onOpen ,onClose}  = useAlertContext();
    const handleClick = () => {
        navigate('/');
    }
    const formik = useFormik({
        initialValues: {
            date: '',
            time:'',
            guest: '',
            occasion:'',
          },
          validateOnMount:  true,
          validationSchema: Yup.object({
            date: Yup.string()
                    .required("Please select a date"),
          }),
          onSubmit: async values => {
            await submit(true,values).catch(submit(true,values));
            console.log(values);
            console.log(response);
            onOpen(response.type,response.message);
            setTimeout(() => {
                onClose();
                if(response.type==='success')
                    navigate('/')
              }, 300);

          },
    })

    return (
        <html>
        {/* <label class="float-right">{response.type}</label> */}
        <img src={logo} class="m-auto"></img>
        <form class="grid justify-center w-full m-auto" onSubmit={formik.handleSubmit}>
        <label class="font-secon text-primbg text-lg" hmtlfor="res-date">Date</label>
        <input
        type="date"
        id="res-date"
        name='date'
        class="font-secon text-primbg text-lg border-2 border-opacity-70 rounded-md"
        data-testid="date-input"
        onInput={formik.handleChange}
        onChange={updateTimes}
        value={formik.values.date}
        />
        <error class="font-thin text-sm text-errf">{formik.errors.date}</error>
        <label class="font-secon text-primbg text-lg" hmtlfor="res-time">Time</label>
        <select id="res-time " class="font-secon text-primbg text-lg border-2 border-opacity-70 rounded-md" name='time' data-testid="time-input" 
        //value={formData.time}
        >
            {availableTimes.map ((time,index) => (
                <option key={index} value={time}>
                    {time}
                </option>
            ))}
        </select>
        <label class="font-secon text-primbg text-lg mt-2" hmtlfor="guests">Number of guests</label>
        <input class="font-secon text-primbg text-lg border-2 border-opacity-70 rounded-md"
        type="number" placeholder="1" min="1" max="10" id="guests" 
        //value={formData.guest}
        />
        <label class="font-secon text-primbg text-lg mt-2" hmtlfor="occasion">Occasion</label>
            <select class="font-secon text-primbg text-lg border-2 border-opacity-70 rounded-md" id="occasion"
            //value={formData.occasion}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
        <button class="font-secon text-primbg text-lg bg-btnbg mt-5 rounded-md h-10 w-80 disabled:text-disabledf disabled:bg-disabledbg" type="submit" height="20px" disabled={formik.errors.date||isLoading}
         data-testid='submitbutton'>
            Make Your reservation
        </button>
        <button class="font-secon text-primbg text-lg bg-btnbg mt-3 rounded-md h-10 w-80" onClick={handleClick}>Back</button>
        </form>
        </html>
    );
}

export default BookingForm;