/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { set } from 'mongoose'

function App() {
  const [value, setValue] = useState(0)
  const count = useRef(0);
  useEffect(()=>{
    count.current = count.current + 1;
  })

  const inputElem = useRef(); //for accessing the input value
  let valInp 
  const btnClick = ()=>{
    console.log(inputElem.current)
    inputElem.current.style.background = "blue"
  
  }

  return (
    <>
      <button onClick={()=>{setValue(prev => prev +1)}}>+1</button>
      <h1>{value}</h1>
      <button onClick={()=>{setValue(prev => prev - 1)}}>-1</button>
      <h1>Counter Re-render: {count.current}</h1><br /><br />
      <h3>accessing the dom</h3>
      <input type="text" ref={inputElem} ></input>
      <button onClick={btnClick}>Click Here</button>
      <h2>{valInp}</h2>
    </>
  )
}

export default App
