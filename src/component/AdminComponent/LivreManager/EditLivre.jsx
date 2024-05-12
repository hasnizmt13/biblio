import React, { useState } from "react";
import axios from "axios";

function EditLivre({ children }) {
  const [titre, setTitre] = useState(children.titre);
  const [auteur, setAuteur] = useState(children.auteur);
  const [année_publication, setAnnée_publication] = useState(
    children.année_publication
  );
  const [genre, setGenre] = useState(children.genre);
  const [isbn, setIsbn] = useState(children.isbn);
  const [nombre_pages, setNombre_pages] = useState(children.nombre_pages);
  const [description, setDescription] = useState(children.description);
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");

  const handleEditLivre = async (event) => {
    event.preventDefault();
    const livreData = {
      titre: titre,
      auteur: auteur,
      année_publication: année_publication,
      genre: genre,
      isbn: isbn,
      nombre_pages: nombre_pages,
      description: description,
      photo: photo,
    };
    try {
      const response = await axios.patch(
        `http://localhost:3000/livres?isbn=eq.${isbn}`,
        livreData
      );
      console.log("Edit Livre Success:", response.data);
      window.location.reload();
    } catch (err) {
      console.error("Edit Livre Error:", err);
    }
  };
  return (
    <>
      <div className="mt-24 flex  justify-center  bg-darkBlue flex mx-auto space-y-1 h-auto w-2/5 rounded-lg">
        <form
          className="space-y-6 flex flex-col justify-center items-center h-full w-full"
          action=""
          method="post"
          onSubmit={handleEditLivre}
        >
          <br />
          <h1 className="text-4xl px-5 py-1 text-white pb-5">
            Modifier ce Livre
          </h1>
          <div className="w-2/3 p-2 flex flex-row justify-around">
            <input
              className="w-auto p-2 rounded-full"
              type="text"
              name="titre"
              id="titre"
              value={titre}
              defaultValue={children.titre}
              placeholder={children.titre}
              onChange={(e) => setTitre(e.target.value)}
            />
            <input
              className="w-auto p-2 rounded-full"
              type="text"
              name="auteur"
              id="auteur"
              value={auteur}
              defaultValue={children.auteur}
              placeholder={children.auteur}
              onChange={(e) => setAuteur(e.target.value)}
            />
          </div>

          <input
            className="w-2/3 p-2 rounded-full"
            type="text"
            name="année_publication"
            id="année_publication"
            value={année_publication}
            defaultValue={children.année_publication}
            placeholder={children.année_publication}
            onChange={(e) => setAnnée_publication(e.target.value)}
          />
          <div className="w-2/3 p-2 flex flex-row justify-around">
            <input
              className="w-auto p-2 rounded-full"
              type="text"
              name="genre"
              id="genre"
              value={genre}
              defaultValue={children.genre}
              placeholder={children.genre}
              onChange={(e) => setGenre(e.target.value)}
            />
            <input
              className="w-auto p-2 rounded-full"
              type="text"
              name="isbn"
              id="isbn"
              value={isbn}
              defaultValue={children.isbn}
              placeholder={children.isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
          <input
            className="w-2/3 p-2 rounded-full"
            type="text"
            name="nombre_pages"
            id="nombre_pages"
            value={nombre_pages}
            defaultValue={children.nombre_pages}
            placeholder={children.nombre_pages}
            onChange={(e) => setNombre_pages(e.target.value)}
          />
          <input
            className="w-2/3 p-2 rounded-full"
            type="text"
            name="description"
            id="description"
            value={description}
            defaultValue={children.description}
            placeholder={children.description}
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

          <br />
          <br />
        </form>
      </div>
    </>
  );
}

export default EditLivre;
