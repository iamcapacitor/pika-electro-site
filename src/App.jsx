import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("App rerendering")
  const [modeimage, setModeimage] = useState("lightmodeimage.svg")
  const [usertheme, setUsertheme] = useState("dark");

  const changestates = () => {
    if(usertheme === "light"){
      setModeimage("darkmodeimage.svg");
      setUsertheme("dark")
      document.body.dataset.theme = "dark"
    }else{
      setModeimage("lightmodeimage.svg");
      setUsertheme("light")
      document.body.dataset.theme = "light"
    }
  }

  // check user device theme and keep that theme initially---------------------------------------
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setUsertheme("dark")
      document.body.dataset.theme = "dark"
    } else {
      setUsertheme("light")
      document.body.dataset.theme = "light"
    }
  }, [])

  return (
    <>
      <div className="card bg-[var(--bg2)]">
        <button onClick={changestates}>
          <div>
            <img src={`/${modeimage}`} className="logo react" alt="React logo" />
          </div>
        </button>
        <p>{modeimage} , {usertheme}</p>
      </div>
    </>
  )
}

export default App
