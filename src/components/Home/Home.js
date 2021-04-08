import React from "react"; 
import './Home.css';
import img1 from '../../images/Breakfast/breakfast1.png';
import img2 from '../../images/lunch/lunch1.png';
import img3 from '../../images/Dinner/dinner1.png';
import { Link } from "react-router-dom";
 

const Home = () => {
 

  return (
    <div class="container">
       <div className="main-container">
        <div className="row">
           <Link to="/breakfast">
              <div className="col-md-4 mt-2">
                  <img src={img1} alt=""/>
                  <h5 class="pl-4">Breakfast</h5>
              </div>
           </Link>

           <Link to="/lunch">
              <div className="col-md-4 mt-2">
                  <img src={img2} alt=""/>
                  <h5 class="pl-5">Lunch</h5>
              </div>
           </Link>


           <Link to="/dinner">
              <div className="col-md-4 mt-2">
                  <img src={img3} alt=""/>
                  <h5 class="pl-5">Dinner</h5>
              </div>
           </Link>
        </div>
        
       </div>
    </div>
  );
};

export default Home;
