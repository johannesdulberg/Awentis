import React from 'react'
import header from '../assets/Dev1.svg'

export default function Hero() {
  return (
    <section name='home'  className=" w-full  bg-indigo-100 flex md:flex-row flex-col pt-[80px]">
        <div className="w-full  aspect-[5/3] max-h-[700px] absolute diagonalBackground bg-indigo-200 z-2 md:visible invisible" ></div>
        <div className=" fadein w-full md:w-2/5 h-full mt-20 pl-[5%] lg:pl-20 flex flex-col z-10 p-8 ">
          <h2 className=" text-3xl sm:text-6xl xl:text-[70px] lg:text-[50px] md:text-[40px] font-bold md:text-left text-center "> Awentwis Webentwicklung</h2>
          <p className=" text-xl sm:text-2xl lg:text-3 xl font-bold mt-4 md:text-left text-center">Mehr als ein Baukastenprodukt. </p>
          <div className='flex flex-col my-4'>
          <button className='px-8 py-3 mt-5'>Lass uns zusammen arbeiten</button>
        </div>
        </div>
        <div className="fadeinOther diagonalBackground2 noDiagonal bg-indigo-200 md:bg-transparent p-[10%] md:p-0 w-full md:w-3/5 h-full  mt-20 z-10 flex justify-center">
          <div className="w-full">
            <img alt="self-Logo w-1/4 md:w-1/2" src={header}/>
          </div>
        </div>
  
    </section>
  )
}
