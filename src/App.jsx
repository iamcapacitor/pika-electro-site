import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("App rerendering")
  const [modeimage, setModeimage] = useState("lightmodeimage.svg")
  const [usertheme, setUsertheme] = useState("dark");
  const timelinedata = [
    {
      time: "Aug 2021",
      title: "this is time heading",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam voluptas aspernatur cumque mollitia nemo?    Praesentium quibusdam, omnis minima doloribus alias enim nihil tempora libero consequuntur?"
    },
    {
      time: "Nov 2021",
      title: "this is time heading",
      para: "Lorem ipsum dolor sit, amet cumque mollitia nemo?    Praesentium quibusdam, omnis minima doloribus alias enim nihil tempora libero consequuntur?"
    },
    {
      time: "Dec 2021",
      title: "this is time heading",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam voluptas aspernatur cumque mollitia nemo?    Praesentium quibusdam, omnis minima doloribus alias enim nihil tempora libero consequuntur?"
    },
    {
      time: "Jan 2022",
      title: "this is time heading",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam voluptas mollitia nemo?    Praesentium quibusdam, omnis minima doloribus alias enim nihil tempora libero consequuntur?"
    },
    {
      time: "April 2022",
      title: "this is time heading",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.   Praesentium quibusdam, omnis minima doloribus alias enim nihil tempora libero consequuntur?"
    },
  ]

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
    <>
      <nav className="card2 bg-[var(--bg2)] p-2 px-3 rounded-md flex flex-row gap-1.5">
        <button onClick={changestates} >
          <div>
            <img src={`/${modeimage}`} className="logo react" alt="React logo" />
          </div>
        </button>
        <div>
          <p>Theme toggle btn</p>
          <p>{modeimage} , {usertheme}</p>
        </div>
      </nav>
      <main className='bg-[var(--maintagbg)] py-9  flex flex-col gap-6'>
        <section className="uppersection flex flex-col text-md sm:text-xl gap-3 p-3 py-4 bg-[var(--sectionbg)]">
          <p className='text-indigo-400 font-bold'>Lorem, ipsum dolor.</p>
          <h2 className='text-4xl font-bold max-w-5xl'>Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Possimus, odio?
          </h2>
          <p className='text-xl max-w-5xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tempore nam   odit quam neque, voluptatum dolorum et illo! Debitis nostrum provident dolorem
            est accusantium autem incidunt.
          </p>
        </section>
        <section className="lowersection grid grid-cols-2 sm:grid-cols-4 place-content-center sm:place-items-start gap-2 p-2 max-w-7xl text-md sm:text-xl">
          <div className="border-l-2 border-slate-300 px-2 m-1 flex flex-col gap-2 rounded-sm max-w-[12rem]">
            <div className='text-3xl font-bold'>9000+</div>
            <div className='text-slate-400'>Lorem, ipsum</div>
          </div>
          <div className="border-l-2 border-slate-300 px-2 m-1 flex flex-col gap-2 rounded-sm max-w-[12rem]">
            <div className='text-3xl font-bold'>~~%</div>
            <div className='text-slate-400'>Lorem, ipsum dolor</div>
          </div>
          <div className="border-l-2 border-slate-300 px-2 m-1 flex flex-col gap-2 rounded-sm max-w-[12rem]">
            <div className='text-3xl font-bold'>99.9%</div>
            <div className='text-slate-400'>Lorem, ipsum d</div>
          </div>
          <div className="border-l-2 border-slate-300 px-2 m-1 flex flex-col gap-2 rounded-sm max-w-[12rem]">
            <div className='text-3xl font-bold'>₹500T</div>
            <div className='text-slate-400'>Lorem, ipsum dolor</div>
          </div>
        </section>
        <article className='upperarticle p-2 py-12'>
          <h2 className='p-3 text-2xl'>Timeline</h2>
          <div className='timelinecontainer grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 gap-y-2 p-2'>
            {timelinedata.map((card, index) => {
              return (<div key={index} className="timelinecard border-b-2 border-blue-500 p-2 rounded-2xl">
                <div className="part1 flex justify-between items-center gap-1">
                  <div className="actualtimedate text-sm list-disc list-inside text-indigo-400 font-bold text-nowrap">
                    <li>{card.time}</li>
                  </div>
                  <div className="border-2 border-slate-400 w-full max-w-[90%]"></div>
                </div>
                <div className="part2">
                  <h3 className="timeheading text-lg font-bold">{card.title}</h3>
                  <p className='text-[var(--text2)] text-justify'>{card.para}</p>
                </div>
              </div>)
            })}
          </div>
        </article>
      </main>
    </>
  )
}

export default App
