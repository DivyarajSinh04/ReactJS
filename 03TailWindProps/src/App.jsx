import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const myObj = {
    name: "DivyarajSinh",
    age: 21,
    education: "BTech in ICT"
  }

  return (
    <>
      <h1>Tailwind test</h1>
      <Card username="chaiaurcode" />
      {/* <Card someObject={myObj} /> */}
    </>
  )
}

export default App
