import React from "react";
import { Link, useHistory } from "react-router-dom";
import './BreakfastItem.css';

const BreakfastItem = (props) => {
  const {img, name, price, _id} = props.brk
  const history = useHistory();
  
  const handleBreakfast = () => {
    history.push(`/item1/${_id}`)
  }

  return (
    <div class="col-sm">
      <div class="card" style={{width: '13rem'}}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5> 
          <div className="card-footer">
            <h3>${price}</h3> 
            <button onClick={handleBreakfast} class="btn btn-primary">Explore</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BreakfastItem;
