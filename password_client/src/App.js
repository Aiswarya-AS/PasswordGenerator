
import './App.css';
import axios from '../src/utils/axios'
import { generate } from './utils/constants';
import { useState } from 'react';
function App() {
  const [password,setPassword]=useState('')
  const generatePassword=()=>{
    axios.get(generate).then((res)=>{
      console.log(res.data.password);
      setPassword(res.data.password)
      
    })
  }
  
  return (
    <div className="App">
    <div className="centered-div">
      <h1>Password Generator</h1>
      <button className='btn' onClick={generatePassword}>Generate Password</button>
      <p>Your generated password will appear here</p>
      <h3>{password}</h3>
    </div>
  </div>
      
  );
}

export default App;
