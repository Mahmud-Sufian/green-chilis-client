import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useContext } from 'react';
import { userContext } from '../../App';

const DinnerDetail = () => {
    const { id } = useParams();
    const [singleDinner, setSingleDinner] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch(`https://pacific-hollows-65685.herokuapp.com/getSingleDinner/${id}`)
          .then((res) => res.json())
          .then((data) => setSingleDinner(data));
      }, [id]);


      const handleOrder = () => {
        const newItem = {
            item: singleDinner.name,
            price: singleDinner.price,
            date: new Date(),
            ...loggedInUser
          }
  
          fetch(`https://pacific-hollows-65685.herokuapp.com/addOrderItem`, {
              method:'POST',
              headers:{'Content-Type' : 'application/json'},
              body:JSON.stringify(newItem)
          })
          .then(res => res.json())
          .then(data => {
              if(data){
                setSuccess(true);
              }
          })
    }




    return (
        <div class="container">
        <div className="row">
          <div className="col-md-12">
            <div class="card middle" style={{ width: "18rem" }}>
              <img src={singleDinner.img} style={{ height: "200px" }} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{singleDinner.name}</h5>
                <p class="card-text">{singleDinner.description}</p>
                <div className="card-footer">
                  <h3>Price: ${singleDinner.price}</h3> 
                   <button class="btn btn-primary" onClick={handleOrder}>Buy Now</button> 
                  <Link to="/dinner"><button class="btn btn-primary"><ArrowBackIosIcon/> Back</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
            success && <p class="text-center mt-2" style={{color:'green'}}>Order Success</p>
        }
      </div>
    );
};

export default DinnerDetail;