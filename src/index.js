import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  );
};

const Application = () => {


  const reset = () => {
    
  };

  return (

    <main>

      <Button text="Reset" onClick={reset} />
      <h1>Hello React</h1>

    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));