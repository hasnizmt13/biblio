import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col justify-center mx-auto'>

        <div className='flex flex-row w-full mx-auto my-20'>

            <div className='rounded-xl flex flex-col justify-around mx-auto bg-darkBlue w-1/5 h-auto'>
                <img className='mt-5 h-12 w-12 mx-auto align-center' src="src\assets\adress.png" alt="" />
                <h1 className='text-center text-lg font-bold text-white p-3'> Localisation </h1>
                <h1 className='mb-2 text-center text-lg text-white'> 2 Rue Alexis Versailles 78000</h1>
            </div>
            <div className='rounded-xl flex flex-col justify-around mx-auto bg-darkBlue w-1/5 h-1/5'>
                <img className='mt-5 h-12 w-12  mx-auto align-center' src="src\assets\telephone.png" alt="" />
                <h1 className='text-center text-lg font-bold text-white p-3'> Numéro de telephone</h1>
                <h1 className='mb-2 text-center text-lg text-white'> +337 51 57 58 91</h1>
            </div>
            <div className='rounded-xl flex flex-col justify-around mx-auto bg-darkBlue w-1/5 h-auto'>
                <img className='mt-5 h-12 w-12 mx-auto align-center' src="src\assets\email.png" alt="" />
                <h1 className='text-center text-lg font-bold text-white p-3'> Email </h1>
                <h1 className='mb-2 text-center text-lg text-white '> Biblio@biblio.fr</h1>
            </div>
            <div className='rounded-xl flex flex-col justify-around mx-auto bg-darkBlue w-1/5 h-auto'>
                <img className='mt-5 h-12 w-12 mx-auto align-center' src="src\assets\fax.png" alt="" />
                <h1 className='text-center text-lg font-bold text-white p-3'> Fax </h1>
                <h1 className='mb-2 text-center text-lg text-white'> 1-234-567-89000</h1>
            </div>


        </div>
        <div className='flex  justify-center  bg-darkBlue flex mx-auto space-y-1 h-auto w-1/2 rounded-lg'>
            <form className='space-y-6 flex flex-col justify-center items-center h-full w-full' action="" method="post">
                <br />
                <h1 className='text-4xl px-5 py-1 text-white pb-5'>Contactez-nous</h1>
                <input className='w-2/3 p-2 rounded-full' type="text" name="nom" id="nom" placeholder="Votre nom"/>
                <input className='w-2/3 p-2 rounded-full' type="text" name="prenom" id="prenom" placeholder="Votre prenom"/>
                <input className='w-2/3 p-2 rounded-full' type="email" name="email" id="email" placeholder="Email"/>
                <input className='w-2/3 h-56 p-2 rounded-md' type="message" name="message" id="message"/>
                <button className='my-10 w-1/5 p-2 font-bold rounded-full text-darkBlue bg-white hover:text-green-500' type="submit">Envoyer</button>
                <br />
            </form>   
        </div>
        
    </div>
  )
}

export default Contact