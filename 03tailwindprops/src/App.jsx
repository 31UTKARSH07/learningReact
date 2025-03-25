import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  let someObj ={
    age : 21,
    name: "utkarsh",
    username: "astestire"
  }
  let arr = [1,2,3]
  const[count , setCount] = useState(0)
  return (
    <>
     <h1 className='bg-green-500 text-black p-4
     rounded-xl mb-4'>Tailwind</h1>
      <Card channel = "chaiaurcode" object={someObj} newObj={arr}/>
    </>
  )
}
export default App
