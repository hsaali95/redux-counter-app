import React from 'react';
import './App.css';
import './our.css'
import { useSelector , useDispatch} from "react-redux"
import { incNumber , decNumber} from './actions/index'
function App() {
  const myState = useSelector((state) => state.changeTheNumber )
  const dispatch = useDispatch() 
  return (
    <>
      <div className='container'>
        <a onClick={()=>{dispatch(decNumber())}}><span>-</span></a>
        <input type="text" value={myState} />
        <a onClick={()=>{dispatch(incNumber())}}><span>+</span></a>
      </div>
    </>
  );
}

export default App;
