import React from 'react'
import {MagnifyingGlassIcon,ShieldCheckIcon, BanknotesIcon,EyeDropperIcon,RocketLaunchIcon} from '@heroicons/react/24/outline'
import {useRef,useEffect,useState}  from "react"
export default function WhyUs() {
  //FADEIN 
  const [intersection1,setIntersection1]=useState(false)
  const [intersection2,setIntersection2]=useState(false)
  const [intersection3,setIntersection3]=useState(false)
  const [intersection4,setIntersection4]=useState(false)
  const myRef1=useRef()
  const myRef2=useRef()
  const myRef3=useRef()
  const myRef4=useRef()
  useEffect(()=>{
      const observer1 = new IntersectionObserver((entries)=>{
          const entry = entries[0];
          
          {entry.isIntersecting && setIntersection1(true)} 

      })
      const observer2 = new IntersectionObserver((entries)=>{
          const entry = entries[0];
          
          {entry.isIntersecting && setIntersection2(true)} 

      })
      const observer3 = new IntersectionObserver((entries)=>{
        const entry = entries[0];
        
        {entry.isIntersecting && setIntersection3(true)} 

    })
    const observer4 = new IntersectionObserver((entries)=>{
      const entry = entries[0];
      
      {entry.isIntersecting && setIntersection4(true)} 

  })
      //console.log("myRef",myRef.current)
      observer1.observe(myRef1.current)
      observer2.observe(myRef2.current)
      observer3.observe(myRef3.current)
      observer4.observe(myRef4.current)
    })
  //FADIN END
  return (
    <section name='home'  className=" w-full  bg-white flex md:flex-row flex-col md:pt-[40px]">
        
        <div className="fadeinOther pt-[80] md:sticky top-10 diagonalBackground2 noDiagonal bg-white md:bg-transparent p-[10%] md:pl-[2%] md:p-0 w-full md:w-2/5 h-full  mt-20 z-10 flex justify-center">
          <div className="w-full  h-full md:pt-[15%]">
            <h2 className={`text-2xl sm:text-5xl xl:text-[60px] lg:text-[40px] md:text-[30px] font-bold md:text-left text-center md:ml-[30px] `}>Warum Uns?</h2>
            <div className={` ${intersection2 && "underline-animation-scroll"} ml-8 mt-2`}></div>
          </div>
        </div>

        <div className=" mt-[40px] fadein w-full md:w-3/5 h-full pl-[5%] lg:pl-20 flex flex-col z-10 p-8 ">
          <div ref={myRef1} className={` ${intersection1 ? "fadeinRight":"invisible" } flex`}>
            <div>
              <EyeDropperIcon className='w-20 p-4 text-indigo-200 rounded-lg' />
            </div>
            
            <div> 
              <h2 className=" text-2xl sm:text-5xl xl:text-[60px] lg:text-[40px] md:text-[30px] font-bold md:text-left text-center ">Individualität</h2>
              <p className=" text-m sm:text-l lg:text-xl  mt-4 md:text-left text-center">
                  Bei uns ist alles nach ihren Wünschen anpassbar und wir können zusammen Kreativ werden.
              </p>
            </div>
            
          </div> 
          <div ref={myRef2} className={` ${intersection2 ? "fadeinRight":"invisible" } flex mt-[40px]`}>
            <div>
              <BanknotesIcon  className='w-20 p-4 text-indigo-200 rounded-lg' />
            </div>
            
            <div> 
              <h2 className=" text-2xl sm:text-5xl xl:text-[60px] lg:text-[40px] md:text-[30px] font-bold md:text-left text-center ">Günstig</h2>
              <p className=" text-m sm:text-l lg:text-xl  mt-4 md:text-left text-center">
              Durch ein kleines und junges Team sind wir in der Lage ihre Webseite günstig zu 
                entwickeln. Statische Websites gehen schon bei 200€ los. 
              </p>
            </div>
            
          </div> 
           
          <div ref={myRef3} className={` ${intersection3 ? "fadeinRight":"invisible" } flex mt-[40px]`}>
            <div>
              <ShieldCheckIcon className='w-20 p-4 text-indigo-200 rounded-lg' />
            </div>
            
            <div> 
              <h2 className=" text-2xl sm:text-5xl xl:text-[60px] lg:text-[40px] md:text-[30px] font-bold md:text-left text-center ">Sicherheit</h2>
              <p className=" text-m sm:text-l lg:text-xl  mt-4 md:text-left text-center">
              Die von uns verwendeten Technologien sind sehr Sicher. So sind ihre Daten in Sicherheit.
              </p>
            </div>
          </div> 
          <div ref={myRef4} className={` ${intersection4 ? "fadeinRight":"invisible" } flex mt-[40px]`}>
            <div>
              <MagnifyingGlassIcon className='w-20 p-4 text-indigo-200 rounded-lg' />
            </div>
            
            <div> 
              <h2 className=" text-2xl sm:text-5xl xl:text-[60px] lg:text-[40px] md:text-[30px] font-bold md:text-left text-center ">Auffindbarkeit</h2>
              <p className=" text-m sm:text-l lg:text-xl  mt-4 md:text-left text-center">
              Wir können ihre Webseite für Suchmaschinen bestmöglich optimieren, da wir den Code selber schreiben 
                und daher alle Standards und Optimierungen einhalten können.
              </p>
            </div>
            
          </div>

          
            
          
        </div>
  
    </section>
     )
    }