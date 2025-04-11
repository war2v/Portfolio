import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className='bg-slate-100 pb-10'>
      
      <Header/>
      <Hero>
        <p className='text-3xl text-center p-2 pt-4'><span className='text-purple-500'>Software Engineer</span><span className='text-purple-500'> | Full-Stack Developer</span></p>
            <p className='text-2xl text-center p-2 pt-4 m-4'> 
              Computer Science graduate with a passion for building clean, scalable web applications using
              <span className='text-purple-500'> JavaScript, Next.js, Python,</span> and <span className='text-purple-500'>SQL</span>. 
              I turn ideas into code and enjoy solving real-world problems through technology
        </p>
      </Hero>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}