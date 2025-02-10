import React from 'react'
import HeaderItem from './HeaderItem'

export default function Header() {
  return (
    <nav className='flow-root bg-gray-600 justify-center m-2 rounded-xl'>
        <div>
           <div className="float-left flex m-2">
              <HeaderItem>
                <i className="fa-solid fa-server text-xl text-purple-600 hover:text-purple-500 px-2"></i>
                Warren Russell
              </HeaderItem>
            </div>
        </div>
        <ul className="float-right flex m-2">
            <HeaderItem href="#"> About Me</HeaderItem>
            <HeaderItem href="#">Projects</HeaderItem>
            <HeaderItem href="#">Contact Me</HeaderItem>
        </ul>
    </nav>
  )
}
