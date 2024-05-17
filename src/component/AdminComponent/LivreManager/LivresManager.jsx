import React, { useState, useEffect } from "react";
import AdminCommon from "../AdminCommon";
import axios from "axios";
import Modal from "react-modal";
import EditLivre from "./EditLivre";
import AddLivre from "./AddLivre";

function LivresManager() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen1] = useState(false);

  const [selectedLivre, setSelectedLivre] = useState(null);

  const openModal2 = () => {
    setModalIsOpen1(true);
  };
  const closeModal2 = () => {
    setModalIsOpen1(false);
  };
  const openModal = (user) => {
    setSelectedLivre(user);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const supprimerLivre = async (liv) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/livres?id=eq.${liv.id}`
      );
      console.log(`User  ${liv.id} supprimé: pour`, response.data);
      window.location.reload();

      fetchLivres();
    } catch (error) {
      console.error("Failed to remove user:", error);
      // Handle errors here
    }
  };

  const [livres, setLivres] = useState([]);
  const fetchLivres = async () => {
    try {
      const response = await fetch("http://localhost:3000/livres"); // URL de votre API
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setLivres(data);
    } catch (error) {
      console.error("Failed to fetch livres:", error);
    }
  };

  useEffect(() => {
    fetchLivres();
  }, []);
  return (
    <>
      <div className="pt-14 flex min-h-screen ">
        <div className="p-20 mx-auto shadow-lg bg-darkBlue h-100 w-1/3 flex flex-col justify-between">
          <AdminCommon />
        </div>

        <div className="bg-white w-full flex-col items-start mt-20  justify-center">
          <h1 className="text-3xl text-darkBlue font-bold text-center md:text-left md:text-4xl ml-20 md:max-w-md">
            Gestion des utilisateurs
          </h1>
          <div className="mx-20">
            <table className="m-20 table-auto w-full mx-auto">
              <thead className="bg-darkBlue">
                <tr>
                  <th className="py-2 text-white text-left">Titre</th>
                  <th className="py-2 text-white text-left">Auteur</th>
                  <th className="px-4 py-2 text-white text-left">
                    Année de publication
                  </th>
                  <th className=" py-2 text-white text-left">Genre</th>
                  <th className="px-4 py-2 text-white text-left">Isbn</th>
                  <th className="px-4 py-2 text-white text-left">
                    Nombre de pages
                  </th>
                  <th className="px-4 py-2 text-white text-left">
                    Description
                  </th>
                  <th className="px-4 py-2 text-sm text-white text-left">
                    Disponible
                  </th>
                  <th className="text-white text-left">Photo</th>
                  <th className="px-4 py-2 text-white text-left"></th>
                  <th className="px-4 py-2 text-white text-left"></th>
                </tr>
              </thead>
              <tbody>
                {livres.map((livre) => (
                  <tr key={livre.id} className="border-b">
                    <td className="py-2">{livre.titre}</td>
                    <td className="py-2">{livre.auteur}</td>
                    <td className="py-2">{livre.année_publication}</td>
                    <td className=" py-2">{livre.genre}</td>
                    <td className="py-2">{livre.isbn}</td>
                    <td className="py-2">{livre.nombre_pages}</td>
                    <td className="py-2">{livre.description}</td>

                    <td className=" py-2">
                      {livre.disponible ? "Oui" : "Non"}
                    </td>
                    <td className="py-2">
                      <img
                        className="bg-darkBlue"
                        src={livre.photo}
                        alt="photo de livre"
                      />
                    </td>
                    <td className=" py-2">
                      <button
                        className="border hover:bg-red-700 px-3 rounded-full text-white bg-red-500"
                        onClick={() => supprimerLivre(livre)}
                      >
                        Supprimer
                      </button>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        className="border hover:bg-green-200 px-3 rounded-full text-white bg-green-500"
                        onClick={() => openModal(livre)}
                      >
                        Modifier
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <button
                className="border my-10 p-3 hover:bg-green-200 text-base mx-auto rounded-full text-white bg-green-500"
                onClick={() => openModal2()}
              >
                Ajouter un livre
              </button>
            </div>
          </div>
          <div className="hidden flex m-auto h-screen">
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              className=" my-auto mx-auto flex flew-col justify-between"
            >
              {<EditLivre children={selectedLivre} />}
            </Modal>
          </div>
          <div className="hidden flex m-auto h-screen">
            <Modal
              isOpen={modalIsOpen2}
              onRequestClose={closeModal2}
              className=" my-auto mx-auto flex flew-col justify-between"
            >
              {<AddLivre />}
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default LivresManager;
