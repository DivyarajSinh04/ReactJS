import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15); // hook - propogates the changes

  // let counter = 5;

  const addValue = () => {
    // setCounter((prevCounter) => Math.min(prevCounter + 1, 20));
    // setCounter((prevCounter) => Math.min(prevCounter + 1, 20));
    // setCounter((prevCounter) => Math.min(prevCounter + 1, 20));
    setCounter((prevCounter) => Math.min(prevCounter + 1, 20));
  }

  const removeValue = () => {
    setCounter(Math.max(counter - 1, 0));
  }

  return (
    <>
      <h1>Chai aur React!</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}>Add value</button >
      <br />
      <button
        onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
