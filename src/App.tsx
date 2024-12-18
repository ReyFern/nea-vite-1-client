import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    );
  }, []);

  console.log(backendData);

  return (
    <div>
      <h1>Welcome!</h1>
    </div>
  )
}

export default App
