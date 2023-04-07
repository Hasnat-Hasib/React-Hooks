import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


function App (){
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
    .then((response) => response.json())
    .then(setData)
  }, []); //if we dont declare dependency array then remove data button will not work. because useEffect function will be called every render of the fuction.

 if (data) {
   return (
    <div>
    <ul>
      {data.map((user) =>(
        <li key={user.id}>{user.login}</li>
      ))}
    </ul> 
    <button onClick={() => setData([])}> Remove Data</button> 
    </div> 
   );
 }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
