import Navbar from '../components/Navbar';
import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SignIn() {
    const [backendData, setBackendData] = useState([]);

    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:5000/signin-request");
        setBackendData(response.data.auth);
        console.log(response.data.auth);
    }

    const apiCall = () => {
        axios.get('http://localhost:5000/signin-request').then((data) => {
          //this console.log will be in our frontend console
          localStorage.setItem("token", data.data);
          console.log(localStorage.getItem("token"));
        });
    }

    localStorage.setItem("token", "unauthorised");

    if (localStorage.getItem("token") == "unauthorised") {
        return (
            <div>
                <Navbar/>
                <iframe name="target-frame" id="target-frame"></iframe>
                <form id="user_data" method="get" action="http://localhost:5000/signin-request" target="target-frame">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" name="username"/><br/><br/>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password"/><br/><br/>
                    <a href="google.com"><input type="submit" value="Submit" className='submit-input' onClick={fetchAPI}/></a>
                </form>
            </div>
        )
    };
}