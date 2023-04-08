import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useInput} from "./useInput";



function App (){
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#00000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle();
    resetColor();

  };
 
  return (
    <form onSubmit={submit} action="">
      <input {...titleProps} type="text" placeholder='Sound...'
       />
      <input {...colorProps} type="color" />
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
