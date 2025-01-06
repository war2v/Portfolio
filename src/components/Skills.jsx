import React from 'react'

export default function Skills() {
  return (
    <div className='flex justify-center bg-gray-300 border-b border-t border-black p-4 my-2 '>
        <div className='border border-black bg-slate-100 rounded-lg p-2 '>
            <div className='border-b border-black'>
                <h1>Technical Skills</h1>
            </div>
            <div className='border-b border-black'>
                <h1>Programming Languages</h1>
            </div>
            <div className='flex'>
                <h1 className='p-2 text-purple-600'>JavaScript</h1>
                <h1 className='p-2 border-l border-black text-purple-600'>Python</h1>
                <h1 className='p-2 border-l border-black text-purple-600'>C++</h1>
                <h1 className='p-2 border-l border-black text-purple-600'>Rust</h1>
            </div>
            <div className='border-b border-t border-black'>
                <h1>Relational Databases</h1>
            </div>
            <div className='flex'>
                <h1 className='p-2 text-purple-600'>MySQL</h1>
                <h1 className='p-2 border-l border-black text-purple-600'>PostgresSQL</h1>
            </div>
        </div>
    </div>
  )
}
