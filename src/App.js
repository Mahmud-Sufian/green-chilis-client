import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Breakfast from './components/Breakfast/Breakfast';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import BreakfastDetail from './components/BreakfastDetail/BreakfastDetail';
import LunchDetail from './components/LunchDetail/LunchDetail';
import DinnerDetail from './components/DinnerDetail/DinnerDetail';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';


export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
       <Router> 
        <Header></Header>
         <Switch>
           <Route exact path="/">
            <Home></Home>
           </Route>
           <Route exact path="/home">
            <Home></Home>
           </Route>
           <Route exact path="/order">
            <Order></Order>
           </Route>
           <Route path="/breakfast">
             <Breakfast></Breakfast>
           </Route>
           <PrivateRoute path="/item1/:id">
             <BreakfastDetail></BreakfastDetail>
           </PrivateRoute>
           <Route path="/lunch">
            <Lunch></Lunch>
           </Route>
           <PrivateRoute path="/item2/:id">
            <LunchDetail></LunchDetail>
           </PrivateRoute>
           <Route path="/dinner">
            <Dinner></Dinner>
           </Route>
           <PrivateRoute path="/item3/:id">
            <DinnerDetail></DinnerDetail>
           </PrivateRoute>
           <Route path="/login">
              <Login></Login>
           </Route>
         </Switch>
       </Router>
    </userContext.Provider>
  );
}

export default App;
