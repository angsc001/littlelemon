import '../App.css';
import { Center, HStack, Button, FormLabel, Input, Select, FormControl, FormErrorMessage } from "@chakra-ui/react"
import logo from "../image/LittleLemon.png"
import { useNavigate } from 'react-router-dom';
import { useDate } from './DateContext';
import useSubmit from '../hooks/useSubmit';
import { useState } from 'react';
import {useFormik} from 'formik';
import { useAlertContext } from '../context/alertContext';
import * as Yup from 'yup';
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
    const  onOpen  = useAlertContext();
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
            guest: Yup.string()
                    .required("Please enter Comment")
                    .min(8,"Name must be minimum 8 characters"),
          }),
          onSubmit: values => {
            submit(true,values);
            console.log(values);
            console.log(response);
            onOpen(response.type,response.message);
          },
    })

    const handlecustomchange = (e) => {
        const {name,value} = e.target;
        formik.handleChange(name,value);
        console.log(name);
        console.log(value);
        //updateTimes();
    }

    return (
        <Center>
        <form className="form" onSubmit={formik.handleSubmit}>
        <HStack>
        <img src={logo}></img>
        </HStack>
            <FormControl isInvalid={formik.errors.date}>
                <FormLabel className='blacktitle' hmtlfor="res-date">Choose date</FormLabel>
                <Input
                type="date"
                id="res-date"
                name='date'
                className='blacktitle'
                data-testid="date-input"
                onInput={formik.handleChange}
                onChange={updateTimes}
                value={formik.values.date}
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>
            <FormLabel className='blacktitle' hmtlfor="res-time">Choose time</FormLabel>
                <Select
                id="res-time " className='blacktitle'
                name='time'
                data-testid="time-input"
                value={formData.time}>
                    {availableTimes.map ((time,index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    ))}
                </Select>
        <FormLabel className='blacktitle' hmtlfor="guests">Number of guests</FormLabel>
            <Input className='blacktitle' type="number" placeholder="1" min="1" max="10" id="guests"
            value={formData.guest}/>
        <FormLabel className='blacktitle' hmtlfor="occasion">Occasion</FormLabel>
            <Select className='blacktitle' id="occasion"
            value={formData.occasion}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </Select>
        <Button className='blacktitle'
        type="submit"
        height="20px"
        isDisabled={formik.errors.date}
        onClick={naviConfirmedBooking}
        data-testid='submitbutton'>
            Make Your reservation
        </Button>
        <Button
        onClick={handleClick}
        >Back</Button>
        </form>
        </Center>
    );
}

export default BookingForm;
