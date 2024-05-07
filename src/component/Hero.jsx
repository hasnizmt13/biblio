import React from 'react'

function Hero() {
  return (
    <>
   <div className='container justify-center p-5 flex flex-row  space-x-40  md:mt-40 md:mx-auto'>
    <div className=' container flex flex-col space-y-7  '>
        <h1 className="text-4xl text-darkBlue font-bold text-center md:text-left md:text-5xl  md:max-w-md">
            BINEVENUE A BIBLIO
        </h1>
        <p className="text-2xl text-center md:text-left md:text-xl ">
        Bienvenue sur le portail officiel de la Bibliothèque des Explorateurs de Savoir, votre fenêtre sur un monde de connaissances et de découvertes. 
        <br /><br />Une vaste collection de livres, de périodiques et de ressources numériques, que vous pouvez réserver en ligne et venir chercher en personne. 
        <br /><br />Que vous soyez étudiant, chercheur, ou simplement un amoureux des livres, notre espace est conçu pour vous inspirer, vous informer et vous équiper des outils nécessaires pour explorer le monde des lettres et des sciences. 
        <br/> <br />Venez découvrir, apprendre et grandir avec nous.</p>
        
    </div>
    <div className='md:max-w-md mt-20'>
        <img src="src\assets\hero.jpg" alt="" />
    </div>   
   </div>
    
    </>
  )
}

export default Hero