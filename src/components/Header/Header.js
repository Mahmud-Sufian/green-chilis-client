import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import './Header.css';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);



  return (
    <div class="container">
      <div class="header">
        <h1>
          Green Chili <span className="restaurant">Restaurant</span>{" "}
        </h1>
        <p>Healthy food healthy body.</p>
      </div>

      <div class="topnav">
        <Link to="/home">Home</Link>
        <Link to="/breakfast">Breakfast</Link>
        <Link to="/lunch">Lunch</Link>
        <Link to="/dinner">Dinner</Link>
        <Link to="/order">Ordered</Link>
        {
          loggedInUser.email && <Link to="#">{loggedInUser.email && loggedInUser.name}</Link>
        }
        <Link to="/login" onClick={() => setLoggedInUser({})}>{loggedInUser.email ? 'Log Out' : 'Login'}</Link>
      </div> 

    </div>
  );
};

export default Header;
