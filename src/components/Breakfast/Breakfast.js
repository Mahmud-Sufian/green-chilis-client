import React, { useEffect } from 'react';
import { useState } from 'react';
import BreakfastItem from '../BreakfastItem/BreakfastItem';
import './Breakfast.css';

const Breakfast = () => {
    const [breakfast, setBreakfast] = useState([]);
    
    useEffect(() => {
        fetch(`https://pacific-hollows-65685.herokuapp.com/getBreakfast`)
        .then(res => res.json())
        .then(data => setBreakfast(data))
    },[])
    


    return (
        <div class="container">
            <div class="row pl-5">
                {
                    breakfast.map(brk =>  <BreakfastItem brk={brk}></BreakfastItem>)
                }
            </div> 
        </div>
    );
};

export default Breakfast;