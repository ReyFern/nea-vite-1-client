import { useState, useEffect } from 'react'
import './App.css'
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
