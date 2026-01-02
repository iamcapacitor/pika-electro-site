import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Palette, Menu} from 'lucide-react';


const Navigation = () => {
    console.log("Navigation rerendering")
    const [modeimage, setModeimage] = useState("lightmodeimage.svg")
    const [usertheme, setUsertheme] = useState("dark");
    const [menu, setMenu] = useState(true);

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
        <nav className={`card2 bg-(--bg2) p-3 xl:mx-auto m-3 sticky top-3 max-w-6xl text-(--text)  rounded-xl flex flex-col sm:flex-row justify-between sm:items-center gap-1.5 transition-all overflow-hidden ${menu?"h-15":"h-30"} `}>
            <div className='flex items-center gap-2'>
                <div className='p-2 bg-linear-60 from-blue-200 to-sky-500 rounded-lg shadow-sm shadow-white '><Palette className='text-white' /></div>
                <div className='font-bold text-lg'>Pika-Electro</div>
            </div>

            {/* <div>
                <p>Theme toggle btn</p>
                <p>{modeimage} , {usertheme}</p>
                </div> */}

            <div className='flex gap-10 justify-center py-3 ' >
                <div className='flex gap-1 place-items-center'>
                    <NavLink to="/page2" className={"bg-(--btnbg) p-1 px-2 rounded-md flex "} >page2</NavLink>
                    <NavLink to="/designpage" className={"bg-(--btnbg) p-1 px-2 rounded-md "} >design</NavLink>
                </div>
                <button className='normalbtn2 text-white p-1 px-2 bg-[#343340] rounded-md active:brightness-75 ' onClick={changestates} >
                    <div>
                        <img src={`/${modeimage}`} className="logo react" alt="theme change logo" />
                    </div>
                </button>
            </div>

            <div className='absolute top-4.5 right-3 sm:hidden ' onClick={()=>{setMenu(!menu)}} >
                <Menu />
            </div>
        </nav>
    )
}

export default React.memo(Navigation)