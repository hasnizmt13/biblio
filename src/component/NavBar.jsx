import React from 'react'
function NavBar() {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-darkBlue mb-5 px-5 flex items-center justify-between '>
            <div className='p-2'>
                <img  className="h-12 w-20 " src="src\assets\logo.png" alt="logo"/>
            </div>
            <div className=''>
                <input className="text-sm px-5 py-1 rounded-full border-none border-0" type="text" placeholder='Search a book ' >     
                </input>
            </div>
            <div className="hidden md:flex space-x-6 justify-around text-white">
                <a className='hover:text-black' href="#">Home</a>
                <a className='hover:text-black' href="#">Catégorie</a>
                <a className='hover:text-black' href="#">About us</a>
                <a className='hover:text-black' href="#">Contact us</a>
            </div>
            <div>
                <a href="#" className='p-2 px-6 text-black bg-white rounded-full baseline hover:bg-darkGrayishBlue hover:text-white'>
                    Sign in
                </a>
            </div>
    </nav>
  )
}

export default NavBar