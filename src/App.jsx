import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function App() {

  const [livres, setLivres] = useState([]); 

  // Fonction pour récupérer les livres depuis l'API
  const fetchLivres = async () => {
    try {
      const response = await fetch('http://localhost:3000/livres'); // URL de votre API
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setLivres(data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  };

  useEffect(() => {
    fetchLivres();
  }, []); 


  return (
    <>
   <div>
      <h1>Liste des Livres</h1>
      <ul>
        {livres.map(livre => (
          <li key={livre.id}>
            <strong>{livre.titre}</strong> par {livre.auteur}
            <br />
            Publié en: {livre.année_publication}
            <br />
            Genre: {livre.genre}
            <br />
            ISBN: {livre.isbn}
          </li>
        ))}
      </ul>
     
    </div>
    </>
  )
}

export default App
