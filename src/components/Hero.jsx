import React from 'react'

export default function Hero({children}) {
  return (
    <div className='flex flex-col text-neutral-800 justify-center bg-slate-100 border-t border-slate-300 p-4 m-2'>
        {children}
    </div>
  )
}
