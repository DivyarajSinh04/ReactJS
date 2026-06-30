import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            {/* <button className="outline-none px-4" style={{ backgroundColor: "red" }} onClick=setColor("red")>
              Red
            </button> 
            This won't work because we are not passing a function to the onClick event. Instead, we are calling the setColor function immediately when the component renders, which is not what we want. We want to pass a function that will be called when the button is clicked.
            */}
            <button className="outline-none px-4" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>
              Red
            </button>
            <button className="outline-none px-4" style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>
              Green
            </button>
            <button className="outline-none px-4" style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>
              Blue
            </button>
            <button className="outline-none px-4" style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>
              Yellow
            </button>
            <button className="outline-none px-4" style={{ backgroundColor: "cyan" }} onClick={() => setColor("cyan")}>
              Cyan
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
