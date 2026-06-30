import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'


function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // const passwordGenerator = () => {
  //    useCallback is a react hook that will let you cache a function upon re-renders
  //   useCallback(func, dependencies) - dependencies here are numbers, chars

  // }

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789"
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+=-{}[]~`;:><./?,|\\";
    }

    for (let i = 1; i <= length; i++) {
      let idx = Math.floor(Math.random() * str.length);
      pass += str.charAt(idx);
    }

    setPassword(pass);
    console.log(pass);

  }, [length, numberAllowed, charAllowed, setPassword]); // here the last setPassword dependency is added purely for optimization purposes.
  // also, if we give password as dependency it will call the func everytime pass changes and every call will change the pass so it wil get stuck into infinite loop
  // useCallback() dependencies are used for memoize/caching the function

  // we can not directly call this passwordGenerator() in code as react prevents the infinite render loops and also limits the #of renderings. 
  // let's check out useEffect() hook for that.

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // unlike useCallback(), useEffect() dependencies are for tracking changes in dependencies 


  const passwordRef = useRef(null);// whenver you want to take reference of anything

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // this will select the text in the input field
    // we are using this useRef() hook to provide better UX
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(passwordRef.current.value);
  }, [password]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white text-gray-500'
            placeholder='Password'
            readOnly
            ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            id='copyButton'
            onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
