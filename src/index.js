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

  const [name, setName] = useState("");

  const reset = () => {
    setName("");
  };

  return (

    <main>
      <input placeholder='Type your name' value={name} onChange={e => setName(e.target.value)} ></input>
      <Button text="Reset" onClick={reset} />
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));