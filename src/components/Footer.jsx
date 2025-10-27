import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[var(--footerbg)] border-t-2 border-slate-600 py-6 p-2 text-sm  text-[var(--text3)]'>
            <section className="upperfooter flex flex-col lg:flex-row ">
                <div className="upperfooterpart1 grid grid-cols-2 sm:grid-cols-4 gap-y-4 place-items-start w-full">
                    <ul className='flex flex-col gap-1.5'>
                        <li className='mb-2 text-[var(--text)] '><b>heading 1</b></li>
                        <li className='hover:cursor-pointer hover:brightness-75' >Lorem</li>
                        <li className='hover:cursor-pointer hover:brightness-75' >Ipsum</li>
                        <li className='hover:cursor-pointer hover:brightness-75' >Rupees</li>
                        <li className='hover:cursor-pointer hover:brightness-75' >link_4</li>
                        <li className='hover:cursor-pointer hover:brightness-75' >link_5</li>
                    </ul>
                    <ul className='flex flex-col gap-1.5'>
                        <li className='mb-2 text-[var(--text)] '><b>heading 2</b></li>
                        <li className='hover:cursor-pointer hover:brightness-75' >Lorem ipsum</li>
                        <li className='hover:cursor-pointer hover:brightness-75' >link_2</li>
                        <li className='hover:cursor-pointer hover:brightness-75' >blank_link_3</li>
                    </ul>
                    <ul className='flex flex-col gap-1.5'>
                        <li className='mb-2 text-[var(--text)] '><b>heading 3</b></li>
                        <li className='hover:cursor-pointer hover:brightness-75' >Home</li>
                        <li className='hover:cursor-pointer hover:brightness-75' >Contact</li>
                        <li className='hover:cursor-pointer hover:brightness-75' >About</li>
                        <li className='hover:cursor-pointer hover:brightness-75' >Career</li>
                        <li className='hover:cursor-pointer hover:brightness-75' >details</li>
                    </ul>
                    <ul className='flex flex-col gap-1.5'>
                        <li className='mb-2 text-[var(--text)] '><b>heading 4</b></li>
                        <li className='hover:cursor-pointer hover:brightness-75' >Terms and conditions</li>
                        <li className='hover:cursor-pointer hover:brightness-75' >link 2</li>
                        <li className='hover:cursor-pointer hover:brightness-75' >link 3</li>
                    </ul>

                </div>
                <div className="upperfooterpart2 lg:min-w-[35%] py-4 sm:p-2">
                    <p className='mb-2 text-[var(--text)]'><b>Lorem ipsum dolor sit</b></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo!</p>
                    <div className='flex gap-2 my-4'>
                        <input className='text-[var(--text)] p-1 w-full max-w-sm border border-slate-400 rounded-sm ' type="email" name="emailid" id="emailid" placeholder='Enter your email here' />
                        <button className='text-white p-1 px-2 bg-[#4f39f6] rounded-md active:brightness-75 '>Subscribe</button>
                    </div>
                </div>
            </section>
            <section className="lowerfooter flex flex-col sm:flex-row justify-between items-center gap-2  p-2 pt-4">
                <div className="lowerfooterpart1">
                    @2025 <a href="https://github.com/iamcapacitor" target='_blank'>iamcapacitor</a> . All rights reserved.
                </div>
                <div className="lowerfooterpart2 flex gap-2">
                    <a href="#">🎨</a>
                    <a href="#">🚧</a>
                    <a href="#">🚲</a>
                    <a href="#">🐢</a>
                </div>
            </section>
        </footer>
    )
}

export default React.memo(Footer)