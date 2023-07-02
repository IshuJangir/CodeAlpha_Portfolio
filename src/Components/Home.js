import React from 'react'
import user from '../Components/assets/user.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
        AOS.init();
      }, []);


  return (
    <div className=' w-screen p-5 flex flex-col justify-center items-center gap-5 sm:flex-row sm:gap-60' >
        <div data-aos="fade-up" data-aos-duration="1200" className='flex flex-col gap-2 items-center tracking-wide sm:items-start '>

            <p className='text-[#4cb7b1] uppercase text-xl'>Hey There,</p>
            <p className='font-bold text-3xl'>I'm Ishu Jangir</p>
            <p className='text-slate-600'>I'm a full stack developer with a passion for everything front-end. <br /> Welcome to my corner of the internet. I'm glad you're here!</p>

            <button className='w-fit  mt-5 bg-[#4cb7b1] border-2 border-[#4cb7b1] text-white px-4 py-2 shadow-2xl transition-all relative hover:bg-transparent hover:text-black '>Hire Me</button>
        </div>


        <div>
            <img className='p-2' src={user} alt="User Image" />
        </div>
    </div>
  )
}
