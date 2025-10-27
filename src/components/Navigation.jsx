import React,{ useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'


const Navigation = () => {
    console.log("Navigation rerendering")
    const [modeimage, setModeimage] = useState("lightmodeimage.svg")
    const [usertheme, setUsertheme] = useState("dark");

    const changestates = () => {
        if (usertheme === "light") {
            setModeimage("darkmodeimage.svg");
            setUsertheme("dark")
            document.body.dataset.theme = "dark"
        } else {
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
        <nav className="card2 bg-[var(--bg2)] p-2 px-3 rounded-md flex flex-row justify-start items-center gap-1.5">
            <button className='normalbtn2 text-white p-1 px-2 bg-[#343340] rounded-md active:brightness-75 ' onClick={changestates} >
                <div>
                    <img src={`/${modeimage}`} className="logo react" alt="theme change logo" />
                </div>
            </button>
            {/* <div>
                <p>Theme toggle btn</p>
                <p>{modeimage} , {usertheme}</p>
            </div> */}
            <div className='flex gap-1 place-items-center'>
                <NavLink to="/page2" >page2</NavLink>
                <NavLink to="/designpage" >designpage</NavLink>
            </div>
        </nav>
    )
}

export default React.memo(Navigation)