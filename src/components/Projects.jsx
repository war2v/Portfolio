import React from 'react'
import Project from './Project'

export default function Projects() {
  return (
    <section className='p-2 m-2'>
        <div className='flex pb-4 justify-center border-b border-gray-300'>
            <h1 className='font-bold text-4xl text-slate-800'>Projects</h1>
        </div>
        <div className='flex justify-center'>
            
            <Project
            title="Personal Music App" 
            description="
                NextJS, PostgreSQL(supabase), Tailwindcss
            "
            imageUrl='./music.png'
            url='https://project-mov.netlify.app/'
            />
            <Project
            title="Property Management App" 
            description="
                NextJS, PostgreSQL(supabase), Tailwindcss
            "
            imageUrl='./prop.png'
            url="https://github.com/war2v/WTR-Capital-App"
            
            />
        </div>
        
        <div className='flex justify-center'>
           <Project 
                title="BLACKJACK SIMULATOR" 
                description="
                    PHP HACK CSS
                "
                imageUrl='./bj.png'
                url='https://github.com/Jordan-Cormier-7/BlackJack-Simulator'
            />

            <Project 
                title="VANDERBILT DRIVING SIMULATOR" 
                description="
                    Flask, Python, Javascript, Html, CSS Bootstrap
                "
                imageUrl='./vds.png'
                url='https://github.com/VU-RASL/Vanderbilt-Driving-Simulator'
            />
        </div>

        <div className='flex justify-center'>
            <Project 
                title="ENVOY INVOICING (IN PROGRESS)" 
                description="
                    Python, Pygame
                "
                imageUrl='./envoy.png'
                url='#'
            />
            <Project
            title="WAR INDUSTRIES APP" 
            description="
                Flask, Python, Html, CSS, Bootstrap
            "
            imageUrl='./warInd.png'
            url='https://github.com/war2v/WAR-Industries-Webapp'
            />
        </div>

    </section>
  )
}
