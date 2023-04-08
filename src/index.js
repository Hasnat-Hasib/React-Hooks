import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



function App (){
  const sound = useRef();
  const color = useRef();
  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value; //.current.value provided by useRef function.
    const colordVal = color.current.value;
    alert(`${soundVal} sounds like ${colordVal}`);
    sound.current.value = "";
    color.current.value = "";

  };
 
  return (
    <form onSubmit={submit} action="">
      <input ref={sound} type="text" placeholder='Sound...' />
      <input ref={color} type="color" />
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
