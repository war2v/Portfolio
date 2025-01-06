import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className='bg-slate-100 h-screen'>
      <Header/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}