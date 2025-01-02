import Navbar from '../components/Navbar';
import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {
    const [backendData, setBackendData] = useState([]);
    let signedIn:string = "unauthorised";

    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:5000/signin-request");
        setBackendData(response.data.auth);
        console.log(response.data.auth);
        if (response.data.auth == "success"){
            signedIn = "authorised";
            localStorage.setItem("token", signedIn);
        }
    };

    localStorage.setItem("token", "unauthorised");

    if (localStorage.getItem("token") == "authorised") {
        return (
            <div>
                <Navbar/>
                <div>{backendData}</div>
                <h2>Logged in</h2>
            </div>
        );
    }
    else {
        return (
            <div>
                <Navbar/>
                <div>{backendData}</div>
                <h2>It seems you aren't logged in.</h2>
                <h2>You can register if you are a new user or log in if you are a returning user.</h2>
                <a href="/Register"><button><h2>Register</h2></button></a>
                <a href="/SignIn"><button><h2>Sign In</h2></button></a>
            </div>
        );
    }
}