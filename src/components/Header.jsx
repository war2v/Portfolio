import React from 'react'

export default function Header() {
  return (
    <nav className='flow-root bg-gray-300 border-b border-t border-black justify-center my-2'>
        <div>
           <div className="float-left flex m-2">
                <h1 className='text-purple-600 hover:text-purple-500 p-2 m-2'><i className="fa-solid fa-server text-xl text-purple-600 hover:text-purple-500 px-2"></i>Warren Russell</h1>
           </div>
        </div>
        <ul className="float-right flex m-2">
            <a href='#'><li className='rounded-xl border-white p-2 m-2 text-purple-600 hover:text-purple-500'>About Me</li></a>
            <a href='#'><li className='rounded-xl border-white p-2 m-2 text-purple-600 hover:text-purple-500'>Projects</li></a>
            <a href='#'><li className='rounded-xl border-white p-2 m-2 text-purple-600 hover:text-purple-500'>Contact Me</li></a>
        </ul>
    </nav>
  )
}
