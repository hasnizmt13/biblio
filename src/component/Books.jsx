import React from "react";
import { useState, useEffect } from "react";
import BookDetails from "./BookDetails";
import Modal from "react-modal";
import { useAuth } from "../Utils/AuthContext.jsx";
import axios from "axios";

function Books() {
  const { user } = useAuth();
  const [lien, setLien] = useState("");
  const [livres, setLivres] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [book, setBook] = useState(null);

  const reserveBook = async (book) => {
    if (!user) {
      setLien("/signin");
      return;
    }

    const statut_ = book.disponible ? "confirmé" : "en attente";

    const reservationData = {
      id_utilisateur: user.id,
      id_livre: book.id,
      date_reservation: new Date().toISOString().split("T")[0], // Format YYYY-MM-DD
      statut: statut_,
    };

    console.log(
      "Reservation data: book avant",
      reservationData,
      book.disponible
    );
    try {
      const response = await axios.post(
        "http://localhost:3000/reservations",
        reservationData
      );
      console.log("Reservation success:", response.data);
      if (book.disponible) {
        //Confirmer la réservation automatiquement si le livre est disponible
        try {
          const updateResponse = await axios.patch(
            `http://localhost:3000/livres?id=eq.${book.id}`,
            { disponible: false },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("Book update success:", updateResponse.data);
        } catch (updateError) {
          console.error("Failed to update book availability:", updateError);
        }
        alert("Réservation confirmée");
      } else {
        alert("Réservation en attente");
      }
      fetchLivres();
      // Handle post-reservation logic here (e.g., redirect, show message)
    } catch (error) {
      console.error("Failed to reserve book:", error);
      // Handle errors here
    }
  };

  useEffect(() => {
    if (user) {
      setLien("#");
    } else {
      setLien("/signin");
    }
  }, [user]);

  // Fonction pour récupérer les livres depuis l'API
  const fetchLivres = async () => {
    try {
      const response = await fetch("http://localhost:3000/livres"); // URL de votre API
      if (!response.ok) {
        throw new Error("Network response was not ok");
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

  const openModal = (livre) => {
    setSelectedBook(livre);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className=" flex flex-col  container justify-center p-5  md:mt-20 md:mx-auto w-full">
        <h1 className=" justify-center text-darkBlue  text-4xl font-bold text-center md:text-left md:text-5xl  md:max-w-md">
          Our Books
        </h1>

        <div className=" mt-10 flex flex-col justify-center md:flex-row md:flex-wrap gap-20 justify-center">
          {livres.map((livre) => (
            <div
              key={livre.id}
              className="p-3 transition-transform transform hover:scale-105 border bg-darkBlue space-y-2 flex flex-col  w-1/4 h-auto "
            >
              <img
                className="w-auto h-96"
                src="src\assets\lesmiserables.jpg"
                alt="les miserable"
              />
              <p className="text-2xl text-white font-bold text-center md:text-left md:text-xl md:max-w-md">
                {livre.titre}
              </p>
              <p className="text-base text-white text-center md:text-left md:text-base md:max-w-md">
                Auteur : {livre.auteur}
              </p>
              <p className="text-xl text-white text-center md:text-left md:text-base md:max-w-md">
                Genre : {livre.genre}
              </p>
              <p className="text-xl text-white text-center md:text-left md:text-base md:max-w-md">
                Année publication : {livre.année_publication}
              </p>
              <div className="flex flex-row justify-between mt-1/2">
                <a
                  onClick={() => openModal(livre)}
                  className="p-2 px-6 text-darkBlue bg-white rounded-full baseline hover:bg-darkGrayishBlue hover:text-white"
                  href="#"
                >
                  Détails
                </a>
                <a
                  className="p-2 px-6 text-white bg-green-700 rounded-full baseline hover:bg-darkGrayishBlue hover:text-white"
                  href={lien}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default link behavior
                    reserveBook(livre); // Pass the book ID to the reservation function
                  }}
                >
                  Réserver
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Modal pour afficher les détails du livre sélectionné */}
        <div className="hidden flex m-auto h-screen">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="my-20 mx-auto flex flew-col justify-between w-2/4 h-4/5"
          >
            {selectedBook && <BookDetails children={selectedBook} />}
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Books;
