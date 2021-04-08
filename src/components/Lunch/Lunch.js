import React, { useEffect, useState } from 'react';
import LunchItem from '../LunchItem/LunchItem';

const Lunch = () => { 
    const [lunch, setLunch] = useState([]);
   

    useEffect(() => {
        fetch(`https://pacific-hollows-65685.herokuapp.com/getLunch`)
        .then(res => res.json())
        .then(data => setLunch(data))
    },[])

    


    return (
        <div class="container">
            <div className="row pl-5">
                {
                    lunch.map(lnc => <LunchItem lnc={lnc}></LunchItem>)
                }
            </div>
        </div>
    );
};

export default Lunch;