import React, { useState, useEffect } from "react";
import { useAuth } from "../Utils/AuthContext.jsx";
import axios from "axios";

function BookDetails({ children }) {
  const { user } = useAuth();
  const [lien, setLien] = useState("");
  const [livres, setLivres] = useState([]);

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

  useEffect(() => {
    if (user) {
      setLien("#");
    } else {
      setLien("/signin");
    }
  }, [user]);

  return (
    <>
      <div className="mt-8 flex justify-center items-center h-full w-full">
        <div className="bg-darkBlue rounded-lg shadow-lg p-10 w-full">
          <div className="flex justify-center">
            <img
              className="w-auto h-64"
              src="src\assets\lesmiserables.jpg"
              alt="les miserable"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-center text-white">
              {children.titre}
            </h2>
            <div className="mt-4">
              <p className="text-lg text-white">
                <span className="font-semibold">Auteur:</span> {children.auteur}
              </p>
              <p className="text-lg text-white">
                <span className="font-semibold">Genre:</span> {children.genre}
              </p>
              <p className="text-lg text-white">
                <span className="font-semibold">Nombre de pages:</span>{" "}
                {children.nombre_pages}
              </p>
              <p className="text-lg text-white">
                <span className="font-semibold">Année de publication:</span>{" "}
                {children.année_publication}
              </p>
              <p className="text-lg text-white">
                <span className="font-semibold">Description:</span>{" "}
                {children.description}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              className="p-2 px-6 text-darkBlue bg-white rounded-full baseline hover:text-green-500 text-center"
              href={lien}
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                reserveBook(children); // Pass the book ID to the reservation function
              }}
            >
              Réserver
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
