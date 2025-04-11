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
                    PHP
                "
                imageUrl='./bj.png'
                url='#'
            />

            <Project 
                title="DRIVING SIMULATOR" 
                description="
                    Flask, Bootstrap
                "
                imageUrl='./vds.png'
                url='#'
            />
        </div>

        <div className='flex justify-center'>
            <Project 
                title="RUIN HUNTER 2D" 
                description="
                    Python, Pygame
                "
                imageUrl='./r2d.png'
                url='#'
            />
            <Project
            title="Game Studio Website" 
            description="
                Flask, Bootstrap
            "
            imageUrl='./warInd.png'
            url='#'
            />
        </div>

    </section>
  )
}
