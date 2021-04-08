import React, { useState } from 'react';
import './Login.css';
import avatar from '../../images/background/avatar.png';
import { useHistory, useLocation } from 'react-router';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { userContext } from '../../App';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}


const Login = () => {


    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(userContext);


    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    });


    const handleSignIn = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            isFormValid = isEmailValid;
        }
        if (e.target.name === 'password') {
            const isPasswordLength = e.target.value.length > 6;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordLength && isPasswordHasNumber;
        }
        if (isFormValid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUser = { ...user };
                    newUser.success = true;
                    newUser.error = "";
                    setUser(newUser);
                    updateUserName(user.name);
                })
                .catch((error) => {
                    const newUser = { ...user };
                    newUser.success = false;
                    newUser.error = error.message;
                    setUser(newUser);
                });

        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUser = { ...user };
                    newUser.success = true;
                    newUser.error = "";
                    newUser.name = res.user.displayName;
                    setUser(newUser);
                    setLoggedInUser(newUser);
                    storeTokenAuth();
                    history.replace(from);
                    // console.log('sign in user', res.user.displayName)

                })
                .catch((error) => {
                    const newUser = { ...user };
                    newUser.success = false;
                    newUser.error = error.message;
                    setUser(newUser);
                });
        }

        if (!user.email || !user.password) {
            const newUser = { ...user };
            newUser.error = <p>Email or Password is Invalid.. please Try again</p>
            console.log(newUser.error);
            setUser(newUser);
        }
    }

    const updateUserName = (name) => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });
    }


    const storeTokenAuth = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken)
          }).catch(function(error) {
            // Handle error
          });
    }



    return (
        <div>
            <form onSubmit={handleSubmit}  class="modal-content">
                <div class="imgcontainer"> 
                    <img src={avatar} alt="Avatar" class="avatar" />
                </div>

                <div class="container">
                    {newUser && 
                    <> 
                    <label for="name"><b>Name</b></label>
                    <input type="text" name="name" onBlur={handleSignIn} placeholder="Your Name" required />
                     </>
                     }

                    <label for="email"><b>Email</b></label>
                    <input type="text" onBlur={handleSignIn} placeholder="Enter Username" name="email" required />

                    <label for="password"><b>Password</b></label>
                    <input type="password" onBlur={handleSignIn} placeholder="Enter Password" name="password" required /> 
                    
                    <div className="row">
                        <div className="col-md-6 mt-4">
                            <input class="mr-2" type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} />
                            <label htmlFor="newUser">Creat Account</label>
                        </div>
                        <div className="col-md-6">
                            <input type="submit" value={newUser ? 'Sign up' : 'Sign In'} /> 
                        </div>
                    </div>
                    
                    

                    
                </div> 
            </form>

            <p style={{ color: 'red', textAlign: 'center' }}>{user.error}</p>
            {
                user.success && <p style={{ color: 'green', textAlign: 'center' }}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>
            }

        </div>
    );
};

export default Login;