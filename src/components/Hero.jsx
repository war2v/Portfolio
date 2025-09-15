import React from 'react'

export default function Hero({children}) {
  return (
    <div className='flex flex-col text-neutral-800 justify-center bg-slate-100 border-t border-slate-300 p-4 m-2'>
        <p className='text-3xl text-center p-2 pt-4'><span className='text-purple-500'>Software Engineer</span><span className='text-purple-500'> | Full-Stack Developer</span></p>
            <p className='text-2xl text-center p-2 pt-4 m-4'> 
              I’m a Full-Stack Developer passionate about building fast, scalable web applications using <span className='text-purple-500'> JavaScript, Python,</span> and <span className='text-purple-500'> SQL </span>. I specialize in transforming complex problems into elegant, user-friendly solutions.
        </p>
    </div>
  )
}
