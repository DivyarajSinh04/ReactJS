import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href="https://www.google.com" target="_blank">Visit Google!</a>
);

function MyApp() {
  return (
    <>
      <h1>Hello from MyApp!</h1>
    </>
  )
}

const injectVar = "Hello from injected variable!";

const reactEle = React.createElement(
  'a',// they want type first
  { href: "https://www.google.com", target: "_blank" }, // attributed second
  "Visit google through self-made react element!", // innerText third
  injectVar // injected variable fourth
);

createRoot(document.getElementById('root')).render(
  // anotherElement,
  // MyApp(),
  // reactEle
  <>
    {reactEle},
    {anotherElement},
  </>
)
