import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber} from './actions/index';

function App() {
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className="container">
        <h1>Increment / Decrement Counter</h1>
        <div className="quantity">
          <a className="minus"
          onClick={()=>dispatch(decNumber())}
          title="Decrement"><span>-</span></a>
          <input type="text" name="quantity" className = "qinput" value={myState} />
          <a className="plus"
          onClick={()=> dispatch(incNumber())}
          title="Increment"><span>+</span></a>

        </div>
    </div>
  );
}

export default App;
