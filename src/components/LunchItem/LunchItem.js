import React from "react";
import { Link, useHistory } from "react-router-dom";

const LunchItem = (props) => {
    const {name, img, price, _id} = props.lnc
    const history = useHistory();


    const handleLunch = () => {
      history.push(`/item2/${_id}`);
    }

  return (
    <div class="col-sm">
      <div class="card" style={{ width: "13rem" }}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <div className="card-footer">
            <h3>${price}</h3> 
              <button onClick={handleLunch} class="btn btn-primary">Explore</button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default LunchItem;
