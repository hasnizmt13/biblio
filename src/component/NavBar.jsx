import React from 'react'
import { useAuth } from '../Utils/AuthContext.jsx';

function NavBar() {
  const {user} = useAuth();
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-darkBlue mb-5 px-28 flex items-center justify-between '>
            <div className='p-2 ml-16'>
                <a href="/#"><img  className="h-16 w-18 " src="src\assets\logo-no-background.png" alt="logo"/></a>
            </div>
            <div className=''>
                <input className="text-sm px-5 py-1 rounded-full border-none border-0" type="text" placeholder='Search a book ' >     
                </input>
            </div>
            <div className="hidden md:flex space-x-6 justify-around text-white">
                <a className='hover:text-black' href="/">Home</a>
                <a className='hover:text-black' href="/#books">Livres</a>
                <a className='hover:text-black' href="/#aboutus">About us</a>
                <a className='hover:text-black' href="/#contact">Nous Contacter</a>
           
            </div>
            <div>
            { user ? (
                <a href="/profile" className='p-2 px-6 text-black bg-white rounded-full baseline hover:bg-darkGrayishBlue hover:text-white'>
                profile
            </a>
                )
            :(
                <a href="/signin" className='p-2 px-6 text-black bg-white rounded-full baseline hover:bg-darkGrayishBlue hover:text-white'>
                    Sign in
                </a>
             )}

            </div>
    </nav>
  )
}

export default NavBar