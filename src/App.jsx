import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const image = ["lightmodeimage.svg","darkmodeimage.svg"];
  const [count, setCount] = useState(0)
  const [modeimage, setModeimage] = useState("lightmodeimage.svg")

  return (
    <>
      <div className="card">
        <button onClick={() => modeimage == "lightmodeimage.svg"?setModeimage("darkmodeimage.svg"):setModeimage("lightmodeimage.svg")}>
          <div>
          <img src={`/${modeimage}`} className="logo react" alt="React logo" />
          </div>
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
