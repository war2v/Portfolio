import React from 'react'
import HeaderItem from './HeaderItem'

export default function Header() {
  return (
    <nav className='flow-root bg-slate-100  justify-center rounded-xl'>
        <div>
           <div className="float-left flex m-2">
              <HeaderItem>
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
