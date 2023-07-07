import React from 'react'
import tic from './assets/tic.jpg'
import weather from './assets/weather.jpg'
import pms from './assets/pms.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function Project() {


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='flex flex-col gap-52 mb-32 sm:gap-36 p-10 sm:mb-0'>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className='relative'>
            <img className=' rounded-3xl flex w-screen sm:w-[60%]' src={pms} alt="pms" />
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className='flex flex-col justify-between absolute top-32 sm:top-60 left-[50%] custom-bg rounded-xl h-48 w-60 p-5 '>
                <p className='font-bold text-lg' >Parking Management System</p>
                <p className='text-sm text-center'>"Efficiently manage and optimize parking spaces with our advanced parking management system."</p>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className='flex justify-end relative'>
            <img className=' rounded-3xl flex w-screen sm:w-[60%]' src={tic} alt="pms" />
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className='flex flex-col justify-between items-center absolute top-32 sm:top-60 right-[50%] custom-bg rounded-xl h-48 w-60 p-5 '>
                <p className='font-bold text-lg' >Tic Tac Toe Game</p>
                <p className='text-sm text-center '>""Play the classic game of Tic Tac Toe and challenge your friends and test your skills against opponents."</p>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className='relative'>
            <img className=' rounded-3xl flex w-screen sm:w-[60%]' src={weather} alt="pms" />
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className='flex flex-col justify-between items-center absolute top-32 sm:top-60 left-[50%] custom-bg rounded-xl h-48 w-60 p-5 '>
                <p className='font-bold text-lg' >Weather App</p>
                <p className='text-sm text-center '>"Stay informed about weather conditions and forecasts with our comprehensive weather website."</p>
            </div>
        </div>


        
    </div>
  )
}
