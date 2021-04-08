import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const DinnerItem = (props) => {
    const {img, name, price, _id} = props.dnr
    const history = useHistory();

    const handleDinner = () => {
      history.push(`/item3/${_id}`);
    }

    return (
        <div class="col-sm">
        <div class="card" style={{width: '13rem'}}>
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5> 
            <div className="card-footer">
              <h3>${price}</h3>
              <button onClick={handleDinner} class="btn btn-primary">Explore</button> 
            </div>
            
          </div>
        </div>
      </div>
    );
};

export default DinnerItem;