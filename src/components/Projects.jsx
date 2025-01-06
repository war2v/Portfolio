import React from 'react'

export default function Projects() {
  return (
    <section className='bg-gray-300 border-t border-b border-black p-2'>
        <div className='flex justify-center'>
            <h1>Projects</h1>
        </div>
        <div className='flex justify-center'>
            <div>
                <h1>WAR INDUSTRIES</h1>
                <img className='size-96 rounded-lg m-4 transtion ease-in-out duration-300 hover:scale-110'  src='./warInd.png'/>
            </div>
            <div>
                <h1>RUIN-HUNTER 2D</h1>
                <img className='size-96 rounded-lg m-4 transtion ease-in-out duration-300 hover:scale-110'  src='./r2d.png'/>
            </div>
        </div>
        
        <div className='flex justify-center'>
            <div>
                <div>BLACKJACK SIMULATOR</div>
                <img className='size-96 rounded-lg m-4 transtion ease-in-out duration-300 hover:scale-110'  src='./bj.png'/>
            </div>
           <div>
                <h1>DRIVING SIMULATOR</h1>
                <img className='size-96 rounded-lg m-4 transtion ease-in-out duration-300 hover:scale-110'  src='./vds.png'/>
            </div>
        </div>

    </section>
  )
}
