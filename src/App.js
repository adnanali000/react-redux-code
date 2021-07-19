import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
        <h1>Increment / Decrement Counter</h1>
        <div className="quantity">
          <a className="minus" title="Decrement"><span>-</span></a>
          <input type="text" name="quantity" className = "qinput" value="0" />
          <a className="plus" title="Increment"><span>+</span></a>

        </div>
    </div>
  );
}

export default App;
