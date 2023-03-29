import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [drugstores, setDrugstores] = useState([]);

  useEffect(() => {
    fetch('/drugstore')
      .then(response => response.json())
      .then(data => setDrugstores(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Liste de pharmacies</h1>
        <ul>
          {drugstores.map(drugstore => (
            <li key={drugstore.id}>
              <h2>{drugstore.name}</h2>
              <p>{drugstore.address}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;