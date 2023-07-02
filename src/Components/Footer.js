import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-[#343D68] h-36 sm:hidden'>
      <div className='flex flex-col justify-between items-center text-white gap-5 pt-4'>
            <Link to='/skills'>Skills</Link>
            <Link to='/project' >Projects</Link>
            <Link to='/contact' >Contact Me</Link>
      </div>
    </div>
  )
}
