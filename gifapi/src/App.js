
import './App.css';
import AppGify from "./components/app.jsx"
import SearchGif from './components/searchAPI';
import React, {useState} from 'react'

function App() {
  const [term, setTerm] = useState('')

  function updateTerm(event){
    setTerm(event.target.value)
  }
  return (
    <div>
        
        <SearchGif txt = {term}></SearchGif>
        <input type = "text" placeholder='search' onChange = {updateTerm}></input>
    </div>
  );
}

export default App;
