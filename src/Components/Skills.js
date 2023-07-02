import React from 'react'
import data from './assets/data.png'
import html from './assets/html.png'
import css from './assets/css.png'
import bootstrap from './assets/bootstrap.png'
import tailwindcss from './assets/tailwind.png'
import js from './assets/js.png'
import react from './assets/react.png'
import express from './assets/express.png'
import cpp from './assets/cpp.png'
import java from './assets/java.png'
import python from './assets/python.png'
import r from './assets/r.png'
import git from './assets/git.jpeg'
import github from './assets/github.jpg'
import mysql from './assets/mysql.jpg'
import mongo from './assets/mongo.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


export default function Skills() {


  useEffect(() => {
    AOS.init();
  }, []);


  return (
     <div className=' w-screen flex justify-center mx-auto flex-wrap p-10 items-center max-w-[1000px]  gap-10'>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className='bg-slate-100  flex flex-col w-fit gap-2 border-2 rounded-md border-slate-200 p-4 transition-all duration-700 hover:shadow-2xl hover:scale-110'>
              <div><img className='h-52 w-52' src={data} alt="" /></div>
              <div className='bg-slate-100 text-center' ><p >Data Structure and Algorithm</p></div>
            </div>

            
            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" className='bg-slate-100 flex flex-col w-fit gap-2 border-2 rounded-md border-slate-200 p-4 transition-all duration-700 hover:shadow-2xl hover:scale-110'>
              <div><img className='h-52 w-52' src={html} alt="" /></div>
              <div className='bg-slate-100 text-center' ><p >HTML</p></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" className='bg-slate-100 flex flex-col w-fit gap-2 border-2 rounded-md border-slate-200 p-4 transition-all duration-700 hover:shadow-2xl hover:scale-110'>
              <div><img className='h-52 w-52' src={css} alt="" /></div>
              <div className='bg-slate-100 text-center' ><p >CSS</p></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" className='bg-slate-100 flex flex-col w-fit gap-2 border-2 rounded-md border-slate-200 p-4 transition-all duration-700 hover:shadow-2xl hover:scale-110'>
              <div><img className='h-52 w-52' src={bootstrap} alt="" /></div>
              <div className='bg-slate-100 text-center' ><p >Bootstrap</p></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" className='bg-slate-100 flex flex-col w-fit gap-2 border-2 rounded-md border-slate-200 p-4 transition-all duration-700 hover:shadow-2xl hover:scale-110'>
              <div><img className='h-52 w-52' src={tailwindcss} alt="" /></div>
              <div className='bg-slate-100 text-center' ><p >Tailwind</p></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" className='bg-slate-100 flex flex-col w-fit gap-2 border-2 rounded-md border-slate-200 p-4 transition-all duration-700 hover:shadow-2xl hover:scale-110'>
              <div><img className='h-52 w-52' src={js} alt="" /></div>
              <div className='bg-slate-100 text-center' ><p >Java Script</p></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" className='bg-slate-100 flex flex-col w-fit gap-2 border-2 rounded-md border-slate-200 p-4 transition-all duration-700 hover:shadow-2xl hover:scale-110'>
              <div><img className='h-52 w-52' src={react} alt="" /></div>
              <div className='bg-slate-100 text-center' ><p >ReactJs</p></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" className='bg-slate-100 flex flex-col w-fit gap-2 border-2 rounded-md border-slate-200 p-4 transition-all duration-700 hover:shadow-2xl hover:scale-110'>
              <div><img className='h-52 w-52' src={express} alt="" /></div>
              <div className='bg-slate-100 text-center' ><p >ExpressJs</p></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" className='bg-slate-100 flex flex-col w-fit gap-2 border-2 rounded-md border-slate-200 p-4 transition-all duration-700 hover:shadow-2xl hover:scale-110'>
              <div><img className='h-52 w-52' src={cpp} alt="" /></div>
              <div className='bg-slate-100 text-center' ><p >C++</p></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" className='bg-slate-100 flex flex-col w-fit gap-2 border-2 rounded-md border-slate-200 p-4 transition-all duration-700 hover:shadow-2xl hover:scale-110'>
              <div><img className='h-52 w-52' src={java} alt="" /></div>
              <div className='bg-slate-100 text-center' ><p >Java</p></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" className='bg-slate-100 flex flex-col w-fit gap-2 border-2 rounded-md border-slate-200 p-4 transition-all duration-700 hover:shadow-2xl hover:scale-110'>
              <div><img className='h-52 w-52' src={python} alt="" /></div>
              <div className='bg-slate-100 text-center' ><p >Python</p></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" className='bg-slate-100 flex flex-col w-fit gap-2 border-2 rounded-md border-slate-200 p-4 transition-all duration-700 hover:shadow-2xl hover:scale-110'>
              <div><img className='h-52 w-52' src={r} alt="" /></div>
              <div className='bg-slate-100 text-center' ><p >R programming</p></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" className='bg-slate-100 flex flex-col w-fit gap-2 border-2 rounded-md border-slate-200 p-4 transition-all duration-700 hover:shadow-2xl hover:scale-110'>
              <div><img className='h-52 w-52' src={git} alt="" /></div>
              <div className='bg-slate-100 text-center' ><p >Git</p></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" className='bg-slate-100 flex flex-col w-fit gap-2 border-2 rounded-md border-slate-200 p-4 transition-all duration-700 hover:shadow-2xl hover:scale-110'>
              <div><img className='h-52 w-52' src={github} alt="" /></div>
              <div className='bg-slate-100 text-center' ><p >Github</p></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" className='bg-slate-100 flex flex-col w-fit gap-2 border-2 rounded-md border-slate-200 p-4 transition-all duration-700 hover:shadow-2xl hover:scale-110'>
              <div><img className='h-52 w-52' src={mysql} alt="" /></div>
              <div className='bg-slate-100 text-center' ><p >MySql</p></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" className='bg-slate-100 flex flex-col w-fit gap-2 border-2 rounded-md border-slate-200 p-4 transition-all duration-700 hover:shadow-2xl hover:scale-110'>
              <div><img className='h-52 w-52' src={mongo} alt="" /></div>
              <div className='bg-slate-100 text-center' ><p >MongoDB</p></div>
            </div>


     </div>
  )
}
