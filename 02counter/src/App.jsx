import { useState } from 'react' // isse useeffect hook ata h
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 5;

  const addValue = () => {
    console.log("clicked", Math.random());
    counter = counter + 1;
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: 5</h2>

    <button onClick={addValue}>Add {addValue}</button>
    <br></br>
    <button>remove {addValue}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
