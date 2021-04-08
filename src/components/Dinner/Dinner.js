import React, { useEffect, useState } from 'react';
import DinnerItem from './DinnerItem/DinnerItem';

const Dinner = () => {
    const [dinner, setDinner] = useState([]);
    
    useEffect(() => {
        fetch(`https://pacific-hollows-65685.herokuapp.com/getDinner`)
        .then(res => res.json())
        .then(data => setDinner(data))
    },[])
     

    return (
        <div class="container">
            <div className="row pl-5">
                {
                    dinner.map(dnr =>  <DinnerItem dnr={dnr}></DinnerItem>)
                }
            </div> 
        </div>
    );
};

export default Dinner;