import React from 'react'
import Project from './Project'

export default function Projects() {
  return (
    <section className='bg-gray-600 p-2 m-2 rounded-xl'>
        <div className='flex justify-center'>
            <h1>Projects</h1>
        </div>
        <div className='flex justify-center'>
            
            <Project
            title="Personal Music App" 
            description="
                NextJS, PostgreSQL(supabase), Tailwindcss
            "
            imageUrl='./warInd.png'
            />

            <Project
            title="Game Studio Website" 
            description="
                Flask, Bootstrap
            "
            imageUrl='./warInd.png'
            url='https://project-mov.netlify.app/'
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
        </div>

    </section>
  )
}
