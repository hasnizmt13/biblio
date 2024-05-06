import React from 'react'

function Books() {
  return (
    <div className=' flex flex-col  container justify-center p-5  md:mt-20 md:mx-auto w-full'>

        <h1 className="pl-40 justify-center  text-4xl font-bold text-center md:text-left md:text-5xl  md:max-w-md" >
            Our Books
        </h1>

        <div className='mt-10 flex flex-col justify-center md:flex-row md:flex-wrap gap-10 justify-center'>

             <div className=' border bg-gray-100 space-y-2 flex flex-col  w-1/4 h-auto '>
                   <img className="w-auto h-96" src="src\assets\les_miserable.jpg" alt="les miserable" />
                   <p className="text-2xl font-bold text-center md:text-left md:text-xl md:max-w-md">les miserable</p>
                   <p className="text-base text-center md:text-left md:text-base md:max-w-md">Auteur : Victor Hugo</p>
                   <p className="text-xl text-center md:text-left md:text-base md:max-w-md">Type : Roman</p>
                   <p className="text-xl text-center md:text-left md:text-base md:max-w-md">Année publication : 1999</p>
                   <div className='flex flex-row justify-between mt-1/2'>
                        <a className="p-2 px-6 text-white bg-blue-500 rounded-md baseline hover:bg-darkGrayishBlue hover:text-white" href="#">Détails</a>
                        <a className="p-2 px-6 text-white bg-green-500 rounded-md baseline hover:bg-darkGrayishBlue hover:text-white" href="#">Réserver</a>
                   </div>
            </div>

            <div className=' border bg-gray-100 space-y-2 flex flex-col  w-1/4 h-auto '>
                   <img className="w-auto h-96" src="src\assets\les_miserable.jpg" alt="les miserable" />
                   <p className="text-2xl font-bold text-center md:text-left md:text-xl md:max-w-md">les miserable</p>
                   <p className="text-base text-center md:text-left md:text-base md:max-w-md">Auteur : Victor Hugo</p>
                   <p className="text-xl text-center md:text-left md:text-base md:max-w-md">Type : Roman</p>
                   <p className="text-xl text-center md:text-left md:text-base md:max-w-md">Année publication : 1999</p>
                   <div className='flex flex-row justify-between mt-1/2'>
                        <a className="p-2 px-6 text-white bg-blue-500 rounded-md baseline hover:bg-darkGrayishBlue hover:text-white" href="#">Détails</a>
                        <a className="p-2 px-6 text-white bg-green-500 rounded-md baseline hover:bg-darkGrayishBlue hover:text-white" href="#">Réserver</a>
                   </div>
            </div>

            <div className=' border bg-gray-100 space-y-2 flex flex-col  w-1/4 h-auto '>
                   <img className="w-auto h-96" src="src\assets\lesmiserables.jpg" alt="les miserable" />
                   <p className="text-2xl font-bold text-center md:text-left md:text-xl md:max-w-md">les miserable</p>
                   <p className="text-base text-center md:text-left md:text-base md:max-w-md">Auteur : Victor Hugo</p>
                   <p className="text-xl text-center md:text-left md:text-base md:max-w-md">Type : Roman</p>
                   <p className="text-xl text-center md:text-left md:text-base md:max-w-md">Année publication : 1999</p>
                   <div className='flex flex-row justify-between mt-1/2'>
                        <a className="p-2 px-6 text-white bg-blue-500 rounded-md baseline hover:bg-darkGrayishBlue hover:text-white" href="#">Détails</a>
                        <a className="p-2 px-6 text-white bg-green-500 rounded-md baseline hover:bg-darkGrayishBlue hover:text-white" href="#">Réserver</a>
                   </div>
            </div>

        </div>
        
    </div>
  )
}

export default Books