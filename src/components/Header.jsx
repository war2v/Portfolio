import React from 'react'
import HeaderItem from './HeaderItem'
import { BiServer } from 'react-icons/bi'


export default function Header() {
  return (
    <nav className='flow-root bg-slate-100  justify-center rounded-xl'>
        <div>
           <div className="float-left flex m-2">
              <HeaderItem href="/" className='flex items-center'>
                <BiServer/>
                Warren Russell
              </HeaderItem>
            </div>
        </div>
        <ul className="float-right flex m-2">
            <HeaderItem href="/blog"> Blog</HeaderItem>
            <HeaderItem href="#">Projects</HeaderItem>
            <HeaderItem href="/contact">Contact Me</HeaderItem>
        </ul>
    </nav>
  )
}
