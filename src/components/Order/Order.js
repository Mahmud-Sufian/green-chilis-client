import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../../App';
import './Order.css';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [ordered, setOrdered] = useState([]);

  
    useEffect(() => {
        fetch('https://pacific-hollows-65685.herokuapp.com/getOrderItem?email='+loggedInUser.email, {
            method:'GET',
            headers:{
                'Content-Type' : 'application/json',
                authorization : `bearer ${sessionStorage.getItem('token')}` 
            }
        })
        .then(res => res.json())
        .then(data => {
            setOrdered(data);
        })
    },[loggedInUser.email])


    let total = 0;
    ordered.forEach(order => {
          total = Number(total) + Number(order.price)
         });


    return (
        <div class="container">
           <table>
                    <h2>Congratulations <span style={{color:'green'}}>{loggedInUser.name}</span>... Your Ordered Item...</h2>
                      <tr> 
                            <th>Description</th> 
                            <th>quantity</th>
                            <th>Price</th>
                      </tr>
                 {
                     ordered.map(order => 
                        
                       <tr> 
                            <td>{order.item}</td> 
                            <td>1</td>
                            <td>${order.price}</td>
                       </tr>
                       
                        )
                 }

                        <tr>  
                            <td><span style={{fontWeight:'bold'}}>Total</span></td> 
                            <td>{ordered.length}</td> 
                            <td>${total}</td>
                       </tr> 
                </table>
        </div>
    );
};

export default Order;