import React from 'react'

function AboutUs() {
  return (
    <>
    <div className='container justify-center p-5 flex flex-row  space-x-40  md:mt-40 md:mx-auto'>
    <div className='container flex flex-col space-y-5 w-1/2 md:max-w-full'>
        <h1 className="text-4xl text-darkBlue font-bold text-center md:text-left md:text-5xl  md:max-w-md">
          À propos de nous
        </h1>
        <h1 className="text-2xl text-darkBlue font-bold text-center md:text-left md:text-3xl  ">
          Notre Mission
        </h1>
        <p className="text-2xl text-center md:text-left md:text-xl ">
        À la Bibliothèque des Explorateurs de Savoir, notre mission est de rendre l'accès à l'éducation et à la culture plus facile et plus agréable pour tous. 
        <br /><br />Nous croyons que chaque livre a le pouvoir de changer des vies et nous nous engageons à fournir un accès équitable à nos ressources pour toute la communauté.</p>
        <h1 className="text-2xl text-darkBlue font-bold text-center md:text-left md:text-3xl  md:max-w-md">
          Notre Engagement
        </h1>
        <p className="text-2xl text-center md:text-left md:text-xl ">
        Nous nous engageons à soutenir et à développer notre communauté à travers l'accès à l'éducation, la promotion de la littératie et l'enrichissement culturel.
        <br /><br /> La Bibliothèque des Explorateurs de Savoir est plus qu'une simple bibliothèque; c'est un centre vibrant de connaissances et d'échanges culturels où chaque visite enrichit votre parcours personnel.</p>
        
    </div>
    <div className='mt-20'>
        <img className='border rounded-full w-full h-auto object-cover' src="src\assets\aboutus.avif" alt="" />
    </div>   
   </div>
    
    </>

  )
}

export default AboutUs