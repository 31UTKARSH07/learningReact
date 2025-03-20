import { useState } from 'react' // isse useeffect hook ata h
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15) //[variable, function which controls variable]
  //let counter = 5;
  const addValue = () => {
    //console.log("clicked", Math.random());
    //counter = counter + 1;
   setCounter(counter>=20 ? 20 : counter+1)
  }
  const removeValue = () => {
    setCounter(counter<=0 ? 0 : counter-1)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add {counter}</button>
      <br></br>
      <button onClick={removeValue}>remove {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}
export default App
