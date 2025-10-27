import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  console.log("App rerendering");

  const services = [
    {
      imglink: "/bulb.svg",
      servicetext: "Fitting and Wiring"
    },
    {
      imglink: "/fan.svg",
      servicetext: "Fan/Light Repair"
    },
    {
      imglink: "/switchboard.svg",
      servicetext: "Switchboard Installation"
    },
    {
      imglink: "/inverter.svg",
      servicetext: "Inverter/UPS Setup"
    },
    {
      imglink: "/ceilfan.svg",
      servicetext: "Ceiling Fan Installation"
    },
    {
      imglink: "/fuse.svg",
      servicetext: "Fuse & MCB Replacement"
    },
    {
      imglink: "/laptop.svg",
      servicetext: "Appliance Connection"
    },
    {
      imglink: "/lightning.svg",
      servicetext: "Earthing/Surge Protection"
    },
    {
      imglink: "/searchicon.svg",
      servicetext: "Electrical Safety check"
    },
  ]

  return (
    <>
      <div>Landingpage will be here</div>
      <section className='servicesection bg-[var(--servicebg)] text-[var(--servicetext)] p-2 py-10 grid place-items-center'>
        <h2 className='text-3xl font-bold'>Our services</h2>
        <div className='w-20 min-w-15 m-2 mb-4 border-4 border-amber-300 rounded-full'></div>
        <div className="servicesbox flex flex-wrap justify-center items-center  md:grid  md:grid-cols-3 gap-4 sm:place-items-center w-full md:w-fit">
          {services.map((s, i) => {
            return (
              <div key={i} className="service1 bg-[var(--scolor)] p-2 py-5 rounded-md grid place-items-center gap-4 text-md font-semibold w-50 md:w-60 min-w-fit max-w-sm hover:scale-[1.02] hover:shadow shadow-amber-200 ">
                <div className="icon active:scale-105"><img className='w-7 scale-175' src={s.imglink} alt={s.servicetext} /></div>
                <div className="servicetext">{s.servicetext}</div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default App
