import React from 'react'
import gmail from './assets/gmail.png'
import linkedin from './assets/linkedin.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function Contact() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div  className='bg-slate-100'>
      <p className='  flex justify-center items-center text-6xl font-bold'>Contact Me</p>
      <div  className='flex flex-col mx-auto w-[60%]'>
            <input data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className='border-b-4 border-slate-400 shadow-xl outline-none rounded-lg  mt-5 p-3' placeholder='Enter your name' type="text" />
            <input data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className='border-b-4 border-slate-400 shadow-xl outline-none rounded-lg  mt-5 p-3' placeholder='Enter your email address' type="email" />
            <input data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className='border-b-4 border-slate-400 shadow-xl outline-none rounded-lg  mt-5 p-3' placeholder='Enter subject' type="text" />
            <textarea data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className='border-b-4 border-slate-400 shadow-xl outline-none rounded-lg  mt-5 p-3'  name="" id="" cols="30" rows="10" placeholder='Enter your message here'></textarea>
            <button data-aos="fade-up" data-aos-duration="600"  className=' mt-5 bg-[#4cb7b1] border-2 border-[#4cb7b1] text-white px-4 py-2 shadow-2xl transition-all relative hover:bg-transparent hover:text-black '>Submit</button>
      </div>

      <div className='flex justify-center items-center mt-5'>
          <div className='h-[2px] w-[30%] bg-slate-200'></div>
          <div>OR</div>
          <div className='h-[2px] w-[30%] bg-slate-200'></div>
      </div>

      <div className='flex flex-col sm:flex-row justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <img className='h-32 w-30 scale-75' src={gmail} alt="" />
            <button class="text-white bg-gradient-to-br from-blue-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >Contact me</button>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img className='h-32 w-30' src={linkedin} alt="" />
            <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Contact me</button>
          </div>
      </div>
       
    </div>
  )
}
 