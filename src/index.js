import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



function App (){
  const [sound, setSound] = useState();
  const [color, setColor] = useState();
  const submit = (e) => {
    e.preventDefault();
    alert(`${sound} sounds like ${color}`);
    setSound("");
    setColor("");

  };
 
  return (
    <form onSubmit={submit} action="">
      <input value={sound} type="text" placeholder='Sound...'
      onChange={(e) => setSound(e.target.value)} />
      <input value={color} type="color" onChange={(e) => setColor(e.target.value)}/>
      <button>Add</button>
    </form>
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
