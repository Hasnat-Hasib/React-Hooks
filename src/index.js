import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const initialState = {
  message: "hi"
}

//reducer fuction takes in the state and an action and returns a new state. We have the access to previous state. 
// if our new state relies on the old state this pattern is very useful.
function reducer(state, action){
  switch(action.type){
    case "yell":
      return {
        message: `HEY!! I just said ${state.message}`
      }
    case "whisper":
      return {
        message: `excuse me !! I just said ${state.message}`
      }
  }
}

function App (){
  const [state, dispatch] = useReducer(
    reducer,
    initialState
    );

  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({type: "yell"})}>YELL</button>
      <button onClick={() => dispatch({type: "whisper"})}>Whisper</button>
    </>
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
