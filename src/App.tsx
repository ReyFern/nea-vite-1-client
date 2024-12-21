import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';

export default function App() {
  const [backendData, setBackendData] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:5000/api");
    setBackendData(response.data.username);
    console.log(response.data.username);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  console.log(backendData);

  return (
    <div>
      <Navbar/>
      
      <h1>Welcome!</h1>
      <div>{backendData}</div>
      {
        //backendData.map((user, index) => (
        //  <div key={index}>
        //    <p>{user}</p>
        //    <br/>
        //  </div>
        //))
      }
    </div>
  )
}
