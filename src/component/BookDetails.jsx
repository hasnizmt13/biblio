import React, { useState, useEffect } from 'react';
import { useAuth } from '../Utils/AuthContext.jsx';


function BookDetails({ children }) {
  const {user} = useAuth();
  const [lien , setLien]  = useState("");

  const getlink = () => {
    if(user){
        setLien("#");
    }else{   
        setLien('/signin')
      }

  }

  useEffect(() => {
    getlink();
  });


 
    return (
     <>
      
      <div className="mt-8 flex justify-center items-center h-full w-full">
        <div className="bg-darkBlue rounded-lg shadow-lg p-10 w-full">
          <div className="flex justify-center">
            <img className="w-auto h-64" src="src\assets\lesmiserables.jpg" alt="les miserable" />
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-center text-white">{children.titre}</h2>
            <div className="mt-4">
              <p className="text-lg text-white"><span className="font-semibold">Auteur:</span> {children.auteur}</p>
              <p className="text-lg text-white"><span className="font-semibold">Genre:</span> {children.genre}</p>
              <p className="text-lg text-white"><span className="font-semibold">Nombre de pages:</span> {children.nombre_pages}</p>
              <p className="text-lg text-white"><span className="font-semibold">Année de publication:</span> {children.année_publication}</p>
              <p className="text-lg text-white"><span className="font-semibold">Description:</span> {children.description}</p>
            </div>
          </div>
          <div className="flex justify-center">
          <a className="p-2 px-6 text-darkBlue bg-white rounded-full baseline hover:text-green-500 text-center" href={lien}>Réserver</a>
        </div>
        </div>
      </div>
      </>
    );
  }

export default BookDetails;
