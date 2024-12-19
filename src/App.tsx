import { useState, useEffect } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import axios from "axios"

function App() {
  const [backendData, setBackendData] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:5000/api");
    setBackendData(response.data.users);
    console.log(response.data.users);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  console.log(backendData);

  return (
    <div>
      <ul className='navbar'>
        <a href='/'><img src={reactLogo} className="navbar-logo" alt="React logo"></img></a>
        <li className='navbar-element'><a href='/profile'>Profile</a></li>
        <li className='navbar-element'><a href='/party'>Party</a></li>
        <li className='navbar-element'><a href='/create'>Character Creator</a></li>
        <li className='navbar-element'><a href='/'>Home</a></li>
      </ul>

      <h1>Welcome!</h1>
      {
        backendData.map((user, index) => (
          <div key={index}>
            <p>{user}</p>
            <br/>
          </div>
        ))
      }
    </div>
  )
}

export default App
