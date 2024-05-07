import React from 'react'
import NavBar from '../component/NavBar.jsx'
import Hero from '../component/Hero.jsx'
import Books from '../component/Books.jsx'
import AboutUs from '../component/AboutUs.jsx'
function HomeScreen() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <hr className='bg-darkBlue mt-32 h-1 mx-auto w-1/2'/>
    <Books/>
    <hr className='bg-darkBlue mt-32 h-1 mx-auto w-1/2'/>
    <AboutUs/>
    <hr className='bg-darkBlue mt-32 h-1 mx-auto w-1/2'/>
    </>
  )
}

export default HomeScreen