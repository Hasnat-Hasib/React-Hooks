import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


function App (){
  const [name, setName] = useState("Jan");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    console.log(`Celebrate ${name}`);
  }, [name]);
  
  useEffect(() => {
    console.log(`
    The user is: ${
      admin ? "admin": "not admin"}`
      );
  }, [admin]);
  
  return (
    <section>
      <p>Congratulations {name}</p>
      <button onClick={()=> setName("Smith")}>Change Winner</button>
      <p>
        {admin ? "Logged in": "not logged in"}
      </p>
      <button onClick={() =>setAdmin(true)}>
        Log In
      </button>
    </section>
  )
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
