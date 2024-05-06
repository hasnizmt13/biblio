import React from 'react'

function Hero() {
  return (
    <>
   <div className='container justify-center p-5 flex flex-row  space-x-40  md:mt-40 md:mx-auto'>
    <div className=' container flex flex-col space-y-7  md:max-w-md '>
        <h1 className="text-4xl font-bold text-center md:text-left md:text-5xl  md:max-w-md">
            WELCOME TO BIBLIO
        </h1>
        <p className="text-2xl text-center md:text-left md:text-xl md:max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo
        </p>
    </div>
    <div className='md:max-w-md'>
        <img src="src\assets\hero.jpg" alt="" />
    </div>   
   </div>
    
    </>
  )
}

export default Hero