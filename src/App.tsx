import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [backendData, setBackendData] = useState([{}]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:5000/api");
    console.log(response.data.users);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  console.log(backendData);

  return (
    <div>
      <h1>Welcome!</h1>
    </div>
  )
}

export default App
