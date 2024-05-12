import React from "react";
import { useState } from "react";
import axios from "axios";

function AddLivre() {
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [année_publication, setAnnée_publication] = useState("");
  const [genre, setGenre] = useState("");
  const [isbn, setIsbn] = useState("");
  const [nombre_pages, setNombre_pages] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const [error, setError] = useState("");
  const AjouterLivre = async (event) => {
    event.preventDefault();
    setError("");
    const queryUrl = `http://localhost:3000/livres?isbn=eq.${isbn}`;

    try {
      const response = await axios.get(queryUrl);
      const users = response.data;

      // Assuming the correct user is returned if credentials match
      if (users.length > 0) {
        console.log("Isbn Already exist:", users[0]);
        setError("Isbn existe déja");
      } else {
        const livreData = {
          titre: titre,
          auteur: auteur,
          année_publication: année_publication,
          genre: genre,
          isbn: isbn,
          disponible: true,
          nombre_pages: nombre_pages,
          description: description,
          photo: photo,
        };
        try {
          const response = await axios.post(
            "http://localhost:3000/livres",
            livreData
          );
          console.log("Sign Up Success:", response.data);
          window.location.reload();
        } catch (err) {
          setError("Sign up failed. Please check your credentials.");
          console.error("SingUp Error:", err);
        }
      }
    } catch (err) {
      setError("The server did not repond.");
      console.error("Add Error:", err);
    }
  };
  return (
    <>
      <div className="mt-24 flex  justify-center  bg-darkBlue flex mx-auto space-y-1 h-auto w-2/5 rounded-lg">
        <form
          className="space-y-6 flex flex-col justify-center items-center h-full w-full"
          action=""
          method="post"
          onSubmit={AjouterLivre}
        >
          <br />
          <h1 className="text-4xl px-5 py-1 text-white pb-5">
            Ajouter un Livre
          </h1>
          <div className="w-2/3 p-2 flex flex-row justify-around">
            <input
              className="w-auto p-2 rounded-full"
              type="text"
              name="titre"
              id="titre"
              placeholder="Le titre du livre"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
            />
            <input
              className="w-auto p-2 rounded-full"
              type="text"
              name="auteur"
              id="auteur"
              placeholder="L'auteur du livre"
              value={auteur}
              onChange={(e) => setAuteur(e.target.value)}
            />
          </div>

          <input
            className="w-2/3 p-2 rounded-full"
            type="text"
            name="année_publication"
            id="année_publication"
            placeholder="L'année de publication"
            value={année_publication}
            onChange={(e) => setAnnée_publication(e.target.value)}
          />
          <div className="w-2/3 p-2 flex flex-row justify-around">
            <input
              className="w-auto p-2 rounded-full"
              type="text"
              name="genre"
              id="genre"
              placeholder="Le genre du livre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
            <input
              className="w-auto p-2 rounded-full"
              type="text"
              name="isbn"
              id="isbn"
              placeholder="L'isbn du livre"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
          <input
            className="w-2/3 p-2 rounded-full"
            type="text"
            name="nombre_pages"
            id="nombre_pages"
            placeholder="Le nombre de pages"
            value={nombre_pages}
            onChange={(e) => setNombre_pages(e.target.value)}
          />
          <input
            className="w-2/3 p-2 rounded-full"
            type="text"
            name="description"
            id="description"
            placeholder="Description du livre"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="w-2/3 p-2 rounded-full"
            type="file"
            name="photo"
            id="photo"
            placeholder="Photo du livre"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <button
            className="my-10 w-1/5 p-2 font-bold rounded-full text-darkBlue bg-white hover:text-green-500"
            type="submit"
          >
            Ajouter
          </button>
          {error && <div className="text-red-500">{error}</div>}

          <br />
          <br />
        </form>
      </div>
    </>
  );
}

export default AddLivre;
