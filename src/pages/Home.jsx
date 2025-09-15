import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import { AboutMe } from '../components/AboutMe'

export default function Home() {
  return (
    <div className='bg-slate-100 pb-10 flex flex-col gap-x-4'>
      
      <Header/>
      <Hero/>
      <AboutMe />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}