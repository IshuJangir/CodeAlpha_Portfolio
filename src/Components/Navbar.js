import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'
import Skills from './Skills'

export default function Navbar() {
  return (
    <div className='flex w-screen justify-center items-center text-center sm:justify-between p-5 backdrop-filter backdrop-blur-lg sticky top-0 z-10 bg-white bg-opacity-30 shadow-sm'>
      <div className='font-bold text-2xl'>
            <Link to='/'>Ishu Jangir</Link>
      </div>
      
      <div className='hidden sm:flex gap-10 pr-5'>
            <Link to='/skills'>Skills</Link>
            <Link to='/project' >Projects</Link>
            <Link to='/contact' >Contact Me</Link>
      </div>
    </div>
  )
}
