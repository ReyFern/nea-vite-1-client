import Navbar from '../components/Navbar';
import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {
    const [backendData, setBackendData] = useState([]);

    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:5000/auth");
        setBackendData(response.data.auth);
        console.log(response.data.auth);
    };

    useEffect(() => {
        fetchAPI();
    }, []);

    return (
        <div>
            <Navbar/>
            <h2>It seems you aren't logged in.</h2>
            <h2>You can register if you are a new user or log in if you are a returning user.</h2>
            <a href="/Register"><button><h2>Register</h2></button></a>
            <a href="/SignIn"><button><h2>Sign In</h2></button></a>
        </div>
    );
}